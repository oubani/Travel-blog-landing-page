import React from 'react';
import './app.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Thinks from './components/thinks/Thinks';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Thinks />
    </div>
  );
}

export default App;
