const titulos = document.getElementsByClassName('titulo');
const tituloArray = Array.from(titulos);

tituloArray.forEach(function (item, index, array) {
  console.log(item, index, array);
})

// const imgs = document.querySelectorAll('img');

// Arrow Function:

/*imgs.forEach((item, index) => {
  console.log(item, index);
})*/

//imgs.forEach((item, index) => console.log(item));


// Exercícios

// Mostrar no console cada parágrafo do site

const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((item, index) => {
  console.log(item, index);
})

// Mostrar o texto dos parágrafos no console

paragrafos.forEach((item, index) => {
  console.log(item.innerText, index);
})

// Como corrigir os erros abaixo?

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
})

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);