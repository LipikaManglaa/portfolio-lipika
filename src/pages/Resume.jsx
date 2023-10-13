import React from 'react'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom/dist'
import './../styles/Resume.css'
import resume from './../assets/resume.pdf'

export default function Resume() {
  return (
    <>
    <Layout>
      <section>
        <div className='container-fluid py-md-5 py-3'>
          <div className='container'>
            <div className='row'>
              
              <div className='col-lg-12 col-12 '>
              <div className="text-center ">
                                <h2 className="fs-35 fw-600 hcolor pt-3">Resume</h2> <span className='resume-down'>Downoad My  <Link to={resume}  target="_blank">RESUME</Link></span>
                            </div>  

               
                </div>
                </div>
                
                <div className='row'>
                  <div className='col-lg-4 col-12'>
                    <div className='resumme-html'>
                       <div className=''><h3>Frontend proficiencies</h3><Link to={'https://github.com/LipikaManglaa/HTML-Project'} target='_blank' >Click Here</Link></div>
                        <ul>
                          <li>HTML / HTML5</li>
                          <li>CSS / CSS3</li>
                          <li>JavaSCript</li>
                          <li>BootStrap</li>
                          <li>Jquery</li>
                          <li>React JS</li>
                          <li>Tailwind CSS</li>
                          <li>Responsive Web Design</li>
                          <li>NextJS</li>
                        </ul>
                    </div>
                  </div>
                  <div className='col-lg-4 col-12'>
                  <div className='resumme-html'>
                  <div ><h3>Backend & DataBase proficiencies</h3><Link to={'https://github.com/LipikaManglaa/react-projects.git'} target='_blank' >Click Here</Link></div>
                        <ul>
                          <li>Node JS</li>
                          <li>Express JS</li>
                          <li>JavaSCript</li>
                          <li>APIs</li>
                          <li>MySql</li>
                          <li>Sequelize</li>
                          <li>Mongo DB</li>
                          <li>Mongoose</li>
                          <li>REST</li>
                        </ul>
                      
                      </div>
                  </div>
                  <div className='col-lg-4 col-12'>
                  <div className='resumme-html'>
                  <div><h3>Software & Tools</h3><Link to={'https://github.com/LipikaManglaa'} target='_blank' >Click Here</Link></div>
                        <ul>
                          <li>Git</li>
                          <li>GItHub</li>
                          <li>GitBash</li>
                          <li>BootStrap</li>
                          <li>Figma</li>
                          <li>Adobe Photoshop</li>
                          <li>Visual Studio Code</li>
                          <li>Sublime Text</li>
                          <li>Heroku</li>
                        </ul>
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
