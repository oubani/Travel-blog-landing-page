import React from 'react';
import styles from './Images.module.css';
const Images = () => {
  const { twoSection, title, info, sigleImg } = styles;
  return (
    <div className={twoSection}>
      <div className={info}>
        <img src='/images/trip2.jpg' alt='image' />
        <h1 className={title}> guide to dricen in hill situation </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,
          error totam quas eius aut ullam sunt consectetur eum dolorem hic
          itaque earum quaerat corrupti minus similique fugit illo, laboriosam
          iure?
        </p>
        <a href='/'>read more &#8594; </a>
      </div>
      <div className={sigleImg}>
        <img src='/images/trip4.png' alt='image' />
      </div>
    </div>
  );
};

export default Images;
