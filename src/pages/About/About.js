import React from "react"

import { Box, Text, Tab, Tabs, TabList, TabPanel, TabPanels, Center} from '@chakra-ui/react';


import { useSpring, animated } from 'react-spring';
import Skills from '../About/Skills'
import Experience from "./Experience";
import { GiHeartWings } from "react-icons/gi";


export default function About({role}) {

 
  const LettersProps = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    delay: 800,
  });


  return (
    <Box zIndex={1} marginBottom='30vh'  marginX="15vw" textAlign='center' name="about">
  
         <animated.div style={LettersProps}>
        <Box 
       
         zIndex={1}
        >


          <Box marginTop="5vh">
            {/* About me title */}
            <Center>
            <GiHeartWings color="white" size='10vw' />

            </Center>
         

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

          <animated.div style={LettersProps}>
         <Box my="5vh" >
            <Tabs variant='soft-rounded' isFitted colorScheme='pink'>
              <TabList>
                <Tab color="white">💅 Skills</Tab>
                <Tab color="white">💼 Experience</Tab>

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
        </animated.div> 
       
         
          
        </Box>
        </animated.div>

         
     
    </Box>
  );
}
