import React from 'react'
import { 
  Box,
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Text, 
  Center
} from '@chakra-ui/react'



export default function Work() {

  return (
    <Center>
    <Box
    
    zIndex={1}
    >
      <Text fontSize='8xl' zIndex={2}>My Top 3 Projects</Text>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        <Box>

        </Box>
          
  
      </SimpleGrid>
</Box>
</Center>
  )
}
