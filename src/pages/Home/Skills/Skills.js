import { Box, Center, Text, Flex, Image} from '@chakra-ui/react'
import React from 'react'
import ToolKit from '../../../assets/toolkit.png'
import ToolKitBox from '../../../components/ToolKitBox'

export default function Skills({role}) {
  return (

    <Box
    height="100vh"
    width="100vw"
    bg= 'pink'
    >

      <Flex
      justifyContent='center'
      gap={9}
      >
      <Box  
      textAlign="center"
      zIndex={1}
         >
         <Center
        height="100%"
         >
          <Box></Box>
          <Text style={{
                  fontFamily: 'Raleway',
                  fontWeight: 'Bold'
                }}
                color="pink.100" as ="b" fontSize="6xl"
           
                >My </Text>
         
          <Text style={{
                  fontFamily: 'Raleway',
                  fontWeight: 'Bold'
                }}

                _hover={{ 
                  textShadow: "#FC0 1px 0 10px",
                  animation: "shake 0.3s ease-in-out infinite"
                }}
                css={`
                  @keyframes shake {
                    0% { transform: translateX(0); }
                    25% { transform: translateX(-4px); }
                    50% { transform: translateX(4px); }
                    75% { transform: translateX(-2px); }
                    100% { transform: translateX(2px); }
                  }
                `}
      
                color="white" as ="b" fontSize="8xl">TOOLKIT</Text>
        
            
             
         
         </Center> 
          
        </Box>

        <Box
          rounded="lg"
          p="25px"
          m={30}
          zIndex='1'

      
        >
          <ToolKitBox role={role}/>

        </Box>


      </Flex>
        
        

    </Box>


  
  )
}
