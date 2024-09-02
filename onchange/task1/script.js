let selectOpt = document.createElement("select");
selectOpt.setAttribute("id", "selectOptt");
document.body.appendChild(selectOpt);

let opt0 = document.createElement("option");
opt0.innerText = "Choose color";
opt0.setAttribute("disabled", "");
opt0.setAttribute("selected", "");
selectOpt.appendChild(opt0);

let opt1 = document.createElement("option");
opt1.innerText = 'red';
opt1.setAttribute("value", "red");
selectOpt.appendChild(opt1);

let opt2 = document.createElement("option");
opt2.innerText = 'green';
opt2.setAttribute("value", "green");
selectOpt.appendChild(opt2);

let opt3 = document.createElement("option");
opt3.innerText = 'blue';
opt3.setAttribute("value", "blue");
selectOpt.appendChild(opt3);

selectOpt.addEventListener("change", function(x){
    document.body.style.background = selectOpt.value;
})



