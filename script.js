var content = document.querySelector('#hamburger-content');
var sidebarBody = document.querySelector('#hamburger-sidebar-body');
var button = document.querySelector('#hamburger-button');/* Le logo */
var activatedClass = 'hamburger-activated'; /* var qui permet de savoir si un élément est activé*/

sidebarBody.innerHTML = content.innerHTML;			

button.addEventListener('click', function(e) {
	e.preventDefault(); /* annule les comportements par defaults*/

	this.parentNode.classList.add(activatedClass);
});


