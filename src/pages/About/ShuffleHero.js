import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import PhotoOne from '../../assets/aboutGallery/photo1.jpeg';
import PhotoTwo from '../../assets/aboutGallery/photo2.jpeg';
import PhotoThree from '../../assets/aboutGallery/photo3.jpeg';
import PhotoFour from '../../assets/aboutGallery/photo4.jpeg';
import PhotoFive from '../../assets/aboutGallery/photo5.jpeg';
import PhotoSix from '../../assets/aboutGallery/photo6.jpeg';
import PhotoSeven from '../../assets/aboutGallery/photo7.jpeg';
import PhotoEight from '../../assets/aboutGallery/photo8.jpeg';
import PhotoNine from '../../assets/aboutGallery/photo9.jpeg';

const ShuffleHero = () => {
  return (
    <Box  rounded="lg"  style={{ background: 'rgba(255, 255, 255, 0.4)' }} zIndex={1} p={10}  m="5vw">
      <ShuffleGrid />
    </Box>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

const squareData = [
    {
      id: 1,
      src: PhotoOne
    },
    {
      id: 2,
      src: PhotoTwo,
    },
    {
      id: 3,
      src: PhotoThree,
    },
    {
      id: 4,
      src: PhotoFour,
    },
    {
      id: 5,
      src: PhotoFive,
    },
    {
      id: 6,
      src: PhotoSix,
    },
    {
      id: 7,
      src: PhotoSeven,
    },
    {
      id: 8,
      src: PhotoEight,
    },
    {
      id: 9,
      src: PhotoNine,
    }
]

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return <Box zIndex={1} display="grid" gridTemplateColumns="repeat(3, 1fr)" gridTemplateRows="repeat(3, 1fr)" w={{ base: '250px', md: '500px' }} h={{ base: '250px', md: '500px' }} gap={1}>{squares.map((sq) => sq)}</Box>;
};

export default ShuffleHero;
