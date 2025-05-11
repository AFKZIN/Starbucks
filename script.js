
let circulo = document.querySelector(".circulo");
let imgCopo = document.querySelector(".copo");

function trocarCor(cor) {
    circulo.style.backgroundColor = cor;
}

function trocarImagem(novaImagem) {  
    imgCopo.src = novaImagem;  
}