import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout(props) {
  return (
    <>
    <Header/>
    <main style={{background:'#F3E3D9;'}}>{props.children}</main>
    <Footer/>
    </>
  )
}
