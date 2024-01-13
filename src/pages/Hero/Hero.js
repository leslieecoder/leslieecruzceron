import {
  Image,
  Box,
  Text,
  Flex,
  Center,
  Button

} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-scroll';


import { useSpring, animated } from 'react-spring';
import About from '../About/About'

export default function Hero({role,}) {


  const ImageProps = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    delay: 800,
  });

  const LettersProps = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    delay: 500,
  });

  return (


      <Box
        transition="background-color 0.3s, color 0.3s"
        paddingX={{ base: '10px', md: '100px' }}
        height='90vh'
        marginX='10vh'
        marginTop='20vh'
      
      >
      
       
     
        <Flex
        alignItems='center'
        direction={{ base: 'column', md: 'column', lg:'row'}}
        gap='10px'
        >

            <animated.div
                style={{
                  ...ImageProps,
                  order: { base: 2, md: 1 }, 
                }}
              >
          <Center width="100%">
            <Image
              boxSize={{ base: '100%', md: '80%' }}
              minWidth='50%'
              maxWidth='80%'
              objectFit="cover"
              marginY='5vh'
              src={role?.image}
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: 'scale(1.1)' }}
              
            />
            </Center>
          </animated.div>
          
          <animated.div
          style={{
            ...LettersProps,
            order: { base: 1, md: 2 }, // Order 1 for mobile, 2 for desktop
          }}
        >
            <Box
              color={role?.color}
              mb={{ base: '20px', md: '0' }}
              transition="background-color 0.3s, color 0.3s"
              textAlign={{base: 'center', md: 'left'}}
              w={{ base: '80vw', md: '40vw' }}

            >
              <Box marginBottom='3vh'>
                <Text
                  transition="background-color 0.3s, color 0.3s"
                  fontSize={{ base: '1xl', md: '2xl' }}
                  style={{ display: 'inline', fontFamily: 'Raleway'  }}
                  textAlign={{ base: 'center', md: 'left' }}
                >
                  Hi! I'm{' '}
                  <Text
                    as="span"
                    transition="background-color 0.3s, color 0.3s"
                    fontWeight="bold"
                    color={role?.lesColorHero}
                    textAlign={{base: 'center', md: 'left'}}
                    
                  >
                    Lesliee Cruz
                  </Text>
                  {' '}
                  {role?.heroText1}
                </Text>
              </Box>

              <Text
               
                style={{
                  display: 'inline',
                  fontFamily: 'Raleway',
                  letterSpacing: '2px',
                  textShadow:"pink 1px 0 10px",
                  
                }}
                textAlign={{ base: 'center', md: 'left' }}
              
                fontSize={{ base: '2xl', md: '6xl' }}
                as="b"
             
            
                css={`
                  @keyframes shake {
                    0% { transform: translateX(0); }
                    25% { transform: translateX(-4px); }
                    50% { transform: translateX(4px); }
                    75% { transform: translateX(-2px); }
                    100% { transform: translateX(2px); }
                  }
                `}
                
              >
                {role?.heroText2}
              </Text>

              <Text
              
              marginBottom='5vh'
                style={{ fontFamily: 'Andada Pro' }}
                fontSize={{ base: '4xl', md: '7xl' }}
                textAlign={{ base: 'center', md: 'left' }}
                _hover={{ 
                  textShadow: "#FC0 1px 0 10px",
                  animation: "shake 0.3s ease-in-out infinite"
                }}
                css={`
                  @keyframes shake {
                    0% { transform: translateX(0); }
                    25% { transform: translateX(-4px); }
                    50% { transform: translateX(4px); }
                    75% { transform: translateX(-2px); }
                    100% { transform: translateX(2px); }
                  }
                `}
      

              >
                {role?.heroText3}
              </Text>
              <Link to="contact" smooth={true} duration={500}>
                <Button paddingX='2vw' colorScheme='yellow' > Let's Talk!</Button>
              </Link>

              
            </Box>
          </animated.div>
        
        </Flex>

      </Box>
  
  );
}
