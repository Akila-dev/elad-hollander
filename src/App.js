/* eslint-disable no-unused-vars */
import React from 'react';

import {
  About,
  Footer,
  Header,
  Mentorship,
  Lectures,
  Services,
} from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Services />
    <Lectures />
    {/* <Mentorship /> */}
    <Footer />
  </div>
);

export default App;
