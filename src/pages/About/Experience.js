import React from 'react'
import { Flex, Image, Stack, Text, Center} from '@chakra-ui/react'

export default function Experience({role}) {
  return (
    <Flex gap='30px'>
      <Stack align='center'>
  
      <Image w='50px' h='60px' src={role.experience.experienceOne.logo}/>
      <Text  as='b' fontSize='md'>{role.experience.experienceOne.name}</Text>

      <Text  as='b' fontSize='md'>{role.experience.experienceOne.title}</Text>
      <Text fontSize='xs'>{role.experience.experienceOne.date}</Text>

      </Stack>
      <Stack align='center'>
  
        <Image w='20px' h='30px' src={role.experience.experienceOne.logo}/>
        <Text  as='b' fontSize='md'>{role.experience.experienceOne.name}</Text>

        <Text  as='b' fontSize='md'>{role.experience.experienceOne.title}</Text>
        <Text fontSize='xs'>{role.experience.experienceOne.date}</Text>

      </Stack>
          
  
    
    </Flex>
  )
}
