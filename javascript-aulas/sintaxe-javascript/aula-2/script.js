// tipos primitivos

// boolean
var vOuF= false;
console.log(typeof(vOuF));

// number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// string
var nome = 'juca';
console.log(typeof(nome));

// como declarar
var variavel = 'juca';
variavel = 'bala';
console.log(variavel);

let variavel2 = 'juca';
variavel2 = 'bala';
console.log(variavel2);

const constante = 'ana';
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

// atribuição
var atribuicao = 'juca';

// comparação
var comparacao = '0' == 0;
console.log(comparacao);

//comparação identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

// adição
var adicao = 1 + 1;
console.log(adicao);

// subtração
var subtracao = 2 - 1;
console.log(subtracao);

// multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao);

// divisão real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

// divisão inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

// potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

// maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

// menor que
var menorQue = 5 < 2;
console.log(menorQue);

// maior ou igual
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

// menor ou igual
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

// e
var e = true && false;
console.log(e);

// ou
var ou = true || false;
console.log(ou);

//nao (inversão)
var nao = !true;
console.log(nao);

