import React, { useState } from 'react';
import { SimpleGrid, Image, Text, Card, Box, Center, CardFooter, Button, HStack } from '@chakra-ui/react';
import { FaGit, FaRocket, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Edup from '../../assets/edup.png';
import BibleRescue from '../../assets/bibleRescue.png';
import StackPro from '../../assets/stackPro.png';
import AlwaysGreen from '../../assets/AlwaysGreen.png';
import Vima from '../../assets/vima.png';
import Havagala from '../../assets/havagala.png';
import CapitalMomentum from '../../assets/capital-momentum.png';
import AldousLegal from '../../assets/aldouslegal.png';

// Animation variants for the cards
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

// Example array of card data
const projectCards = [
  // Add your card data here
];

export default function Projects() {
  const [filter, setFilter] = useState('all'); // 'all', 'ux', or 'web'

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Filtered projects based on selected filter
  const filteredProjects = filter === 'all' ? projectCards : projectCards.filter((card) => card.type === filter);

  return (
    <Box marginX={{ base: '5vw', md: '20vw' }} textAlign="center" name="about">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={cardVariants}
      >
        <Box zIndex="1" position="relative" marginY="10vh">
          {/* About me title */}
          <Center>
            <FaRocket color="white" size="4vw" />
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

          <Box color="white">
            <Text fontFamily="Raleway">Check out my latest work for some cool clients!</Text>
          </Box>
        </Box>
      </motion.div>

      {/* Filter buttons */}
      <Center padding="2rem">
        <HStack spacing="1rem" width="100%" justifyContent="center">
          <Button
            variant="outline"
            borderColor={filter === 'all' ? '#D6A6FF' : 'gray.200'}
            color={filter === 'all' ? '#D6A6FF' : 'white'}
            onClick={() => handleFilterChange('all')}
            isActive={filter === 'all'}
            padding="1rem"
            width={{ base: '30%', md: '20%' }}
          >
            All Projects
          </Button>
          <Button
            variant="outline"
            borderColor={filter === 'ux' ? '#D6A6FF' : 'gray.200'}
            color={filter === 'ux' ? '#D6A6FF' : 'white'}
            onClick={() => handleFilterChange('ux')}
            isActive={filter === 'ux'}
            padding="1rem"
            width={{ base: '30%', md: '20%' }}
          >
            UX Design Projects
          </Button>
          <Button
            variant="outline"
            borderColor={filter === 'web' ? '#D6A6FF' : 'gray.200'}
            color={filter === 'web' ? '#D6A6FF' : 'white'}
            onClick={() => handleFilterChange('web')}
            isActive={filter === 'web'}
            padding="1rem"
            width={{ base: '30%', md: '20%' }}
          >
            Web Development Projects
          </Button>
        </HStack>
      </Center>

      {/* Project cards */}
      <SimpleGrid spacing="5vw" templateColumns="repeat(auto-fit, minmax(200px, 1fr))">
        {filteredProjects.map((card) => (
          <motion.div
            key={card.id}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
          >
            <Card maxW="sm" margin="auto">
              <Image
                objectFit="cover"
                height={{ base: '150px', md: '200px' }}
                width="100%"
                src={card.imageUrl}
                alt="Project Image"
                transition="filter 0.3s, transform 0.3s ease-in-out"
                _hover={{
                  filter: 'brightness(120%)',
                }}
              />
              <CardFooter justify="space-between" flexWrap="wrap">
                {card.caseStudyLink ? (
                  <Button
                    flex="1"
                    variant="ghost"
                    leftIcon={<FaGit />}
                    onClick={() => window.location.href = card.caseStudyLink}
                  >
                    Case Study
                  </Button>
                ) : (
                  <Button flex="1" variant="ghost" leftIcon={<FaGit />} isDisabled>
                    Case Study
                  </Button>
                )}
                {card.gitHubLink ? (
                  <Button
                    flex="1"
                    variant="ghost"
                    leftIcon={<FaGit />}
                    onClick={() => window.location.href = card.gitHubLink}
                  >
                    GitHub
                  </Button>
                ) : (
                  <Button flex="1" variant="ghost" leftIcon={<FaGit />} isDisabled>
                    GitHub
                  </Button>
                )}
                {card.liveLink ? (
                  <Button
                    flex="1"
                    variant="ghost"
                    leftIcon={<FaExternalLinkAlt />}
                    onClick={() => window.location.href = card.liveLink}
                  >
                    Go Live
                  </Button>
                ) : (
                  <Button flex="1" variant="ghost" leftIcon={<FaExternalLinkAlt />} isDisabled>
                    Go Live
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </SimpleGrid>
    </Box>
  );
}
