import React from 'react';
import './app.css';
import Adventure from './components/advanture/Adventure';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Thinks from './components/thinks/Thinks';
import Tips from './components/tips/Tips';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Thinks />
      <Tips />
      <Adventure />
    </div>
  );
}

export default App;
