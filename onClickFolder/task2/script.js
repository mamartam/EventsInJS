const pinkBtn = document.getElementById("pinkBtn");
const orangeBtn = document.getElementById("orangeBtn");
const greenBtn = document.getElementById("greenBtn");
const defultColor = document.getElementById("defultColor");
const page = document.getElementsByClassName("page");
page[0].style.background = "grey";

pinkBtn.addEventListener("click", function () {
    page[0].style.background = "pink";
});
orangeBtn.addEventListener("click", function () {

    page[0].style.background = "orange";

});
greenBtn.addEventListener("click", function () {

    page[0].style.background = "green";

});
defultColor.addEventListener("click", function () {

    page[0].style.background = "grey";

});
