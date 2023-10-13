import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './../styles/Header.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    let {pathname} =useLocation()

   
  return (
    <>
   <header>
            <div class="header-inner">
                <div class="logo">
                    <h1>Portfolio</h1>
                </div>
                <div class="mobile-icon">
               
                <FontAwesomeIcon icon={faBars} />
                </div>
                <nav>
                    <ul>
                        <li><Link to={'/'} className={(pathname=='/') ? 'activeMenu' : " " }>About</Link></li>
                        <li><Link to={'/portfolio'} className={(pathname=='/portfolio') ? 'activeMenu' : " " }>Portfolio</Link></li>
                        <li><Link to={'/contact'} className={(pathname=='/contact') ? 'activeMenu' : " " }>Contact Us</Link></li>
                        <li><Link to={'/resume'} className={(pathname=='/resume') ? 'activeMenu' : " " }>Resume</Link></li>
                      
                        <li><Link to="tel:0425652303"><FontAwesomeIcon icon={faPhone} />0425652303</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
      </>
  )
}
