/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React, { Suspense, useState, useEffect } from 'react';

import {
  About,
  Footer,
  Header,
  Mentorship,
  Lectures,
  Services,
} from './container';
import { Navbar } from './components';
import Loader from './components/Loader/Loader';
import './App.scss';

const App = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowOverlay(false);
    }, 2500);
  }, []);

  return (
    <div className="app">
      {showOverlay ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Header />
          <About />
          <Services />
          <Lectures />
          <Mentorship />
          <Footer />
        </>
      )}
      {/* <Suspense fallback={<Loader />}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Lectures />
      <Mentorship />
      <Footer />
    </Suspense> */}
    </div>
  );
};

export default App;
