// Your code goes here


//add border on mouseover and remove on mouseout
const images = document.getElementsByTagName("img");
Array.from(images).forEach(img => {
    img.addEventListener("mouseover", (e) => {
        img.style.borderStyle = "solid"
        img.style.borderWidth = "5px"
        e.stopImmediatePropagation(); //stop bubbling through DOM
    })
    img.addEventListener("mouseout", (e) => {
        if(img.style.borderStyle == "solid"){ //don't remove border if the border is dashed
        img.style.borderStyle = "none"
        img.style.borderWidth = "0px"
        }
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

//alert Hello! if user presses h key
document.addEventListener("keydown", (e) =>{
    if(e.key === "h"){
        alert("Hello!");
    }else{alert("try pressing h")};
})



//add picture to nav on page load
const navBar = document.querySelector(".nav-container")
const navImg = document.createElement("img");
navImg.setAttribute("src", "https://img.icons8.com/plasticine/2x/dog.png")
window.addEventListener("load", (e) => {
    navBar.prepend(navImg);
    navImg.style.width = "5%";
})

//adds red border on focussed element
navBarLinks = document.querySelectorAll(".nav a");
Array.from(navBarLinks).forEach(link => {
    link.addEventListener("focus", (e) =>{
        e.target.style.background = "orange"
        e.target.style.borderStyle = "solid"
        e.target.style.borderColor = "red"
        e.target.style.borderWidth = "10px";
    });
});
//undo those changes when unfocussed
Array.from(navBarLinks).forEach(link => {
    link.addEventListener("blur", (e) =>{
        e.target.style.background = "none"
        e.target.style.borderStyle = "none"
        e.target.style.borderColor = "none"
        e.target.style.borderWidth = "0px";
    });
});

//flicker the nav background color on resize
window.addEventListener("resize", (e) =>{
    setInterval(() =>{
        if(navBar.style.backgroundColor === "grey"){
        navBar.style.backgroundColor = "white"
    }else {navBar.style.backgroundColor = "grey"}
    }, 1000)
})

//make background purple on img drag
Array.from(images).forEach(img => {
    img.addEventListener("dragstart", (e) => {
        document.body.style.backgroundColor = "purple";
    })
});






//prevent default on nav clicks
const nav = document.querySelectorAll("nav a");
Array.from(nav).forEach(a =>{
    a.addEventListener("click", (e) => {
        e.preventDefault();
    })
});