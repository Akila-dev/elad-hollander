/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        Think <span>Big</span> Start <span>Small</span> <br /> Think{' '}
        <span>fast</span>
      </h2>

      <div className="head-content_container">
        <div className="head-content_left">
          <h2>A Little About Me</h2>
          <i />
          <div>
            <span>Business Mentor</span>
            <span>Business Consultant</span>
            <span>Educator</span>
          </div>
          <div className="pt-5">
            <motion.a className="cta" href="#contact">
              Start Growing <BsArrowRight />
            </motion.a>
          </div>
        </div>
        <div>
          <p className="head-content_right">
            With over a decade of experience in co-founding and leading multiple
            successful ventures, I have honed my expertise in transforming
            ambitious visions into sustainable businesses. This journey has led
            to my role as a business mentor and advisor, collaborating with
            notable founders across diverse industries to guide their businesses
            from inception to flourishing enterprises.
            <br />
            At the core of my career is a deep involvement in business
            development, marketing, and sales. I have consistently been at the
            forefront of transforming innovative ideas into viable, profitable
            enterprises. My approach integrates strategic planning with creative
            marketing and robust relationship-building to drive business growth.
            <br />
            My experience includes significant roles in esteemed global
            accelerators like Techstars and Hype, and most recently, in the
            Israeli MaofTech local accelerators. These positions have honed my
            skills in identifying and nurturing business potential, giving me a
            profound understanding of various market dynamics and the crucial
            role of tailored business strategies.
          </p>
          <div className="py-5">
            <motion.a className="cta" href="#contact">
              Start Growing <BsArrowRight />
            </motion.a>
          </div>
        </div>
      </div>

      {/* <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
