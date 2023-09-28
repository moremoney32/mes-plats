import React from 'react'
import Footer from '../components/footer/Footer'
import Main from '../components/main/MainHome'
import Section from '../components/section/Section'
import Sliders from '../components/slider/Sliders'
import  "../index.css"

const Home = () => {
  return (
    <>
    <div class="loadeerr">
    <span class="lettre">C</span>
    <span class="lettre">A</span>
    <span class="lettre">S</span>
    <span class="lettre">A</span>
    <span class="lettre">D</span>
    <span class="lettre">E</span>
    <span class="lettre">L</span>
    <span class="lettre">F</span>
    <span class="lettre">R</span>
    <span class="lettre">A</span>
    <span class="lettre">N</span>
    <span class="lettre">C</span>
    <span class="lettre">O</span>
  </div>
    <div>
        <Sliders/>
        <Main/>
        <Section/>
        <Footer/>   
    </div>
    </>
  )
}

export default Home
