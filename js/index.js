// Your code goes here


//add border on mouseover and remove on mouseout
const images = document.getElementsByTagName("img");
Array.from(images).forEach(img => {
    img.addEventListener("mouseover", (e) => {
        img.style.borderStyle = "solid"
        img.style.borderWidth = "5px"
        e.stopPropagation();
    })
    img.addEventListener("mouseout", (e) => {
        img.style.borderStyle = "none"
        img.style.borderWidth = "0px"
    })
})


//turn header red on wheel 
const funBus = document.querySelector(".logo-heading");
document.addEventListener("wheel", (e) => {
    funBus.style.color = "red";
})

//make img border dashed on double click
const funnyBus = document.querySelector(".intro img");
funnyBus.addEventListener("dblclick", (e) => {
    funnyBus.style.borderStyle = "dashed";
})

const welcome = document.querySelector("body");
welcome.addEventListener("load", (e) => {
    alert("Hello!");
})

const elements = document.querySelectorAll("div");
Array.from(elements).forEach(elem => {
    elem.addEventListener("focus", (e) =>{
        e.style.borderStyle = "solid";
        e.style.borderWidth = "15px";
    })
})




//prevent default on nav clicks
const nav = document.querySelectorAll("nav a");
Array.from(nav).forEach(a =>{
    a.addEventListener("click", (e) => {
        e.preventDefault();
    })
});