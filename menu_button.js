var display_blue = document.getElementById("lego_blue")
var display_red = document.getElementById("lego_red")
display_red.style.display = "none"

function switch_button()
{
    display_blue.style.display = "none";
    display_red.style.display = "flex";
}