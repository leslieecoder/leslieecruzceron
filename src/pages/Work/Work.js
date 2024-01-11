import React from 'react'
import { 
  Box,
  Text, 
  Center,
} from '@chakra-ui/react'
import Cards from './Cards'
import { GiStarsStack } from "react-icons/gi";
import Project from './Project';


export default function Work({role}) {

  return (
    <Center>
    <Box
    zIndex={1}
    marginX='5vw'
    textAlign='center'
    marginBottom='15vh'
  
    >
      <Box marginBottom='10vh'>
        <Center>
        <GiStarsStack color='white' size='10%' />
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
            <Text  marginX='15vw' color='white'> Hey there! I've been in the UX design and development game for about four years now, and it's been a wild ride full of awesome projects. I've pretty much done a bit of everything, but I gotta say, there are a few projects that really stand out. These top three are my favorites – they're not just about great design and cool tech, but also about the fun and challenges I had along the way. Check them out!</Text>

            </Box>

     
        <Box>

          {/* <Cards  role={role}/> */}
          <Project role={role}/>
       
        </Box>
          
</Box>
</Center>
  )
}
