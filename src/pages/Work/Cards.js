import React from 'react'
import { 
    Box,
    Card,
    Image,
    Stack,
    Divider,
    Heading,
    CardBody,
    CardFooter,
    Button,
  Flex,
    Link
  } from '@chakra-ui/react'
  import {  FaBehance, FaFigma } from 'react-icons/fa'

export default function Cards({role}) {
  return (
    <Flex gap='7vw' direction={{ base: 'column', md: 'row' }}>
  <Card maxW='lg' opacity='unset'>
    <CardBody>
      <Image
        src={role.projects.projectTwo.image }
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
   
  
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter
      justify='space-between'
      flexWrap='wrap'
      sx={{
        '& > button': {
          minW: '136px',
        },
      }}
    >
      <Button  flex='1' variant='ghost' leftIcon={<FaBehance />}>
        <Link href={role.projects.projectTwo.link}>Case Study</Link>
      </Button>
      <Button flex='1' variant='ghost' leftIcon={<FaFigma />}>
        Figma
      </Button>
   
    </CardFooter>
  </Card>
  
  <Card maxW='lg' opacity='unset'>
    <CardBody>
      <Image
        src={role.projects.projectOne.image }
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
  
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter
      justify='space-between'
      flexWrap='wrap'
      sx={{
        '& > button': {
          minW: '136px',
        },
      }}
    >
      <Button  flex='1' variant='ghost' leftIcon={<FaBehance />}>
      <Link href={role.projects.projectOne.link}>Case Study</Link>
      </Button>
      <Button flex='1' variant='ghost' leftIcon={<FaFigma />}>
        Figma
      </Button>
   
    </CardFooter>
  </Card>
  <Card maxW='lg' opacity='unset'>
    <CardBody>
      <Image
        src={role.projects.projectThree.image }
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
  
  
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter
      justify='space-between'
      flexWrap='wrap'
      sx={{
        '& > button': {
          minW: '136px',
        },
      }}
    >
      <Button  flex='1' variant='ghost' leftIcon={<FaBehance />}>
        <Link>Case Study</Link>
      </Button>
      <Button flex='1' variant='ghost' leftIcon={<FaFigma />}>
        Figma
      </Button>
   
    </CardFooter>
  </Card>
  </Flex>
  
  )
}
