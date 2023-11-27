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
import { FaBars, FaArrowRight, FaDownload } from 'react-icons/fa';
import logo1 from '../../assets/2.svg';

const Navbar = ({ role }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      color={role.color}
      alignItems="center"
      gap="10px"
      position="fixed"
      bgColor={role.bgColor}
      top="0"
      width="100%"
      paddingX={{ base: '10px', md: '100px' }}
      transition="background-color 0.3s, color 0.3s" 
    >
      <Flex
      alignItems="center"
      gap='10px'
      
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsxlink="http://www.w3.org/1999/xlink"
          width="50"
          zoomAndPan="magnify"
          viewBox="0 0 375 374.999991"
          height="50"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
        >
          <defs>
            <clipPath id="55a23ca04e">
              <path
                d="M 31.429688 31.429688 L 343.570312 31.429688 L 343.570312 343.570312 L 31.429688 343.570312 Z M 31.429688 31.429688 "
                clip-rule="nonzero"
              />
            </clipPath>
            <clipPath id="dad4261356">
              <path
                d="M 187.5 31.429688 C 101.304688 31.429688 31.429688 101.304688 31.429688 187.5 C 31.429688 273.695312 101.304688 343.570312 187.5 343.570312 C 273.695312 343.570312 343.570312 273.695312 343.570312 187.5 C 343.570312 101.304688 273.695312 31.429688 187.5 31.429688 Z M 187.5 31.429688 "
                clip-rule="nonzero"
              />
            </clipPath>
            <clipPath id="d455ac3366">
              <path
                d="M 70.433594 148.636719 L 138.910156 148.636719 L 138.910156 226.363281 L 70.433594 226.363281 Z M 70.433594 148.636719 "
                clip-rule="nonzero"
              />
            </clipPath>
            <clipPath id="affcf66e9f">
              <path
                d="M 235.796875 148.636719 L 304.269531 148.636719 L 304.269531 226.363281 L 235.796875 226.363281 Z M 235.796875 148.636719 "
                clip-rule="nonzero"
              />
            </clipPath>
          </defs>
          <g clip-path="url(#55a23ca04e)">
            <g clip-path="url(#dad4261356)">
              <path
                fill={role.lesColorHero}
                d="M 31.429688 31.429688 L 343.570312 31.429688 L 343.570312 343.570312 L 31.429688 343.570312 Z M 31.429688 31.429688 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
            </g>
          </g>
          <path
            fill="#000000"
            d="M 225.1875 174.59375 C 225.1875 174.847656 225.1875 175.390625 225.1875 175.390625 C 225.042969 194.289062 187.351562 220.109375 187.351562 220.109375 C 187.351562 220.109375 182.359375 216.6875 176 211.425781 C 195.230469 200.007812 208.128906 179.050781 208.199219 155.082031 C 217.789062 156.394531 225.1875 164.636719 225.1875 174.59375 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
          <path
            fill="#000000"
            d="M 208.199219 155.082031 C 208.128906 179.050781 195.230469 200.007812 176 211.425781 C 171.339844 207.578125 165.945312 202.734375 161.253906 197.523438 C 174.734375 192.90625 184.914062 181.195312 187.351562 166.847656 C 190.359375 159.828125 197.347656 154.890625 205.484375 154.890625 C 206.410156 154.890625 207.3125 154.953125 208.199219 155.082031 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
          <path
            fill="#000000"
            d="M 187.351562 166.847656 C 184.914062 181.195312 174.734375 192.90625 161.253906 197.523438 C 154.734375 190.308594 149.554688 182.378906 149.519531 175.390625 C 149.519531 175.390625 149.519531 174.847656 149.519531 174.59375 C 149.519531 163.710938 158.339844 154.890625 169.222656 154.890625 C 177.359375 154.890625 184.347656 159.828125 187.351562 166.847656 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
          <g clip-path="url(#d455ac3366)">
            <path
              fill="#000000"
              d="M 136.652344 218 C 119.292969 207.980469 84.074219 187.644531 83.820312 187.5 C 98.949219 178.765625 134.167969 158.433594 136.652344 157 C 141.636719 154.121094 137.136719 146.382812 132.132812 149.273438 C 114.777344 159.292969 97.417969 169.316406 80.0625 179.335938 C 77.578125 180.769531 75.09375 182.203125 72.613281 183.636719 C 69.710938 185.3125 69.710938 189.6875 72.613281 191.363281 C 89.96875 201.386719 129.652344 224.292969 132.132812 225.730469 C 137.128906 228.613281 141.640625 220.882812 136.652344 218 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
          <g clip-path="url(#affcf66e9f)">
            <path
              fill="#000000"
              d="M 302.09375 183.636719 C 284.738281 173.613281 245.054688 150.703125 242.570312 149.273438 C 237.574219 146.386719 233.0625 154.117188 238.054688 157 C 255.414062 167.019531 290.632812 187.355469 290.886719 187.5 C 275.757812 196.234375 240.539062 216.566406 238.054688 218 C 233.070312 220.878906 237.570312 228.617188 242.570312 225.730469 C 259.929688 215.707031 299.613281 192.796875 302.09375 191.363281 C 304.996094 189.6875 304.996094 185.3125 302.09375 183.636719 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
        </svg>
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
        display={{ base: 'none', md: 'flex' }}
        alignItems="center"
        fontFamily="Raleway"
        gap="25px"
      >
        <Link mr="4" color={role.color} href="#home">
          About
        </Link>
        <Link mr="4" color={role.color} href="#about"></Link>
        <Link mr="4" color={role.color} href="#services">
          Work
        </Link>
        <Link mr="4" color={role.color} href="#contact">
          Experince
        </Link>
        <Link mr="4" color={role.color} href="#contact">
          Learning
        </Link>
        <Button
          rightIcon={<FaDownload />}
          colorScheme={role.colorButton}
          variant="outline"
        >
          Download Resume
        </Button>

        <Button
          colorScheme={role.colorButton}
          rightIcon={<FaArrowRight />}
          variant="solid"
        >
          Let's Talk
        </Button>
      </Box>

      <Box display={{ base: 'flex', md: 'none' }}>
        <IconButton
          ref={btnRef}
          icon={<FaBars />}
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
