// Your code goes here
const images = document.getElementsByTagName("img");
Array.from(images).forEach(img => {
    img.addEventListener("mouseover", (e) => {
        img.style.borderStyle = "solid"
        img.style.borderWidth = "5px"
    })
    img.addEventListener("mouseout", (e) => {
        img.style.borderStyle = "none"
        img.style.borderWidth = "0px"
    })
})

