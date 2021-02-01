import React from 'react';
import './app.css';
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
    </div>
  );
}

export default App;
