/*const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
console.log(height);

const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const animaisLeft = listaAnimais.offsetLeft;
console.log(animaisLeft);

//

const primeiroH2 = document.querySelector('h2');
const h2Rect = primeiroH2.getBoundingClientRect();

console.log(h2Rect.top);

if (h2Rect.top < 0) {
  console.log("Passou do elemento");
}

if (window.innerWidth < 600) { // Não é bom usar isso, mas sim matcheMedia()
  console.log("Tela menor que 600px");
} else {
  console.log("Tela maior que 600px");
}

const small = window.matchMedia('(max-width: 600px)');

console.log(small);

if (small.matches == true) {
  console.log("Tela menor que 600px com matchMedia");
}*/

// Verificar a distância da primeira imagem em relação ao topo da página

const primeiraImg = document.querySelector('img');

const imgTop = primeiraImg.offsetTop;
console.log(imgTop);

// Retornar a soma da largura de todas as imagens

const todasImgs = document.querySelectorAll('img');

function somaImagens() {

  var somaLarguraImgs = 2;
  var larguraImg = 1;

  todasImgs.forEach((item) => {
    larguraImg = item.offsetWidth;
    somaLarguraImgs += larguraImg;
  })

  console.log(somaLarguraImgs);

}

window.onload = function () {
  somaImagens();
}


// Verificar se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth > 48 && linkHeight > 48) {
    console.log(link, " possui boa acessibilidade.")
  } else {
    console.log(link, " não possui boa acessibilidade");
  }
})

// Se o browser for menor que 720px, adicionar a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if (browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}