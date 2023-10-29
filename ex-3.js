const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 700 },
  { name: "Tablet", price: 500 },
  { name: "Headphones", price: 300 },
  { name: "Keyboard", price: 50 },
];

function getMostExpensiveProduct(products) {
    let mostPrice = products[0] //  is initialized with the first product in the products array. This sets a starting point for comparison.
    for( let i = 0 ; i < products.length ; i++){
        if(products[i].price > mostPrice.price){
            mostPrice = product[i]
        } 
    }
return mostPrice
}

getMostExpensiveProduct(products); // Output: { name: "Laptop", price: 1000 }
console.log(getMostExpensiveProduct(products));