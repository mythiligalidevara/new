//search logic
const search$=document.getElementById('search');
search$.addEventListener('keyup',function(event){
//console.log(event);
const term=search$.value; 
// console.log(term)
const termLowerCase=term.toLowerCase();
// console.log(termLowerCase)
const productFiltered=productsModified.filter(function(product){
const titleLowerCased=product.title.toLowerCase();
return titleLowerCased.indexOf(termLowerCase)!=-1;
});
renderProductCards(productFiltered)
})
