import { normalize } from "./normalize"

 /*****function qui filtre le name */
export function searchElementPlats(userRecettes,arrayRecettes){
    return new Promise((resolve) => {
        userRecettes = normalize(userRecettes)
       
       
                const searchName = arrayRecettes.filter((recette)=>recette.name)
                const searchNameRecettes = searchName.filter((recette)=>{
                    if(recette.name.toLowerCase().includes(userRecettes) === true){
                        return recette
                    }
                })
            
                const filterDoublon = [... new Set(searchNameRecettes)]

            
                return resolve(filterDoublon)

            })
        }
        
  
/*****function qui filtre le names */
export  function searchElementVin(userRecettes,arrayRecettes){
    return new Promise((resolve)=>{
        const searchNames = arrayRecettes.filter((recette)=>recette.names)
        const searchNamesRecettes = searchNames.filter((recette)=>{
            if(recette.names.toLowerCase().includes(userRecettes) === true){
                return recette
            }
        })
        const filterDoublon = [... new Set(searchNamesRecettes)]
        return resolve(filterDoublon)
    })

}
export  function searchElementUserPlatVin(userRecettes,arrayRecettes){
    return new Promise((resolve)=>{
        function searchVinPlats(){
            return new Promise((resolve)=>{
                const searchNames = arrayRecettes.filter((recette)=>recette.userNames)
                const searchNamesRecettes = searchNames.filter((recette)=>{
                    if(recette.userNames.toLowerCase().includes(userRecettes) === true){
                        return recette
                    }
                })
               return resolve(searchNamesRecettes)

            })
        }

        function searchVin(){
            return new Promise((resolve)=>{

                const searchNames = arrayRecettes.filter((recette)=>recette.names)
        const searchNamesRecettes = searchNames.filter((recette)=>{
            if(recette.names.toLowerCase().includes(userRecettes) === true){
                return recette
            }
        })
        return resolve(searchNamesRecettes)

            })
        }

        Promise.all([searchVinPlats(),searchVin()]).then((response)=>{
            response =[...response[0],...response[1]]

            const filterDoublon = [... new Set(response)]
            return resolve(filterDoublon)

        })
      
      
    })

}
