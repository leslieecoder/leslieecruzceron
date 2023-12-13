import React from 'react'
import { Flex} from '@chakra-ui/react'

export default function Experience() {
  return (
    <Flex>
        <Box>

        <Flex alignItems='center' gap="10px">       
            {role.skills.skillOne.icon}
            <Text>{role.skills.skillOne.name}</Text>    
        </Flex>

        {role.skills.skillOne.progress}
        </Box> 
    </Flex>
  )
}
