import React, { useState } from 'react';
import { SimpleGrid, Image, Text, Card, Box, Center, CardFooter, Button, HStack } from '@chakra-ui/react';
import { FaGit, FaFigma, FaRocket, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Edup from '../../assets/edup.png';
import BibleRescue from '../../assets/bibleRescue.png';
import StackPro from '../../assets/stackPro.png';
import AlwaysGreen from '../../assets/AlwaysGreen.png';
import Vima from '../../assets/vima.png';
import Havagala from '../../assets/havagala.png'

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

// Example array of card data, with a type for filtering
const projectCards = [
  {
    id: 1,
    imageUrl: BibleRescue,
    caseStudyLink: 'https://www.behance.net/gallery/216389589/Bible-Rescue-Website-Redesign-UX?',
    gitHubLink: '',
    liveLink: 'https://biblerescue.org/',
    type: 'ux'  
  },
  {
    id: 2,
    imageUrl: Edup,
    caseStudyLink: 'https://www.behance.net/gallery/212071665/UX-CASE-STUDY-WEBSITE-REDESIGN-LANDING-PAGE',
    gitHubLink: 'https://github.com/leslieecoder?tab=overview&from=2025-01-01&to=2025-01-08',
    liveLink: 'https://edup.ai/main/',
    type: 'web' 
  },
  {
    id: 3,
    imageUrl: StackPro,
    caseStudyLink: 'https://www.behance.net/gallery/166118801/StackProUX-Web-Ap-UX-Design-Case-Study?tracking_source=search_projects|stackpro&l=1',
    gitHubLink: 'https://github.com/leslieecoder/stackPro',
    liveLink: 'https://stackproux.netlify.app/',
    type: 'ux'
  },
  {
    id: 4,
    imageUrl: AlwaysGreen,
    caseStudyLink: '',
    gitHubLink: 'https://github.com/leslieecoder/always-green-utah',
    liveLink: 'https://alwaysgreen-utah.com/',
    type: 'web'
  },
  {
    id: 5,
    imageUrl: Vima,
    caseStudyLink: 'https://www.behance.net/gallery/166473389/VIMA-Web-App-UX-DESIGN-CASE-STUDY-Virtual-Machine?tracking_source=search_projects|VIMA&l=14',
    gitHubLink: 'https://github.com/example5',
    liveLink: '',
    type: 'UX'
  },
  {
    id: 5,
    imageUrl: Havagala,
    caseStudyLink: 'https://www.behance.net/gallery/216481381/Havagala-Website-Redesign-UXIU?',
    gitHubLink: '',
    liveLink: '',
    type: 'UX'
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('all'); // 'all', 'ux', or 'web'

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Filtered projects based on selected filter
  const filteredProjects = filter === 'all' ? projectCards : projectCards.filter((card) => card.type === filter);

  return (
    <Box marginX="20vw" textAlign="center" name="about">
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
            <Text fontFamily="Raleway">
              Check out my latest work for some cool clients!
            </Text>
          </Box>
        </Box>
      </motion.div>

      {/* Filter buttons */}
      <Center padding="2rem">
        <HStack spacing="1rem">
          <Button
            variant="outline"
            borderColor={filter === 'all' ? '#D6A6FF' : 'gray.200'}  // Light purple border when toggled
            color={filter === 'all' ? '#D6A6FF' : 'gray.500'}  // Light purple text when toggled
            onClick={() => handleFilterChange('all')}
            isActive={filter === 'all'}
            padding="1rem"
          >
            All Projects
          </Button>
          <Button
            variant="outline"
            borderColor={filter === 'ux' ? '#D6A6FF' : 'gray.200'}  // Light purple border when toggled
            color={filter === 'ux' ? '#D6A6FF' : 'gray.500'}  // Light purple text when toggled
            onClick={() => handleFilterChange('ux')}
            isActive={filter === 'ux'}
            padding="1rem"
          >
            UX Design Projects
          </Button>
          <Button
            variant="outline"
            borderColor={filter === 'web' ? '#D6A6FF' : 'gray.200'}  // Light purple border when toggled
            color={filter === 'web' ? '#D6A6FF' : 'gray.500'}  // Light purple text when toggled
            onClick={() => handleFilterChange('web')}
            isActive={filter === 'web'}
            padding="1rem"
          >
            Web Development Projects
          </Button>
        </HStack>
      </Center>

      {/* Project cards */}
      <SimpleGrid spacing="7vw" templateColumns="repeat(auto-fill, minmax(400px, 1fr))">
        {filteredProjects.map((card) => (
          <motion.div
            key={card.id}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
          >
            <Card maxW="lg">
              <Image
                objectFit="cover"
                height="250px"
                width="100%"
                src={card.imageUrl}
                alt="Project Image"
                transition="filter 0.3s, transform 0.3s ease-in-out"
                _hover={{
                  filter: 'brightness(120%)',
                }}
              />
             <CardFooter justify="space-between" flexWrap="wrap">
  <Button
    flex="1"
    variant="ghost"
    leftIcon={<FaFigma />}
    onClick={() => window.location.href = card.caseStudyLink}
  >
    Case Study
  </Button>
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
