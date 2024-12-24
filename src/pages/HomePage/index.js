import React, { useState } from 'react';
import style from './HomePage.module.css';
import homepageLogo from '../../assets/logo.png';
import contactBanner from '../../assets/contactBanner.png';
import { NavLink } from 'react-router-dom';
import Modal from '../../Modal';
import { Button } from '../../UI/Button';
import aboutBanner from '../../assets/aboutSection/aboutBanner.png';
import starIcon from '../../assets/aboutSection/starIcon.svg';
import arrowIcon from '../../assets/aboutSection/arrowIcon.svg';
import lineIcon from '../../assets/aboutSection/lineIcon.svg';
import ringsIcon from '../../assets/aboutSection/ringsIcon.svg';
import phoneImg from '../../assets/phoneImg.png'
import Cookie from '../../components/Cookie'
 
function Home() {
  const [isModalActive, setModalActive] = useState(false);

  return (
    <div className={style.homepageWrapper}>
      <section className={style.contactContainer}>
        <div className={style.contactTopMenu}>
          <NavLink to="/">
            <img src={homepageLogo} alt="Logo" className={style.logoImage}/>
          </NavLink>
          <Button
            onClick={() => setModalActive(true)}
            className={style.contactBtn}
            text="Contact sales"
          />
        </div>
        <div className={style.contactBottomMenu}>
          <div className={style.contactInfo}>
            <h1>
              Everyone <br/> is an Influencer
            </h1>
            <p>
              Budss is a payments as a service and WOM engine dedicated <br/>
              to acquisition and retention of customers to your business.
            </p>
            <Button
              onClick={() => setModalActive(true)}
              className={style.contactBtn}
              text="Contact sales"
            />
          </div>
          <div className={style.bannerBackground}>
            <img src={contactBanner} alt="Contact Banner" className={style.contactBanner}/>
          </div>
        </div>
      </section>

      <section className={style.aboutSection}>
        <h2>About Budss</h2>
        <div className={style.aboutWrapper}>
          <div className={style.aboutContent}>
            <p>Payment as a service, powered seamlessly by our <span>network of shoppers</span></p>
            <div className={style.aboutBanner}>
              <img src={aboutBanner} alt="About Banner"/>
            </div>
          </div>
          <div className={style.featuresGrid}>
            <div className={style.featureItem}>
              <img src={starIcon} alt="Contactless"/>
              <h3>Contactless</h3>
              <p>Budss uses near field communication (NFC) for making contactless payments.</p>
            </div>
            <div className={style.featureItem}>
              <img src={arrowIcon} alt="Increased Buying Power"/>
              <h3>Increased Buying Power</h3>
              <p>Returning customers spend up to 3X more.</p>
            </div>
            <div className={style.featureItem}>
              <img src={lineIcon} alt="Analytics & Insights"/>
              <h3>Analytics & Insights</h3>
              <p>Gain a holistic view into your customers’ buying behavior & purchasing patterns.</p>
            </div>
            <div className={style.featureItem}>
              <img src={ringsIcon} alt="Fraud Protection"/>
              <h3>Fraud Protection</h3>
              <p>
                Budss handles all payments with a fraud prevention algorithm to flag high-risk purchases & a user-set PIN code to keep payment info secure.
              </p>
            </div>
          </div>          
        </div>
      </section>

      <section className={style.phoneSection}>
        <div className={style.phoneContainer}>
            <div className={`${style.textAnimation} ${style.text1}`}>
              <p>How Budss Works<span>How Budss Works</span></p>
            </div>
            <div className={`${style.textAnimation} ${style.text2}`}>
              <p><span>How Budss Works</span>How Budss Works</p>
            </div>
            <div className={`${style.textAnimation} ${style.text3}`}>
              <p>How Budss Works<span>How Budss Works</span></p>
            </div>
            <img className={style.phoneImg} src={phoneImg} alt="PhoneImg" />
        </div>
      </section>

      <Cookie/>
      <Modal active={isModalActive} setActive={setModalActive}/>
    </div>
  );
}

export default Home;