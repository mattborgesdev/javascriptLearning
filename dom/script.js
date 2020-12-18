// Retornar a ult da página atual utilizando o objeto window

const urlPagina = window.location.href;
document.write(urlPagina);

// Selecionar o primeiro elemento da página que possuir a classe ativo

const elementAtive = document.querySelector('.ative'); // essa propriedade "querySelector" só pega o primeiro elemento que encontrar no document
elementAtive.innerText = "Este é o novo .ative do h1";

// Retornar a linguagem do navegador

const languagePage = window.navigator.language;
console.log(languagePage);

// Retornar a largura da janela

const widthPage = window.innerWidth;
console.log(widthPage);