import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { FaHeart } from "react-icons/fa";

export default function Footer({role}) {
  return (
    <Box 
    color={role.color}
    bgColor={role.headerBg}
    height='10vh'
    width="100%"
    paddingX={{ base: '10vwpx', md: '20vw' }}
    paddingY='5vh'
    zIndex={3}
    boxShadow='md'
    backdropFilter='auto' 
    backdropBlur='8px'
    textAlign='center'
    >
 
      <Text>© 2024 Developed with love 🤍 by Lesliee Cruz. All Rights Reserved.</Text>

    </Box>
  )
}
