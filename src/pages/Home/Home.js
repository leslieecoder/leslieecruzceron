import React from 'react';
import {
  Box,

} from '@chakra-ui/react';
import { Navigate, Outlet } from 'react-router-dom';
import Hero from './Hero/Hero'
import About from '../About/About';


export default function Home({ role }) {


  return (
    <Box
  
    >

          <Hero
      
            role={role}
          />

          <About role={role}/>
        
    </Box>
  )
}
