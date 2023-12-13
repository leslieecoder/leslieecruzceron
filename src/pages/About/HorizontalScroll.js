import React from 'react'
import { Box } from '@chakra-ui/react'

export default function HorizontalScroll({children}) {
  return (
 
    <Box overflowX="auto" whiteSpace="nowrap">
      {children}
    </Box>
  )
}
