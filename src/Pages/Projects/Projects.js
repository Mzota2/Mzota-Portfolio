import React from 'react'
import './Projects.css';
import {AiOutlineInfoCircle,AiOutlineShareAlt} from 'react-icons/ai'
import {FcLike} from 'react-icons/fc';
import {FaRegComment} from 'react-icons/fa';
import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
import {TbLiveView} from 'react-icons/tb'
import axios from 'axios';
import { appUrl } from '../../Helpers';
import Comment from '../../Components/Comment/Comment';
import Share from '../../Components/Share/Share';
import useMediaQuery from '@mui/material/useMediaQuery';
function Projects() {
  const[projects, setProjects] = React.useState();
  const [isProjectLiked, setIsProjectLiked] = React.useState(false);
  const [displayCommentBox, setDisplayCommentBox] = React.useState({
    isDisplay:false,
    projectID:''
  });
  const [displayShare, setDisplayShare] = React.useState({
    isDisplay:false,
    projectID:''
  });
  const isMobile = useMediaQuery('(max-width:1100px)');
  console.log(isMobile);

  const [filterIndex, setFilterIndex] = React.useState({
    startIndex:0,
    endIndex:isMobile? 1:2,
    animate:''
  });


  function handleDisplayCommentBox(id){
    setDisplayCommentBox(prev =>{
      return{
        ...prev,
        projectID:id,
        isDisplay:true
      }
    });
  }

  function handleDisplayShare(id){
    setDisplayShare(prev =>{
      return{
        ...prev,
        projectID:id,
        isDisplay:!displayShare.isDisplay
      }
    });
  }

  function handleLike(id){
    try {
      if(projects){
        const foundProject = projects.filter(project => project._id === id);
        if(foundProject){
          let [project] = foundProject;
          let {projectLikes} = project;
         
          const updatedProject = {
            ...project,
            projectLikes:isProjectLiked? projectLikes-1:projectLikes+1
          }
          

          axios.put(`${appUrl}project/${id}`, {...updatedProject})
          .then((res)=>{
            setIsProjectLiked(!isProjectLiked);
            const data = res.data;

          }).
          catch((error)=>{
            console.log(error);
          })
          //update the backend
        }

      }
      
    } catch (error) {
      console.log(error);
      
    }

  }
  
  const getProjects = async()=>{
    try {
      console.log('running')
      const res = await axios.get(`${appUrl}project`);
      const data = await res.data;
      setProjects(prevData =>{
        return [...data]
      });
      
    } catch (error) {
      console.log(error);
    }
    
  }


  function handleNext(){
    if(projects){
      if(filterIndex.endIndex < projects.length){
        setFilterIndex(prev =>{
          return{
            ...prev,
            startIndex:filterIndex.endIndex, // 2
            endIndex:isMobile?filterIndex.endIndex+1:filterIndex.endIndex+2, // 4
            animate:'animate-project-right'
            }
          })
      }

    }
  }

  function handlePrev(){
    if(projects){
      if(filterIndex.startIndex >0){
        setFilterIndex(prev =>{
          return{
            ...prev,
            startIndex:isMobile?filterIndex.startIndex-1:filterIndex.startIndex-2,
            endIndex:isMobile?filterIndex.endIndex-1:filterIndex.endIndex-2,
            animate:'animate-project-left'
          }
        })
      }
    }
    
  }

  React.useEffect(()=>{
    if(isMobile){
      setFilterIndex(prev =>{
        return{
          ...prev,
          startIndex:0,
          endIndex:1
        }
      })
    }
    else{
      setFilterIndex(prev =>{
        return{
          ...prev,
          startIndex:0,
          endIndex:2
        }
      })

    }
    getProjects();
  
  }, [isProjectLiked, displayCommentBox , isMobile]);

 
  return (
    <section id='Projects'>
      
      <div className='section projects'>

        <h2 className='section-title'>MY <br /> PROJECTS.</h2>
        
        <div className="projects-container">

            {
              projects?.slice(filterIndex.startIndex, filterIndex.endIndex).map((project, index)=>{
                const {projectName, projectLikes, projectDescription, projectComments, projectShares, projectImage, projectLiveLink, projectGitHubLink} = project;
                return(
                  <div key={project._id} className={`project ${filterIndex.animate}`}>
                    {
                      displayShare.isDisplay && displayShare.projectID ===project._id?<Share projectLink={projectLiveLink}/>:<></>
                    }
                    {
                      displayCommentBox.isDisplay && displayCommentBox.projectID ===project._id?<Comment projectID ={project._id} projects ={projects} setDisplayCommentBox={setDisplayCommentBox}/>:<></>
                    }
                      
                      <div className='project-left'>

                    <div className="project-profile">
                   
                      <img src={` ${appUrl}uploads/${project?.projectImage.slice(8)}`} className='project-image' alt="project" />
                    </div>

                    <div className="project-buttons">
                      <a role='button' className='project-btn' href={projectGitHubLink} target='_blank'><i className="fab pj-icon fa-github"></i> GitHub</a>
                      <a role='button' className='project-btn project-btn-live' href={projectLiveLink} target='_blank'><TbLiveView className='pj-icon'></TbLiveView> Live </a>
                    </div>
                      </div>

                      <div className="project-right">
                    <div className='project-detail'>
                      <h3 className='project-title'>{projectName}</h3>
                      <hr className='line' />
                      <p className='project-description'>{projectDescription}</p>
                    </div>
                    
                    <div className="project-feedback">
                      <p   onClick={()=>{handleLike(project._id)}}  className='project-fd project-likes'>

                        {
                          isProjectLiked?<i style={{color:'red'}} className="fa-solid fd-icon fa-heart"></i>:<i className="far fd-icon fa-heart"></i>
                        }
                        
                      
                        {projectLikes}</p>
                      <p onClick={()=>handleDisplayCommentBox(project._id)} className='project-fd project-comments'><i className="far fd-icon fa-comment">
                        
                        </i>{projectComments?.length}</p>
                      <p onClick={()=>handleDisplayShare(project._id)} className='project-fd project-shares'><i className="fas fd-icon  fa-share-alt"></i> {projectShares}
                      
                      </p>
                      <a href="#Contact"><i className="far fd-icon fa-question-circle"></i></a>
                      
                      
                    </div>
                      </div>
                   </div>
                )
              })
            }
          

        </div>

        <div className='project-nav-buttons project-nav-buttons-outer'>
          <div className="project-nav-buttons-inner project-nav-buttons">

            <div onClick={handlePrev} role='button' className="nav-btn-container-prev nav-btn-container" aria-roledescription='previous projects'>
            <i  className="fas nav-btn fa-chevron-left"></i>
            </div>

            <div onClick={handleNext}  role='button' className="nav-btn-container-next nav-btn-container" aria-roledescription='next projects'>
            <i className="fas nav-btn fa-chevron-right"></i>
            </div>
            
            
          </div>
          
        </div>

      </div>

    </section>
  )
}

export default Projects