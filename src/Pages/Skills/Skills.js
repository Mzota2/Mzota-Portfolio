import React from 'react'
import './Skills.css';
import axios from 'axios';
import {appUrl} from '../../Helpers.js';
import FileDownload from 'js-file-download';
import Loader from '../../Components/Loader/Loader.js';
import {handleViewport} from 'react-in-viewport'


const Block =(props)=>{
  const { inViewport, forwardedRef, enterCount } = props;

  const [skills, setSkills] = React.useState([{
    skillTitle:'',
    skillRating:''
  }]);
  
  const [isLoading, setIsLoading] = React.useState(false);

  const getSkills = async()=>{
    try {
      setIsLoading(true)
      const res = await axios.get(`${appUrl}skill`)
      const data = await res.data;
      setSkills(data);
      
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false);
    }
    
  }

  React.useEffect(()=>{
    getSkills();
 
  }, [])

  if(isLoading){
    return <Loader/>
  }
  return(
    <div className="skill-list-container">

        {
          
          skills?.map((skill)=>{
            const {skillRating, skillTitle} = skill;
      
            return(
              <div ref={forwardedRef}  key={skill.skillTitle} className="skill">
                <p className='skill-title'>{skillTitle}</p> 
                <div  className='skill-bar skill-bar-outer'><div className={`skill-bar skill-bar-inner ${inViewport?'skill-animate':''} skill-bar-rating-${skillRating<55?'low':skillRating<75?'mid':'high'}`} style={{width:`${skillRating}%`}}></div></div>
                <p className='skill-rating'>{`${skillRating}%`}</p>
            </div>
            )
          })
        }

      </div>
  )
}

const ViewPortBlock = handleViewport(Block);

function Skills(props) {

  const downloadResume = async()=>{
    const res = await axios.get(`${appUrl}download`, {
      responseType:'blob'
    });
    const data = await res.data;
    FileDownload(data, 'Emmanuel Mzota CV 2023.pdf');
    console.log(data);
  }
  //condition styling

 
  return (
    <section id='Skills'>
      <div className="skills section">
        <h2 className='section-title'>MY <br /> SKILLS.</h2>

          <ViewPortBlock/>

        <button onClick={downloadResume} className='hire-btn'>Download Resume</button>

      </div>
    </section>
  )
}

export default Skills