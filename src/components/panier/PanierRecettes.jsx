
 import "./panierRecette.css"
import React, { useState, useEffect,useRef} from 'react';
import { useForm } from "react-hook-form";
import Formulaire from '../formulaire/Formulaire';
import { totalArticlesPrix } from '../totalArticlesPrix';



function PanierRecettes() {
    
    const { register } = useForm();
    const [etatRecette,setEtatRecette]= useState([])
    const [etat,setEtat]= useState(false)
    const [etatObject,setEtatObject]= useState(null)
   

    useEffect(() => {
        const arrayRecette = JSON.parse(localStorage.getItem("produitRecettes"));

        if (arrayRecette) {
            setEtatRecette(arrayRecette);

            totalArticlesPrix(arrayRecette).then((response) => {
                    setEtatObject(response);
                    console.log(response)
            });
        }

    }, []);


   
    function changesQuantity(e){  
        let arrayRecette =  JSON.parse(localStorage.getItem("produitRecettes"))       
            for(let i =0; i<arrayRecette.length; i++){
                if(e.target.value<=0){
                    return alert("veuillez choisir une quantite positive")
                }
               
             if(parseInt(arrayRecette[i].id) === parseInt(e.target.dataset.id)){
                        arrayRecette[i].quantity = e.target.value
                    
                        localStorage.setItem("produitRecettes", JSON.stringify(arrayRecette)) 
                        arrayRecette =  JSON.parse(localStorage.getItem("produitRecettes"))
                     return  totalArticlesPrix(arrayRecette).then((totalArticlesPrice)=>{
                            console.log(totalArticlesPrice);
                            setEtatObject(totalArticlesPrice)
                        
                       })
                       
                        
                                        
                        }
           }  
    }
   
 
    
    
    function closeForm(){
        let connectFormulaire = document.querySelector(".parent-formulaire")
        connectFormulaire.style.display = 'none'
        setEtat(false)

    }
      
       
                           
    function removeProduit(e){
        let arrayRecette =  JSON.parse(localStorage.getItem("produitRecettes"))
        const blocCommandeElement = e.target.closest('.bloc-commande');
       console.log(blocCommandeElement)
       console.log(parseInt(blocCommandeElement.dataset.id))

       const index = arrayRecette.findIndex((obj) => parseInt(obj.id) === parseInt(blocCommandeElement.dataset.id));
       if(index !==-1){
           arrayRecette.splice(index,1)
           console.log(arrayRecette)
            localStorage.setItem("produitRecettes", JSON.stringify(arrayRecette))
            arrayRecette =  JSON.parse(localStorage.getItem("produitRecettes"))
            setEtatRecette(arrayRecette)
          return  totalArticlesPrix(arrayRecette).then((totalArticlesPrice)=>{
                console.log(totalArticlesPrice)
                setEtatObject(totalArticlesPrice)
               })

       }   
                                    }
  
    
   
  return ( 
   
    <div className='commande'>
        <h2>LE RESTAURANT  <span className='author'>CASA</span> DEL <span className='author'>FRANCO</span> ESPERE QUE VOTRE COMMANDE A ETE EFFECTIVE TOUTE FOIS VOUS POUVEZ MODIFIER LES QUANTITES A VOTRE GUISE AVANT LA VALIDATION FINALE.</h2>
         {
            etatRecette.map((recette)=>{

                return (
                    
                    <div className='bloc-commande'  key={recette.id} data-id={recette.id}>
                        <div className='special-plats sous-commande'>
                            <img src={require(`../../images/${recette.image}`)} alt = "" className='img'/>
                            
                                <div className='all-i'>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                    <i className="ri-star-fill"></i>
                                </div>
                                
                                <div>
                                    <p className='special-plats-title'>{recette.h2}</p>
                        
                                    <div className='tiltle-price'>
                                        <span className='price'>price:<span className='euro'>{recette.price}€</span></span>
                                        <div><i className="ri-shopping-cart-line"></i></div>
                                    </div>
                        
                        
                                </div>
                
                        </div>
                        <div className='bloc-quantity'>
                            <div className='parent-quantity'>
                                <span>quantite:</span>
                                <input  type ="number" className='quantitynumber' data-id={recette.id} defaultValue={recette.quantity} {...register(`quantity-${recette.id}`)} min="1" onChange={changesQuantity}/>
                            </div>
                            <span className='delete-recette'data-id={recette.id} onClick={removeProduit}>supprimer</span>
                        </div>
                    </div>
    
                )
            })
         }
         <div className='parent-article'>
            {
                etatObject?.map((articlePrix,index)=>{
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

