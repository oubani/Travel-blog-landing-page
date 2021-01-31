import React from 'react';
import styles from './Thinks.module.css';
import cx from 'classnames';

const Thinks = () => {
  const {
    thinks,
    title,
    box,
    box1,
    box2,
    box3,
    box4,
    bigtit,
    smtit,
    titleBox,
  } = styles;
  return (
    <>
      <div className={thinks}>
        <div className={cx(titleBox)}>
          <h1 className={title}>
            What do you think <br /> of traveling
          </h1>
        </div>
        <div className={cx(box, box1)}>
          <h1 className={bigtit}>es</h1>
          <h1 className={smtit}>
            World's hottest destinations
            <br /> for vegans
          </h1>
        </div>
        <div className={cx(box, box2)}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            consectetur modi rerum, omnis quae dolorem adipisci quisquam. Modi
            eius officia quasi rerum nulla? Quis vel nostrum, alias molestias
            enim architecto! eius officia quasi rerum nulla? Quis vel nostrum,
            alias molestias enim architecto!
          </p>
          <a href='/'>
            {' '}
            Read More <b> &#8594;</b>{' '}
          </a>
        </div>
        <div className={cx(box, box3)}>
          <img src={`/images/trip5.jpg`} alt='trip' />
        </div>
        <div className={cx(box, box4)}>
          <h2> An amazing journey Through the mountains </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            quia sequi repellendus eaque enim ipsam iste tempora modi cupiditate
            laudantium velit aspernatur, id veritatis nihil libero numquam
            molestiae molestias nobis?
          </p>
        </div>
      </div>
    </>
  );
};

export default Thinks;
