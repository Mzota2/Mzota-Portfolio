import React from 'react'
import './Home.css';
import profileImage from '../../assets/prof.jpg';
import axios from 'axios';
import { appUrl } from '../../Helpers';

function Home() {
  const [home, setHome] = React.useState({
    hello:'',
    description:'',
    profileImage:'',

  });

  const profStyle = {
    backgroundImage:`${appUrl}uploads/${home?.profileImage.slice(8)}`
  }


  
  const getHome = async()=>{
    try {
        await axios.get(`${appUrl}home`).then(async(res)=>{
          const data = await res.data;
          console.log(data);
          setHome(data[0]);

        }).catch(error =>{
          console.log(error);
        })
      
    } catch (error) {
      console.log(error);
    }
    
  }

  React.useEffect(()=>{
    getHome();
  }, [])

  return (
    <section id='Home'>
      <div className='home'>
      <div className='home-hero'>

        <div className='home-hero-text'>
          <h2 className='big-text'>{home.hello}</h2>
          <p className='subtext'>
           {home.description}
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
            <img src={`${appUrl}uploads/${home?.profileImage.slice(8)}`} className='profile-image' alt="my profile" />
          </div>


        </div>
      </div>
      

    </section>
  )
}

export default Home