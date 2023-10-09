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
        <p className="mission-statement">SmarterTogether aspires to unite individuals <br></br> in cultivating healthy work habits and enhancing overall well-being</p>
      </section>

      <section className="features">
        <div className="featureContainer">
          <h2 className="feature-title">The Challenge</h2>
          <p className="feature-description">The main challenge most students face when dealing with academic stress revolves around the effectiveness of their study habits as well as overcoming decision paralysis. Many student’s study a great deal, however, the issue lies in the quality of their studies. They often isolate themselves and study for long periods without breaks. Many of the time students procrastinate due to the overwhelming volume of tasks, which often leads to last minute cramming. The sheer amount of stress that results negatively impacts a student’s mental health greatly.
</p>
        </div>

        <div className="featureContainer">
          <h2 className="feature-title">Our Application</h2>
          <p className="feature-description">Our product is a tool for everyone to use, it allows users to select they desired group size they are working in, then select the length of the work and break interval. It keeps track of each person’s tasks and sorts the tasks using an algorithm from highest to lowest priority. Everyone will then work and take breaks according to the program.</p>
        </div>
      </section>

    </div>
  );
}

export default LandingPage;