import { Switch, Box, Text, Center } from '@chakra-ui/react'
import React from 'react'

export default function ToggleButton({onChange, isChecked, role }) {

  return (
    <>
    <Center>
    <Box
    display="flex"
    gap="20px"
    p='30px'
    bg='transparent'
    >
        <Text fontSize='lg'> UX Designer</Text>
        <Switch onChange={onChange} isChecked={isChecked} size='lg'></Switch>
        <Text fontSize='lg'> Web Developer</Text>
    </Box>
    </Center>
    </>)
}
