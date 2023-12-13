import React from 'react'
import { Box, Flex, Text, Center} from '@chakra-ui/react'
import { FaPaperclip, FaHeart } from 'react-icons/fa'



export default function HomeMenu() {

    const options = [
        {
            label: 'About Me',
            icon: <FaHeart/>,
            id: 'about',
        },

        {
            label: 'Work',
            icon: <FaPaperclip/>,
            id: 'work',
        },

        {
            label: 'Jorney',
            icon: <FaHeart/>,
            id: 'experience',
        },
        {
            label: 'Blog',
            icon: <FaHeart/>,
            id: 'blog',
        }
    ]
  return (
    <Box>
        <Flex
        gap='2vw'
        justifyContent='space-between'
        >
        {options.map((option) => (
            <Box
            color='white'
            bgColor='white'
            p='20px'
            w="120px"
            h="100px"
            borderRadius='10px'
            boxShadow='md'
            style={{ background: 'rgba(255, 255, 255, 0.4)' }}
            key={option.id}
            transition="transform 0.3s ease-in-out" 
            _hover={{
                dropShadow: "#FC0 1px 0 10px",  
                transform: 'scale(1.1)', 
                bgColor: 'white',
                color: '#A75DCF',
                boxShadow: 'lg',
               
            }}
            
            >   
            
                <Box
                paddingY='1vh'
                >
                {option.icon}
                </Box>

            
            <Box 
            bgColor='transparent'
            >
                <Text  as='b' fontSize='md'>{option.label}</Text>
            </Box>

     
      
            </Box>
        ))}

</Flex>

    </Box>
  )
}
