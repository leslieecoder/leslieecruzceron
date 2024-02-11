import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { useSpring, animated, config } from 'react-spring';
import Logo from '../../assets/skills/logo-les.png'

const Loader = () => {
  const spin = useSpring({
    to: { transform: 'rotate(0deg)' },
    from: { transform: 'rotate(360deg)' },
    loop: true,
    config: { duration: 2000 }, // This controls the speed of the spin
  });

  const scale = useSpring({
    to: { transform: 'scale(1.2)' },
    from: { transform: 'scale(1)' },
    config: { ...config.default, duration: 1000 },
    reset: true,
    loop: { reverse: true },
  });

  return (
    <Box
      style={{
        height: '100vh',
        background: '#5B0092 ',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <animated.div style={{ ...spin, ...scale }}>
        {/* Replace the svg with the new logo here */}
        <Image src={Logo} alt="Loading..." style={{ width: '300px', height: '300px' }} />
      </animated.div>
    </Box>
  );
};

export default Loader;
