import React, { useState,useEffect} from 'react'
import { NavLink} from "react-router-dom";
import { useLocation} from 'react-router-dom';
import {slidersPictures} from "../components/slider/arraySider"
import Input from '../components/input/Input';
import { filterMenuColor } from '../components/filterColor/filterMenuColor';
import { filterMenuColorBoisson } from '../components/filterColor/filterMenuColorBoisson';
import {searchElementPlats,searchElementUserPlatVin} from '../modules/searchElement';
import '../components/plats/plats.css' 
import "../components/button/button.css"
import "../components/main/main.css"
import "../components/header/header.css"
import "../components/input/input.css"


const Menu = () => {
    const location = useLocation();
    const urlMenu = window.location.pathname 
    const filterUrlMenu =urlMenu.substr(6)
    const arrayMenu = slidersPictures.filter(menu => menu.name ===  filterUrlMenu)
    const arrayMenuBoisson =  slidersPictures.filter(menu => menu.names)
    const [currentMenu ,setCurrentMenu]=useState(arrayMenu) 
    const [currentMenuBoisson ,setCurrentMenuBoisson]=useState(arrayMenuBoisson) 
    const [etat ,setEtat]=useState(false) 
    const [title,setTitle]=useState(false)
    const [etatBoisson ,setEtatBoisson]=useState(false) 
    const [titleBoisson,setTitleBoisson]=useState(false) 
    const [error,setError]=useState(false) 
    const [errorVin,setErrorVin]=useState(false) 
   
    
   

    function close(){
       
        let inputPanier = document.querySelector(".input-panier")
      return  inputPanier.style.display ="none",setEtat(false),setEtatBoisson(false)
      }
     
   
   
        const filterMenu = (e)=>{

            const arrayMenuFilter = slidersPictures.filter(menu => menu.name ===  e.target.textContent)
            const pattes = document.querySelector(".pattes")
            const riz = document.querySelector(".riz")
            const avocat = document.querySelector(".avocat")
            const pizza = document.querySelector(".pizza")
            const poulet = document.querySelector(".poulet")

             
            if(e.target.className === "pattes"){
                pattes.style.background = "orange"
                riz.style.background = "red"
                avocat.style.background = "red"
                pizza.style.background = "red"
                poulet.style.background = "red"
            }
            else if(e.target.className === "riz"){
               riz.style.background = "orange"
               pattes.style.background = "red"
                avocat.style.background = "red"
                pizza.style.background = "red"
                poulet.style.background = "red"

            }
            else if(e.target.className === "avocat"){
                avocat.style.background = "orange"
                pattes.style.background = "red"
                 riz.style.background = "red"
                 pizza.style.background = "red"
                 poulet.style.background = "red"
 
             }
             else if(e.target.className === "pizza"){
                pizza.style.background = "orange"
                pattes.style.background = "red"
                 avocat.style.background = "red"
                 riz.style.background = "red"
                 poulet.style.background = "red"
             }
             else if(e.target.className === "poulet"){
                poulet.style.background = "orange"
                pattes.style.background = "red"
                 avocat.style.background = "red"
                 riz.style.background = "red"
                 pizza.style.background = "red"
             }
            
          return  setCurrentMenu(arrayMenuFilter)
        
           
        }
        
        const filterMenuBoisson = (e)=>{    
            const arrayMenuBoisson =  slidersPictures.filter(menu => menu.names ===  e.target.textContent)
            const Pinacollada = document.querySelector(".pinacollada")
            const Whisky = document.querySelector(".whisky")
            const biere = document.querySelector(".biere")
            const jus = document.querySelector(".jus")
            const vin = document.querySelector(".vin")

             
            if(e.target.className === "pinacollada"){
                Pinacollada.style.background = "orange"
                Whisky.style.background = "red"
               biere.style.background = "red"
               jus.style.background = "red"
                vin.style.background = "red"
                
            }
            else if(e.target.className === "whisky"){
                Whisky.style.background = "orange"
                Pinacollada.style.background = "red"
               jus.style.background = "red"
                biere.style.background = "red"
                vin.style.background = "red"
            }
            else if(e.target.className === "biere"){
               biere.style.background = "orange"
               Whisky.style.background = "red"
               jus.style.background = "red"
               Pinacollada.style.background = "red"
                vin.style.background = "red"
             }
             else if(e.target.className === "jus"){
                jus.style.background = "orange"
                Pinacollada.style.background = "red"
                biere.style.background = "red"
                Whisky.style.background = "red"
                 vin.style.background = "red"
                 
             }
             else if(e.target.className === "vin"){
                vin.style.background = "orange"
                Pinacollada.style.background = "red"
                biere.style.background = "red"
                Whisky.style.background = "red"
                jus.style.background = "red"
               
             }
             return  setCurrentMenuBoisson(arrayMenuBoisson)
            
         
        
           
        }
        
        function getPanier(index){
            let specialTitle = document.querySelectorAll(".special-plats-title")
            for(let i =0;i<=specialTitle.length;i++){
                return setTitle(specialTitle[index].textContent),setEtat(true)
            }  
        }
        function getPanierBoisson(index){
            let specialTitles = document.querySelectorAll(".special-plats-title-boisson") 
            for(let i =0;i<=specialTitles.length;i++){
                return setTitleBoisson(specialTitles[index].textContent),setEtatBoisson(true)
            }
            
        }

       
        async function selectRecettesPlats(){
            let searchRecette = document.querySelector(".searchInput")
           
            let timeOut = null
             clearTimeout(timeOut)
             timeOut = setTimeout(()=>{

                searchRecette.addEventListener("input",(e)=>{
                    const searchInput = e.target.value
                if(searchInput.length>=3){
                   
                        
                         searchElementPlats(searchInput,slidersPictures).then((response)=>{
                            filterMenuColor(e)

                           return  setCurrentMenu(response),setError(response) 
            })
           
                    }
                   
                    else{
                        filterMenuColor(e)
                       

                      return  setCurrentMenu(arrayMenu),setError(false)

                    } 
                })
             },[1000])
           

        }
        async function selectRecettesPlatsVin(){
            let searchRecette = document.querySelector(".searchInput")
            let timeOut = null
             clearTimeout(timeOut)
             timeOut = setTimeout(()=>{
                searchRecette.addEventListener("input",(e)=>{
                    const searchInput = e.target.value
                    if(searchInput.length>=3){
                        
                        searchElementUserPlatVin(searchInput,slidersPictures).then((response)=>{
                            filterMenuColorBoisson(e)
                        
                           return setCurrentMenuBoisson(response),setErrorVin(response)               
            })
                    }
                    
                    else{
                        filterMenuColorBoisson(e)
                        return  setCurrentMenuBoisson(arrayMenuBoisson),setErrorVin(false)
  
                      }  
                })
             },[1000])
        }


       
        useEffect(()=>{
            
            selectRecettesPlats()
            selectRecettesPlatsVin()
           
           

        },[])
        function updateRecette(menu){
            const special = document.querySelector(".button")
             localStorage.setItem("objectPlat", JSON.stringify(menu))
            
        }
        function closeGetPanier(){
            setEtat(false)
            
        }
        function closeGetPanierBoisson(){
            setEtatBoisson(false)
            
        }
      
       

       
       
       

  return (
    <>
        <div className='all-button'>
            <div className='trie-plats'>
                <button className='pattes'  onClick={(e)=> filterMenu(e)} >pattes</button>
                <button className='riz'  onClick={(e)=> filterMenu(e)}>riz</button>
                <button className='pizza'  onClick={(e)=> filterMenu(e)} >pizza</button>
            </div>
            <div className='trie-sous-plats-button'>
                <button className='avocat'  onClick={(e)=> filterMenu(e)} >avocat</button> 
                <button className='poulet'  onClick={(e)=> filterMenu(e)} >poulet</button>
            </div>
        </div>
    
    <div className='select-menu'>
       <div className='errorPlats' style={error.length === 0?{display:"block"}:{display:"none"}}>nous  n avons pas encore ce plat</div>
    
        {
            currentMenu.map((menu,index)=>{
                
                return(
                    <div className='special-plats' key={index} onClick={()=>updateRecette(menu)}>
                            <img src={require(`../images/${menu.image}`)} alt = "" className='img'/>
                            <div className='all-i'>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                            </div>
                            
                <div>
                    <p className='special-plats-title'>{menu.h2}</p>
                    <div className='tiltle-price'>
                        <span className='price'>price:<span className='euro'>{menu.price}€</span></span>
                        <div><i class="ri-shopping-cart-line" onClick={()=>getPanier(index)}></i></div>
                   
                    </div>
                    
                    
                </div>
               
    </div>
                )
            })

        }
         
        
    </div>
    {etat?<Input close={close} title={title} closeGetPanier={closeGetPanier}/>:""}
    <div className='select-menu-accompagnements'>
        <h2>Mes accompagnements</h2>
        <div className='select-menu-accompagnements-all-button'>
            <div className='trie-plats'>
                <button className='pinacollada'  onClick={(e)=> filterMenuBoisson(e)} >pinacollada</button>
                <button className='vin'  onClick={(e)=> filterMenuBoisson(e)}>vin</button>
                <button className='whisky'  onClick={(e)=> filterMenuBoisson(e)} >whisky</button>
            </div>
            <div className='select-menu-accompagnements-trie-sous-plats-button'>
                <button className='biere'  onClick={(e)=> filterMenuBoisson(e)} >biere</button> 
                <button className='jus'  onClick={(e)=> filterMenuBoisson(e)}>jus</button>
            </div>
        </div>
        
    </div>
    <div className='select-menu-accompagnements-trier'>
        <div className='errorbiere' style={errorVin.length === 0?{display:"block"}:{display:"none"}}>nous  n avons pas encore cette boisson</div>
    {
            currentMenuBoisson.map((menus,index)=>{
                
                return(
                    <div className='special-plats' key={index} onClick={()=>updateRecette(menus)}>
                             <img src={require(`../images/${menus.image}`)} alt = ""/>
                            <div className='all-i'>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                            </div>
                            
                            <div>
                                <p className='special-plats-title-boisson'>{menus.h2}</p>
                                <div className='tiltle-price'>
                                    <span className='price'>price:<span className='euro'>{menus.price}€</span></span>
                                    <div><a href='#input' className='a'><i class="ri-shopping-cart-line" onClick={()=>getPanierBoisson(index)} ></i></a></div>
                                </div>
                    
                    
                            </div>
               
                    </div>
                )
            })

        }
        </div>
        {etatBoisson?<Input close={close} title={titleBoisson} closeGetPanier={closeGetPanierBoisson}/>:""}
        <div className='parentPanier'>
        <NavLink to="/menu/:name/panier"><button className='panier'>panier</button></NavLink>
        </div>
   
    
    </>
  )
}


export default Menu