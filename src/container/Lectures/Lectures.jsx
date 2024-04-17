/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { BsArrowRight } from 'react-icons/bs';
import { FaHandshakeAngle } from 'react-icons/fa6';
import { BiSolidQuoteRight, BiSolidQuoteLeft } from 'react-icons/bi';

import { useStore } from '../../utils/config';

import images from '../../constants/images';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Lectures.scss';

const LectureCard = ({ img, title, excerpt, onClick }) => (
  <motion.div
    whileInView={{ opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 0.5, type: 'tween' }}
    className="lecture-card"
    onClick={onClick}
  >
    <div className="image-container">
      <img src={urlFor(img)} alt={title} />
    </div>
    <h4>{title}</h4>
    <p>{excerpt.slice(0, 200)}...</p>
  </motion.div>
);

const LecturePopup = ({ img, title, content, close }) => {
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, []);

  return (
    <motion.div className="lecture-popup-container">
      <div ref={ref} className="lecture-popup-content">
        <div className="image-container">
          <img src={urlFor(img)} alt={title} />
        </div>
        <div className="text-container">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Lectures = () => {
  const translated = useStore((state) => state.translated);

  const [lectures, setLectures] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupLecture, setPopupLecture] = useState(lectures[0]);

  const handleShowPopup = (data) => {
    setPopupLecture(data);
    setShowPopup(true);
  };

  useEffect(() => {
    const lecturesQuery = '*[_type == "lectures"]';

    client.fetch(lecturesQuery).then((data) => {
      setLectures(data);
    });
  }, []);

  return (
    <>
      <p style={{ color: 'var(--secondary-color)' }}>Services:</p>
      <h2 className="head-text">Lectures & Workshops</h2>
      <p className="p">
        My lectures are varied. I cover ‘game theory’ business implementation,
        wisdom of the crowd and the collaborative economy real world use cases,
        entrepreneurship- hands on approach that any business can implement and
        the latest is AI vs Automation processes, how AI Agents Are
        Revolutionizing Resource Management.
      </p>

      <div className="lecture-content_container">
        {lectures.map((lecture, i) => (
          <div key={i}>
            <LectureCard
              img={lecture.imgurl}
              title={translated ? lecture.titleHeb : lecture.titleEn}
              excerpt={translated ? lecture.excerptHeb : lecture.excerptEn}
              id={i + 1}
              onClick={() => handleShowPopup(lecture)}
            />
          </div>
        ))}
      </div>

      {/* QUOTE */}
      <div className="quote-container">
        <p className="quote-text">
          <BiSolidQuoteRight className="quote-icon" />
          <i>
            If you want small changes, work on your behavior; if you want
            quantum-leap changes, work on your paradigms.
          </i>
          <BiSolidQuoteLeft className="quote-icon" />
        </p>
        <div>
          <div className="quote-image-container">
            <img src={images.quoteProfile} alt="Elad" />
          </div>
          <div className="quoter">
            <h3>Elad Hollander</h3>
            <i>Business Consultant</i>
          </div>
        </div>
      </div>

      {showPopup && (
        <LecturePopup
          // eslint-disable-next-line react/no-unknown-property
          img={popupLecture.imgurl}
          title={translated ? popupLecture.titleHeb : popupLecture.titleEn}
          content={
            translated ? popupLecture.contentHeb : popupLecture.contentEn
          }
          close={() => setShowPopup(false)}
        />
      )}

      {/* <div className="app__mentorship-container">
        <motion.div className="app__mentorship-list">
          {mentorship.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__mentorship-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__mentorship-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__mentorship-exp-item"
              key={experience.year}
            >
              <div className="app__mentorship-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__mentorship-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__mentorship-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="mentorship-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Lectures, 'app__mentorship'),
  'lectures',
  'app__whitebg'
);
