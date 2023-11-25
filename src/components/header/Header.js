import React, { useState } from 'react';
import {
  Flex,
  Spacer,
  Box,
  Button,
  Link,
  IconButton,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';


const Navbar = ({role}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();




  return (
    <Flex
      p={{ base: '0', md: '10' }}
      bg={role.bgColor}
      color={role.color}
      alignItems="center"
      gap='25px'
    >
      <Box >
        <Text  style={{ fontFamily: role.fontHeader}} fontSize='6xl'  >lesliee<Text color={role.lesColorHero}  style={{ fontFamily: role.fontHeader, display: 'inline'}} >cruz</Text></Text>
      </Box>
      <Spacer />
  
      <Box display={{ base: 'none', md: 'flex' }}
      alignItems='center'
     
      gap="25px">
        <Link  mr="4" color={role.color} href="#home">
          About</Link>
        <Link mr="4" color={role.color} href="#about">
        </Link>
        <Link mr="4" color={role.color} href="#services">
          Work
        </Link>
        <Link mr="4" color={role.color} href="#contact">
          Experince
        </Link>
        <Link mr="4" color={role.color} href="#contact">
          Learning
        </Link>
          
      <Button colorScheme={role.colorButton} variant="solid">
          Let's Talk
        </Button>
        
      </Box>
     
      
   
      
      <Box display={{ base: 'flex', md: 'none' }}>
        <IconButton
          ref={btnRef}
          icon={<FaBars/>}
          onClick={onOpen}
          aria-label="Open menu"
          colorScheme="pink"
        />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <Link mb="2" color="teal.500" href="#home">
                  Home
                </Link>
                <Link mb="2" color="teal.500" href="#about">
                  About
                </Link>
                <Link mb="2" color="teal.500" href="#services">
                  Services
                </Link>
                <Link mb="2" color="teal.500" href="#contact">
                  Contact
                </Link>
                <Button colorScheme="teal" variant="outline">
                  Sign In
                </Button>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </Flex>
  );
};

export default Navbar;