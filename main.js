/*
const : cria variavel do tipo constante.
Só poderá alerar o vallor definido inicialmente através de mutações
(objetos e arrays).
*/ 


let
const nomevariavel = "João";

const usuario = {nome : "Jesus",idade :26};

usuario.nome = 'Maria';

const meuVetor = [1, 2, 3, 4, 5];

//mutação do array atráves dos indices
meuVetor[0] = 90;
meuVetor[2] = 93;

console.log(usuario);
console.log(meuVetor);

// variável let
let valor = 3;
letnome = 'Cláudia Let';
let alura = 1.86;
let contemvalor = true;

console.log(user);

// escopo
var exibemessagem = function(){
     var mensagem = "Minha Mesagem";
     console.log(messagem)
}

exibemessagem();