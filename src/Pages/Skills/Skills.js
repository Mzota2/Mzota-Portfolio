import React from 'react'
import './Skills.css';
import axios from 'axios';
import {appUrl} from '../../Helpers.js';
import FileDownload from 'js-file-download';

function Skills() {

  const [skills, setSkills] = React.useState([{
    skillTitle:'',
    skillRating:''
  }]);

  const downloadResume = async()=>{
    const res = await axios.get(`${appUrl}download`, {
      responseType:'blob'
    });
    const data = await res.data;
    FileDownload(data, 'Emmanuel Mzota CV 2023.pdf');
    console.log(data);
  }

  const getSkills = async()=>{
    try {

      const res = await axios.get(`${appUrl}skill`)
      const data = await res.data;
      setSkills(data);
      
    } catch (error) {
      console.log(error);
    }
    
  }

  React.useEffect(()=>{
    getSkills();
  }, [])

  //condition styling
  return (
    <section id='Skills'>
      <div className="skills section">
        <h2 className='section-title'>MY <br /> SKILLS.</h2>

        <div className="skill-list-container">

          {
            
            skills?.map((skill)=>{
              const {skillRating, skillTitle} = skill;
        
              return(
                <div key={skill.skillTitle} className="skill">
                  <p className='skill-title'>{skillTitle}</p> 
                  <div className='skill-bar'><div className={`skill-bar skill-bar-rating-${skillRating<55?'low':skillRating<75?'mid':'high'}`} style={{width:`${skillRating}%`}}></div></div>
                  <p className='skill-rating'>{`${skillRating}%`}</p>
              </div>
              )
            })
          }

        </div>

        <button onClick={downloadResume} className='hire-btn'>Download Resume</button>

      </div>
    </section>
  )
}

export default Skills