import React from 'react';
import { Link } from 'react-router-dom';
import HomeFooter from './common/HomeFooter';
import '../styles/home.css';
import HomeNavbar from "./common/HomeNavbar.jsx";
import {ImageSlideShow} from "./component/ImageSlideShow.jsx";

const Home = () => {
  return ( 
    <div>
    <HomeNavbar/>
      <header className="section__container header__container">
        <div className="header__content">
          <span className="bg__blur"></span>
          <span className="bg__blur header__blur"></span>
          <h4>BEST WAY TO ANALYSE YOUR PERFORMANCE </h4>
          <h1><span> Enhance Your Cricket Experience </span></h1>
          <h2>GAMECHANGER PRO</h2>
          <p>Dive into the world of cricket excellence with our player performance section.</p>
          <button className="btn">
            <Link to="/welcome">Get Started</Link>
          </button> 
        </div>
        <div className="header__image"></div>
      </header>

    <section className="section__container explore__container">
      <div className="explore__header">
        <h2 className="section__header">UNLEASH YOUR CRICKET POTENTIAL</h2>
        <div className="explore__nav">
          <span><i className="ri-arrow-left-line"></i></span>
          <span><i className="ri-arrow-right-line"></i></span>
        </div>
      </div>
      <div className="explore__grid">
        <div className="explore__card">
          <span><i className="ri-heart-pulse-fill"></i></span>
          <h4>Performance Analysis</h4>
          <p>
          Unlocking Excellence, Performance Analysis Redefined with Cutting-Edge Technology.
          </p>
          <a href="#">More <i className="ri-arrow-right-line"></i></a>
        </div>
        <div className="explore__card">
          <span><i className="ri-boxing-fill"></i></span>
          <h4>Shot Recognise</h4>
          <p>
          Transforming Cricket Analysis, Unveiling Player Proficiency through Shot Recognition AI. 
          </p>
          <a href="#">More <i className="ri-arrow-right-line"></i></a>
        </div>
        {/* <div className="explore__card">
          <span><i className="ri-boxing-fill"></i></span>
          <h4>Predict Score</h4>
          <p>
          Comprehensive data & video analysis solutions to capture, analyze, plan, and share every aspect of team & player performance.
          </p>
          <a href="#">More <i className="ri-arrow-right-line"></i></a>
        </div> */}
        <div className="explore__card">
          <span><i className="ri-run-line"></i></span>
          <h4>Match Insights</h4>
          <p>
          In-Depth Match Insights, Illuminating the Path to Victory.
          </p>
          <a href="#">More <i className="ri-arrow-right-line"></i></a>
        </div>
        <div className="explore__card">
          <span><i className="ri-shopping-basket-fill"></i></span>
          <h4>Player Stats</h4>
          <p>
          Player Stats Unveiled, Beyond Numbers, a Story of Triumph and Tenacity.
          </p>
          <a href="#">More <i className="ri-arrow-right-line"></i></a>
        </div>
      </div>
    </section>

    <section className="section__container class__container">
      <div className="class__image">
        <span className="bg__blur"></span>
      </div>
      <div className="class__content">
        <h2 className="section__header">INTUITIVE AND POWERFUL CRICKET ANALYTICS!</h2>
        <p>
        We offer advanced analytics tools for player performance evaluation, 
        match strategies, and system insights.
        </p>
        <button className="btn">Explore More</button>
      </div>
    </section>

    <section className="section__container join__container">
      <h2 className="section__header">Elevate your cricket journey</h2>
      <p className="section__subheader">
      Meet our experts for personalized guidance to excel in cricket.
      </p>
      <div className="join__image">
        <div className="join__grid">
          <div className="join__card">
            <span><i className="ri-user-star-fill"></i></span>
            <div className="join__card__content">
              <h4>Coaches</h4>
              <p>Unlock your potential with our expert Coaches.</p>
            </div>
          </div>
          <div className="join__card">
            <span><i className="ri-vidicon-fill"></i></span>
            <div className="join__card__content">
              <h4>Practice Sessions</h4>
              <p>Elevate your your performance with practice sessions.</p>
            </div>
          </div>
          <div className="join__card">
            <span><i className="ri-building-line"></i></span>
            <div className="join__card__content">
              <h4>Good Management</h4>
              <p>Supportive management, for your fitness success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section__container price__container">
      <h2 className="section__header">Know Your Cricket Performance</h2>
      <div className="">
            <ImageSlideShow />
    </div>
    </section>

    <section className="review">
    <p>
        Cricket's game-changer: How GameChanger Pro revolutionizes player performance analysis with shot recognition!
        </p>

      <div className="section__container review__container">
        
        {/* <div className="highlight__container">
          <video controls autoplay muted loop>
          <source src="../assets/Full Highlights _ Pakistan vs New Zealand _ 5th T20I 2024 _ PCB _ M2E2A.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          </video>
        </div>
        <div className="highlight__container">
          <video controls>
          <source src="../assets/A Dramatic Victory _ 1st T20I Highlights _ Sri Lanka vs Afghanistan.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          </video>
        </div>
        <div className="highlight__container">
          <video controls>
          <source src="../assets/🏏 Top 10 Batting Shots! _ MS Dhoni, Harry Brook, Jonny Bairstow and More..._ England Cricket.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          </video>
        </div> */}
      </div>
    </section>
    {<HomeFooter />}
  </div>
  );
}

export default Home