import React from 'react';
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

const Navbar = ({ role }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      color={role.color}
      alignItems="center"
      gap="10px"
      bgColor={role.bgColor}
      top="0"
      width="100%"
      paddingX={{ base: '10px', md: '100px' }}
    >
      <Flex alignItems="center" gap="10px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsxlink="http://www.w3.org/1999/xlink"
          width="80"
          zoomAndPan="magnify"
          viewBox="0 0 375 374.999991"
          height="80"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
        >
          <defs>
            <clipPath id="4eb7eec139">
              <path
                d="M 34.710938 31.917969 L 339.960938 31.917969 L 339.960938 337.167969 L 34.710938 337.167969 Z M 34.710938 31.917969 "
                clip-rule="nonzero"
              />
            </clipPath>
            <clipPath id="79d5779a93">
              <path
                d="M 187.5 31.917969 C 103.117188 31.917969 34.710938 100.324219 34.710938 184.707031 C 34.710938 269.089844 103.117188 337.496094 187.5 337.496094 C 271.882812 337.496094 340.289062 269.089844 340.289062 184.707031 C 340.289062 100.324219 271.882812 31.917969 187.5 31.917969 Z M 187.5 31.917969 "
                clip-rule="nonzero"
              />
            </clipPath>
            <clipPath id="6148d22803">
              <path
                d="M 70.578125 148.636719 L 139 148.636719 L 139 226.363281 L 70.578125 226.363281 Z M 70.578125 148.636719 "
                clip-rule="nonzero"
              />
            </clipPath>
            <clipPath id="0eeed16100">
              <path
                d="M 236 148.636719 L 304.414062 148.636719 L 304.414062 226.363281 L 236 226.363281 Z M 236 148.636719 "
                clip-rule="nonzero"
              />
            </clipPath>
          </defs>
          <g clip-path="url(#4eb7eec139)">
            <g clip-path="url(#79d5779a93)">
              <path
                stroke-linecap="butt"
                transform="matrix(0.75, 0, 0, 0.75, 34.709823, 31.919643)"
                fill="none"
                stroke-linejoin="miter"
                d="M 203.72025 -0.00223194 C 91.209826 -0.00223194 0.0014864 91.206107 0.0014864 203.716531 C 0.0014864 316.226955 91.209826 407.435295 203.72025 407.435295 C 316.230674 407.435295 407.439013 316.226955 407.439013 203.716531 C 407.439013 91.206107 316.230674 -0.00223194 203.72025 -0.00223194 Z M 203.72025 -0.00223194 "
                stroke="#ffffff"
                stroke-width="20"
                stroke-opacity="1"
                stroke-miterlimit="4"
              />
            </g>
          </g>
          <path
            fill="#ffffff"
            d="M 225.328125 174.59375 C 225.328125 174.847656 225.328125 175.390625 225.328125 175.390625 C 225.183594 194.289062 187.492188 220.109375 187.492188 220.109375 C 187.492188 220.109375 182.503906 216.6875 176.140625 211.425781 C 195.371094 200.007812 208.269531 179.050781 208.339844 155.082031 C 217.929688 156.394531 225.328125 164.636719 225.328125 174.59375 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
          <path
            fill="#ffffff"
            d="M 208.339844 155.082031 C 208.269531 179.050781 195.371094 200.007812 176.140625 211.425781 C 171.480469 207.578125 166.085938 202.734375 161.394531 197.523438 C 174.875 192.90625 185.058594 181.195312 187.492188 166.847656 C 190.5 159.828125 197.488281 154.890625 205.625 154.890625 C 206.550781 154.890625 207.453125 154.953125 208.339844 155.082031 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
          <path
            fill="#ffffff"
            d="M 187.492188 166.847656 C 185.058594 181.195312 174.875 192.90625 161.394531 197.523438 C 154.875 190.308594 149.699219 182.378906 149.660156 175.390625 C 149.660156 175.390625 149.660156 174.847656 149.660156 174.59375 C 149.660156 163.710938 158.480469 154.890625 169.363281 154.890625 C 177.5 154.890625 184.488281 159.828125 187.492188 166.847656 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
          <g clip-path="url(#6148d22803)">
            <path
              fill="#ffffff"
              d="M 136.792969 218 C 119.433594 207.980469 84.214844 187.644531 83.960938 187.5 C 99.089844 178.765625 134.308594 158.433594 136.792969 157 C 141.777344 154.121094 137.277344 146.382812 132.277344 149.273438 C 114.917969 159.292969 97.558594 169.316406 80.203125 179.335938 C 77.71875 180.769531 75.238281 182.203125 72.753906 183.636719 C 69.851562 185.3125 69.851562 189.6875 72.753906 191.363281 C 90.109375 201.386719 129.792969 224.292969 132.277344 225.730469 C 137.273438 228.613281 141.785156 220.882812 136.792969 218 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
          <g clip-path="url(#0eeed16100)">
            <path
              fill="#ffffff"
              d="M 302.234375 183.636719 C 284.878906 173.613281 245.195312 150.703125 242.710938 149.273438 C 237.71875 146.386719 233.207031 154.117188 238.195312 157 C 255.554688 167.019531 290.773438 187.355469 291.027344 187.5 C 275.902344 196.234375 240.679688 216.566406 238.195312 218 C 233.210938 220.878906 237.710938 228.617188 242.710938 225.730469 C 260.070312 215.707031 299.753906 192.796875 302.234375 191.363281 C 305.136719 189.6875 305.136719 185.3125 302.234375 183.636719 "
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
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </Flex>
  );
};

export default Navbar;
