import React from 'react'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'
import aboutImg from './../assets/profile.jpg'
import './../styles/About.css'

export default function About() {
   
  return (
   <>
  <Layout>
   <section id="about">
            <h3>About Me</h3>
            <div class="about-inner">

                <figure>
                    <Link >  <img src={aboutImg} alt="About" title="About"  /></Link>
                </figure>
                <div class="about-content pt-4">
                    <h2>Full Stack Web Developer</h2>
                    <p>Hi, My name is Lipika I've done my masters in computer science back in India after that I moved to Australia for better life .Then i was bust for settling life .After that, I was busy in home management And  in May 23 I've started Mern tack from Monash University coding bootcamp</p>
                    
                </div>
            </div>
        </section>

 
        </Layout>
   </>
  )
}
