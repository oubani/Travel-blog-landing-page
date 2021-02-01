import React from 'react';
import styles from './Videos.module.css';

const Videos = () => {
  const { twogrid, active, videos } = styles;
  return (
    <div className={videos}>
      <h1>Travel</h1>
      <div className={twogrid}>
        <video controls>
          <source src='/images/trip.mp4' type='video/mp4' />
        </video>
        <ul>
          <li className={active}>Video 01 </li>
          <li>Video 02 </li>
          <li>Video 03 </li>
        </ul>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit
          magni, tempore qui at officia aliquid doloribus soluta necessitatibus
          neque sunt adipisci, laborum consectetur distinctio quibusdam! Quasi
          vel eius dignissimos.
        </p>
      </div>
    </div>
  );
};

export default Videos;
