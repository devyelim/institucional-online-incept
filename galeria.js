window.addEventListener("scroll", function(){
let nav = document.querySelector('#menu-galeria')
nav.classList.toggle('rolagem',window.scrollY > 50)
})


// Mudança de logo conforme Scroll
jQuery("document").ready(function($){
	    	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$("#logogaleria").attr("src", "img/incept-ligth.png");
		} else {
			$("#logogaleria").attr("src", "img/incept-ligth.png");
		}      
	});

});


// Mostrar ao rolar
window.revelar = ScrollReveal({reset:true})

revelar.reveal('.nocturne', {
  duration: 1000,
  distance: '90px'
})



// Menu Mobile

let btnMenu = document.getElementById('btn-menu')
let menuMobile = document.getElementById('menu-mobile')
let overlayMenu = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
  menuMobile.classList.add('abrir-menu')
})

menuMobile.addEventListener('click', () => {
  menuMobile.classList.remove('abrir-menu')
})

overlayMenu.addEventListener('click', () => {
  menuMobile.classList.remove('abrir-menu')
})