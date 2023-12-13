import {
  Image,
  Box,
  Text,
  Flex,
  Center,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { useSpring, animated } from 'react-spring';

import HomeMenu from '../HomeMenu';


export default function Hero({role}) {


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
        height="100vh"
        marginX={9}
      
      >
      
       
     
        <Flex
        alignItems='center'
        direction={{ base: 'column', md: 'row' }}
        gap='10px'
        >
          
          <animated.div style={LettersProps}>
            <Box
              color={role?.color}
              mb={{ base: '20px', md: '0' }}
              transition="background-color 0.3s, color 0.3s"
            >
              <Box>
                <Text
                  transition="background-color 0.3s, color 0.3s"
                  fontSize={{ base: '1xl', md: '2xl' }}
                  style={{ display: 'inline', fontFamily: 'Raleway' }}
                  textAlign={{ base: 'center', md: 'left' }}
                >
                  Hi! I'm{' '}
                  <Text
                    as="span"
                    transition="background-color 0.3s, color 0.3s"
                    fontWeight="bold"
                    color={role?.lesColorHero}
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
              
                fontSize={{ base: '4xl', md: '6xl' }}
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
            
                style={{ fontFamily: 'Andada Pro' }}
                fontSize={{ base: '5xl', md: '7xl' }}
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

             <Box
             paddingY='3vh'
             >
             <HomeMenu/>
             </Box>
              
            </Box>
          </animated.div>
          <animated.div style={ImageProps}>
          <Center width="100%">
            <Image
              boxSize={{ base: '50%', md: '90%' }}
              objectFit="cover"
              src={role?.image}
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: 'scale(1.1)' }}
            />
            </Center>
          </animated.div>
        </Flex>
       

        
      </Box>
  
  );
}
