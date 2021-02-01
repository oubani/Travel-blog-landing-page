import React from 'react';
import './app.css';
import Adventure from './components/advanture/Adventure';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Thinks from './components/thinks/Thinks';
import Tips from './components/tips/Tips';
import Videos from './components/videosSection/Videos';
import Testimonial from './components/testimonial/Testimonial';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Thinks />
      <Tips />
      <Adventure />
      <Videos />
      <Testimonial />
    </div>
  );
}

export default App;
