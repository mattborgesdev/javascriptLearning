/* const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('azul', 'teste');
menu.classList.toggle('azul'); // se não tiver ele adiciona
menu.classList.toggle('azul'); // se tiver ele remove

if (menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}

console.log(menu.className); // retorna uma String com o nome das classes
// menu.className = "novo-nome-da-classe";

menu.className += ' vermelho';

const animais = document.querySelector('.animais');

console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');

const srcImg = img.getAttribute('alt');

console.log(srcImg);

img.setAttribute('alt', 'É uma raposa');

const possuiAlt = img.hasAttribute('alt');

console.log(possuiAlt);  */

// Exercícios

// Adicionar a classe ativo a todos os links do menu

const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
  item.classList.add('ativo');
})

// Remover a classe ativa de todos os itens do menu e manter apenas o primeiro

itensMenu.forEach((item) => {
  item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');

// Verificar se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute('alt');
  console.log(img, possuiAtributo);
})

// Modificar o href do link externo do menu

const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://google.com');

console.log(link);