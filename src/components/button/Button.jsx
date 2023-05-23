import React from 'react'
import "./button.css"
import { NavLink } from 'react-router-dom'

const Button = ({text}) => {
   
    
  return (
    <>    
           <NavLink to="/menu/:name"><button className='button-menu'>{text}</button></NavLink>
                 
    </>
  )
}

export default Button