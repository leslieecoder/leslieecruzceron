import React from 'react';
import {
  Box,

} from '@chakra-ui/react';

import Hero from '../Hero/Hero'

export default function Home({ role, scrollToComponent }) {


  return (
    <Box>

          <Hero scrollToComponent={scrollToComponent} role={role}/>
        
    </Box>
  )
}
