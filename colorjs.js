//alert("hfhfh");
//prompt("jkjk ");

let c1 = document.getElementById("b1");
let chosenc1 = c1.style.backgroundColor;
const colorArray = [];


let fff = function chooseColor(){

    c1.style.backgroundColor = promptValue();
    console.log(c1.style.backgroundColor);
    alert(chosenc1);
};

let promptValue = function(){
    let vv = prompt("enter hex color value : ");
    return  vv.toString();
};

c1.addEventListener("click",fff);



