import React from 'react'
import './Contact.css';

function Contact() {
  return (
    <section id='Contact'>
      <div className="section contact">
        <h2 className='section-title'>GET <br /> IN TOUCH</h2>
        
        <div className="contact-container">

          <form action="" className="contact-form">

            <div className='name-field field'>
              <label htmlFor="name">Your Name</label>
              <input className='name-input input-field' type="text" name='name' id='name' />
            </div>

            <div className='email-field field'>
              <label htmlFor="email">Email Address</label>
              <input className='email-input input-field' type="email" name='email' id='email' />
            </div>

            <div className='phone-field field'>
              <label htmlFor="phone">Phone</label>
              <input className='phone-input input-field' type="tel" name='phone' id='phone' />
            </div>

            <div className='message-field field'>
              <div className='message-container'>
                <label htmlFor="message">Message</label>
                <textarea name="message"  id="message" className='message-input-field input-field' cols="1" rows="5"></textarea>
              </div>
             
              <button className='send-btn'><i class="far send-icon fa-paper-plane"></i></button>
            </div>

          </form>

          <div className="contact-info">
            <div className='background-overlay'></div>
            <div className="contac-info-container">
              
              <div className="contact-info-top-container">
                <h3 className='contact-title'>Contact Information</h3>
                
                <div className="contact-details-container">
                  <div className="contact-detail">
                    <i class="fas ct-icon fa-map-marker-alt"></i>
                    <p className="contact-location">Blantyre, Chilomoni Nthukwa</p>
                  </div>

                  <div className="contact-detail">
                    <i class="fas ct-icon fa-envelope"></i>
                    <p className="contact-location">emzota@gmail.com</p>
                  </div>
                  <div className="contact-detail">
                    <i class="fas ct-icon fa-phone-square-alt"></i>
                    <p className="contact-location">(+265) 981819389</p>
                  </div>

                </div>
              </div>
             

              <div className="contact-social">
                <i class="fab ct-icon fa-linkedin"></i>
                <i class="fab ct-icon fa-facebook-square"></i>
                <i class="fab ct-icon fa-instagram-square"></i>
                <i class="fab ct-icon fa-twitter-square"></i>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact