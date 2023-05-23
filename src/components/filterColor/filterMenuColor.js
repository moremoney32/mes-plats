
   import "../plats/plats.css"
   export const filterMenuColor = (e)=>{

       
        const pattes = document.querySelector(".pattes")
        const riz = document.querySelector(".riz")
        const avocat = document.querySelector(".avocat")
        const pizza = document.querySelector(".pizza")
        const poulet = document.querySelector(".poulet")

         
        if(e.target.value === "pattes"){
            pattes.style.background = "orange"
            riz.style.background = "red"
            avocat.style.background = "red"
            pizza.style.background = "red"
            poulet.style.background = "red"
        }
        else if(e.target.value === "riz"){
           riz.style.background = "orange"
           pattes.style.background = "red"
            avocat.style.background = "red"
            pizza.style.background = "red"
            poulet.style.background = "red"

        }
        else if(e.target.value === "avocat"){
            avocat.style.background = "orange"
            pattes.style.background = "red"
             riz.style.background = "red"
             pizza.style.background = "red"
             poulet.style.background = "red"

         }
         else if(e.target.value === "pizza"){
            pizza.style.background = "orange"
            pattes.style.background = "red"
             avocat.style.background = "red"
             riz.style.background = "red"
             poulet.style.background = "red"
         }
         else if(e.target.value === "poulet"){
            poulet.style.background = "orange"
            pattes.style.background = "red"
             avocat.style.background = "red"
             riz.style.background = "red"
             pizza.style.background = "red"
         }
         else{
            poulet.style.background = "red"
            pattes.style.background = "red"
             avocat.style.background = "red"
             riz.style.background = "red"
             pizza.style.background = "red"

         }
        
      
    
       
    }
