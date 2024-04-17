/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Services.scss';

const Services = () => {
  const [services, setServices] = useState([]);
  const [filterService, setFilterService] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "services"]';

    client.fetch(query).then((data) => {
      setServices(data);
      setFilterService(data);
    });
  }, []);

  const handleServiceFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterService(services);
      } else {
        setFilterService(
          services.filter((service) => service.tags.includes(item))
        );
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My <span>Services</span>
      </h2>

      <p
        style={{ maxWidth: '800px', paddingTop: '20px', textAlign: 'justify' }}
      >
        I specialize in propelling businesses forward, transforming challenges
        into opportunities for rapid growth.
      </p>

      <div className="app__service-filter">
        {['Lecture & Workshop', 'Business Mentorship & Consulting'].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleServiceFilter(item)}
              className={`app__service-filter-item app__flex p-text ${
                activeFilter === item ? 'item-active' : ''
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      {/* <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__service-portfolio"
      >
        {filterService.map((service, index) => (
          <div className="app__service-item app__flex" key={index}>
            <div className="app__service-img app__flex">
              <img src={urlFor(service.imgUrl)} alt={service.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className="app__service-hover app__flex"
              >
                <a href={service.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={service.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__service-content app__flex">
              <h4 className="bold-text">{service.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {service.description}
              </p>

              <div className="app__service-tag app__flex">
                <p className="p-text">{service.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Services, 'app__services'),
  'services',
  // eslint-disable-next-line comma-dangle
  'app__primarybg'
);
