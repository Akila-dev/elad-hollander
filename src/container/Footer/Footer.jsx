/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable comma-dangle */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
// eslint-disable-next-line import/no-extraneous-dependencies
import Fireworks from 'react-canvas-confetti/dist/presets/fireworks';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

import clapping from '../../assets/clapping.wav';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const playAudio = (audio) => {
    const music = new Audio(audio);
    music.playbackRate = 1;
    music.play();
    // music.onended = function (e) {
    //   console.log('audio ended');
    // };
    // console.log('audio playing');
  };

  // const handleSubmit = () => {
  //   setShowFireworks(true);
  //   playAudio(clapping);

  //   setTimeout(() => {
  //     setShowFireworks(false);
  //   }, 6000);
  // };

  const handleSubmit = () => {
    if (
      formData.username !== '' &&
      formData.email !== '' &&
      formData.message !== ''
    ) {
      setLoading(true);

      const contact = {
        _type: 'contact',
        name: formData.username,
        email: formData.email,
        message: formData.message,
      };

      client
        .create(contact)
        .then(() => {
          setLoading(false);
          setIsFormSubmitted(true);

          setShowFireworks(true);
          playAudio(clapping);

          setTimeout(() => {
            setShowFireworks(false);
          }, 6000);
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <h2 className="head-text">Let's help you grow</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">
            hello@elad.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">
            +1 (123) 456-7890
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <motion.button
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            className="p-tex"
            onClick={handleSubmit}
          >
            {!loading ? 'Send Message' : 'Sending...'}
          </motion.button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
      {showFireworks && (
        <div className="overlay" style={{ pointerEvents: 'none' }}>
          <Fireworks autorun={{ speed: 2 }} />
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
