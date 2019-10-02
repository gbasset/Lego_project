document.getElementById("lego_blue").style.display = "flex";
document.getElementById("lego_red").style.display = "none";
document.getElementById("hamburger").style.display = "none";

function deploy_menu() {
	var display_lego_red = document.getElementById("lego_red")
	var display_lego_blue = document.getElementById("lego_blue")
    var display_hamburger = document.getElementById("hamburger")
	display_hamburger.style.display = "flex";
	display_lego_red.style.display = "flex";
	display_lego_red.style.transform = "rotate(180deg)";
	display_lego_blue.style.display = "none";
  }

  function hide_menu() {
	var display_lego_red = document.getElementById("lego_red")
	var display_lego_blue = document.getElementById("lego_blue")
    var display_hamburger = document.getElementById("hamburger")
	display_lego_blue.style.display = "flex";
	display_hamburger.style.display = "none";
    display_lego_red.style.display = "none";
  }

