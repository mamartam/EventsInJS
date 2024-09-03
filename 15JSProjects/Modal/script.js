const btn = document.getElementById("btn");
const closeBtn = document.getElementById("closeBtn");
const mc = document.getElementById("mc");
const hm = document.getElementById("hm");
const page = document.getElementById("pagee");
btn.addEventListener("click", function(){
    hm.style.display = 'block';
    mc.style.display = 'none';
    page.style.filter = "blur(4px)";
    
})

closeBtn.addEventListener('click', function(){
    hm.style.display = 'none';
    mc.style.display = 'flex';
    page.style.filter = "none";
})



