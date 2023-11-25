import React, {useState, useEffect} from 'react';
import {
  ChakraProvider,
  theme,
  Box,

} from '@chakra-ui/react';
import Header from './components/header/Header';
import ToggleButton from './pages/Home/Hero/ToggleButton';
import LogoUx from './assets/leslieecruzlogo.png'
import LogoWd from './assets/leslieecruzlogo2.png'
import Hero from './pages/Home/Hero/Hero'
import UxImage from './assets/heroLes.png'
import WdImage from './assets/heroLesWD.png'
function App() {

  const role = {
    uxDesigner: {
        logo: LogoUx,
        image: UxImage,
        colorButton: 'purple',
        color: 'black',
        bgColor: 'white',
        heroText1:'a UX designer on a mission to create',
        heroText2:'Intuitive & Beautiful',
        heroText3:'Digital Experiences.',
        lesColorHero: 'purple',
        fontHeader: 'Cookie'

    },
    

    webDeveloper: {
        logo: LogoWd,
        image: WdImage,
        colorButton: 'pink',
        color: 'white',
        bgColor: 'black',
        heroText1:'a programmer on a mission to develop',
        heroText2:'Dynamic & Stunning',
        heroText3:'Web Solutions.',
        lesColorHero: '#ECCB64',
        fontHeader: 'Raleway'
    }
  }


  const [currentRole, setCurentRole] = useState('uxDesigner')


  const handleSwitchRole = () => {
    setCurentRole((prevRole) => (prevRole === 'uxDesigner' ? 'webDeveloper' : 'uxDesigner'))
  }

 
  return (
    <ChakraProvider theme={theme}>
      <Box paddingX='100px'>

      <Header role={role[currentRole]} />
      <ToggleButton onChange={handleSwitchRole} isChecked={currentRole === 'webDeveloper'} />
      <Hero role={role[currentRole]}/>
      </Box>

     
     
    </ChakraProvider>
  );
}

export default App;
