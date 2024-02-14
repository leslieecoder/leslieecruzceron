import React from 'react';
import {
  Flex,
  Spacer,
  Box,
  Button,
  IconButton,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack, 
  Image
} from '@chakra-ui/react';
import { FaBars, FaArrowRight, FaDownload, FaHome, FaImages} from 'react-icons/fa';
import { Link } from 'react-scroll';
import Logo from './logo-les.png'



const Navbar = ({ role }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const links = [
    {
      label: 'Home',
      icon: <FaHome/>,
      id: 'home'
    },
    {
      label: 'About Me',
      icon: <FaHome/>,
      id: 'about'
    },
    {
      label: 'Work',
      icon: <FaImages/>,
      id: 'work'
    }
  ]

  return (
    <Flex
      color={role.color}
      alignItems="center"
      gap="10px"
      bgColor={role.headerBg}
      top="0"
      width="100%"
      paddingX={{ base: '40px', md: '150px' }}
      paddingY='2vh'
      position='fixed'
      zIndex={3}
      boxShadow='md'
      backdropFilter='auto' 
      backdropBlur='8px'
 
   
    >
      <Flex alignItems="center" gap="10px"    zIndex='2'>
      <Image src={Logo}
       alt='logo'
        boxSize={{ base: "50px", md: "80px", lg: "100px" }} // Responsive logo size
        objectFit="cover" 
       />
        <Text
          style={{ fontFamily: role.fontHeader }}
          fontSize={role.fontSizeLogo}
        >
          lesliee
          <Text
            color={role.lesColorHero}
            style={{ fontFamily: role.fontHeader, display: 'inline' }}
          >
            cruz
          </Text>
        </Text>
      </Flex>
      <Spacer />

      <Box
        display={{ base: 'none', md: 'none', lg: 'flex'}}
        alignItems="center"
        fontFamily="Raleway"
        gap="25px"
        zIndex='2'
      >
    {links.map((link) => (
      <Flex
      align='center'
      gap='5px'
      >
        <Link  mb="2" color="white" href="#home" to={link.id} smooth={true} offset={-150} duration={500}>
          
          {link.label}
        </Link>
        </Flex>

    ))}


       
  
    <a href={role.resume} download={role.resumeDownload} style={{ textDecoration: 'none' }}>
        <Button
          rightIcon={<FaDownload />}
          colorScheme={role.colorButton}
          color='white'
          variant="outline"
        >
          Download Resume
        </Button>
        </a>

        <Link to="contact" smooth={true} offset={-150} duration={500}>
          <Button
            colorScheme={role.colorButton}
            rightIcon={<FaArrowRight />}
            variant="solid"
          >
            Let's Talk
          </Button>
        </Link>
      </Box>

      <Box display={{ base: 'flex', md: 'flex', lg: 'none'}}>

        <IconButton
          ref={btnRef}
          icon={<FaBars />}
          onClick={onOpen}
          aria-label="Open menu"
          color="white" 
          colorScheme='transparent'       />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
    <DrawerOverlay minHeight='100vh' >
            <DrawerContent
            bgColor={role.bgColor}
            color='white'
            >
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>

              
              <DrawerBody>
            
  <Stack spacing="3vh" align='center'>
 
    <Link mb="2" color="white" href="#home" to="about" offset={-150} smooth={true} duration={500} onClick={onClose}>
      About Me
    </Link>
    <Link mb="2" color="white" href="#about" to="work" smooth={true} offset={-150} duration={500} onClick={onClose}>
      Work
    </Link>
    <Link   mb="2" color="white" href="#contact" to="contact" smooth={true} offset={-150} duration={500} onClick={onClose}>
      Contact
    </Link>
    <a href={role.resume} download={role.resumeDownload} style={{ textDecoration: 'none' }}>
        <Button
          rightIcon={<FaDownload />}
          colorScheme={role.colorButton}
          color='white'
          variant="outline"
        >
          Download Resume
        </Button>
        </a>
    <Link to="contact" smooth={true} duration={500} onClick={onClose}>
      <Button
        colorScheme={role.colorButton}
        rightIcon={<FaArrowRight />}
        variant="solid"
      >
        Let's Talk
      </Button>
    </Link>
  </Stack>
 
</DrawerBody>
             
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </Flex>
  );
};

export default Navbar;
