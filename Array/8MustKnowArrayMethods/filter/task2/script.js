const books = [
    { name: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 },
    { name: "1984", author: "George Orwell", pages: 328 },
    { name: "The Great Gatsby", author: " F. Scott Fitzgerald", pages: 180 },
    { name: "Pride and Prejudice", author: "Jane Austen", pages: 279 },
    { name: "Brave New World", author: "Aldous Huxley", pages: 268 },
    { name: "The Lord of the Rings: The Fellowship of the Ring", author: "J.R.R. Tolkien", pages: 423 },
    { name: "The Hobbit", author: "J.R.R. Tolkien", pages: 310 },
    { name: "Fahrenheit 451", author: "Ray Bradbury", pages: 194 }
];


function displayBooks(booksToDisplay) {
    const mainTable = document.getElementById("mainTable");
    mainTable.innerHTML = ""; 

    booksToDisplay.forEach(function (element) {
        let tableRow = document.createElement("tr");
        mainTable.appendChild(tableRow);

        let itemName = document.createElement("td");
        itemName.innerText = element.name;
        tableRow.appendChild(itemName);

        let itemAuthor = document.createElement("td");
        itemAuthor.innerText = element.author;
        tableRow.appendChild(itemAuthor);

        let itemPages = document.createElement("td");
        itemPages.innerText = element.pages;
        tableRow.appendChild(itemPages);
    });
}


displayBooks(books);

const inputField = document.getElementById('inputField');
const filterButton = document.getElementById("filterButton");

filterButton.addEventListener("click", function () {
    const filteredBooks = books.filter(function (elem) {
        return elem.pages >= inputField.value;
    });
    displayBooks(filteredBooks); 
});
