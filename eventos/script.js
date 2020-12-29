/*const img = document.querySelector('img');

function callback() {
  console.log('Clicou');
}

//img.addEventListener('click', callback);

//

const imagensLista = document.querySelector('.animais-lista');

function callbackLista(event) {
  console.log(event.target);
  console.log(event.type);
}

imagensLista.addEventListener('click', callbackLista);

console.log(imagensLista);

//

const h1 = document.querySelector('h1');

function handleEvent(event) {
  console.log(event.type, event);
}

//h1.addEventListener('click', handleEvent);
//h1.addEventListener('mouseenter', handleEvent);

window.addEventListener('scroll', handleEvent);
window.addEventListener('resize', handleEvent);

function handleKeyboard(event) {
  if (event.key === "a") {
    document.body.classList.toggle('azul');
  }
}

window.addEventListener('keydown', handleKeyboard);

const imgs = document.querySelectorAll('img');

function handleImg(event) {
  console.log(event.target.getAttribute('src'));
}

imgs.forEach((img) => {
  img.addEventListener('click', handleImg);
})
*/

// Exercícios

// Quando o usuário clicar nos links interno do site, adicionar a classe ativo ao item clicado e remover dos demais itens
// caso eles possuam a mesma. Previna o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]'); // aqui seleciono somente os links internos, vide a hashtag

function handleLink(event) { // essa função vai adicionar a classe ativo ao item clicado e remover dos demais caso possuam
  event.preventDefault();

  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  })

  this.classList.add('ativo');
}

linksInternos.forEach((link) => { // esse loop vai passar por cada item dos links internos e adicionar a função acima
  link.addEventListener('click', handleLink)
})



// Selecionar todos os elementos do site começando a partir do body, ao clique mostrar exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *');

/*function handleElemento(event) {
  console.log(event.currentTarget);
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', handleElemento);
})*/


// Utilizado o código anterior, ao invés de mostrar no console, remover o elemento que está sendo clicado, o método remove() remove um elemento

/*function handleElemento(event) {
  event.currentTarget.remove();
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', handleElemento);
})*/

// Se o usuário clicar na tecla (t), aumenta o texto do site

function handleKeyboard(event) {
  if (event.key === "t") {
    document.documentElement.classList.add('textomaior');
  }
}

window.addEventListener('keydown', handleKeyboard);
