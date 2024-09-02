const inputField = document.getElementById("inputField");
inputField.addEventListener("mousedown", function(){
    inputField.setAttribute("placeholder", "Typing");
})
inputField.addEventListener("mouseup", function(){
    inputField.setAttribute("placeholder", "Stopped typing");
})
