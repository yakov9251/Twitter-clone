import React from 'react';   

import "./Homepage.css";
import Logo from "../../assets/svg/twitter.svg";
import HomeImge from "../../assets/images/twitter_home.png";

const Homepage = () => {
  return(
   <div className="homepage">
    <div className="homepage__top"> 
      <div className="homepage__topLeft">
      <img src={HomeImge} alt="twitter_home"/>
      </div>

      <div className="homepage__topRight">
        <img className="logo" src={Logo} alt="logo" />

        <h1 className="homepage__topRight__Title">Happening now</h1>

        <h2 className="homepage__topRight__Subtitle">join Twitter today.</h2>
        
        <div className="homepage__topRight__Buttons">
          <button className="primary__button">Sing up with Google</button>
          <button className="primary__button">Sing up eith Apple</button>
          <button className="secondary__button">
            Sing up with phone or email
            </button>

          <p className="homepage__topRight__policies">
            By signing up, you agree to <a href="/">Terms of Service</a>{" "}
            and <a href="/">Privacy Policy</a>, including{" "}
             <a href="/"> Cookie Use.</a>  
          </p>
        </div>

        <div className="homepage__topRight__Buttons">
          <h3>Aleady have an account?</h3>
          <button className="primary__button">Sing in</button>
        </div>
      </div>
    </div>
      <footer className="footer">
        <ul className="footer__list">
          <li className="footer__list__item">
          <a href="/">About</a>
          </li>
          <li className="footer__list__item">
          <a href="/">Help Center</a>  
          </li>
          <li className="footer__list__item">
          <a href="/">Terms of Service</a>
          </li>
          <li className="footer__list__item">
          <a href="/">Privacy Policy</a>
          </li>
          <li className="footer__list__item">
          <a href="/">Cookie Policy</a>
          </li>
          <li className="footer__list__item">
          <a href="/">Accessibility</a>
          </li>
          <li className="footer__list__item">
          </li>
          <li className="footer__list__item">
          <a href="/">Ads Info</a>
          </li>
          <li className="footer__list__item">
          <a href="/">Terms of Service</a>
          </li>
          <li className="footer__list__item">
          <a href="/">Blog</a>
          </li>
          <a href="/">Status</a>
          <li className="footer__list__item">
          </li>
          <li className="footer__list__item">
          <a href="/">Careers</a>
          </li>
          <li className="footer__list__item">
          <a href="/">Brand Resurces</a>
          </li>
          <li className="footer__list__item">
          <a href="/">Advertising</a>
          </li>
          <li className="footer__list__item">
          <a href="/">Marketing</a>
          </li>
          <li className="footer__list__item">
          <a href="/">Twitter for Business</a>
          </li>
          <li className="footer__list__item">
          <a href="/">Developers</a>
          </li>
          <li className="footer__list__item">
            <a href="/">Directory</a>
          </li>
        </ul>
        <p className="footer__copyright">
          {" "}
         <a href="/">Settings</a>
         <span>&copy; Twitter clone</span>
         </p>
      </footer>
  </div>
  );
};

export default Homepage;