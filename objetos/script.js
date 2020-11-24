var pessoa = {
  nome: 'Matheus',
  idade: 22,
  profissao: 'Técnico de TI',
  possuiFaculdade: false,
}

pessoa.nome;
pessoa.idade;
console.log(typeof pessoa);

console.log(`Seu nome é ${pessoa.nome}, você possui ${pessoa.idade} anos e sua profissão é ${pessoa.profissao}.`);

// Métodos:

/*
var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado ** 2;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
}
*/

var quadrado = {
  lados: 4,
  area(lado) { // Esse tipo de função abreviada, ou seja,, sem escrever "function", é uma atualização do ES6;
    return lado ** 2;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

// FIM

var pi = Math.PI;
var random = Math.random();

console.log(pi);
console.log(random);

// FIM

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

menu.backgroundColor = '#000';
menu.color = 'blue';
var bg = menu.backgroundColor;

var height = 120;
var menu2 = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  },
}

menu2.metadeHeight(); // Testando isso no console o resultado vai ser 25. Seria 60 se não tivesse usado "this".

// Construir objeto com os dados pessoais, possuindo pelo menos duas propriedades nome e sobrenome;

var dadosPessoais = {
  nome: ['Matheus', 'Sophia', 'Cleber'],
  sobrenome: ['Rodrigues', 'Borges', 'Paula'],
  mostrarNomeCompleto() {
    return `Seu nome completo é ${this.nome[0]} ${this.sobrenome[1]}` // o Array do js é igual ao do Java no sentido de começar do 0;
  },
}

console.log(dadosPessoais.mostrarNomeCompleto());

/* OU ENTÃO:

dadosPessoais.NomeCompleto = function () {
  return `Seu nome completo é ${this.nome[1]} ${this.sobrenome[0]}`
}

console.log(dadosPessoais.NomeCompleto());

*/

console.log(dadosPessoais.nome[0]);
console.log(dadosPessoais.sobrenome[1])
console.log(`Seu nome completo é ${dadosPessoais.nome[0]} ${dadosPessoais.sobrenome[1]}`) // Aqui escreve-se muito mais!!


/* Modificar o valor da propriedade preço para 3000:

var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

*/

var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco);

// Construir objeto de um cachorro que represente um labrador preto, com 10 anos, que late ao ver um homem;

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem' || 'Homem' || 'HOMEM') {
      return 'Latir';
    } else {
      return 'Nada';
    }
  }
}

// TUDO É OBJETO!!

var altura = 1.67;
var altura2 = 15060000;
var expAlt = 1506e4;
console.log(expAlt);

// Mostrar no console 3 propriedades ou métodos de string:

var testeString = 'Método de String';
console.log(testeString.length);
console.log(testeString.toUpperCase());
console.log(testeString.charAt(10));

// Nomear no console 5 propriedades ou métodos de elementos do DOM:

var btn = document.querySelector('.btn');
// btn.addEventListener.
// btn.innerHTML
// btn.getElementsByClassName
// btn.id