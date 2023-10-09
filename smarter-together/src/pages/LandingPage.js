import React from 'react';
import './LandingPage.css';
import {Link} from 'react-router-dom';

const LandingPage = () => {
    
  return (
    <div className="landing-page">
      <section className="header">
        <h1 className="app-name">SmarterTogether</h1>
      </section>

    <div className='centered-container'>
      <section className="get-started">
        <Link to="/application"><button className="get-started-button">Get Started</button></Link>
      </section>
    </div>

      <section className="sectionContainer">
        <p className="mission-statement">Our mission is to bring people together for smarter learning.</p>
        <p className="site-description">SmarterTogether is a platform that connects learners, educators, and experts to collaborate and share knowledge.</p>
      </section>

      <section className="features">
        <div className="featureContainer">
          <h2 className="feature-title">Collaborative Learning</h2>
          <p className="feature-description">Learn with others in an interactive and collaborative environment.</p>
        </div>

        <div className="featureContainer">
          <h2 className="feature-title">Expert Guidance</h2>
          <p className="feature-description">Get expert guidance and insights to accelerate your learning journey.</p>
        </div>
      </section>

    </div>
  );
}

export default LandingPage;