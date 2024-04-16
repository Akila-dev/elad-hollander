/* eslint-disable no-unused-vars */
import React from 'react';

import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
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
    {/* <Skills />
    <Testimonial /> */}
    <Footer />
  </div>
);

export default App;
