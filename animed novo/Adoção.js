function toggleMenu() {
    var menu = document.querySelector(".menu");
    menu.classList.toggle("responsive");
}

startList = function() {
    if (document.all&&document.getElementById) {
    navRoot = document.getElementById("menuDropDown");
    for (i=0; i<navRoot.childNodes.length; i++) {
    node = navRoot.childNodes[i];
    if (node.nodeName=="LI") {
    node.onmouseover=function() {
    this.className+=" over";
      }
      node.onmouseout=function() {
      this.className=this.className.replace
      (" over", "");
       }
       }
      }
     }
    }
    window.onload=startList;

    let indice = 0;
mostrarImagem(indice);

function mudarImagem(n) {
    mostrarImagem(indice += n);
}

function mostrarImagem(n) {
    const imagens = document.getElementsByClassName("imagem");
    if (n >= imagens.length) {indice = 0}
    if (n < 0) {indice = imagens.length - 1}

    for (let i = 0; i < imagens.length; i++) {
        imagens[i].style.display = "none";  
    }
    imagens[indice].style.display = "block";  
}
$(document).ready(function(){
    $(".menu-button").click(function(){
    $(".menu-bar").toggleClass( "open" );
    })
    })