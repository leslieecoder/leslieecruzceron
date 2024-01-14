import React from 'react'
import { Box, Text } from '@chakra-ui/react'


export default function Footer({role}) {
  return (
    <Box 
    color={role.color}
    bgColor={role.headerBg}
    height='10vh'
    width="100%"
    paddingX={{ base: '10vw', md: '20vw' }}
    paddingY={{ base: '7vw', md: '5vw' }}
    zIndex={3}
    boxShadow='md'
    backdropFilter='auto' 
    backdropBlur='8px'
    textAlign='center'
    >
 
      <Text fontSize={{base: 'xs'}}>© 2024 Developed with love 🤍 by Lesliee Cruz. All Rights Reserved.</Text>

    </Box>
  )
}
