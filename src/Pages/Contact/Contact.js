import React from 'react'
import './Contact.css';
import axios from 'axios';
import { appUrl } from '../../Helpers';
import Message from '../../Components/Message/Message';
import Loader from '../../Components/Loader/Loader';

function Contact() {
  const [contactInfo, setContactInfo] = React.useState({
    contactLocation:'',
    contactEmail:'',
    contactPhone:''

  })


  const getContactInfo = async()=>{
    try {
      const res = await axios.get(`${appUrl}contactInfo`);
      const data = await res.data;
      setContactInfo(data[0]);

    } catch (error) {
      console.log(error);
    }
    
  }

  React.useEffect(()=>{
    getContactInfo();
  },[])


  return (
    <section id='Contact'>
      {<Loader displayClass ={contactInfo?'loader--hidden':''} />}
      <div className="section contact">
        <h2 className='section-title'>GET <br /> IN TOUCH</h2>
        
        <div className="contact-container">

         {/* here */}
         <Message/>

          <div className="contact-info">
            <div className='background-overlay'></div>
            <div className="contac-info-container">
              
              <div className="contact-info-top-container">
                <h3 className='contact-title'>Contact Information</h3>
                
                <div className="contact-details-container">
                  <div className="contact-detail">
                    <i className="fas ct-icon fa-map-marker-alt"></i>
                    <p className="contact-location">{contactInfo?.contactLocation}</p>
                  </div>

                  <div className="contact-detail">
                    <i className="fas ct-icon fa-envelope"></i>
                    <p className="contact-location">{contactInfo?.contactEmail}</p>
                  </div>
                  <div className="contact-detail">
                    <i className="fas ct-icon fa-phone-square-alt"></i>
                    <p className="contact-location">{`(+265) ${contactInfo?.contactPhone}`}</p>
                  </div>

                </div>
              </div>
             

              <div className="contact-social">
                <i className="fab ct-icon fa-linkedin"></i>
                <i className="fab ct-icon fa-facebook-square"></i>
                <i className="fab ct-icon fa-instagram-square"></i>
                <i className="fab ct-icon fa-twitter-square"></i>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact