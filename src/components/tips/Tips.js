import React from 'react';
import styles from './Tips.module.css';

const Tips = () => {
  const { tips, tipsInfo, middle, upper } = styles;
  return (
    <div className={tips}>
      <div className={tipsInfo}>
        <h1>Tips for Travling in winter season</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eius
          velit doloremque, eius aspernatur et provident, eos cupiditate dolor.
        </p>
        <p>
          tenetur Earum beatae corporis ipsa nam omnis, quia pariatur odio eum
          velit doloremque,
        </p>

        <a href='/'>read more &#8594; </a>
      </div>
      <div className={middle}>
        <img src='images/trip2.jpg' alt='' srcset='' />{' '}
      </div>
      <div className={upper}>
        <img src='images/trip4.png' alt='winter' srcset='' />{' '}
      </div>
    </div>
  );
};

export default Tips;
