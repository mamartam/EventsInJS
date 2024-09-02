let inputField = document.createElement("input");
inputField.setAttribute('type', 'text');
document.body.appendChild(inputField);

let listItemContainer = document.createElement("div");
document.body.appendChild(listItemContainer);

let items = document.createElement('ul');
listItemContainer.appendChild(items);

let listItem1 = document.createElement('li');
listItem1.innerText = 'Hello world, my name is Martha!';
items.appendChild(listItem1);

let listItem2 = document.createElement('li');
listItem2.innerText = 'Hello world, my name is Mark!';
items.appendChild(listItem2);

let listItem3 = document.createElement('li');
listItem3.innerText = 'Hello world, my name is John!';
items.appendChild(listItem3);

inputField.addEventListener("change", function () {
    let inputText = inputField.value.toLowerCase();
    let anyMatch = false;

    [listItem1, listItem2, listItem3].forEach(item => {
        if (item.innerText.toLowerCase().includes(inputText)) {
            item.style.display = 'block';
            anyMatch = true;
        } else {
            item.style.display = 'none';
        }
    });

    if (!anyMatch) {
        let errorMsg = document.createElement('p');
        errorMsg.innerText = "There is no such text!!!";
        document.body.appendChild(errorMsg);
    }
});
