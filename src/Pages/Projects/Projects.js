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
import Loader from '../../Components/Loader/Loader';
import {message} from 'antd';
function Projects() {
  const[projects, setProjects] = React.useState();
  const [ProjectLiked, setProjectLiked] = React.useState({isLiked:false, projectID:null});
  const [displayCommentBox, setDisplayCommentBox] = React.useState({
    isDisplay:false,
    projectID:''
  });

  const [likeID, setLikeID] = React.useState(null);
  const [displayShare, setDisplayShare] = React.useState({
    isDisplay:false,
    projectID:''
  });

  const [ViewAll, setViewAll] = React.useState({
    message:'View all',
    isViewAll:false
  });

  const isMobile = useMediaQuery('(max-width:1100px)');
  console.log(isMobile);

  const [filterIndex, setFilterIndex] = React.useState({
    startIndex:0,
    endIndex:isMobile? 1:2,
    animate:''
  });



  function handleViewAll(){
    setViewAll(prev =>{
      return{
        ...prev,
        isViewAll:true,
        message:'View less'
        
      }
    });
    setFilterIndex(prev =>{
      return{
        ...prev,
        startIndex:0,
        endIndex:projects?.length
      }
    })
  }

  function handleViewLess(){
    setViewAll(prev =>{
      return{
        ...prev,
        isViewAll:false,
        message:'View All'
        
      }
    });
    setFilterIndex(prev =>{
      return{
        ...prev,
        startIndex:0,
        endIndex:isMobile?1:2
      }
    })
  }
  
  //"homepage": "https://Mzota2.github.io/Mzota-Portfolio/",

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
      setLikeID(id)
     
      if(projects){
        const foundProject = projects.filter(project => project._id === id);
        if(foundProject){
          let [project] = foundProject;
          let {projectLikes} = project;
         
          const updatedProject = {
            ...project,
            projectLikes:ProjectLiked.isLiked && ((id === ProjectLiked.projectID) || (ProjectLiked.projectID ===null))? projectLikes-1:projectLikes+1
          }
          

          axios.put(`${appUrl}project/${id}`, {...updatedProject})
          .then((res)=>{
            setProjectLiked(prev =>{
              return{
                ...prev,
                isLiked:!ProjectLiked.isLiked,
                projectID:id
              }
            });
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
      const msg = message;
      msg.success('👋 Thanks for the comment.')
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

    function setMobile(){
      if((isMobile && ViewAll.isViewAll) || (!isMobile && ViewAll.isViewAll)){
        setFilterIndex(prev =>{
          return{
            ...prev,
            startIndex:0,
            endIndex:projects?.length
          }
        })
      }
      else if((isMobile && !ViewAll.isViewAll)){
        setFilterIndex(prev =>{
          return{
            ...prev,
            startIndex:0,
            endIndex:1
          }
        })
      }
      else if(!isMobile && !ViewAll.isViewAll){
        setFilterIndex(prev =>{
          return{
            ...prev,
            startIndex:0,
            endIndex:2
          }
        })
  
      }
    }
   
    setMobile();
    getProjects();
  
  }, [ProjectLiked, displayCommentBox , isMobile]);


  return (
    <section id='Projects'>
      {<Loader displayClass ={projects?'loader--hidden':''} />}
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
                          ProjectLiked.isLiked && project._id === likeID ?<i style={{color:'red'}} className="fa-solid fd-icon fa-heart"></i>:<i className="far fd-icon fa-heart"></i>
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
          {
            ViewAll.isViewAll?<></>:<div className='project-nav-buttons project-nav-buttons-outer'>
            <div className="project-nav-buttons-inner project-nav-buttons">
  
              <div onClick={handlePrev} role='button' className="nav-btn-container-prev nav-btn-container" aria-roledescription='previous projects'>
              <i  className="fas nav-btn fa-chevron-left"></i>
              </div>
  
              <div onClick={handleNext}  role='button' className="nav-btn-container-next nav-btn-container" aria-roledescription='next projects'>
              <i className="fas nav-btn fa-chevron-right"></i>
              </div>
              
              
            </div>
            
          </div>
          }
        
          <button onClick={ViewAll.isViewAll?handleViewLess:handleViewAll} className='view-all-btn hire-btn'><i class={`fa-solid pj-icon ${ViewAll.isViewAll?'fa-chevron-up':'fa-chevron-down'}`}></i>{ViewAll.message}</button>

      </div>
      {/* <i class="fa-solid fa-chevron-down"></i> */}
    </section>
  )
}

export default Projects