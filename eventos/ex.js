// Exercícios

// Quando o usuário clicar nos links interno do site, adicionar a classe ativo ao item clicado e remover dos demais itens
// caso eles possuam a mesma. Previna o comportamento padrão desses links

// const linksInternos = document.querySelectorAll('a[href^="#"]');

// function handleLink(event) {
//   event.preventDefault();

//   linksInternos.forEach((link) => {
//     link.classList.remove('ativo');
//   })

//   this.classList.add('ativo');
// }

// linksInternos.forEach((link) => {
//   link.addEventListener('click', handleLink);
// })



// Selecionar todos os elementos do site começando a partir do body, ao clique mostrar exatamente quais elementos estão sendo clicados

const allElements = document.querySelectorAll('body *');

// function handleElement(event) {
//   console.log(event.currentTarget);
// }

// allElements.forEach((item) => {
//   item.addEventListener('click', handleElement);
// })


// Utilizado o código anterior, ao invés de mostrar no console, remover o elemento que está sendo clicado, o método remove() remove um elemento

// function handleElement(event) {
//   event.currentTarget.remove();
// }

// allElements.forEach((item) => {
//   item.addEventListener('click', handleElement);
// })



// Se o usuário clicar na tecla (t), aumenta o texto do site

function handleKeyboard(event) {
  if (event.key === "t") {
    document.documentElement.classList.toggle("textomaior");
  }
}

window.addEventListener('keydown', handleKeyboard);