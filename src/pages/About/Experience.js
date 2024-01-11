import React from 'react'
import { 
   Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex, 
  Text,
  Image



} from '@chakra-ui/react'

import { MinusIcon, AddIcon } from '@chakra-ui/icons'

export default function Experience({role}) {
  return (
<Accordion  marginTop='5vh' color="white" allowMultiple>
  <AccordionItem >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         <Flex gap='10px' alignItems='center'>
         <Image margin='1vh' width='5%' src={role.experience.experienceOne.logo}/>
          <Text color='white' as='b'> {role.experience.experienceOne.name} </Text>
          <Text> {role.experience.experienceOne.title} </Text>
         
    
         </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel textAlign='left' pb={4}>
    <Text> {role.experience.experienceOne.date} </Text>
    {role.experience.experienceOne.description} 
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         <Flex gap='10px' alignItems='center'>
         <Image margin='1vh' width='5%' src={role.experience.experienceTwo.logo}/>
          <Text color='white' as='b'> {role.experience.experienceTwo.name} </Text>
          <Text> {role.experience.experienceTwo.title} </Text>
          
    
         </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel textAlign='left' pb={4}>
    <Text> {role.experience.experienceTwo.date} </Text>
    {role.experience.experienceTwo.description} 
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         <Flex gap='10px' alignItems='center'>
         <Image margin='1vh' width='5%' src={role.experience.experienceThree.logo}/>
          <Text color='white' as='b'> {role.experience.experienceThree.name} </Text>
          <Text> {role.experience.experienceThree.title} </Text>
          
    
         </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel textAlign='left' pb={4}>
    <Text> {role.experience.experienceThree.date} </Text>
    {role.experience.experienceThree.description} 
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         <Flex gap='10px' alignItems='center'>
         <Image margin='1vh' width='5%' src={role.experience.experienceFour.logo}/>
          <Text color='white' as='b'> {role.experience.experienceFour.name} </Text>
          <Text> {role.experience.experienceFour.title} </Text>
          
    
         </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel textAlign='left' pb={4}>
    <Text > {role.experience.experienceFour.date} </Text>
    <Text>{role.experience.experienceFour.description} </Text>
    
    </AccordionPanel>
  </AccordionItem>

  
</Accordion>
  )
}
