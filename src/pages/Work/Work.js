import React from 'react'
import { 
  Box,
  Text, 
  Center,
} from '@chakra-ui/react'

import { GiStarsStack } from "react-icons/gi";
import Project from './Project';


export default function Work({role}) {

  return (
    <Center  >

    <Box
    zIndex={1}
    textAlign='center'
    marginX='5vw'
    marginBottom='15vh'
    name="work"
    >
      <Box
      marginBottom='10vh'
      marginX={{base: '5vw', md: '10vw'}}
      
      >

        <Center>
        <GiStarsStack color='white' size='5vh' />
        </Center>
      
      <Text
              textAlign='center'
              style={{
                fontFamily: 'Raleway',
                fontWeight: 'Bold',
              }}
              color="pink.100"
              as="b"
              
              fontSize={{ base: '3xl', md: '6xl' }}
              zIndex={1}
            >
              My Top{' '}
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
              Three Projects
            </Text>
            <Text  marginX='15vw' color='white'> These top three are my favorites projects they're not just about great design and cool tech, but also about the fun and challenges I had along the way. Check them out!</Text>

            </Box>

     
        <Box>


          <Project role={role}/>
       
        </Box>
          
</Box>
</Center>
  )
}
