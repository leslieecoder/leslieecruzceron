import {
  Image,
  Box,
  Text,
  Button,
  Flex,
  Center,
  background,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';



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
        p="50px"
        transition="background-color 0.3s, color 0.3s"
        paddingX={{ base: '10px', md: '100px' }}
        height="100vh"
    
        position="relative"
        zIndex="1" 
      >
        <ToggleButton onChange={onChange} isChecked={isChecked} />

        <Flex direction={{ base: 'column', md: 'row' }}>
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
                _hover="color"
                transition="background-color 0.3s, color 0.3s"
                style={{
                  display: 'inline',
                  fontFamily: 'Raleway',
                  letterSpacing: '4px',
                }}
                fontSize={{ base: '5xl', md: '7xl' }}
                as="b"
              >
                {role.heroText2}
              </Text>
              <Text
                transition="background-color 0.3s, color 0.3s"
                style={{ fontFamily: 'Andada Pro' }}
                fontSize={{ base: '6xl', md: '8xl' }}
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
      </Box>
  
  );
}
