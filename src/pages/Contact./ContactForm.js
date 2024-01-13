import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
  Text,
  Image,
  Stack
} from '@chakra-ui/react';
import { useForm, ValidationError } from '@formspree/react';
import Pug from '../../assets/cute-pug.png'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xgegvozn');

  const imageStyles = {
    margin: '0 auto', // Center horizontally
    display: 'block', // Ensures that margin:auto works as expected
  };

  if (state.succeeded) {
    return (
      <Box textAlign='center' p="4">
   
        <Stack >
        <Image style={imageStyles} borderRadius='full' bg='pink' boxSize='200px' src={Pug}/>
        <Text   marginY='3vh' color='white'>Thanks for sending a message! I'll get back to you as soon as possible.</Text>
        </Stack>
 
      </Box>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel  color='white' marginY='2vh' htmlFor="email">Email Address</FormLabel>
        <Input
          type="email"
          id="email"
          name="email"
          color="white"
          borderColor="purple.200"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </FormControl>

      <FormControl>
        <FormLabel color='white' marginY='2vh' htmlFor="message">Message</FormLabel>
        <Textarea
          id="message"
          name="message"
          color="white"
          borderColor="purple.200"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </FormControl>

      <Button
        colorScheme="purple"
        mt="4"
        type="submit"
        marginY='5vh'
        disabled={state.submitting}
      >
        Say hi! 👋
      </Button>
    </form>
  );
}