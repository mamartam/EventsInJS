// Task 1
const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
]
const filterItems = items.filter(function (item) {
    return item.price <= 100;
})
console.log(filterItems);

// Task 2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
})
console.log(evenNumbers);


// Task 3

function filterShortWords(words, maxLength) {
    return words.filter(function (word) {
        return word.length <= maxLength;
    });
}
const words = ['cat', 'elephant', 'tiger', 'dog', 'mouse', 'rat'];
const shortWords = filterShortWords(words, 3);
console.log(shortWords);

// Task 4

const people = [
    { name: 'John', age: 15 },
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 20 }
];
function filterAdults(people) {
    return people.filter(function (person) {
        return person.age >= 18;
    })

}
const adults = filterAdults(people);
console.log(adults);

// Task 5

const students = [16, 17, 18, 18, 21, 60];
function isMore18(element) {
    return element >= 18;
}
const result = students.filter(isMore18);
console.log(result);

// Task 5

const fruits = ['apple', 'orange', 'banana', 'kiwi', 'pomegranate', 'coconut'];
function getShortWords(element) {
    return element.length < 6;
}

const shortWord = fruits.filter(getShortWords);
console.log(shortWord);

// Task 6
const posAndNegnumbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];

const negativeNumb = posAndNegnumbers.filter(isNegative);
function isNegative(value) {
    return value < 0;
}
console.log(negativeNumb);

// Task 7
const movies = [
    { title: 'inception', rating: 9 },
    { title: 'Frozen', rating: 7.5 },
    { title: 'Interstellar', rating: 8.5 },
    { title: 'The Room', rating: 3.6 }
];
const topRatedMovies = movies.filter(isTopRated);
function isTopRated(value) {
    return value.rating >= 8;

}

console.log(topRatedMovies);

//Task 8
const tasks = [
    { description: 'Do the laundry', completed: true },
    { description: 'Buy groceries', completed: false },
    { description: 'Clean the house', completed: true },
    { description: 'Fix the car', completed: false }
];

const completedTasks = tasks.filter(isCompleated);
function isCompleated(value){
    return value.completed === true;
}
console.log(completedTasks);

//Task 9
const users = [
    { name: 'John', role: 'user' },
    { name: 'Alice', role: 'admin' },
    { name: 'Bob', role: 'user' },
    { name: 'Charlie', role: 'admin' }
];

const admins = users.filter(isAdmin);
function isAdmin(value){
    return value.role === "admin";
}

console.log(admins);

//Task 10
const sentences = [
    'The cat is sleeping.',
    'It is raining outside.',
    'We are going to the market.',
    'I love programming.',
    'Let’s go for a walk!'
];

function filterShortSentences(sentences, maxLength) {
    return sentences.filter(function(sentence) {
        // Розбиваємо речення на слова і перевіряємо їх кількість
        return sentence.split(' ').length <= maxLength;
    });
}

const shortSentences = filterShortSentences(sentences, 4);
console.log(shortSentences);

// Task 11
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 600 },
    { name: 'Tablet', price: 400 },
    { name: 'Monitor', price: 300 }
];
function filterAffordableProducts(products, maxPrice) {
    return products.filter(function (product) {
        return product.price <= maxPrice;

    });
}
const affordableProducts = filterAffordableProducts(products, 500);
console.log(affordableProducts);

