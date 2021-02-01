import React from 'react';
import styles from './Testimonial.module.css';
const Testimonial = () => {
  const { testim, trav, og } = styles;
  return (
    <div className={testim}>
      <h1 className={og}>og</h1>
      <pre>
        tr <br />" We're a bold bunch of riders explores &<br /> hard-code
        thrill seekers that bring it "
      </pre>
      <h1 className={trav}>Trav</h1>
    </div>
  );
};

export default Testimonial;
