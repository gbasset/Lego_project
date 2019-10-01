document.getElementById("lego_blue").style.display = "flex";
document.getElementById("lego_red").style.display = "none";

const menu = document.getElementById("hamburger").style.display = "none";
const blueLego = document.getElementById("lego_blue")
const redLego = document.getElementById("lego_red")

blueLego.addEventListener('click', () => {
	redLego.style.display = 'flex';
	redLego.style.transform = 'rotate(180deg)';
	hamburger.style.display = 'flex';
	blueLego.style.display = 'none';
});

redLego.addEventListener('click', () => {
	redLego.style.display = 'none';
	blueLego.style.display = 'flex';
	hamburger.style.display = 'none';
});

