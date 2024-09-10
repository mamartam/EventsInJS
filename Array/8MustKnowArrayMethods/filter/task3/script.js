const productsInTheShop = [
    { name: "Apple iPhone 13", price: 1200, category: "Electronics" },
    { name: "Samsung Galaxy S21", price: 1000, category: "Electronics" },
    { name: "Nike Air Max 270", price: 150, category: "Shoes" },
    { name: " Adidas Ultraboost", price: 180, category: "Shoes" },
    { name: "Sony WH-1000XM4 Headphones", price: 350, category: "Electronics" },
    { name: "Levi's 501 Jeans", price: 25, category: "Clothing" },
    { name: "Dell XPS 13 Laptop", price: 1300, category: "Electronics" },
    { name: "Converse Chuck Taylor", price: 55, category: "Shoes" },
    { name: "Patagonia Jacket", price: 200, category: "Clothing" }
];

function displayData(putyourArray) {
    const productsTable = document.getElementById("productsTable");
    productsTable.innerHTML = "";//clean the table

    putyourArray.forEach(function (elementsOfArray) {

        let tableRow = document.createElement('tr');
        productsTable.appendChild(tableRow);

        let nameOfProduct = document.createElement("td");
        nameOfProduct.innerText = elementsOfArray.name;
        tableRow.appendChild(nameOfProduct);

        let priceOfProduct = document.createElement("td");
        priceOfProduct.innerText = elementsOfArray.price;
        tableRow.appendChild(priceOfProduct);

        let categoryOfProduct = document.createElement("td");
        categoryOfProduct.innerText = elementsOfArray.category;
        tableRow.appendChild(categoryOfProduct);

    });

};
displayData(productsInTheShop);

const inputField = document.getElementById("inputField");
const btnFilter = document.getElementById("btnFilter");

btnFilter.addEventListener("click", function () {

    const findProductsForThisPrice = productsInTheShop.filter(function (element) {
        return element.price >= inputField.value;

    });
    displayData(findProductsForThisPrice);
    
});


