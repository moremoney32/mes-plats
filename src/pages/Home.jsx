import React from 'react'
import Footer from '../components/footer/Footer'
import Main from '../components/main/MainHome'
import Section from '../components/section/Section'
import Sliders from '../components/slider/Sliders'

const Home = () => {
  return (
    <div>
        <Sliders/>
        <Main/>
        <Section/>
        <Footer/>   
    </div>
  )
}

export default  Home
