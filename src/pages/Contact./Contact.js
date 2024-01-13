import React from "react"
import { Box, Text,  Center,   FormControl,
    FormLabel,
    Textarea,
    Input,
    Button
} from '@chakra-ui/react';
import { useSpring, animated } from 'react-spring';
import { IoMdContacts } from "react-icons/io";
import ContactForm from "./ContactForm";


export default function About({role}) {

 
  const LettersProps = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    delay: 800,
  });

  



  return (
    <Box h='80vh' zIndex={1} marginBottom='30vh'  marginX="10vw" textAlign='center' name="contact">
  
         <animated.div style={LettersProps}>
        <Box 
       
       
         zIndex={1}
        >


          <Box marginTop="5vh">
            {/* About me title */}
            <Center>
            <IoMdContacts color="white" size='5vw' />

            </Center>
         

            <Text
              style={{
                fontFamily: 'Raleway',
                fontWeight: 'Bold',
              }}
              color="pink.100"
              as="b"
              fontSize={{ base: '3xl', md: '6xl' }}
              zIndex={1}
            >
              Let's{' '}
            </Text>

            <Text
              style={{
                fontFamily: 'Raleway',
                fontWeight: 'Bold',
              }}
              _hover={{
                textShadow: '#FC0 1px 0 10px',
                animation: 'shake 0.3s ease-in-out infinite',
              }}
              
              color="white"
              zIndex={1}
              as="b"
              fontSize={{ base: '3xl', md: '6xl' }}
            >
              {' '}
              Talk!
            </Text>

            <Box
            color='white'
            
            >
              <Text
              fontFamily='Raleway'
              >Got an idea or question? Shoot me a message! I'm always up for a good chat about cool projects and tech stuff. Let's make something awesome happen. </Text>
            </Box>
          </Box>
          <Box h='60vh' marginX='10vw' marginY='10vh' bg='rgba(0, 0, 0, 0.1)' padding='3vw' rounded='lg'   backdropFilter='auto' 
    backdropBlur='8px' >
          <ContactForm/>
            
          </Box>
 
        </Box>
        </animated.div>

         
     
    </Box>
  );
}
