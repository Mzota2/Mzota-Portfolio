import React from 'react'
import './Projects.css';
import {AiOutlineInfoCircle,AiOutlineShareAlt} from 'react-icons/ai'
import {FcLike} from 'react-icons/fc';
import {FaRegComment} from 'react-icons/fa';
import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
import {TbLiveView} from 'react-icons/tb'
function Projects() {
  return (
    <section id='Projects'>

      <div className='section projects'>

        <h2 className='section-title'>MY <br /> PROJECTS.</h2>
        
        <div className="projects-container">
          <div className="project">
            <div className='project-left'>

              <div className="project-profile">
                <img src={require('../../assets/desktop-design.jpg')} className='project-image' alt="project" />
              </div>

              <div className="project-buttons">
                <a role='button' className='project-btn' href="#my"><i class="fab pj-icon fa-github"></i> GitHub</a>
                <a role='button' className='project-btn project-btn-live' href="#my"><TbLiveView className='pj-icon'></TbLiveView> Live </a>
              </div>
            </div>

            <div className="project-right">
              <div className='project-detail'>
                <h3 className='project-title'>Bank Page</h3>
                <hr className='line' />
                <p className='project-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente iusto perspiciatis, dolorum nulla facilis pariatur perferendis nihil repellendus doloribus numquam delectus iure veniam architecto deserunt repellat ipsam sed. Provident, ipsa.</p>
                
              </div>
              
              <div className="project-feedback">
                <p className='project-fd project-likes'><i class="far fd-icon fa-heart"></i>20</p>
                <p className='project-fd project-comments'><i class="far fd-icon fa-comment"></i>17</p>
                <p className='project-fd project-shares'><i class="fas fd-icon  fa-share-alt"></i> 4</p>

                <i class="far fd-icon fa-question-circle"></i>
                
              </div>
            </div>
          </div>

          <div className="project">
            <div className='project-left'>

              <div className="project-profile">
                <img src={require('../../assets/desktop-design.jpg')} className='project-image' alt="project" />
              </div>

              <div className="project-buttons">
                <a role='button' className='project-btn' href="#my"><i class="fab pj-icon fa-github"></i> GitHub</a>
                <a role='button' className='project-btn project-btn-live' href="#my"><TbLiveView className='pj-icon'></TbLiveView> Live </a>
              </div>
            </div>

            <div className="project-right">
              <div className='project-detail'>
                <h3 className='project-title'>Bank Page</h3>
                <hr className='line' />
                <p className='project-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente iusto perspiciatis, dolorum nulla facilis pariatur perferendis nihil repellendus doloribus numquam delectus iure veniam architecto deserunt repellat ipsam sed. Provident, ipsa.</p>
                
              </div>
              
              <div className="project-feedback">
                <p className='project-fd project-likes'><i class="far fd-icon fa-heart"></i>20</p>
                <p className='project-fd project-comments'><i class="far fd-icon fa-comment"></i>17</p>
                <p className='project-fd project-shares'><i class="fas fd-icon  fa-share-alt"></i> 4</p>

                <i class="far fd-icon fa-question-circle"></i>
                
              </div>
            </div>
          </div>
          
        </div>

        <div className='project-nav-buttons project-nav-buttons-outer'>
          <div className="project-nav-buttons-inner project-nav-buttons">

            <div role='button' className="nav-btn-container-prev nav-btn-container" aria-roledescription='previous projects'>
            <i class="fas nav-btn fa-chevron-left"></i>
            </div>

            <div role='button' className="nav-btn-container-next nav-btn-container" aria-roledescription='next projects'>
            <i class="fas nav-btn fa-chevron-right"></i>
            </div>
            
            
          </div>
          
        </div>

      </div>

    </section>
  )
}

export default Projects