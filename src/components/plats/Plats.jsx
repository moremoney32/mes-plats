import React from 'react'
import { NavLink } from 'react-router-dom'
import './plats.css' 

const Plats = ({pattes,title,price,name}) => {
  return (
    <div className='special-plats'>
       <NavLink to={`/menu/${name}`}><img src={pattes} alt={name}/></NavLink>
        <div className='all-i'>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
          <i class="ri-star-fill"></i>
        </div>
        
        <div>
            <p>{title}</p>
            <div className='tiltle-price'>
                <span className='price'>price:<span className='euro'>{price}€</span></span>
                <div><i class="ri-shopping-cart-line"></i></div>
            </div>
        </div>
    </div>
  )
}

export default Plats