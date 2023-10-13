import React from 'react'
import './../styles/Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <>
      <section id="footer">
            <div class="footer-inner">
                <div class="footer-about">
                    <h2>About US</h2>
                    <div class="footer-about-content">
                        <p>Hi, My name is Lipika I've done my masters in computer science back in India after that I moved to Australia for better life .Then i was bust for settling life .After that, I was busy in home management And  in May 23 I've started Mern tack from Monash University coding bootcamp</p>
                    </div>
                </div>
                <div class="footer-link">
                    <h2>Quick Links</h2>
                    <ul>
                    <li><Link to={'/'}>About</Link></li>
                        <li><Link to={'/portfolio'}>Portfolio</Link></li>
                        <li><Link to={'/contact'}>Contact Us</Link></li>
                        <li><Link to={'/resume'}>Resume</Link></li>
                    </ul>
                </div>
                <div class="contact-link" id="contact-us">
                    <h2>Contact Us</h2>
                    <div class="contact-icon">
                        <i class="fas fa-phone"></i>
                        <span>0425652303</span>
                    </div>
                    <div class="contact-icon">
                        <i class="fas fa-envelope-open"></i>
                        <span>lipika.mangle.web@gmail.com</span>
                    </div>
                    <div class="contact-icon">
                        <i class="fas fa-map-marker-alt"></i>
                        <span> Melbourne,Vic 3000.</span>
                    </div>
                </div>
                <div class="social-link">
                    <h2>Social Media</h2>
                    <div class="social-link-icon">
                        <div class="social-link-items">
                        <Link to={'https://www.linkedin.com/in/lipikawebdeveloper/'} target='_blank'> <FontAwesomeIcon icon={faLinkedinIn} className='icon'/>
                     </Link>
                        </div>
                        <div class="social-link-items">
                           <Link to={'https://github.com/LipikaManglaa'} target='_blank'
                           ><FontAwesomeIcon icon={faGithub}/></Link>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
