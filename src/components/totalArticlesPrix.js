export function totalArticlesPrix(arrayOftotal){

    let totalArticle = []
    let totalPrix = []
    let totalArticlePrix = []
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
  totalArticlePrix.push(objectQuantityPrice)
 
  objectArticlesPrix = []
  objectArticlesPrix.push(objectQuantityPrice)
  return localStorage.setItem("objectArticlesPrix", JSON.stringify(objectArticlesPrix))
}