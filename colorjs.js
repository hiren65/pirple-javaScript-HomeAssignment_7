//alert("hfhfh");
//prompt("jkjk ");

let c1 = document.getElementById("b1");
let s1 = document.getElementById("s1");
let c2 = document.getElementById("b2");
let s2 = document.getElementById("s2");
let c3 = document.getElementById("b3");
let s3 = document.getElementById("s3");
let c4 = document.getElementById("b4");
let s4 = document.getElementById("s4");
let c5 = document.getElementById("b5");
let s5 = document.getElementById("s5");
let c6 = document.getElementById("b6");
let s6 = document.getElementById("s6");
let c7 = document.getElementById("b7");
let s7 = document.getElementById("s7");
let c8 = document.getElementById("b8");
let s8 = document.getElementById("s8");
let c9 = document.getElementById("b9");
let s9 = document.getElementById("s9");
let c10 = document.getElementById("b10");
let s10 = document.getElementById("s10");

//let chosenc1 = c1.style.backgroundColor;
const colorArray = [c1];


let fff = function chooseColor(event){

    alert(event.target.id);
    if (event.target.id==="b1"){
        c1.style.backgroundColor = promptValue();
        s1.innerText = c1.style.backgroundColor;

        return;
    }
    if (event.target.id==="b2"){
        c2.style.backgroundColor = promptValue();
        s2.innerText = c2.style.backgroundColor;
        return;
    }
    if (event.target.id==="b3"){
        c3.style.backgroundColor = promptValue();
        s3.innerText = c3.style.backgroundColor;
        return;
    }
    if (event.target.id==="b4"){
        c4.style.backgroundColor = promptValue();
        s4.innerText = c4.style.backgroundColor;
        return;
    }
    if (event.target.id==="b5"){
        c5.style.backgroundColor = promptValue();
        s5.innerText = c5.style.backgroundColor;
        return;
    }
    if (event.target.id==="b6"){
        c6.style.backgroundColor = promptValue();
        s6.innerText = c6.style.backgroundColor;
        return;
    }
    if (event.target.id==="b7"){
        c7.style.backgroundColor = promptValue();
        s7.innerText = c7.style.backgroundColor;
        return;
    }
    if (event.target.id==="b8"){
        c8.style.backgroundColor = promptValue();
        s8.innerText = c8.style.backgroundColor;
        return;
    }
    if (event.target.id==="b9"){
        c9.style.backgroundColor = promptValue();
        s9.innerText = c9.style.backgroundColor;
        return;
    }
    if (event.target.id==="b10"){
        c10.style.backgroundColor = promptValue();
        s10.innerText = c10.style.backgroundColor;
        return;
    }

    console.log(event.target.nodeName);

};

let promptValue = function(){
    let vv = prompt("enter hex color value : ");
    return  vv.toString();
};

c1.addEventListener("click",fff);
c2.addEventListener("click",fff);
c3.addEventListener("click",fff);
c4.addEventListener("click",fff);
c5.addEventListener("click",fff);
c6.addEventListener("click",fff);
c7.addEventListener("click",fff);
c8.addEventListener("click",fff);
c9.addEventListener("click",fff);
c10.addEventListener("click",fff);


