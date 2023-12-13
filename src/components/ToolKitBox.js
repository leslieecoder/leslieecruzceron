import React, { useState } from 'react'
import {
    Box,
    Text,
    Flex,
    Center,
    Button,
    Image,
    Stack

  } from '@chakra-ui/react';
import Key from './../assets/key.png'
import KeyCursor from './../assets/skills/keyCursorrr.png'
import { useSpring, animated } from 'react-spring';

export default function ToolKitBox({role}) {

  
   

    const [isOpen, setIsOpen] = useState(false)

    const toggleBox = () => {
        setIsOpen(!isOpen)
    }

    const ImageProps = useSpring({
        opacity: 1,
        transform: 'scale(1)',
        from: { opacity: 0, transform: 'scale(0.8)' },
        delay: isOpen ? 800 : 0
      });
    

  return (
    <>
    
    <Box
    m={9}
    >
    <Flex m={9} direction="column" align="center">
        <Box
            borderX="1.5vh solid white" 
            borderTop="1.5vh solid white" 
            borderTopRadius="60px"
            height='5vh'
            marginBottom='1vh'
            width="10vw"
            overflow="hidden"
            transition={[ 'margin-bottom 0.3s ease-in-out']}
           
        />

        <Box
            bg="white"
            borderTopRadius="60px"
            height='10vh'
            marginBottom={isOpen ? '3vh' : '5px'}
            width="40vw"
            overflow="hidden"
            transition={[ 'margin-bottom 0.3s ease-in-out']}
        
            
        />
        <animated.div style={ImageProps}>
        <Box 
        display={isOpen ? 'flex' : 'none'}
        transition={[ 'display 0.3s ease-in-out']}
        m="50px"
       
       
        >

            
           <Center height="100%" >
           
           <Button rounded='20px' h='10vh' w='20vw'    mx={2}  style={{ background: 'rgba(255, 255, 255, 0.4)' }} variant="solid">
                    
                    <Image src={role.skillsImages.skillOne}/>
                   
            </Button>
           
            
            <Button rounded='20px'h='10vh' w='20vw'   mx={2}  style={{ background: 'rgba(255, 255, 255, 0.4)' }} variant="solid">
                    <Image _hover={{ transform: 'scale(1.1)' }} src={role.skillsImages.skillTwo}></Image>
            </Button>
            <Button rounded='20px' h='10vh' w='20vw'  mx={2} style={{ background: 'rgba(255, 255, 255, 0.4)' }} variant="solid">
                    <Image src={role.skillsImages.skillThree}></Image>
            </Button>
            <Button rounded='20px'h='10vh' w='20vw'   mx={2} style={{ background: 'rgba(255, 255, 255, 0.4)' }} variant="solid">
                    <Image src={role.skillsImages.skillFour}></Image>    
            </Button>
            <Button rounded='20px'h='10vh' w='20vw'   mx={2} style={{ background: 'rgba(255, 255, 255, 0.4)' }} variant="solid">
                    <Image src={role.skillsImages.skillFive}></Image>    
            </Button>
         
            </Center>
        </Box>
        </animated.div>

        <Box
         
          borderTop={4}
          bg="white"
          borderBottomRadius="60px"
          height='20vh'
          width="40vw"
          overflow="hidden"
          _hover={{ cursor: `url(${KeyCursor}), auto` }}
        >
          <Center height="100%">
            <Button
              boxSize='30%'
              colorScheme="white"
              variant="solid"
              onClick={toggleBox}
              _hover={{ cursor: `url(${KeyCursor}), auto` }}
            >
                 <Image  src={Key}></Image>    
            </Button>
          </Center>
        </Box>
       

     
        <Box>

        </Box>
    </Flex>
    </Box>
    
    </>
  )
}
