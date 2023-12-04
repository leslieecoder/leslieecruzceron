import React from 'react'
import {  Box, Text, Center, Flex } from '@chakra-ui/react'
import { SocialIcon } from 'react-social-icons'

export default function Social() {
  return (
    <>
    <Box
    position="fixed"
    top="50%"
    transform="translateY(-50%)"
    left={0}
    right={10}
    textAlign="right" 
    
    p={4}
    >
    <Flex 
    flexDirection="column"
    alignItems="flex-end"
    gap={5}
    >

    
    <SocialIcon bgColor= 'transparent' url="https://www.linkedin.com/in/lesliee-cruz-ceron/" />
    <SocialIcon bgColor= 'transparent' url="https://www.youtube.com/@leslieecruz3650/videos" />
    <SocialIcon bgColor= 'transparent' url="https://github.com/Lessleya" />
    <SocialIcon bgColor= 'transparent' url="https://www.instagram.com/lessleya/" />
    </Flex>
    </Box>
    </>
  )
}
