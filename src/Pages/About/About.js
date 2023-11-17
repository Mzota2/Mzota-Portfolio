import React from 'react'
import './About.css';
import axios from 'axios';
import { appUrl } from '../../Helpers';

function About() {
  const [about, setAbout] = React.useState({
    description:'',
    resume:'',

  });
  const getAbout =  async()=>{
    try {
      await axios.get(`${appUrl}about`)
      .then(async(res)=>{
        const data = await res.data;
        setAbout(data[0]);
      }).catch(error =>{
        console.log(error);
      })
      
    } catch (error) {
      console.log(error);
    }
    
  }

  React.useEffect(()=>{
    getAbout();
  }, [])


  return (
    <section id='About'>

      <div className="about section">

        <div className="about-container">
          <h2 className='section-title'>ABOUT ME</h2>
          <p className='about-description'>{about.description}</p>

          <a role='button' href='#Contact' className='hire-btn'>Hire me</a>
        </div>
        
        
      </div>

    </section>
  )
}

export default About