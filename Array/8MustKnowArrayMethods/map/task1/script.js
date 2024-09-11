// Task 1
const numbers = [1, 2, 3, 4, 5, 6];
const addTwoToTheNumber = numbers.map(function (element) {
    return element + 2;
});
console.log(addTwoToTheNumber);

// Task2
const products = [
    { name: 'Phone', price: 800 },
    { name: 'Laptop', price: 1200 },
    { name: 'Tablet', price: 600 }
];

const nameOfProduct = products.map(function (element) {
    return element.name;

});
console.log(nameOfProduct);

//Task 3

const wordsInLowerCase = ['apple', 'banana', 'cherry'];

const firstLetterToUpperCase = wordsInLowerCase.map(function (element) {
    return element.charAt(0).toUpperCase() + element.slice(1);

});
console.log(firstLetterToUpperCase);


