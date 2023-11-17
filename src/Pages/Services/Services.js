import React from 'react'
import './Services.css';
import {BiLogoFigma} from 'react-icons/bi';
import {SiAppwrite} from 'react-icons/si'
import axios from 'axios';
import { appUrl } from '../../Helpers';

function Services() {
  const [services, setServices] =  React.useState([{
    serviceTitle:'',
    serviceDescription:''
  }]);

  const getServices = async()=>{

    try {
      const res= await axios.get(`${appUrl}service`);
      const data = await res.data;
      setServices(data);
      
    } catch (error) {
      console.log(error);
    }
    
  }

  React.useEffect(()=>{
    getServices();
  }, [])
  return (
    <section id='Services'>
      <div className="section services">
        <h2 className='section-title'>SERVICES</h2>

        {
          services.length > 2?
          <div className="services-container">
          <div className="service">
            <div className="service-top">
              <i className="fab sv-icon fa-js-square"></i>
              <h3 className='service-title'>{services[0].serviceTitle}</h3>
            </div>

            <div className="service-bottom">
              <p className='service-description'>
                {services[0].serviceDescription}
              </p>
            </div>

          </div>

          <div className="service">
            <div className="service-top">
              <BiLogoFigma className='sv-icon'></BiLogoFigma>
              <h3 className='service-title'>{services[1].serviceTitle}</h3>
            </div>

            <div className="service-bottom">
              <p className='service-description'>
                {services[1].serviceDescription}
              </p>
            </div>

          </div>

          <div className="service">
            <div className="service-top">
              <SiAppwrite className='sv-icon'></SiAppwrite>
              <h3 className='service-title'>{services[2].serviceTitle}</h3>
            </div>

            <div className="service-bottom">
              <p className='service-description'>
                {services[2].serviceDescription}

              </p>
            </div>

          </div>

         
        </div>:<></>
        }

        

        <a role='button' href='#Contact' className='hire-btn'>Hire me</a>

      </div>
    </section>
  )
}

export default Services