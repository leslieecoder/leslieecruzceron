import React from 'react'
import { 
    Flex,
    Box,
    Image,
    Text,
    Button, 
    Stack,
    Center
 } from '@chakra-ui/react'


export default function Project({role}) {
  return (
    <Box  marginX='10vw' zIndex={1}>
      <Stack spacing='25vh'>
        <Flex direction={{ base: 'column', md: 'row'}} alignItems='center' gap='5vw'>
            <Box   >
            <Image maxW='50vw' src={role.projects.projectOne.image}/>    
            </Box>
            <Box   textAlign={{base:'center', md:'left'}} color='white'>
               <Stack  spacing='5vh'>
                <Text fontSize={{base:'3xl', md:'6xl'}} as='b'>{role.projects.projectOne.name}</Text>
                <Text>{role.projects.projectOne.description}</Text>
                <Flex gap='20px'>
                    <Button> Case Study </Button>
                    <Button> Figma Prototype</Button>
                    
                </Flex>
               </Stack>
            </Box>
        </Flex>

        <Flex direction={{ base: 'column', md: 'row'}} alignItems='center' gap='5vw'>
           
            <Box   textAlign={{base:'center', md:'left'}} color='white'>
               <Stack  spacing='5vh'>
                <Text fontSize={{base:'3xl', md:'6xl'}} as='b'>{role.projects.projectTwo.name}</Text>
                <Text>{role.projects.projectOne.description}</Text>
                <Flex gap='20px'>
                    <Button> Case Study </Button>
                    <Button> Figma Prototype</Button>
                    
                </Flex>
               </Stack>
            </Box>
            <Box   >
            <Image maxW='50vw' src={role.projects.projectTwo.image}/>    
            </Box>
        </Flex>

        <Flex direction={{ base: 'column', md: 'row'}} alignItems='center' gap='5vw'>
            <Box   >
            <Image maxW='50vw' src={role.projects.projectThree.image}/>    
            </Box>
            <Box   textAlign={{base:'center', md:'left'}} color='white'>
               <Stack  spacing='5vh'>
                <Text fontSize={{base:'3xl', md:'6xl'}} as='b'>{role.projects.projectThree.name}</Text>
                <Text>{role.projects.projectOne.description}</Text>
                <Flex gap='20px'>
                    <Button> Case Study </Button>
                    <Button> Figma Prototype</Button>
                    
                </Flex>
               </Stack>
            </Box>
        </Flex>
        </Stack>

    </Box>
  )
}
