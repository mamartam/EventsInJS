const input = document.getElementById("input");
const btn = document.getElementById("btn");
const list = document.getElementById("list");
const divv = document.getElementById("divv");

const ppp = document.createElement("p");
ppp.innerText = "Please write smth";

btn.addEventListener("click", function () {
    const listItem = document.createElement("li");
    listItem.innerText = input.value;

    if (input.value === "") {
        if (!divv.contains(ppp)) {
            divv.appendChild(ppp);
        }
    } else {
        list.appendChild(listItem);
        if (divv.contains(ppp)) {
            divv.removeChild(ppp);
        }
    }
    input.value = "";
});
