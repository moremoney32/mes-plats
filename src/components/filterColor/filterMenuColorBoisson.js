import "../plats/plats.css"
export function filterMenuColorBoisson(e){

    const Pinacollada = document.querySelector(".pinacollada")
    const Whisky = document.querySelector(".whisky")
    const biere = document.querySelector(".biere")
    const jus = document.querySelector(".jus")
    const vin = document.querySelector(".vin")

     
    if(e.target.value === "pinacollada"){
        Pinacollada.style.background = "orange"
        Whisky.style.background = "red"
       biere.style.background = "red"
       jus.style.background = "red"
        vin.style.background = "red"
        
    }
    else if(e.target.value === "whisky"){
        Whisky.style.background = "orange"
        Pinacollada.style.background = "red"
       jus.style.background = "red"
        biere.style.background = "red"
        vin.style.background = "red"
    }
    else if(e.target.value === "biere"){
       biere.style.background = "orange"
       Whisky.style.background = "red"
       jus.style.background = "red"
       Pinacollada.style.background = "red"
        vin.style.background = "red"
     }
     else if(e.target.value === "jus"){
        jus.style.background = "orange"
        Pinacollada.style.background = "red"
        biere.style.background = "red"
        Whisky.style.background = "red"
         vin.style.background = "red"
         
     }
     else if(e.target.value === "vin"){
        vin.style.background = "orange"
        Pinacollada.style.background = "red"
        biere.style.background = "red"
        Whisky.style.background = "red"
        jus.style.background = "red"
       
     }
     else{
        vin.style.background = "red"
        Pinacollada.style.background = "red"
        biere.style.background = "red"
        Whisky.style.background = "red"
        jus.style.background = "red"

     }
    
 

   
}


