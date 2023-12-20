import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion";
import { Box, Text, Tab, Tabs, TabList, TabPanel, TabPanels, Flex, Center, Image, Button, Progress} from '@chakra-ui/react';
import ShuffleHero from "./ShuffleHero";

import { useSpring, animated } from 'react-spring';
import Skills from "./Skills";
import Experience from "./Experience";


export default function About({role}) {

 
  const LettersProps = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    delay: 800,
  });


  return (
    <Box zIndex={1} width="100vw" height="100vh" marginX="10vw">
      <Flex
      alignItems="center"
      >
         <animated.div style={LettersProps}>
        <Box zIndex={1}
       w="40vw"
        >
          <Box
          marginTop="10vh"
          >
            <Text
              style={{
                fontFamily: 'Raleway',
                fontWeight: 'Bold',
              }}
              color="pink.100"
              as="b"
              fontSize={{ base: '3xl', md: '6xl' }}
              zIndex={1}
            >
              About{' '}
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
              me
            </Text>

            <Box
            color='white'
            
            >
              <Text
              fontFamily='Raleway'
              >
              Hey there! I'm Lesliee Cruz a Software Engineer with a heart captivated by the art and science of User Experience. Picture a coding aficionado who not only loves to make things work but is equally obsessed with making them delightful to use.
              </Text>
            </Box>
          </Box>
          <Box
          my="5vh"
          >
            <Tabs color='white' isFitted colorScheme="purple">
              <TabList>
                <Tab color="pink">💅 Skills</Tab>
                <Tab color="">💼 Experience</Tab>
                <Tab color="white">👩🏻‍🎓 Education</Tab>
                <Tab color="white">💖 Hobbies</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Skills role={role}/>
                </TabPanel>

                <TabPanel>
                <Experience role={role}/>
                </TabPanel>

                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
          
        </Box>
        </animated.div>
        <animated.div style={LettersProps}>
        <ShuffleHero/>
        </animated.div>
       
      </Flex>
    </Box>
  );
}
