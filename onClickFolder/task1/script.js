const btn = document.getElementById("btn");
let text = document.getElementById("text");

btn.addEventListener("click", function () {
    if (text.innerHTML === "Press the button") {
        text.innerText = "Thank you";

    }
    else if (text.innerText === "Thank you") {
        text.innerText = "Press the button";
    }
});