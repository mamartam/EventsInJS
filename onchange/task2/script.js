let inputField = document.createElement("input");
inputField.setAttribute("id", "inputt");
inputField.setAttribute("type", "text");
document.body.appendChild(inputField);

let youWroteDown = document.createElement('p');
youWroteDown.innerText = "You put down ...";
document.body.appendChild(youWroteDown);

let ppp = document.createElement("p");
ppp.setAttribute("id", "pP");
ppp.style.color = 'red';
document.body.appendChild(ppp);

inputField.addEventListener("change", function(){
    ppp.innerText = inputField.value;

})


