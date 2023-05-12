let productsModified;
fetch("http://localhost:3000/products")
.then(function(res){
  return res.json() 
})
.then(function(res){
  console.log("iam the data stored in the database",res)
   productsModified = res.map(function (product) {
    product.priceModified = product.price.toFixed(2)
    return product
  })
  renderProductCards(productsModified)
})
.catch(function(err){
  console.log("iam executed because there is an error while making a request")
})
.finally(function(){
  console.log("iam executed even if it success or error")
})
