import React from 'react';
import styles from './Footer.module.css';
import cx from 'classnames';
const Footer = () => {
  const {
    footer,
    threeColumn,
    active,
    pButtom,
    icon,
    subscription,
    pages,
  } = styles;
  return (
    <div className={footer}>
      <div className='container'>
        <div className={threeColumn}>
          <ul>
            <li>
              <h4>Travel Blog</h4>
            </li>
            <li>
              <i className='icon  ion-ios-call'> 0123-456-789 </i>
            </li>
            <li>
              <i className='icon ion-ios-mail'> travel@gmail.com </i>
            </li>
            <li>
              <ul>
                <li>
                  <i className={cx('icon', 'ion-logo-twitter')}></i>
                </li>
                <li>
                  <i className='icon ion-logo-instagram'></i>
                </li>
                <li>
                  <i className='icon ion-logo-facebook'></i>
                </li>
                <li>
                  <i className='icon ion-logo-youtube'></i>
                </li>
              </ul>
            </li>
          </ul>
          <div className={subscription}>
            <h2>Subscribe to our newsletter</h2>
            <p>get the best content straight into your inbox</p>
            <div>
              <input type='text' placeholder='enter your email' />
              <button>
                <i className='ion-ios-arrow-dropright '></i>
              </button>
            </div>
          </div>
          <ul className={pages}>
            <li>
              <a href='/' className={active}>
                Home
              </a>
            </li>
            <li>
              <a href='/'>best places</a>
            </li>
            <li>
              <a href='/'>destinations</a>
            </li>
            <li>
              <a href='/'>travel tipes</a>
            </li>
            <li>
              <a href='/'>travel resources</a>
            </li>
          </ul>
        </div>
        <p className={pButtom}>
          CopyRight 2017 Traveling blog by <a href='/'>Zisan</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
