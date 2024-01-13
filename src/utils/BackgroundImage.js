import React from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';

export default function BackgroundImage() {

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async container => {
        await console.log(container);
      }, []);

      
  return (
    <>
    <Particles
  id="tsparticles"
  init={particlesInit}
  loaded={particlesLoaded}
  options={{
    fullScreen: true,
    background: {
      image: ' linear-gradient(19deg, #AA336A 0%, #B721FF 100%)',
    },
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
        },
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: {
          min: 0.1,
          max: 1,
        },
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      size: {
        value: {
          min: 2,
          max: 4,
        },
      },
      move: {
        enable: true,
        speed: {
          min: 0.1,
          max: 1,
        },
      },
    },
    interactivity: {
      events: {
          onHover: {
              enable: true,
              mode: "bubble",
          },
          onClick: {
              enable: true,
              mode: "repulse",
          },
      },
      modes: {
          grab: {
              distance: 400,
              links: {
                  opacity: 1,
              },
          },
          bubble: {
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0,
          },
          repulse: {
              distance: 400,
              duration: 0.4,
          },
          push: {
              quantity: 4,
          },
          remove: {
              quantity: 2,
          },
      },
  },
  
    move: {
      enable: true,
      speed: {
          min: 0.1,
          max: 1,
      },
    },
    retina_detect: true,
  }}
  style={{
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    zIndex: 0,
  }}
></Particles>
    </>
  )
}
