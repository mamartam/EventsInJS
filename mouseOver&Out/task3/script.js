const imgg = document.getElementById("imgg");
imgg.style.width = "200px";

imgg.addEventListener("mouseover", function(){
    imgg.style.width = "250px";

})
imgg.addEventListener("mouseout", function(){
    imgg.style.width = "200px";

})