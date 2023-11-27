import { Switch, Box, Text, Center } from '@chakra-ui/react'
import React from 'react'

export default function ToggleButton({onChange, isChecked,  role}) {


  const isUXDesigner = role === 'uxDesigner';

  return (
    <>
    <Center>
    <Box
    fontFamily='Raleway'
    display="flex"
    gap="20px"
    p='30px'
    bg='transparent'
    marginTop='100px'
    >
        <Text   as={isUXDesigner ? 'i' : 'b'} fontSize='lg'> UX Designer</Text>
        <Switch onChange={onChange} isChecked={isChecked}   size='lg'></Switch>
        <Text   as='b' fontSize='lg'> Web Developer</Text>
    </Box>
    </Center>
    </>)
}
