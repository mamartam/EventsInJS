// Task 1
const productsList = ['Bread', 'Apples', 'Milk', 'Cheese'];
productsList.forEach(function (e) {
    console.log("Ineed to buy " + e);
})

// Task 2
const mustVisitCities = ['London', 'Paris', "LA"];
mustVisitCities.forEach(function (e) {
    console.log(e + " is on my travel list");
})

// Task 3
const products = [
    { name: 'Bread', price: 1.00 },
    { name: 'Apples', price: 0.50 },
    { name: 'Milk', price: 1.20 },
    { name: 'Cheese', price: 2.50 },
    { name: 'Butter', price: 1.80 }
];
products.forEach(function(e,i,products ){
    console.log("Product " + e.name + " is at index " + i + "and costs " + e.price);
})

