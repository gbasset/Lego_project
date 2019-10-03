const display_lego_red = document.getElementById("lego_red")
const display_lego_blue = document.getElementById("lego_blue")
const display_hamburger = document.getElementById("hamburger")

display_lego_red.style.display = "none";
display_hamburger.style.display = "none";
    
lego_blue.addEventListener('click', () => {
    display_hamburger.style.display = "flex";
    display_lego_red.style.display = "flex";
    display_lego_red.style.transform = "rotate(180deg)";
    display_lego_blue.style.display = "none";
})

lego_red.addEventListener('click', () => {
    display_lego_blue.style.display = "flex";
    display_lego_red.style.display = "none";
    display_hamburger.style.display = "none";
})

