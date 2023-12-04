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
import BackgroundImage from './utils/BackgroundImage'
import BackgroundImageWd from './utils/BackgroundImageWd';
import Figma from './assets/skills/figma.png'
import JavaScript from './assets/skills/JavaScript.png'
import AdobeXD from './assets/skills/adobeXD.png'
import Illustrator from './assets/skills/illustrator.png'
import InVision from './assets/skills/inVision.png'
import Photoshop from './assets/skills/photoshop.png'
import Css from './assets/skills/css.png'
import ReactLogo from './assets/skills/react.png'
import Html from './assets/skills/html.png'
import Python from './assets/skills/python.png'
import Git from './assets/skills/git.png'

function App() {

  const role = {
    uxDesigner: {
        logo: LogoUx,
        image: UxImage,
        colorButton: '#B721FF',
        color: 'white',
        bgColor: '#B429FF',
        heroText1:'a UX designer on a mission to create',
        heroText2:'Intuitive & Beautiful',
        heroText3:'Digital Experiences.',
        lesColorHero: '#FAF089',
        fontHeader: 'Cookie',
        fontSizeLogo: '6xl',
        toggleColor: '#FAF089',
        skillsImages: {

          skillOne: Figma,
          skillTwo: AdobeXD,
          skillThree: Illustrator,
          skillFour: Photoshop,
          skillFive: InVision
        }

    },
    

    webDeveloper: {
        logo: LogoWd,
        image: WdImage,
        colorButton: 'purple',
        color: 'white',
        bgColor: '#171923',
        heroText1:'a programmer on a mission to develop',
        heroText2:'Dynamic & Stunning',
        heroText3:'Web Solutions.',
        lesColorHero: '#D6BCFA',
        fontHeader: ' VT323',
        fontSizeLogo: '6xl',
        toggleColor: '#D6BCFA',
        skillsImages: {
          skillOne: JavaScript,
          skillTwo: ReactLogo ,
          skillThree: Css,
          skillFour: Html,
          skillFive: Python
        }
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
      
      
    
    <Header role={role[currentRole]} />


    {currentRole === 'uxDesigner' ? (
                <BackgroundImage />
              ) : (
                <BackgroundImageWd />
              )}
 
      <Hero isChecked={currentRole === 'webDeveloper'}  onChange={handleSwitchRole} role={role[currentRole]}/>
      <Skills role={role[currentRole]}/>

      </>
      
  
      )}
  
    </ChakraProvider>
    </ParallaxProvider>

  );
}

export default App;
