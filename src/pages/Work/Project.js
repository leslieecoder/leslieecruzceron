import React from 'react'
import { 
    Flex,
    Box,
    Image,
    Text,
    Button, 
    Stack,
    Link

 } from '@chakra-ui/react'

 import {FaBehance, FaFigma, FaGithub} from "react-icons/fa"


export default function Project({role}) {

  return (
    <Box  marginX='20vw' zIndex={1}>
      <Stack spacing='30vh'>
        <Flex direction={{ base: 'column', md: 'row'}} alignItems='center' gap='5vw'>
            <Box   marginX={{base:'10vw', md: '5vw'}} >
            <Image maxW='40vw' src={role.projects.projectOne.image}/>    
            </Box>
            <Box   textAlign={{base:'center', md:'left'}} color='white'>
               <Stack  spacing='5vh'>
                <Text fontSize={{base:'3xl', md:'4xl'}} as='b'>{role.projects.projectOne.name}</Text>
                <Text marginX='20px'>{role.projects.projectOne.description}</Text>
                <Flex gap='20px' direction={{ base: 'column', md: 'row'}}>
                  
                    <Link href='https://www.behance.net/gallery/166118801/StackProUX-Web-Ap-UX-Design-Case-Study?tracking_source=search_projects&l=0' isExternal>
                      <Button leftIcon={<FaBehance/>} colorScheme="blue" size="md">
                        Case Study
                      </Button>
                    </Link>
           
                    
                    <Link href='https://www.figma.com/proto/z908zzKtXAy4G4j22eS2E0/stackPro%2BUX?page-id=1%3A2&node-id=102-193&scaling=scale-down&starting-point-node-id=102%3A193&mode=design&t=jpvjpaBiODHepG3z-1'isExternal>
                      <Button leftIcon={<FaFigma/>} colorScheme="blue" size="md">
                        Prototype
                      </Button>
                    </Link>

                    <Link href='https://github.com/Lessleya/stackPro'isExternal>
                      <Button leftIcon={<FaGithub/>} colorScheme="blue" size="md">
                        Repository
                      </Button>
                    </Link>
                    
                </Flex>
               </Stack>
            </Box>
        </Flex>

        <Flex direction={{ base: 'column-reverse', md: 'row'}} alignItems='center' gap='5vw'>
           
            <Box   textAlign={{base:'center', md:'left'}} color='white'>
               <Stack  spacing='5vh'>
                <Text fontSize={{base:'3xl', md:'4xl'}} as='b'>{role.projects.projectTwo.name}</Text>
                <Text>{role.projects.projectTwo.description}</Text>
                <Flex gap='20px' direction={{ base: 'column', md: 'row'}}>
                  <Link href='https://www.behance.net/gallery/166473389/VIMA-Web-App-UX-DESIGN-CASE-STUDY-Virtual-Machine?tracking_source=project_owner_other_projects 'isExternal>
                    <Button leftIcon={<FaBehance/>} colorScheme="blue" size="md">
                      Case Study
                    </Button>
                  </Link>
                  <Link href='https://www.figma.com/proto/LMhqZVZimtPel3a9kEa2O5/VM-Project-(Copy)-(Copy)?page-id=71%3A197&type=design&node-id=71-224&viewport=-21%2C280%2C0.25&t=vahZXg9fEtRgBSgV-1&scaling=scale-down&starting-point-node-id=71%3A224&mode=design'isExternal>
                    <Button leftIcon={<FaFigma/>} colorScheme="blue" size="md">
                      Prototype
                    </Button>
                  </Link>

                  <Link href='https://github.com/byui-cit-internship/VmProjectFrontend'isExternal>
                    <Button leftIcon={<FaGithub/>} colorScheme="blue" size="md">
                      Repository
                    </Button>
                  </Link>
                    
                </Flex>
               </Stack>
            </Box>

           
            <Box   >
            <Image maxW='40vw' src={role.projects.projectTwo.image}/>    
            </Box>
        </Flex>

        <Flex direction={{ base: 'column', md: 'row'}} alignItems='center' gap='5vw'>
            <Box   >
            <Image maxW='40vw' src={role.projects.projectThree.image}/>    
            </Box>
            <Box   textAlign={{base:'center', md:'left'}} color='white'>
               <Stack  spacing='5vh'>
                <Text fontSize={{base:'3xl', md:'4xl'}} as='b'>{role.projects.projectThree.name}</Text>
                <Text>{role.projects.projectThree.description}</Text>
                
                <Flex gap='20px' direction={{ base: 'column', md: 'row'}}>
                  <Text>Links for the project will be available soon!</Text>
                
                <Link href='#'>
                      <Button disabled DleftIcon={<FaBehance/>}  size="md">
                        Case Study
                      </Button>
                    </Link>
                    <Link href='#'>
                      <Button  disabled leftIcon={<FaFigma/>}  size="md">
                        Prototype
                      </Button>
                    </Link>

                    <Link href='#'>
                      <Button disabled leftIcon={<FaGithub/>}  size="md">
                        Repository
                      </Button>
                    </Link>
                    
                </Flex>
               </Stack>
            </Box>
        </Flex>
        </Stack>

    </Box>
  )
}
