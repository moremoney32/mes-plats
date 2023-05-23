import React from 'react'
import "./panierRecette.css"
import { useForm } from "react-hook-form";
import  { useState,useEffect} from 'react'
import { totalArticlesPrix } from '../totalArticlesPrix'
import Formulaire from '../formulaire/Formulaire';


function PanierRecettes() {
    
    let arrayRecette =  JSON.parse(localStorage.getItem("produitRecettes"))
    let objectArticlesPrix = JSON.parse(localStorage.getItem("objectArticlesPrix"))
    const { register } = useForm();
    const [etatRecette,setEtatRecette]= useState(arrayRecette)
    const [etat,setEtat]= useState(false)
    const [etatObject,setEtatObject]= useState(objectArticlesPrix)
   
    
    function objectArticlesPrixNew(){
        objectArticlesPrix = JSON.parse(localStorage.getItem("objectArticlesPrix"))
    setEtatObject(objectArticlesPrix)

    }
    
    
   
    
    totalArticlesPrix(arrayRecette)
    function changesQuantity(){
        let inputValues = document.querySelectorAll(".quantitynumber")   
        
        inputValues.forEach((inputValue)=>{
            inputValue.addEventListener("input",(e)=>{
                
                for(let i =0; i<arrayRecette.length; i++){
                    
                if( inputValue.value <0){

                    return alert("pas de quantites negatives")

                }
                else if(arrayRecette[i].id == inputValue.dataset.id){
                    
                   
                    arrayRecette[i].quantity = e.target.value
                       localStorage.setItem("produitRecettes", JSON.stringify(arrayRecette))
                       arrayRecette =  JSON.parse(localStorage.getItem("produitRecettes"))
                       return  setEtatRecette(arrayRecette),totalArticlesPrix(arrayRecette),objectArticlesPrixNew()  
                            
                            
                }
            }
            })
           

        })

       
    }
    function closeForm(){
        let connectFormulaire = document.querySelector(".parent-formulaire")
        connectFormulaire.style.display = 'none'
        setEtat(false)

    }
    
    useEffect(()=>{
        
        changesQuantity()
        objectArticlesPrixNew()
       
       
    },[])
    
  return (
   
    <div className='commande'>
        <h2>LE RESTAURANT  <span className='author'>TFL</span> ET <span className='author'>KMC</span> ESPERE QUE VOTRE COMMANDE A ETE EFFECTIVE TOUTE FOIS VOUS POUVEZ MODIFIER LES QUANTITES A VOTRE GUISE AVANT LA VALIDATION FINALE.</h2>
         {
            etatRecette.map((recette,index)=>{

                return (
                    
                    <div className='bloc-commande' key={index}>
                        <div className='special-plats sous-commande'>
                            <img src={require(`../../images/${recette.image}`)} alt = "" className='img'/>
                            
                                <div className='all-i'>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                </div>
                                
                                <div>
                                    <p className='special-plats-title'>{recette.h2}</p>
                        
                                    <div className='tiltle-price'>
                                        <span className='price'>price:<span className='euro'>{recette.price}€</span></span>
                                        <div><i class="ri-shopping-cart-line"></i></div>
                                    </div>
                        
                        
                                </div>
                
                        </div>
                        <div className='bloc-quantity'>
                            <div className='parent-quantity'>
                                <span>quantite:</span>
                                <input  type ="number" className='quantitynumber' data-id={recette.id} defaultValue={recette.quantity} {...register(`quantity-${recette.id}`)} min="1"/>
                            </div>
                            <span className='delete-recette'>supprimer</span>
                        </div>
                    </div>
    
                )
            })
         }
         <div className='parent-article'>
            {
                etatObject.map((articlePrix,index)=>{
                    return (
                        <div className='total-article' key={index}>
                        <span>Total Articles({articlePrix.totalQuantity}):</span>
                        <span>{articlePrix.totalPrix}Є</span>
                    </div>

                    )
                })
            }
           
         </div>
         <div className='parent-valider'>
            <button className='valider' style={etat?{display:"none"}:{display:"block"}} onClick={()=>setEtat(true)}>Valider</button>
         </div>
         
         {etat?<Formulaire closeForm={closeForm}/>:""}
        
         
         
           
    </div>
    
  )
}

export default PanierRecettes

