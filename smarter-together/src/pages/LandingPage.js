import React from 'react';
import './LandingPage.css';
import {Link} from 'react-router-dom';

const LandingPage = () => {
    
  return (
    <div className="landing-page">
      <section className="company-name">
        <h1 className="app-name">SmarterTogether</h1>
      </section>

    <div className='centered-container'>
      <section className="get-started">
        <Link to="/application"><button className="get-started-button">Get Started</button></Link>
      </section>
    </div>

      <section className="sectionContainer">
        <p className="mission-statement">Uniting individuals. <br></br> Cultivating healthy work habits. Enhancing overall well-being.</p>
        <p className='site-description'>SmarterTogether is suitable for all ages and versatile for various tasks, with a focus on enhancing study sessions and reducing decision fatigue, primarily designed for college students.</p>
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