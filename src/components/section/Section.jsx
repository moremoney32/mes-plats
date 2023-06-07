import React from 'react'
import cuisine from '../../images/cuisine.jpg'
import "./section.css"
import Button from '../button/Button'

const Section = () => {
  return (
    <div className='section'>
        <div className='section-img'>
            <img src={cuisine} alt="" className='cuisine'/>
            <div className='section-about'>
                <h2>About-Us</h2>
                <p>
                    Bienvenue dans notre restaurant de luxe, un lieu où l'excellence culinaire rencontre l'élégance et le raffinement. Nous sommes fiers de vous offrir une expérience gastronomique inoubliable, avec des ingrédients frais et de qualité supérieure, des plats créatifs et une présentation impeccable.

                    Notre chef talentueux a créé un menu inspiré par les saveurs locales et internationales, en utilisant des techniques de cuisine innovantes pour offrir une expérience culinaire unique.
                </p>
                <Button text='BOISSON'/>


          </div>
        </div>
       
      

    </div>
  )
}

export default Section