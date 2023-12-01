import React, {useState, useEffect} from 'react';
import {
  ChakraProvider,
  theme,
  Box,

} from '@chakra-ui/react';
import Header from './components/header/Header';
import LogoUx from './assets/leslieecruzlogo.png'
import LogoWd from './assets/leslieecruzlogo2.png'
import Hero from './pages/Home/Hero/Hero'
import UxImage from './assets/lesHero.png'
import WdImage from './assets/heroLesWD.png'
import Loader from './components/loader/Loader';
import Skills from './pages/Home/Skills/Skills';
import { ParallaxProvider } from 'react-scroll-parallax';
import Work from './pages/Home/Work/Work';
import Contact from './pages/Home/Contact/Contact';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import BackgroundImage from './utils/BackgroundImage'
import BackgroundImageWd from './utils/BackgroundImageWd';



function App() {

  const role = {
    uxDesigner: {
        logo: LogoUx,
        image: UxImage,
        colorButton: 'pink',
        color: 'white',
        bgColor: 'transparent',
        heroText1:'a UX designer on a mission to create',
        heroText2:'Intuitive & Beautiful',
        heroText3:'Digital Experiences.',
        lesColorHero: '#FAF089',
        fontHeader: 'Cookie',
        fontSizeLogo: '6xl',
        toggleColor: '#FAF089'

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
  const [loading, setLoading] = useState(false);

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
    <ParallaxProvider>
    <ChakraProvider theme={theme}>

 

{loading ? (
        <Loader loading={loading} />
      ) : (
      <>
      
      
    <Box bgColor={role.bgColor} color={role[currentRole].color}>

    {currentRole === 'uxDesigner' ? (
                <BackgroundImage />
              ) : (
                <BackgroundImageWd />
              )}
      <Header role={role[currentRole]} />
 
      <Hero isChecked={currentRole === 'webDeveloper'}  onChange={handleSwitchRole} role={role[currentRole]}/>
      <Element name="skills" >
          <Skills role={role[currentRole]} />
      </Element>
      <Element name="section2" className="element">
        <Work />
      </Element> 
      <Element name="section2" className="element">
        <Contact />
      </Element> 
      <Link to="skills" spy={true} smooth={true} duration={500} offset={-50}>
       Scroll to Skills
      </Link>

       
      </Box>
      </>
      
  
      )}
  
    </ChakraProvider>
    </ParallaxProvider>

  );
}

export default App;
