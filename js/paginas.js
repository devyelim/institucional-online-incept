
// Tela de Carregamento
window.addEventListener('load', function() {
  var telaCarregamento = document.getElementById('preLoad');
  var conteudoPagina = document.getElementById('contPags');

  setTimeout(function() {
    telaCarregamento.style.opacity = '0'; // Diminui a opacidade da tela de carregamento
    conteudoPagina.style.display = 'block'; // Mostra o conteúdo principal após 3 segundos

    // Espera um pouco mais para garantir que a transição termine antes de ocultar a tela de carregamento completamente
    setTimeout(function() {
      telaCarregamento.style.display = 'none'; // Oculta a tela de carregamento após a transição
    }, 1000); // Espera 1 segundo (1000 milissegundos) após a transição
  }, 1500); // 3000 milissegundos = 3 segundos
});



// Lista expandida menuside bar. Tranforma os subtopicos em dropdown
let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e)=>{
      let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
      arrowParent.classList.toggle("showMenu");
      });
    }
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".bx-menu");
    console.log(sidebarBtn);
    sidebarBtn.addEventListener("click", ()=>{
      sidebar.classList.toggle("close");
    });

