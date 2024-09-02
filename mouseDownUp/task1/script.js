const divv = document.getElementById("divv");
divv.style.height = "500px";
divv.style.width = "500px";
divv.style.background = 'grey';
divv.addEventListener("mousedown", function(){
    divv.style.background = 'red';
})
divv.addEventListener("mouseup", function(){
    divv.style.background = 'green';
})