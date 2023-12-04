import { Switch, Box, Text, Center, Flex } from '@chakra-ui/react'
import React from 'react'

export default function ToggleButton({onChange, isChecked}) {

  return (
    <>
    <Center>
    <Flex
      position="fixed"
      bottom={5}
      left={0}
      right={0}
      justifyContent="center"
      alignItems="flex-end"
      p={4}
      zIndex='2'
    >
      <Box
      color='white'
      bgColor='white'
      p='20px'
      borderRadius='40px'
      boxShadow='md'
      backdropFilter='auto' 
      backdropBlur='8px'
      style={{ background: 'rgba(255, 255, 255, 0.4)' }}
      
      
      >

        <Text   as='b' fontSize='lg'> Designer👩🏻‍🎨  </Text>
        <Switch onChange={onChange} isChecked={isChecked}  size='lg'></Switch>
        <Text   as='b' fontSize='lg'>  👩🏻‍💻Developer</Text>

      </Box>

    </Flex>
    </Center>
    </>)
}
