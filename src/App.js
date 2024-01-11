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
import ToggleButton from './pages/Hero/ToggleButton';
import Social from './components/social/Social'
import About from './pages/About/About';
import {FaFigma, FaAdobe, FaInvision, FaUser, FaCog, FaBook } from 'react-icons/fa';
import { DiIllustrator, DiPhotoshop } from "react-icons/di";
import { FaJs, FaReact, FaHtml5, FaCss3, FaGit, FaNodeJs, FaDatabase, FaServer, FaDatabase as FaMongoDb, FaDatabase as FaSql, FaAws, FaPython } from 'react-icons/fa';
import FamilySearchLogo from './assets/familySearch.png'
import ChurchLogo from './assets/church-logo.png'
import ByuiLogo from './assets/byui-logo.png'
import StackPro from './assets/stackProp-lap.png'
import Vima from './assets/Vima-lap.png'
import Metrics from './assets/manager-lap.png'
import Work from './pages/Work/Work';



function App() {

  const role = {
    uxDesigner: {
      image: UxImage,
      colorButton: '#B721FF',
      color: 'white',
      bgColor: '#B429FF',
      headerBg: 'rgba(183, 33, 255, 0.5)',
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
          title: 'UX Designer Intern',
          date: 'Jun 2023 - Now',
          description:'Designed and developed a dynamic web application aimed at empowering managers to assess team success metrics through the execution of user interviews. Spearheaded the entire process, from crafting information architecture to ideation and prototyping. Utilized Figma to meticulously design components, applying fundamental design principles to construct a polished, interactive prototype'
        },
        experienceTwo: {
          logo: ChurchLogo,
          name: 'The Church of JesusChrist of Latter-day Saints',
          title: 'UX Designer Intern',
          date: 'Aug 2022 - Dec 2022',
          description:'Collaborated with multi-disciplinary teams in designing an enterprise design system used by +30 designers for +100 products. Used industry-standard applications, including Adobe Creative Cloud and UX prototyping tools. Worked under Agile environment and became familiar with agile strategies'
        },
        experienceThree:{
          logo: ByuiLogo,
          name: 'Brigham Young University - Idaho',
          title:'UX Designer',
          date: 'Mar 2021 - March 2022',
          description:'Redesigned school website for 3 departments by creating user flows and visual styles for new features using Figma. Designed user flows, wireframes, and mockups on Adobe XD for mobile app PASS (Personal Academic Success Strategy) to help students set goals. Collaborated with product managers, business partners, and engineers to help define product requirements and road map'
        },
        experienceFour:{
          logo: ByuiLogo,
          name: 'Brigham Young University - Idaho',
          title:'Technical Product Manager',
          date: 'Jan 2022 - Sep 2022',
          description:'Led agile team meetings like stand-up and sprint review for an engineering team of six. Transformed a proof of concept application into a stable application. Redesigned the user interface and improved the user experience of the product. Helped to prioritize the backlog according to the customers needs. Became familiar with the end to end the flow of the application.Resolving technical team problems.Worked with the product owner and key stakeholders to refine business requirements.'
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

    projects: {
      projectOne: {
        image: StackPro,
        name: 'StackPro+UX',
        description: 'StackPro is an innovative online learning platform dedicated to the world of fullstack development. Its uniquely designed to bridge the gap between development and design, offering a comprehensive curriculum that equips learners with the skills needed to excel as proficient fullstack developers.'
      },
      projectTwo: {
        image: Vima,
        name: 'Vima',
        description: 'A cool description of the project'
      },
      projectThree: {
        image: Metrics,
        name: 'Manager Metrics',
        description: 'A cool description of the project'
      }
    }
    

    },

    webDeveloper: {
      image: WdImage,
      colorButton: 'purple',
      color: 'white',
      bgColor: '#171923',
      headerBg: '#171923',
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
          title: 'Web Developer Intern',
          date: 'Jun 2023 - Now',
          description:'Designed and built a web application that allows users to create, read, update, and delete data using React and GraphQL. I used pre-made components from a library to speed up development, styled components to make them visually appealing, and fixed any issues by debugging. Worked as part of an Agile project team to ensure our work was well-coordinated and delivered on time'
        },
        experienceTwo: {
          logo: ByuiLogo,
          name: 'Brigham Young University-Idaho',
          title: 'Web Development Tutor',
          date: 'Jan 2023 - Jun 2023',
          description:'•Regulated 30+ students learning through tutoring to increase understanding of class concepts in HTML, CSS, JavaScript, Git, Github, NodeJS throughout 4-month semester.'
        },
        experienceThree:{
          logo: ByuiLogo,
          name: 'Brigham Young University - Idaho',
          title:'Full-stack Developer Intern',
          date: 'Jan 2023 - Jun 2023',
          description:' Added new features in the frontend by using Vanilla JavaScript, CSS, & HTML. Developed REST API in C# by using ASP.NET Core and Microsoft SQL Server.Maintained the cloud infrastructure for the application with Google Cloud. (GCP) and GKE• Added new features in the frontend by using Vanilla JavaScript, CSS, & HTML • Developed REST API in C# by using ASP.NET Core and Microsoft SQL Server • Maintained the cloud infrastructure for the application with Google Cloud (GCP) and GKE'
        },
        experienceFour:{
          logo: ByuiLogo,
          name: 'Brigham Young University - Idaho',
          title:'Technical Product Manager',
          date: 'Jan 2022 - Sep 2022',
          description:'Led agile team meetings like stand-up and sprint review for an engineering team of six. Transformed a proof of concept application into a stable application. Redesigned the user interface and improved the user experience of the product. Helped to prioritize the backlog according to the customers needs. Became familiar with the end to end the flow of the application.Resolving technical team problems.Worked with the product owner and key stakeholders to refine business requirements.'
        },

        
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
      
       
},
projects: {
  projectOne: {
    image: StackPro,
    name: 'StackPro+UX',
    description: 'A cool description of the project',
    link: 'https://www.behance.net/gallery/166118801/StackProUX-Web-Ap-UX-Design-Case-Study?tracking_source=project_owner_other_projects'
  },
  projectTwo: {
    image: Vima,
    name: 'Vima',
    description: 'A cool description of the project',
    link: 'https://www.behance.net/gallery/166473389/VIMA-Web-App-UX-DESIGN-CASE-STUDY-Virtual-Machine'
  },
  projectThree: {
    image: Metrics,
    name: 'Manager Metrics',
    description: 'A cool description of the project'
  }
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
     
         <Home
                role={role[currentRole]}
                currentRole={currentRole}
                handleSwitchRole={handleSwitchRole}
              />
         <About  role={role[currentRole]}
                currentRole={currentRole}/>
        
          <Work role={role[currentRole]}
                currentRole={currentRole}/>

     
        

        </>
           
      )}
    </ChakraProvider >
  );
}

export default App;
