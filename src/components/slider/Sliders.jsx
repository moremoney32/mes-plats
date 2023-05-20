import React from 'react'
import { useState } from 'react'
import '../slider/slider.css'
import {slidersPictures} from "./arraySider.js"


const Sliders = () => {
	const [currentIndex, setCurrentIndex] =useState(0)
	
	
	function next(){
		
		
		 setCurrentIndex(currentIndex === slidersPictures.length-1?0:currentIndex+1)	
		
	}
	function preview(){

		setCurrentIndex(currentIndex === 0?slidersPictures.length-1:currentIndex-1)
		
	}
	function change(){
		const right = document.querySelector(".right")
			 right.style.color ="white"
			right.style.background ="orange"	
	}
	function rechange(){
		const right = document.querySelector(".right")
				right.style.color ="black"
				right.style.background ="white"
	}
	function changes(){
		const left = document.querySelector(".left")
			 left.style.color ="white"
			left.style.background ="orange"	
	}
	function rechanges(){
		const left = document.querySelector(".left")
				left.style.color ="black"
				left.style.background ="white"
	}



		
  return (
    <div className='slider-contain'>
		<div className='left' onClick={preview}><i class="ri-arrow-left-line" onMouseOver={changes} onMouseOut={rechanges}></i></div>
        <div className='right' onClick={next} onMouseOver={change} onMouseOut={rechange}><i class="ri-arrow-right-line"></i></div>
		{
			slidersPictures.map((slider,index)=>{
				return(
					<div>
					{currentIndex === index  &&(<div className='slider' key={index}>
             <div>
           <h2>{slider.h2}</h2>
            <p>{slider.p}</p>
            <div>Explore Food</div>
            </div>
			<img src={require(`../../images/${slider.image}`)} alt="testpicture" />
            
        </div>)}
		
		</div>
		
				)
			})
		}
		<div className="sliderNumber">
		{currentIndex + 1}/{slidersPictures.length}
		</div>
		
		
		
       
       
    </div>
  )
}

export default Sliders