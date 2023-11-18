import React from 'react'
import './Home.css';
import profileImage from '../../assets/prof.jpg';
import axios from 'axios';
import { appUrl } from '../../Helpers';
import Loader from '../../Components/Loader/Loader';

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
      {<Loader displayClass ={home?'loader--hidden':''} />}
      <div className='home'>
      <div className='home-hero'>

        <div className='home-hero-text'>
          <h2 className='big-text'>{home.hello}</h2>
          <p className='subtext'>
           {home.description}
          </p>

        </div>

        <div className='home-button-container'>
          <a role='button' href='#Contact' className='hire-btn'>Hire me</a>
          <a role='button'href='#Contact' className='hire-btn more-info-btn'>More info</a>
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