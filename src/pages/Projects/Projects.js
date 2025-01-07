import React from 'react';
import { SimpleGrid, Image,  Text, Card, Box, Center, CardFooter, Button,  } from '@chakra-ui/react';
import { FaGit, FaFigma, FaRocket,  FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Edup from '../../assets/edup.png'
import BibleRescue from '../../assets/bibleRescue.png'
import StackPro from '../../assets/stackPro.png'
import AlwaysGreen from '../../assets/AlwaysGreen.png'
import Vima from '../../assets/vima.png'

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

  // Example array of card data
const projectCards = [
    {
      id: 1,
      imageUrl: BibleRescue,
      caseStudyLink: '#',
      gitHubLink: 'https://github.com/example1',
      liveLink: 'https://example1.com',
    },
    {
      id: 2,
      imageUrl: Edup,
      caseStudyLink: '#',
      gitHubLink: 'https://github.com/example2',
      liveLink: 'https://example2.com',
    },
    {
      id: 3,
      imageUrl: StackPro,
      caseStudyLink: '#',
      gitHubLink: 'https://github.com/example2',
      liveLink: 'https://example2.com',
    },

    {
      id: 4,
      imageUrl: AlwaysGreen,
      caseStudyLink: '#',
      gitHubLink: 'https://github.com/example2',
      liveLink: 'https://example2.com',
    },

    {
      id: 5,
      imageUrl: Vima,
      caseStudyLink: '#',
      gitHubLink: 'https://github.com/example2',
      liveLink: 'https://example2.com',
    },

   
  ];


export default function Projects() {
  return (

    
    <Box  marginX="20vw" textAlign='center' name="about">
              <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        ></motion.div>
    
      <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        >
    <Box zIndex="1" position='relative' marginY="10vh">
            {/* About me title */}
            <Center>
            <FaRocket color="white" size='4vw' />

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
              Don't believe it?{' '}
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
              See it.
            </Text>

            <Box
            color='white'
            
            >
              <Text
              fontFamily='Raleway'
              >
              Check out my latest work for some cool clients!</Text>
            </Box>
            
          </Box>
         </motion.div>
 
         <SimpleGrid spacing="7vw" templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
        {projectCards.map((card) => (
          <motion.div
            key={card.id}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
          >
            <Card maxW='lg'>
            <Image
          objectFit='cover'
          height="250px" 
          width="100%" 
          src={card.imageUrl}
          alt='Project Image'
          transition="filter 0.3s, transform 0.3s ease-in-out"
          _hover={{
            filter: 'brightness(120%)', // Increases brightness by 20% upon hover
          }}
        />
              <CardFooter justify='space-between' flexWrap='wrap'>
                <Button flex='1' variant='ghost' leftIcon={<FaFigma />} onClick={() => window.location.href = card.caseStudyLink}>
                  Case Study
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<FaGit />} onClick={() => window.location.href = card.gitHubLink}>
                  GitHub
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<FaExternalLinkAlt />} onClick={() => window.location.href = card.liveLink}>
                  Go Live
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </SimpleGrid>
    </Box>
  )
}
