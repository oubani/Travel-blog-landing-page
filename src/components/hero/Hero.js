import React from 'react';
import styles from './Hero.module.css';
const Hero = () => {
  const { hero, info, infop, infoTitle, imagesSec, smImage, infolink } = styles;
  return (
    <>
      <div className={hero}>
        <div className={info}>
          <p className={infop}>why you should go for a trip </p>
          <h1 className={infoTitle}>Traveling is Easier </h1>
          <h1 className={infoTitle}>then You think</h1>
          <p className={infolink}>read more ----- </p>
        </div>
      </div>
      <div className={imagesSec}>
        <img src={`/images/trip.jpg`} alt='trip' className={smImage} />
        <img src='/images/trip.jpg' alt='trip' className={smImage} />
        <img src='/images/trip.jpg' alt='trip' className={smImage} />
      </div>
    </>
  );
};

export default Hero;
