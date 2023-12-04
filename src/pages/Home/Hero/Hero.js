import {
  Image,
  Box,
  Text,
  Flex,
  Center,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import Social from '../../../components/social/Social';
import ToggleButton from './ToggleButton';

export default function Hero({ role, onChange, isChecked }) {


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
      height="100vh"
      width="100vw"
        p="50px"
        transition="background-color 0.3s, color 0.3s"
        paddingX={{ base: '10px', md: '100px' }}
        m={9}  
      >
      
        <ToggleButton onChange={onChange} isChecked={isChecked} />
     
        <Flex
        alignItems='center'
        direction={{ base: 'column', md: 'row' }}
        gap='35px'
        >
          
          <animated.div style={LettersProps}>
            <Box
              color={role.color}
              mb={{ base: '20px', md: '0' }}
              transition="background-color 0.3s, color 0.3s"
            >
              <Box>
                <Text
                  transition="background-color 0.3s, color 0.3s"
                  fontSize={{ base: '1xl', md: '3xl' }}
                  style={{ display: 'inline', fontFamily: 'Raleway' }}
                  textAlign={{ base: 'center', md: 'left' }}
                >
                  Hi! I'm{' '}
                  <Text
                    as="span"
                    transition="background-color 0.3s, color 0.3s"
                    fontWeight="bold"
                    color={role.lesColorHero}
                  >
                    Lesliee Cruz
                  </Text>{' '}
                  {role.heroText1}
                </Text>
              </Box>

              <Text
          
              
                style={{
                  display: 'inline',
                  fontFamily: 'Raleway',
                  letterSpacing: '4px',
                }}
              
                fontSize={{ base: '5xl', md: '7xl' }}
                as="b"
                _hover={{ 
                  textShadow: "pink 1px 0 10px",
                  transition: "textShadow 0.3s ease-in-out  ",
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
                {role.heroText2}
              </Text>

              <Text
            
                style={{ fontFamily: 'Andada Pro' }}
                fontSize={{ base: '6xl', md: '8xl' }}
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
                {role.heroText3}
              </Text>
              <Center m={{ base: '10px', md: '50px' }}>
                <FaAngleDoubleDown
                  size="50px"
                  color={role.lesColorHero}
                  transition="transform 0.3s ease-in-out"
                  _hover={{ transform: 'scale(1.1)' }}
                />
              </Center>
            </Box>
          </animated.div>
          <animated.div style={ImageProps}>
            <Image
              boxSize={{ base: '300px', md: '600px' }}
              objectFit="cover"
              src={role.image}
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: 'scale(1.1)' }}
            />
          </animated.div>
        </Flex>
        <Social/>

        
      </Box>
  
  );
}
