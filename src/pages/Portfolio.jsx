import React from 'react'
import Layout from '../layout/Layout'
import postfolio2 from './../assets/portfolio-2.jpg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './../styles/Portfolio.css'
import html from './../assets/html.jpg'
import bootstrap from './../assets/bootstrap.jpg'
import tailwind from './../assets/tailwind.jpg'
import javascript from './../assets/javascript.jpg'
import react from './../assets/react.jpg'
import ecommerce from './../assets/ecommerce.png'
import { faLink } from '@fortawesome/free-solid-svg-icons'


export default function Portfolio() {
  return (
    <>
      <Layout>

        <section >
          <div className="container-fluid">
            <div className="container portDtaa">
              <div className="row">
                <div className="col-lg-12 p-3">
                  <div className="text-center ">
                    <h2 className="fs-35 fw-600 hcolor pt-2">Portfolio</h2>
                  </div>
                </div>
              </div>
              <div className='row'>
              <div className='col-md-4 col-12 mb-4'>
                  <div className='borPort'>
                    <div className='port-list'>
                      <img src={ecommerce} />
                    </div>
                    <div className='portfolio-head'>
                      <h4>Ecommerce </h4>
                      <p className='text-center mb-2'>Developed an interactive ecommerce website</p>
                      <p className='text-center'> Express, JWT, React, Cors, Multer,Slugify.</p>
                      <div className='d-flex justify-content-center'>
                      <div class="social-link-items social-port">
                        <Link to={'https://github.com/LipikaManglaa/ecommerce'} target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
                        
                      </div>
                      <div class="social-link-items social-port">
                     
                        <Link to={'https://gruesome-chupacabra-93812-89264ae7b4ee.herokuapp.com/'} target="_blank"><FontAwesomeIcon icon={faLink} /></Link>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 col-12 mb-4'>
                  <div className='borPort'>
                    <div className='port-list'>
                      <img src={html} />
                    </div>
                    <div className='portfolio-head'>
                      <h4>Law Prep Tutorial</h4>
                      <p className='text-center mb-2'>Developed an interactive education website</p>
                      <p className='text-center'> HTML, CSS, Responsive website and JavaScript.</p>
                      <div class="social-link-items social-port">
                        <Link to={'https://github.com/LipikaManglaa/HTML-Project'} target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 col-12 mb-4'>
                  <div className='borPort'>
                    <div className='port-list'>
                      <img src={bootstrap} />
                    </div>
                    <div className='portfolio-head'>
                      <h4>Priti</h4>
                      <p className='text-center mb-2'>Ecommerce website,Converted Figma designs to HTML/CSS for an e-commerce website for handicrafts,</p>
                      <p className='text-center'> HTML, CSS, Responsive website, bootstrap, Figma, JavaScript.</p>
                      <div class="social-link-items social-port">
                        <Link to={'https://github.com/LipikaManglaa/bootstrap-project'} target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-4 col-12 mb-4'>
                  <div className='borPort'>
                    <div className='port-list'>
                      <img src={tailwind} />
                    </div>
                    <div className='portfolio-head'>
                      <h4>Daunku</h4>
                      <p className='text-center mb-2'>Developed the front-end using Tailwind CSS to create a modern and userfriendly online shopping
                        experience</p>
                      <p className='text-center'> HTML, CSS,Tailwind,Javascript.</p>
                      <div class="social-link-items social-port">
                        <Link to={'https://github.com/LipikaManglaa/tailwind-projects'} target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 col-12 mb-4'>
                  <div className='borPort'>
                    <div className='port-list'>
                      <img src={javascript} />
                    </div>
                    <div className='portfolio-head'>
                      <h4>Weather forcast</h4>
                      <p className='text-center mb-2'>Weather forecasting web app using the

                        OpenWeatherMap API to fetch and display real-
                        time weather data for user-specified locations.</p>
                      <p className='text-center'> HTML, CSS,Javascript, APIs</p>
                      <div class="social-link-items social-port">
                        <Link to={'https://github.com/LipikaManglaa/Javascriipt-projects'} target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 col-12 mb-4'>
                  <div className='borPort'>
                    <div className='port-list'>
                      <img src={react} />
                    </div>
                    <div className='portfolio-head'>
                      <h4>Ashapurna</h4>
                      <p className='text-center mb-2'>Developed the front-end using ReactJS.Used ReactJS API for fetching and displaying dynamic data, such
                        as property listings and details.
                      </p>
                      <p className='text-center'> HTML, CSS,react,,bootstrap,Javascript, APIs.</p>
                      <div class="social-link-items social-port">
                        <Link to={'https://github.com/LipikaManglaa/react-projects'} target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>

      </Layout>
    </>
  )
}
