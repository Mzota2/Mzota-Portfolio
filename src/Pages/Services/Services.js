import React from 'react'
import './Services.css';
import {BiLogoFigma} from 'react-icons/bi';
import {SiAppwrite} from 'react-icons/si'

function Services() {
  return (
    <section id='Services'>
      <div className="section services">
        <h2 className='section-title'>SERVICES</h2>

        <div className="services-container">
          <div className="service">
            <div className="service-top">
              <i class="fab sv-icon fa-js-square"></i>
              <h3 className='service-title'>Web Development</h3>
            </div>

            <div className="service-bottom">
              <p className='service-description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime laborum iusto deserunt tempore placeat perferendis perspiciatis maiores. Alias, consequuntur error tempora architecto nam totam ut veritatis obcaecati ullam cupiditate. Repellat.
              </p>
            </div>

          </div>
          <div className="service">
            <div className="service-top">
              <BiLogoFigma className='sv-icon'></BiLogoFigma>
              <h3 className='service-title'>UI | UX Design</h3>
            </div>

            <div className="service-bottom">
              <p className='service-description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime laborum iusto deserunt tempore placeat perferendis perspiciatis maiores. Alias, consequuntur error tempora architecto nam totam ut veritatis obcaecati ullam cupiditate. Repellat.
              </p>
            </div>

          </div>

          <div className="service">
            <div className="service-top">
              <SiAppwrite className='sv-icon'></SiAppwrite>
              <h3 className='service-title'>Content Creation</h3>
            </div>

            <div className="service-bottom">
              <p className='service-description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime laborum iusto deserunt tempore placeat perferendis perspiciatis maiores. Alias, consequuntur error tempora architecto nam totam ut veritatis obcaecati ullam cupiditate. Repellat.
              </p>
            </div>

          </div>
        </div>

        <button className='hire-btn'>Hire me</button>

      </div>
    </section>
  )
}

export default Services