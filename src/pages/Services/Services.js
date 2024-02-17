import React from 'react';
import { SimpleGrid, Text, CardHeader, Heading, CardBody, CardFooter, Button, Card, Box, Center, List, ListIcon, ListItem } from '@chakra-ui/react';
import { FaPencilRuler, FaCode, FaRocket, FaMagic } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { IoMdCheckmarkCircle } from 'react-icons/io';

  // Animation variants for the cards
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };


export default function Services() {
  return (
    <Box  marginX="20vw" textAlign='center' name="about">
              <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        ></motion.div>
    
    <Box zIndex="1" position='relative' marginY="10vh">
            {/* About me title */}
            <Center>
            <FaMagic color="white" size='4vw' />

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
              My{' '}
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
              Services
            </Text>

            <Box
            color='white'
            
            >
              <Text
              fontFamily='Raleway'
              >Ever wonder what tricks I've got up my sleeve for you? Well, wonder no more! Sit back, grab a snack, and let me walk you through the cool stuff we can do together. Spoiler: it's pretty awesome.</Text>
            </Box>
            
          </Box>
         
 
    
      <SimpleGrid spacing="7vw" templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>

      <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        >
        <Card  height='100%' variant='outline' _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }} transition="transform 0.2s, box-shadow 0.2s">
          <CardHeader>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2vh' }}>
              <FaRocket size='25px' color='purple' /> 
            </div>
            <Heading size='md'>Branding</Heading>
          </CardHeader>
          <CardBody>
            <Text>I shape your brand so vibrant, eyes won't dare to blink! 👀</Text>
            <List textAlign="left" py="2vh" spacing={3}>
  <ListItem>
    <ListIcon as={IoMdCheckmarkCircle} color='green.500' />
   <strong>Logo Design </strong> 
  </ListItem>
  <ListItem>
    <ListIcon as={IoMdCheckmarkCircle } color='green.500' />
    <strong>Brand Strategy </strong> 
  </ListItem>
  <ListItem>
    <ListIcon as={IoMdCheckmarkCircle } color='green.500' />
    <strong>Identity Systems </strong> 
  </ListItem>
</List>
          </CardBody>
        </Card>
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        >
        
        <Card  height='100%' variant='outline' _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }} transition="transform 0.2s, box-shadow 0.2s">
          <CardHeader>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2vh' }}>
              <FaPencilRuler size='25px' color='purple'/>
            </div>
            <Heading  size='md'>UX Designer</Heading> 
          </CardHeader>
          <CardBody>
            <Text>I create websites so engaging, your cursor will want to linger✨</Text>
          
            <List textAlign="left" py="2vh" spacing={3}>
                <ListItem>
                    <ListIcon as={IoMdCheckmarkCircle} color='green.500' />
                <strong>User Research </strong> 
                </ListItem>
                <ListItem>
                    <ListIcon as={IoMdCheckmarkCircle } color='green.500' />
                    <strong>Wireframing  </strong> 
                </ListItem>
                <ListItem>
                    <ListIcon as={IoMdCheckmarkCircle } color='green.500' />
                    <strong>Prototyping </strong> 
                </ListItem>
                <ListItem>
                    <ListIcon as={IoMdCheckmarkCircle } color='green.500' />
                    <strong>Usability Testing </strong> 
                </ListItem>
                </List>
            
          </CardBody>
        </Card>

        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        >
        
        <Card height='100%' variant='outline' _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }} transition="transform 0.2s, box-shadow 0.2s">
          <CardHeader>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2vh' }}>
              <FaCode size='25px' color='purple'/>
            </div>
            <Heading size='md'>Web Development</Heading>
          </CardHeader>
          <CardBody>
            <Text>I develop websites that work like a charm, ensuring every click is a pleasure 👆</Text>
            <List textAlign="left" py="2vh" spacing={3}>
                <ListItem>
                    <ListIcon as={IoMdCheckmarkCircle} color='green.500' />
                <strong>Landing Pages</strong> 
                </ListItem>
                <ListItem>
                    <ListIcon as={IoMdCheckmarkCircle } color='green.500' />
                    <strong>  Fullstack Applications</strong> 
                </ListItem>
                <ListItem>
                    <ListIcon as={IoMdCheckmarkCircle } color='green.500' />
                    <strong>E-commerce Platforms </strong> 
                </ListItem>
 
                </List>
          </CardBody>
        </Card>

        </motion.div>
      </SimpleGrid>
    </Box>
  )
}
