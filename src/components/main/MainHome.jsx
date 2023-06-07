import React from 'react'
import Plats from '../plats/Plats'
import pattes1 from "../../images/pattes1.jpg"
import riz1 from "../../images/riz1.jpg"
import poulet1 from "../../images/poulet1.jpg"
import pizza1 from "../../images/pizza1.jpg"
import avocat1 from "../../images/avocat1.jpg"
import "./main.css"

const MainHome = () => {
  return (
    <div className='main'>
        <h2>Popular Food Menu</h2>
        <div className='trie-plats'>
          <Plats pattes={pattes1} title="les nouilles" price="50" name="pattes"/>
          <Plats pattes={riz1} title="le riz chivas" price="30" name="riz"/>
          <Plats pattes={poulet1} title="le poulet aux escargots" price="39" name="poulet"/>
        </div>
        <div className='trie-sous-plats'>
          <Plats pattes={pizza1} title="les pizzas a la panthere" price="100" name="pizza"/>
          <Plats pattes={avocat1} title="avocat au cerveau blanc" price="150" name="avocat"/>

        </div>
       
       
        
    </div>
  )
}

export default MainHome