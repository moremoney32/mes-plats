export function totalArticlesPrix(arrayOftotal){

    let totalArticle = []
    let totalPrix = []
   
    let objectArticlesPrix = JSON.parse(localStorage.getItem("objectArticlesPrix"))
  

    arrayOftotal.forEach((article)=>{

        

        totalArticle.push(article.quantity)

        totalPrix.push(article.price*article.quantity)

      
    
    })
    let totalArticleJoin = eval(totalArticle.join("+"))
    let totalPrixJoin = eval(totalPrix.join("+"))


  
  let objectQuantityPrice = {
    "totalQuantity" :totalArticleJoin,
    "totalPrix":totalPrixJoin
  }
  
  if(objectArticlesPrix === null){

    objectArticlesPrix = []
    objectArticlesPrix.push(objectQuantityPrice)
    return localStorage.setItem("objectArticlesPrix", JSON.stringify(objectArticlesPrix))

  }
  else if(objectArticlesPrix !== null){
    localStorage.removeItem('objectArticlesPrix');
    objectArticlesPrix = []
    objectArticlesPrix.push(objectQuantityPrice)
    return localStorage.setItem("objectArticlesPrix", JSON.stringify(objectArticlesPrix))

  }
 
}