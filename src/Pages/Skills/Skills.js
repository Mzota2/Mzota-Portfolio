import React from 'react'
import './Skills.css';

function Skills() {

  //condition styling
  return (
    <section id='Skills'>
      <div className="skills section">
        <h2 className='section-title'>MY <br /> SKILLS.</h2>

        <div className="skill-list-container">
          <div className="skill">
            <p className='skill-title'>BootStrap</p> 
            <div className='skill-bar'><div className='skill-bar skill-bar-rating-low' style={{width:'54%'}}></div></div>
            <p className='skill-rating'>54%</p>
          </div>

          <div className="skill">
            <p className='skill-title'>SASS</p> 
            <div className='skill-bar'><div className='skill-bar skill-bar-rating-mid' style={{width:'67%'}}></div></div>
            <p className='skill-rating'>67%</p>
          </div>

          <div className="skill">
            <p className='skill-title'>StrapiCMS</p> 
            <div className='skill-bar'><div className='skill-bar skill-bar-rating-mid' style={{width:'70%'}}></div></div>
            <p className='skill-rating'>70%</p>
          </div>

          <div className="skill">
            <p className='skill-title'>MongoDB</p> 
            <div className='skill-bar'><div className='skill-bar skill-bar-rating-mid' style={{width:'71%'}}></div></div>
            <p className='skill-rating'>71%</p>
          </div>

          <div className="skill">
            <p className='skill-title'>Figma</p> 
            <div className='skill-bar'><div className='skill-bar skill-bar-rating-high' style={{width:'75%'}}></div></div>
            <p className='skill-rating'>75%</p>
          </div>

          <div className="skill">
            <p className='skill-title'>JavaScript</p> 
            <div className='skill-bar'><div className='skill-bar skill-bar-rating-high' style={{width:'75%'}}></div></div>
            <p className='skill-rating'>75%</p>
          </div>

          <div className="skill">
            <p className='skill-title'>ReactJS</p> 
            <div className='skill-bar'><div className='skill-bar skill-bar-rating-high' style={{width:'80%'}}></div></div>
            <p className='skill-rating'>80%</p>
          </div>

          <div className="skill">
            <p className='skill-title'>CSS</p> 
            <div className='skill-bar'><div className='skill-bar skill-bar-rating-high' style={{width:'92%'}}></div></div>
            <p className='skill-rating'>92%</p>
          </div>

          <div className="skill">
            <p className='skill-title'>HTML</p> 
            <div className='skill-bar'><div className='skill-bar skill-bar-rating-high' style={{width:'95%'}}></div></div>
            <p className='skill-rating'>95%</p>
          </div>

        </div>

        <button className='hire-btn'>Download Resume</button>

      </div>
    </section>
  )
}

export default Skills