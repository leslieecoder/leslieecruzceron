import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';

export default function BackgroundImageWd() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
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
                  
                    particles: {
                        number: {
                            value: 100,
                            density: {
                                enable: true,
                            },
                        },
                        color: {
                            value: '#5B0092',
                        },
                        shape: {
                            type: 'circle',
                        },
                        opacity: {
                            value: {
                                min: 0.1,
                                max: 0.5,
                            },
                            animation: {
                                enable: true,
                                speed: 9,
                                sync: false,
                            },
                        },
                        size: {
                            value: {
                                min: 1,
                                max: 10,
                            },
                        },
                        animation: {
                            enable: true,
                            speed: 20,
                            sync: false,
                        },
                        links: {
                            enable: true,
                            distance: 150,
                            color: '#ffffff',
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 2,
                        },
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: 'grab',
                                parallax: {
                                    enable: true,
                                    smooth: 10,
                                    force: 60,
                                },
                            },
                            onClick: {
                                enable: true,
                                mode: 'push',
                            },
                        },
                        modes: {
                            grab: {
                                distance: 300,
                                links: {
                                    opacity: 1,
                                },
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 0.8,
                            },
                            repulse: {
                                distance: 200,
                            },
                            push: {
                                quantity: 4,
                            },
                            remove: {
                                quantity: 2,
                            },
                        },
                    },
                    background: {
                        color: '#171923',
                    },
                }}
                style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    zIndex: 0,
                }}
            ></Particles>
        </>
    );
}
