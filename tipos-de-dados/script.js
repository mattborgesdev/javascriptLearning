var name = 'Matheus';
console.log(typeof name);

var age = 22;
console.log(typeof age);

var team = null;
console.log(typeof team);

var symbol = Symbol();
console.log(typeof symbol);

// Concatenação:

var surname = 'Borges';
var nomeCompleto = name + ' ' + surname;
console.log(nomeCompleto);

team = 'Flamengo';
var goal = 40;
console.log('O Flamengo fez ' + goal + ' gols no Campeonato');

var frase = 'O dia \'está\' bonito';
var frase1 = 'O dia está bonito';
var frase2 = 'O dia "está" bonito';
var frase3 = "O dia 'está' bonito";

console.log(frase);
console.log(frase1);
console.log(frase2);
console.log(frase3);

var frase4 = `O Flamengo fez ${goal} gols no Campeonato`;
console.log(frase4)
console.log(`O Flamengo fez ${goal * 2} gols no Campeonato`)

// Exercícios:

var cor = 'Amarelo';

var saborPizza = '4 Queijos';

var idade = 22;

var nome = 'Matheus',
  sobrenome = 'Borges';
var nomeConcatenado = nome + ' ' + sobrenome;
console.log(nomeConcatenado);

var nomeES6 = `${nome} ${sobrenome}`;
console.log(nomeES6);

var phrase = "It's time";
console.log(phrase);

console.log(typeof phrase);
console.log(typeof nome);
console.log(typeof idade);

var pi = 3.14;
var exp = 2e10;
console.log(pi, exp);