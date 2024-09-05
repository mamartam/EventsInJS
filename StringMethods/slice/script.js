// Task 1 
let string1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, totam.";
function slice1(str) {
    console.log(str.slice(2, 6));
}
slice1(string1);

// Task 2
let string2 = "Illum, totam.";
function removeFirst4Symbols(str) {
    console.log(str.slice(4));
}
removeFirst4Symbols(string2);

// Task 3
let string3 = "sit amet consectetur adipisicing elit";
function removeLast3Symbols(str) {
    let lng = str.length;
    console.log(lng);
    let removee = lng - 3;
    console.log(str.slice(0, removee));
}
removeLast3Symbols(string3);

