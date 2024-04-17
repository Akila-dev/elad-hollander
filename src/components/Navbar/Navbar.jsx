/* eslint-disable comma-dangle */
import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

import { useStore } from '../../utils/config';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const translated = useStore((state) => state.translated);
  const toggleTranslated = useStore((state) => state.toggleTranslated);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'services', 'lectures', 'mentorship'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu_container">
        <div className="language_toggle-container">
          <div
            onClick={toggleTranslated}
            className={`language_toggle ${
              translated ? 'justify-end' : 'justify-start'
            }`}
          >
            <motion.span
              layout
              transition={{ type: 'spring', stiffness: 700, damping: 35 }}
            />
          </div>
          <b className="hide-mobile">עברית</b>
        </div>
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <AnimatePresence>
              <motion.div
                initial={{ x: 300 }}
                animate={{ x: [300, 0] }}
                exit={{ x: [0, 300] }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                  {['home', 'about', 'services', 'lectures', 'mentorship'].map(
                    (item) => (
                      <li key={item}>
                        <a href={`#${item}`} onClick={() => setToggle(false)}>
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
