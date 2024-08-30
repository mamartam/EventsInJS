const btn = document.getElementById("btn");
btn.style.height = "50px";
btn.style.width = "100px";
btn.style.background = "grey";
btn.addEventListener("mouseover", function () {
    btn.style.background = "red";
    btn.innerText = "Click here!";
})
btn.addEventListener("mouseout", function () {
    btn.style.background = "grey";
    btn.innerText = "Button";

})