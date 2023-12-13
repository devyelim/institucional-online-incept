// Tela de Carregamento
window.addEventListener('load', function() {
  var telaCarregamento = document.getElementById('telaCarregamento');
  var conteudoPagina = document.getElementById('conteudoPagina');

  setTimeout(function() {
    telaCarregamento.style.opacity = '0'; // Diminui a opacidade da tela de carregamento
    conteudoPagina.style.display = 'block'; // Mostra o conteúdo principal após 3 segundos

    // Espera um pouco mais para garantir que a transição termine antes de ocultar a tela de carregamento completamente
    setTimeout(function() {
      telaCarregamento.style.display = 'none'; // Oculta a tela de carregamento após a transição
    }, 1000); // Espera 1 segundo (1000 milissegundos) após a transição
  }, 1500); // 3000 milissegundos = 3 segundos
});


// Mudar Navbar conforme Scroll
window.addEventListener("scroll", function(){
  let nav = document.querySelector('#menu')
  nav.classList.toggle('rolagem',window.scrollY > 200)
});

// window.addEventListener("scroll", function(){
//   let ul = document.querySelector('#menu-menor')
//   ul.classList.toggle('rolagem',window.scrollY > 0)
// })


// Animação Maquina de Escrever Tela Incial

// const phrases = [' Incept', ' uma idéia', ' um time'];
// let index = 0;
// let letterIndex = 0;
// let currentPhrase = phrases[index];
// let typingText = document.getElementById('typing');
// let prefix = document.getElementById('prefix');

// function type() {
//   if (letterIndex < currentPhrase.length) {
//     typingText.innerHTML += currentPhrase.charAt(letterIndex);
//     letterIndex++;
//     setTimeout(type, Math.floor(Math.random() * 200) + 100); // Velocidade de digitação aleatória
//   } else {
//     setTimeout(erase, 2000); // 2.5 segundos para reiniciar
//   }
// }

// function erase() {
//   if (letterIndex > 0) {
//     typingText.innerHTML = currentPhrase.substring(0, letterIndex - 1);
//     letterIndex--;
//     setTimeout(erase, 100); // Velocidade em que se apaga
//   } else {
//     index = (index + 1) % phrases.length;
//     currentPhrase = phrases[index];
//     setTimeout(type, 600);
//   }
// }

// type(); // Começar a animação



// Mudar logo conforme Scroll
jQuery("document").ready(function($){
	    	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$("#logo").attr("src", "img/incept-ligth.png");
		} else {
			$("#logo").attr("src", "img/incept-ligth.png");
		}      
	});

});

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



// Animações ao Scroll
const my0bserver = new IntersectionObserver((entries) => {
  entries.forEach( (entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    } else {
      entry.target.classList.remove('visible')
    }
  })
})

const elements = document.querySelectorAll('.ocult')

// elements.forEach( (element) => my0bserver.observe(element))


// var onda1 = document.getElementById('onda1')
// var onda2 = document.getElementById('onda2')
// var onda3 = document.getElementById('onda3')
// var onda4 = document.getElementById('onda4')


// Modo Escuro/Dark

// let trilho = document.getElementById('trilho')
// let body = document.querySelector('body')


// trilho.addEventListener('click',()=>{
//   trilho.classList.toggle('dark-mode')
//   body.classList.toggle('dark-mode')
// })


// Revelar ao Scrollar

window.revelar = ScrollReveal({reset:true})

// Topo do Site

revelar.reveal('.nocturne', {
  duration: 1000,
  distance: '90px'
})


// Efeito Cards de produtos

revelar.reveal('.efeito-card1', {
  duration: 2000,
  distance: '90px',
  delay: 500
})

revelar.reveal('.efeito-card2', {
  duration: 2000,
  distance: '90px',
  delay: 600
})

revelar.reveal('.efeito-card3', {
  duration: 2000,
  distance: '90px',
  delay: 700
})

revelar.reveal('.efeito-card4', {
  duration: 2000,
  distance: '90px',
  delay: 800
})



// Efeito Card do Portifolio
revelar.reveal('.efeito-card5', {
  duration: 2000,
  distance: '90px',
  delay: 500
})

revelar.reveal('.efeito-card6', {
  duration: 2000,
  distance: '90px',
  delay: 600
})

revelar.reveal('.efeito-card7', {
  duration: 2000,
  distance: '90px',
  delay: 700
})

revelar.reveal('.efeito-card8', {
  duration: 2000,
  distance: '90px',
  delay: 800
})


// Efeito surgir das laterais

revelar.reveal('.esquerda-direita', {
  duration: 1000,
  distance: '90px',
  delay: 500,
  origin: 'left'
})

revelar.reveal('.direita-esquerda', {
  duration: 1000,
  distance: '90px',
  delay: 600,
  origin: 'right'
})


// Campos Formulario Email

revelar.reveal('.fall-email', {
  duration: 1000,
  distance: '15px',
  delay: 300,
  origin: 'top'
})

revelar.reveal('.fall-name', {
  duration: 1000,
  distance: '15px',
  delay: 400,
  origin: 'top'
})

revelar.reveal('.fall-mensagem', {
  duration: 1000,
  distance: '15px',
  delay: 500,
  origin: 'top'
})

revelar.reveal('.fall-env', {
  duration: 1000,
  distance: '15px',
  delay: 600,
  origin: 'top'
})



// Painel de controle em Projetos. Oculta e revela projetos de acordo com as classes recebidas.

let list = document.querySelectorAll('.list');
let projeto = document.querySelectorAll('.projeto');

for(let i = 0; i<list.length; i++){
  list[i].addEventListener('click', function (){
    for(let j = 0; j<list.length; j++){
      list[j].classList.remove('active');
    }
    this.classList.add('active');

    let dataFilter = this.getAttribute('data-filter');
    for( let k = 0; k<projeto.length; k++){
      projeto[k].classList.remove('active');
      projeto[k].classList.add('hide');

      if(projeto[k].getAttribute('data-item') == dataFilter ||
      dataFilter == "tudo"){
        projeto[k].classList.remove('hide');
        projeto[k].classList.add('active');

      }
    }
  })
}


// Função Ver mais em Planos e preços

$(document).ready(function() {
  $('.read-more').click(function() {
    var $content = $(this).closest('.cardplanos').find('.contentplanos');

    $content.toggleClass('expanded');

    if ($content.hasClass('expanded')) {
      $content.css('max-height', $content[0].scrollHeight + 'px');
      $(this).text('Ver menos');
    } else {
      $content.css('max-height', '190px'); // Altura inicial do conteúdo
      $(this).text('Ver mais');
    }
  });
});




let timeout;

function iniciarAnimacao() {
  const botao = document.getElementById('meuBotao');
  botao.classList.add('pulsando');
}

function adicionarPulsacao() {
  timeout = setTimeout(() => {
    const botao = document.getElementById('meuBotao');
    botao.classList.add('pulsando');
  }, 8000); // 8 segundos
}

function removerPulsacao() {
  const botao = document.getElementById('meuBotao');
  botao.classList.remove('pulsando');
  clearTimeout(timeout);
  adicionarPulsacao();
}

document.addEventListener('DOMContentLoaded', () => {
  adicionarPulsacao();

  document.addEventListener('mousemove', removerPulsacao);
  document.addEventListener('keypress', removerPulsacao);
});


