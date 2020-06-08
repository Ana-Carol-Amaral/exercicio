'use strict'

var idade = prompt('Qual a sua idade?');

if(idade >= 18){
    let resposta = confirm('Você deseja comprar o ingresso?');
    
    if(resposta)
        alert('Okay, você entrou!');
        else
        alert('Okay, você saiu! :\'(');

    } else {
    alert('Você não pode entrar!');
}

/*
var obj = {
    nome: 'Carol',
    idade: 18,
    trabalha: 'não'
};

//console.log(obj);
console.table(obj);


const idade = 18
var nome = 'Ana';
alert(idade);


if (1 + 1 == 2){
    let nome  = 'Carolina';
    alert(nome);
}
*/