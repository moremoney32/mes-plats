import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-title'>
            <i class="ri-restaurant-2-line"></i>
            <h2>Chef Food</h2>
        </div>
        <div id='footer-main'>
            <div className='footer-main-bloc'>
                <span className='footer-main-bloc1'>Numero-fix:<span className='footer-main-span'>00338729876189</span></span>
                <span className='footer-main-bloc1'>Mobile:<span className='footer-main-span'>693332788</span></span>
                <span className='footer-main-bloc1'>Email:<span className='footer-main-span'>francklionelngongangtchouta@gmail.com</span></span>
            </div>
            <div className='footer-main-bloc2'>
                <i class="ri-facebook-circle-line"></i>
                <i class="ri-instagram-line"></i>
                <i class="ri-messenger-line"></i>   
            </div>
            <div className='footer-main-bloc3'>
                <span>
                    reiciendis magni repellat voluptatem nostrum! Ipsa tempora maxime amet. Voluptatibus non nihil voluptatem.   
                </span>   
            </div>
           
        </div>
        <div>
            <span></span>
        </div>
    </div>
  )
}

export default Footer