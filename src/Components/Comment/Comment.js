import React, { useRef } from 'react'
import './Comment.css';
import axios from 'axios';
import { appUrl } from '../../Helpers';
import { message } from 'antd';

function Comment({projectID, projects, displayCommentBox, setDisplayCommentBox}) {

    let [comment, setComment] = React.useState('');

    const commentBox = useRef(null);

    function onChangeComment(e){
        setComment(prevComment =>{
            comment = e.target.value;
            return comment;
        })
    }

    function handleComment(e){
        e.preventDefault();
        try {
          if(projects && comment){
            const foundProject = projects.filter((project)=> project._id === projectID);
            let [project] = foundProject;
            const {projectComments} = project;
    
            const updatedProject = {
              ...project,
              projectComments:[...projectComments, comment]
            }
    
                axios.put(`${appUrl}project/${projectID}`, {...updatedProject})
                .then(res =>{
                setDisplayCommentBox(prev =>{
                  return{
                    ...prev,
                    isDisplay:false
                  }
                  
                });
                const data = res.data;
                const msg = message;
                msg.success('👋 Thanks for the comment.')

                })
                .catch(error =>{
                message.error('Try again later! Something went wrong')
                })
          }
    
          
        } catch (error) {
          console.log(error);
        }
    
      }

      function closeComment(e){
        if(!commentBox.current?.contains(e.target) && !displayCommentBox){
          setDisplayCommentBox(false);
        }
      }

      React.useEffect(()=>{

        document.addEventListener('mousedown', closeComment);

        return ()=> document.removeEventListener('mousedown', closeComment);

      }, [])
  return (

    <div onMouseLeave={()=>{
      setDisplayCommentBox(prev =>{
        return{
          ...prev,
          isDisplay:false
        }
      });
    }} className="comment">
        
        <div ref={commentBox} className='comment-container' >
            <hr className='line' />
            <form action="">
                <label htmlFor="comment">Comment
                    <textarea onChange={onChangeComment} className='input-field message-input-field' name="comment" id="" cols="30" rows="5"></textarea>
                </label>

                <button onClick={handleComment} className='send-btn comment-send-btn'><i className="far comment-send-icon fa-paper-plane"></i></button>
                
            </form>
        </div>
    </div>
    
  )
}

export default Comment