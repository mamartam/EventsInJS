let inputField = document.createElement('input');
inputField.setAttribute("type", "text");
inputField.setAttribute("id", "inpField");
document.body.appendChild(inputField);


let listItemsConatiner = document.createElement("div");
document.body.appendChild(listItemsConatiner);

let listItems = document.createElement("ul");
listItemsConatiner.appendChild(listItems);

inputField.addEventListener("change", function () {
    if (inputField.value !== "") {
        let lItem = document.createElement("li");
        lItem.innerText = inputField.value;
        console.log(inputField.value);
        listItems.appendChild(lItem);
        inputField.value = "";
    }
});
