// Selecionar todas as imagens do site

const img = document.querySelectorAll('img');
console.log(img); // NodeList

img.forEach(function (item, index) {
  console.log(item);
})


/*const selecaoImgs = document.getElementsByTagName('img');

console.log(selecaoImgs)

const arrayImgs = Array.from(selecaoImgs);
arrayImgs.forEach(function (item, index) {
  console.log(item);
})*/

// Retornar no console apenas as imagens que começam com a palavra imagem

const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

imagensAnimais.forEach(function (item, index) {
  console.log(item);
})

// Retornar todos os links interno (onde o href começa com #)

const linksInternos = document.querySelectorAll('a[href^="#"]');
console.log(linksInternos);

linksInternos.forEach(function (item, index) {
  console.log(item);
})

// Selecionar o primeiro h2 dentro de .animais-descricao

const firstH2 = document.querySelector('.animais-descricao h2');
console.log(firstH2);

// Selecionar o último p do site

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[--paragrafos.length]);