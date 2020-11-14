var pi = 3.14;
var exp = 2e10;
console.log(pi, exp);

var exp2 = 2e2;
var exp3 = 2e3;
var exp4 = 2e-2;
var exp5 = 2e-3;
console.log(exp2, exp3, exp4, exp5);

var decimalNum = 2.5;
console.log(decimalNum);
var decimalNum2 = 2.5e-1;
console.log(decimalNum2);
var decimalNum3 = 2.5e-2;
console.log(decimalNum3);

// Operadores Aritméticos::

var soma = 2 + 1; // 3
var subtracao = 2 - 1; // 1
var multiplicacao = 2 * 1; // 2
var divisao = 2 / 1; // 2
var expoente = 2 ** 3; // 8
var modulo = 2 % 1; // 0

// Fim

var testeNan = 'Número 1' / 2;
console.log(isNaN(testeNan));

var testeNan2 = '1' / 2;
console.log(isNaN(testeNan2));

// Operadores Aritméticos Unários:

var incremento = 5;
console.log(++incremento); // esse adiciona antes

var incremento2 = 5;
console.log(incremento2++); // esse adiciona depois

var decremento = 4;
console.log(--decremento);

var decremento2 = 4;
console.log(decremento2--);

var StringNum = '28';
console.log(-StringNum - 5);

var possuiFaculdade = true;
console.log(+possuiFaculdade);

var possuiFaculdade2 = false;
console.log(+possuiFaculdade2);

var real = +'28';
var real2 = '28';
console.log(real);
console.log(typeof real);
console.log(typeof real2);


// Exercícios

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
// Resposta: 35;

// Crie duas expressões que retornem NaN
var exNaN = '20e';
var exNaN2 = '5f';
console.log(isNaN(exNaN));
console.log(isNaN(exNaN2));

// Somar a string '200' com o número 50 e retornar 250
var ex3 = '200';
var numb = 50;
var somaEx = +ex3 + numb;
console.log(somaEx);

// Incremente o valor 5 e retorne o seu valor incrementado
var inc = 5;
console.log(++inc);

//