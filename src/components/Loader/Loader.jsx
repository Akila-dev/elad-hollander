/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './Loader.scss';
import { top, left, center, bottom, arrow1, arrow2 } from '../../assets/logo';

const getWindowsDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const transitionL = {
  delay: 0,
  //   ease: 'easeInOut',
  type: 'spring',
  bounce: 0.1,
  stiffness: 50,
  damping: 20,
  duration: 3,
  //   repeat: Infinity,
  repeatType: 'mirror',
  repeatDelay: 3,
};
const transitionT = {
  delay: 0.25,
  //   ease: 'easeInOut',
  type: 'spring',
  bounce: 0.1,
  stiffness: 50,
  damping: 20,
  duration: 3,
  //   repeat: Infinity,
  repeatType: 'mirror',
  repeatDelay: 3,
};
const transitionC = {
  delay: 0.5,
  //   ease: 'easeInOut',
  type: 'spring',
  bounce: 0.1,
  stiffness: 50,
  damping: 20,
  duration: 3,
  //   repeat: Infinity,
  repeatType: 'mirror',
  repeatDelay: 3,
};
const transitionB = {
  delay: 0.95,
  //   ease: 'easeInOut',
  type: 'spring',
  bounce: 0.1,
  stiffness: 50,
  damping: 20,
  duration: 3,
  //   repeat: Infinity,
  repeatType: 'mirror',
  repeatDelay: 3,
};
const transitionA1 = {
  delay: 0.55,
  //   ease: 'easeInOut',
  type: 'spring',
  bounce: 0.1,
  stiffness: 50,
  damping: 10,
  duration: 3,
  //   repeat: Infinity,
  repeatType: 'mirror',
  repeatDelay: 3,
};

const transitionA2 = {
  delay: 0.6,
  //   ease: 'easeInOut',
  type: 'spring',
  bounce: 0.1,
  stiffness: 50,
  damping: 20,
  duration: 3,
  //   repeat: Infinity,
  repeatType: 'mirror',
  repeatDelay: 3,
};

const Loader = () => {
  const [screenSize, setScreenSize] = useState(getWindowsDimension()); // SCREEN SIZE (width AND height)
  const [logoSize, setLogoSize] = useState(100);

  // UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getWindowsDimension());
      //   if (screenSize.width <= 700) {
      //     setLogoSize(100);
      //   } else {
      //     setLogoSize(150);
      //   }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app__loader">
      <motion.div className="app__loader-logo_container">
        <motion.img
          animate={{
            x: [0, 0],
            width: [0, screenSize.width <= 700 ? 100 : 150],
          }}
          transition={transitionT}
          src={top}
          alt="logo"
        />
        <motion.img
          animate={{
            x: [0, 0],
            width: [0, screenSize.width <= 700 ? 100 : 150],
          }}
          transition={transitionC}
          src={center}
          alt="logo"
        />
        <motion.img
          animate={{
            x: [0, 0],
            width: [0, screenSize.width <= 700 ? 100 : 150],
          }}
          transition={transitionB}
          src={bottom}
          alt="logo"
        />
        <motion.img
          animate={{ opacity: [0, 0, 1], x: [-50, -25, 0] }}
          transition={transitionA1}
          src={arrow1}
          alt="logo"
        />

        <motion.img
          animate={{ opacity: [0, 0, 1], x: [-50, -25, 0] }}
          transition={transitionA2}
          src={arrow2}
          alt="logo"
        />
        <motion.img
          animate={{
            x: [-10, 0],
            height: [0, screenSize.width <= 700 ? 100 : 150],
          }}
          transition={transitionL}
          src={left}
          alt="logo"
        />
      </motion.div>
    </div>
  );
};

export default Loader;
