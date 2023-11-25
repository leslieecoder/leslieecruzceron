import { Image, Box, Text, Button, Flex} from '@chakra-ui/react'
import React from 'react'
import ToggleButton from './ToggleButton'
import UxImage from '../../../assets/heroLes.png'

export default function Hero({role}) {


  return (
    <Box
    bg={role.bgColor}
    p="50px"
     >
      
        <Flex>
        <Box color={role.color}>
          <Box>
        <Text fontSize='3xl' style={{ display: 'inline', fontFamily: "Raleway",  }}>
        Hi! I'm{' '}
        <Text as="span" fontWeight="bold" color={role.lesColorHero} >
          Lesliee Cruz
        </Text>{' '}
        {role.heroText1}
      </Text>
          </Box>
      

        <Text style={{ display: 'inline', fontFamily: "Raleway", letterSpacing: '4px' }} fontSize='7xl' as='b'>{role.heroText2}</Text>
        <Text style={{ fontFamily: "Andada Pro" }} fontSize='8xl' >{role.heroText3}</Text>
        <Button marginTop='30px' size='lg'>Contact</Button>
        </Box>
        <Image borderRadius='full' boxSize='500px'  objectFit='cover' src={role.image}/>
        </Flex>

    </Box>
  )
}
