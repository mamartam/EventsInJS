const products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Phone', price: 800 },
    { name: 'Tablet', price: 600 },
    { name: 'Monitor', price: 300 },
    { name: 'Keyboard', price: 100 }
];

function displayProducts(products) {

    const existingTable = document.querySelector('table');
    if (existingTable) {
        existingTable.remove();
    }


    const table = document.createElement('table');
    document.body.appendChild(table);

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headerName = document.createElement('th');
    headerName.innerText = 'Product Name';
    const headerPrice = document.createElement('th');
    headerPrice.innerText = 'Price';
    headerRow.appendChild(headerName);
    headerRow.appendChild(headerPrice);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Створення тіла таблиці
    const tbody = document.createElement('tbody');
    products.forEach(function (element) {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.innerText = element.name;
        const priceCell = document.createElement('td');
        priceCell.innerText = element.price;
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
}

displayProducts(products);

const inputField = document.createElement('input');
inputField.setAttribute('placeholder', 'Enter minimum price');
inputField.setAttribute('type', 'number');
document.body.appendChild(inputField);

const filterButton = document.createElement('button');
filterButton.innerText = 'Filter Products';
document.body.appendChild(filterButton);

filterButton.addEventListener('click', function () {
    const minPrice = parseFloat(inputField.value);
    if (!isNaN(minPrice)) {
        const filteredProducts = products.filter(function (product) {
            return product.price >= minPrice;
        });
        displayProducts(filteredProducts); 
    } else {
        alert('Please enter a valid number');
    }
});
