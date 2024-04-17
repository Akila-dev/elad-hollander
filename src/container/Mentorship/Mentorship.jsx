/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { BsArrowRight } from 'react-icons/bs';
import { FaHandshakeAngle } from 'react-icons/fa6';
import { useStore } from '../../utils/config';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Mentorship.scss';

const MentorshipCard = ({ img, title, description, id }) => (
  <div className="mentorship-card">
    <div className="image-container">
      <img src={urlFor(img)} alt={title} />
    </div>
    <div className="text-container">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Mentorship = () => {
  const translated = useStore((state) => state.translated);

  const [mentorship, setMentorship] = useState([]);

  useEffect(() => {
    const mentorshipQuery = '*[_type == "mentorship"]';

    client.fetch(mentorshipQuery).then((data) => {
      setMentorship(data);
    });
  }, []);

  return (
    <>
      <p className="hide-mobile">Services:</p>
      <h2 className="head-text">
        Business Mentorship <span>& Consulting</span>
      </h2>

      <div className="mentorship-content_container">
        <div className="mentorship-content_left">
          {/* <h2>Business Mentorship & Consulting</h2>
          <i /> */}
          <div>
            <p>{`My mentorship approach is holistic. I do not focus on just one aspect of your business, rather I join you steering the entire business. Together, we will craft an overarching strategy, connecting dots between your business's vision and the dynamic market landscape.

          I take a Founder-Centric Approach. My philosophy revolves around working intimately with founders. Our partnership will catalyze your venture's evolution, propelling it to the next stage.
          `}</p>
            {/* <span>Business Mentor</span>
            <span>Business Consultant</span>
            <span>Educator</span> */}
          </div>
        </div>
        <div className="mentorship-content_right">
          {mentorship.map((service, i) => (
            <div key={i}>
              <MentorshipCard
                img={service.imgurl}
                title={translated ? service.titleHeb : service.titleEn}
                description={
                  translated ? service.descriptionHeb : service.descriptionEn
                }
                id={i + 1}
              />
            </div>
          ))}
        </div>

        <div className="pt-5">
          <motion.a
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cta"
            href="#contact"
          >
            Click to Grow <BsArrowRight />
          </motion.a>
        </div>
      </div>

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
  MotionWrap(Mentorship, 'app__mentorship'),
  'mentorship',
  'app__primarybg'
);
