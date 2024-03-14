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
 

 
//  // JavaScript para recuperar e exibir os dados passados via URL
//  const queryString = window.location.search;
//  const urlParams = new URLSearchParams(queryString);

//  const title = urlParams.get('title');
//  const author = urlParams.get('author');
//  const imageUrl = urlParams.get('imageUrl');

//  document.getElementById('product-image').src = imageUrl;
//  document.getElementById('product-title').innerText = title;
//  document.getElementById('product-author').innerText = author;

//  // Atualiza o título da página com o título da imagem
//  document.title = `Incept Design | ${title}`;

//  function openProductPage(title, author, imageUrl) {
//     // Abre a página de exibição do produto e passa as informações via parâmetros na URL
//     window.open(`exibirprojeto.html?title=${encodeURIComponent(title)}&author=${encodeURIComponent(author)}&imageUrl=${encodeURIComponent(imageUrl)}`, '_blank');
// }



// Mudar Navbar conforme Scroll
window.addEventListener("scroll", function(){
    let nav = document.querySelector('#menu')
    nav.classList.toggle('rolagem',window.scrollY > 100)
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