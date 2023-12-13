import { Grid, Text, Box, Flex} from '@chakra-ui/react'
import React from 'react'

export default function Skills({role}) {
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
<Box>

    <Flex alignItems='center' gap="10px">       
        {role.skills.skillOne.icon}
        <Text>{role.skills.skillOne.name}</Text>    
    </Flex>
    
    {role.skills.skillOne.progress}
</Box>
<Box>

    <Flex alignItems='center' gap="10px">       
        {role.skills.skillTwo.icon}
        <Text>{role.skills.skillTwo.name}</Text>    
    </Flex>
    
    {role.skills.skillTwo.progress}
</Box>
<Box>

    <Flex alignItems='center' gap="10px">       
        {role.skills.skillThree.icon}
        <Text>{role.skills.skillThree.name}</Text>    
    </Flex>
    
    {role.skills.skillThree.progress}
</Box>
<Box>

    <Flex alignItems='center' gap="10px">       
        {role.skills.skillFour.icon}
        <Text>{role.skills.skillFour.name}</Text>    
    </Flex>
    
    {role.skills.skillFour.progress}
</Box>
<Box>

    <Flex alignItems='center' gap="10px">       
        {role.skills.skillFive.icon}
        <Text>{role.skills.skillFive.name}</Text>    
    </Flex>
    
    {role.skills.skillFive.progress}
</Box>
<Box>

    <Flex alignItems='center' gap="10px">       
        {role.skills.skillSix.icon}
        <Text>{role.skills.skillSix.name}</Text>    
    </Flex>
    
    {role.skills.skillSix.progress}
</Box>
<Box>

    <Flex alignItems='center' gap="10px">       
        {role.skills.skillSeven.icon}
        <Text>{role.skills.skillSeven.name}</Text>    
    </Flex>
    
    {role.skills.skillSeven.progress}
</Box>
<Box>

    <Flex alignItems='center' gap="10px">       
        {role.skills.skillEight.icon}
        <Text>{role.skills.skillEight.name}</Text>    
    </Flex>
    
    {role.skills.skillEight.progress}
</Box>


    </Grid>
  )
}
