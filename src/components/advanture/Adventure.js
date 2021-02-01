import React from 'react';
import styles from './Adventure.module.css';
import cx from 'classnames';

const Adventure = () => {
  const { threeGrid, twogrid, e, header, reversed, b, info } = styles;
  return (
    <>
      <div className={threeGrid}>
        <h1 className={e}> e </h1>
        <h1 className={header}>Adventure & Action in travel</h1>
        <h1 className={b}>Bo</h1>
      </div>
      <div className={twogrid}>
        <div>
          <img src='/images/trip4.png' alt='trip' />
        </div>
        <div className={info}>
          <h1>Esay ways to make travel faster</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            quo natus iusto, excepturi ad laboriosam eligendi similique
          </p>
          <a href='/'>Read More </a>
        </div>
      </div>
      <div className={cx(twogrid, reversed)}>
        <div>
          <img src='/images/trip4.png' alt='trip' />
        </div>
        <div className={info}>
          <h1>Esay ways to make travel faster</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            quo natus iusto, excepturi ad laboriosam eligendi similique
          </p>
          <a href='/'>Read More </a>
        </div>
      </div>
    </>
  );
};

export default Adventure;
