import React, { useState, useEffect } from 'react';
import { ChakraProvider,Progress, theme, Box } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UxImage from './assets/lesHero.png';
import WdImage from './assets/heroLesWD.png';
import Loader from './components/loader/Loader';
import Home from './pages/Home/Home';
import BackgroundImage from '../src/utils/BackgroundImage'
import BackgroundImageWd from '../src/utils/BackgroundImageWd';
import Header from './components/header/Header'
import ToggleButton from './pages/Home/Hero/ToggleButton'
import Social from './components/social/Social'
import About from './pages/About/About';
import {FaFigma, FaAdobe, FaInvision, FaUser, FaCog, FaBook } from 'react-icons/fa';
import { DiIllustrator, DiPhotoshop } from "react-icons/di";
import { FaJs, FaReact, FaHtml5, FaCss3, FaGit, FaNodeJs, FaDatabase, FaServer, FaDatabase as FaMongoDb, FaDatabase as FaSql, FaAws, FaPython } from 'react-icons/fa';
import FamilySearchLogo from './assets/familySearch.png'


function App() {

  const role = {
    uxDesigner: {
      image: UxImage,
      colorButton: '#B721FF',
      color: 'white',
      bgColor: '#B429FF',
      heroText1: 'a UX Designer on a mission to create',
      heroText2: 'Intuitive & Beautiful',
      heroText3: 'Digital Experiences.',
      lesColorHero: '#FAF089',
      fontHeader: 'Cookie',
      fontSizeLogo: { base: '4xl', md: '5xl' },
      toggleColor: '#FAF089',
      experience: {
        experienceOne: {
          logo: FamilySearchLogo,
          name: 'FamilySearch',
          title: 'UX Designer & Developer',
          date: 'Jun 2023 - Now',
        },
        experienceTwo: {
          logo: FamilySearchLogo,
          name: 'The Church of JesusChrist of Latter-day Saints',
          title: 'UX Designer',
          date: 'A',
        },

      },
      skills:  { 
        
        skillOne: {
            name: "Figma",
            icon:  <FaFigma  />,
            progress: <Progress my='10px' hasStripe value={100} colorScheme='pink'/>
          },
          skillTwo: {
            name: "Adobe XD",
            icon: <FaAdobe />,
            progress: <Progress my='10px' hasStripe value={80} colorScheme='pink' />,
          },
          skillThree: {
            name: "Illustrator",
            icon: <DiIllustrator />,
            progress: <Progress my='10px' hasStripe value={70} colorScheme='pink' />,
          },
          skillFour: {
            name: "Design Systems",
            icon: <FaBook />,
            progress: <Progress my='10px' hasStripe value={90} colorScheme='pink' />,
          },
          skillFive: {
            name: "Invision",
            icon: <FaInvision />,
            progress: <Progress my='10px' hasStripe value={70} colorScheme='pink' />,
          },
          skillSix: {
            name: "Prototyping",
            icon: <FaCog />,
            progress: <Progress my='10px' hasStripe value={90} colorScheme='pink' />,
          },
          skillSeven: {
            name: "User Testing",
            icon: <FaUser />,
            progress: <Progress my='10px' hasStripe value={90} colorScheme='pink' />,
          },
          skillEight: {
            name: "Design Thinking",
            icon: <FaBook />,
            progress: <Progress my='10px' hasStripe value={95} colorScheme='pink' />,
          },
   
      
    },
    

    },

    webDeveloper: {
      image: WdImage,
      colorButton: 'purple',
      color: 'white',
      bgColor: '#171923',
      heroText1: 'a Web Dev on a mission to develop',
      heroText2: 'Dynamic & Stunning',
      heroText3: 'Web Solutions.',
      lesColorHero: '#D6BCFA',
      fontHeader: ' VT323',
      fontSizeLogo: { base: '4xl', md: '5xl' },
      toggleColor: '#D6BCFA',
      experience: {
        experienceOne: {
          logo: FamilySearchLogo,
          name: 'FamilySearch',
          title: 'UX Designer',
          date: 'Jun 2023 - Now',
          description:' As a Family Search UX Designer, I led user research, ideated a web app for team progress tracking, and crafted an intuitive Figma prototype. My user-centered design enhances manager insights into team performance.'
        }
      },
      skills: {
          skillOne: {
            name: "JavaScript",
            icon: <FaJs />,
            progress: <Progress my='10px' hasStripe value={80} colorScheme='purple'/>
          },
          skillTwo: {
            name: "React",
            icon: <FaReact />,
            progress: <Progress my='10px' hasStripe value={85} colorScheme='purple' />,
          },
          skillThree: {
            name: "HTML",
            icon: <FaHtml5 />,
            progress: <Progress my='10px' hasStripe value={95} colorScheme='purple' />,
          },
          skillFour: {
            name: "CSS",
            icon: <FaCss3 />,
            progress: <Progress my='10px' hasStripe value={90} colorScheme='purple' />,
          },
          skillFive: {
            name: "Git and GitHub",
            icon: <FaGit />,
            progress: <Progress my='10px' hasStripe value={85} colorScheme='purple' />,
          },
          skillSix: {
            name: "Node.js",
            icon: <FaNodeJs />,
            progress: <Progress my='10px' hasStripe value={60} colorScheme='purple' />,
          },
          skillSeven: {
            name: "GraphQL",
            icon: <FaServer />,
            progress: <Progress my='10px' hasStripe value={65} colorScheme='purple' />,
          },
          skillEight: {
            name: "MongoDB & SQL",
            icon: <FaMongoDb />,
            progress: <Progress my='10px' hasStripe value={50} colorScheme='purple' />,
          },
       
      
       
}
    },
  };

 

  const [currentRole, setCurentRole] = useState('uxDesigner');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const handleSwitchRole = () => {
    setCurentRole(prevRole =>
      prevRole === 'uxDesigner' ? 'webDeveloper' : 'uxDesigner'
    );
  };
  const skillKeys = Object.keys(role[currentRole].skills);
  console.log("Skills", skillKeys)

  return (
    <ChakraProvider theme={theme}>
      {loading ? (
        <Loader loading={loading} />
      ) : (

      <>
     
        {currentRole === 'uxDesigner' ? (
          
          <BackgroundImage />
        ) : (
          <BackgroundImageWd />
        )}
        

        <Header role={role[currentRole]} />
        <ToggleButton onChange={handleSwitchRole} isChecked={currentRole === 'webDeveloper'} />
        <Social/>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home
                role={role[currentRole]}
                currentRole={currentRole}
                handleSwitchRole={handleSwitchRole}
              />
  }>
          </Route>
          <Route path="about" element={<About role={role[currentRole]}  currentRole={currentRole} />} />

          </Routes>
      
        </BrowserRouter>

        </>
           
      )}
    </ChakraProvider>
  );
}

export default App;
