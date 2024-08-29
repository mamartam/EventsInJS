const hidden = document.getElementById("hidden");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    if (btn.innerText === "Show More") {
        hidden.style.display = "block";
        btn.innerText = "Show Less";

    }
    else if (btn.innerText === "Show Less") {
        hidden.style.display = "none";
        btn.innerText = "Show More";

    }

})