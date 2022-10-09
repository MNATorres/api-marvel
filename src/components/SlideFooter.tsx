import React from "react";
import { Box, Button, ScaleFade, Slide, SlideFade, useDisclosure } from '@chakra-ui/react';


export default function SlideFooter() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
        <Button onClick={onToggle}>Click Me</Button>
        <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
          <Box
            p='40px'
            color='white'
            mt='4'
            bg='teal.500'
            rounded='md'
            shadow='md'
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti, quod quo ratione omnis placeat sed nemo, mollitia expedita dolor nostrum laboriosam ad doloremque hic soluta vel vitae praesentium quibusdam!</p>
          </Box>
        </Slide>
      </>
    )
  }


