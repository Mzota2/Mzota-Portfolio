import React from 'react'
import './Comment.css';
import axios from 'axios';
import { appUrl } from '../../Helpers';

function Comment({projectID, projects, displayCommentBox, setDisplayCommentBox}) {

    

    let [comment, setComment] = React.useState('');

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
                console.log(comment);
                const data = res.data;
                console.log(data);

                })
                .catch(error =>{
                console.log(error);
                })
          }
    
          
        } catch (error) {
          console.log(error);
        }
    
      }

      React.useState(()=>{

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
        
        <div className='comment-container' >
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