import React from 'react'
import './Home.css';
import profileImage from '../../assets/prof.jpg';

function Home() {
  return (
    <section id='Home'>
      <div className='home'>
      <div className='home-hero'>

        <div className='home-hero-text'>
          <h2 className='big-text'>Full Stack Web Developer</h2>
          <p className='subtext'>
            Developing accessible, quality and secure websites for all.
            We have got it all Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Cras et leo risus. Nullam quis luctus neque
          </p>

        </div>

        <div className='home-button-container'>
          <button className='hire-btn'>Hire me</button>
          <button className='hire-btn more-info-btn'>More info</button>
        </div>


        </div>

        <div className='home-profile'>

          
          <div className='home-box'>
          </div>

          <div className='home-profile-container'>
            {/* <img src={profileImage} className='profile-image' alt="my profile" /> */}
          </div>


        </div>
      </div>
      

    </section>
  )
}

export default Home