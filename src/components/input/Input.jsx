import React from 'react'
import "./input.css"

const Input = ({close,title}) => {

  function stockRecettes(){
   
    let input = document.querySelector(".quantity")
    let objectRecettes = JSON.parse(localStorage.getItem("objectPlat"))
   
    let arrayRecettes = JSON.parse(localStorage.getItem("produitRecettes"))
   
    
    if(input.value> 0){
      let objectRecettesQuantity =  Object.assign({},objectRecettes , {quantity:parseInt(`${input.value}`)});
      console.log( objectRecettesQuantity)
      if(arrayRecettes === null){
        arrayRecettes = []
        arrayRecettes.push(objectRecettesQuantity)
        console.log(arrayRecettes)
  
        localStorage.setItem("produitRecettes", JSON.stringify(arrayRecettes))
        return arrayRecettes = JSON.parse(localStorage.getItem("produitRecettes")),alert("plats envoye au panier")
      }
      
      else if(arrayRecettes !== null){
        
        for(let i =0 ; i<arrayRecettes.length ;i++){
          if(arrayRecettes[i].id === objectRecettesQuantity.id ){
      
            console.log("true")

            arrayRecettes[i].quantity += parseInt(input.value)
            localStorage.setItem("produitRecettes", JSON.stringify(arrayRecettes))
      
            return arrayRecettes = JSON.parse(localStorage.getItem("produitRecettes")),alert("il ya deja ce produit dans le panier vous venez dajouter sa quantite")
          }
        }
        for(let i =0 ; i<arrayRecettes.length ;i++){
         
          if(arrayRecettes[i].id !== objectRecettesQuantity.id ){
 
             

             arrayRecettes.push(objectRecettesQuantity)

             console.log( arrayRecettes)

             localStorage.setItem("produitRecettes", JSON.stringify(arrayRecettes))

             return arrayRecettes = JSON.parse(localStorage.getItem("produitRecettes")),alert("produit envoye au panier")


          }
      
 }
      }

    }
    else{


      return alert("choisir une quantite positive")
   }
    
  }
 
 
  return (
    <div className='input-panier'>
      <i class="ri-close-circle-fill" onClick={close}></i>
        <div className='label-input'>
            <label htmlFor='itemQuantity'>Nombre de plats:</label>
            <span className='title' onClick={stockRecettes}>{title}</span>
            <input type="number" name="itemQuantity" min="0" max="100" className='quantity'/>          
        </div>
        <button>Ajouter</button>
    </div>
  )
}

export default Input