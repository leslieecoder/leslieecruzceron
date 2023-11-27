import React, {useState, useEffect} from 'react';
import {
  ChakraProvider,
  theme,
  Box,
  Spacer,


} from '@chakra-ui/react';
import Header from './components/header/Header';
import ToggleButton from './pages/Home/Hero/ToggleButton';
import LogoUx from './assets/leslieecruzlogo.png'
import LogoWd from './assets/leslieecruzlogo2.png'
import Hero from './pages/Home/Hero/Hero'
import UxImage from './assets/heroLes.png'
import WdImage from './assets/heroLesWD.png'
import Loader from './components/loader/Loader';
import { ParallaxProvider } from 'react-scroll-parallax';
import Stars from './assets/starss.png'


function App() {

  const role = {
    uxDesigner: {
        logo: LogoUx,
        image: UxImage,
        colorButton: 'pink',
        color: 'black',
        bgColor: 'white',
        heroText1:'a UX designer on a mission to create',
        heroText2:'Intuitive & Beautiful',
        heroText3:'Digital Experiences.',
        lesColorHero: '#F687B3',
        fontHeader: 'Cookie',
        fontSizeLogo: '6xl',
        toggleColor: '#F687B3'

    },
    

    webDeveloper: {
        logo: LogoWd,
        image: WdImage,
        colorButton: 'purple',
        color: 'white',
        bgColor: 'black',
        heroText1:'a programmer on a mission to develop',
        heroText2:'Dynamic & Stunning',
        heroText3:'Web Solutions.',
        lesColorHero: '#D6BCFA',
        fontHeader: ' VT323',
        fontSizeLogo: '6xl',
        toggleColor: '#D6BCFA'
    }
  }


  const [currentRole, setCurentRole] = useState('uxDesigner')
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);


  const handleSwitchRole = () => {
    setCurentRole((prevRole) => (prevRole === 'uxDesigner' ? 'webDeveloper' : 'uxDesigner'))
  }

 
  return (
    <ChakraProvider theme={theme}>
    <ParallaxProvider>
 

{loading ? (
        <Loader loading={loading} />
      ) : (
        
      
      <Box bg={role[currentRole].bgColor} color={role[currentRole].color} transition="background-color 0.3s, color 0.3s" position="relative">
      <Header role={role[currentRole]} zIndex={100} />
      <Spacer/>
      <ToggleButton role={role[currentRole]} onChange={handleSwitchRole} isChecked={currentRole === 'webDeveloper'} />

      <Hero role={role[currentRole]}/>
     
     

     
      </Box>

  
  
     

  
      )}



    </ParallaxProvider>
    </ChakraProvider>

  );
}

export default App;
