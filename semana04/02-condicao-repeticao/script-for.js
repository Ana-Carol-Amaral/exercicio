'use strict'

var numero = prompt('Digite um número');

var i = 0;

var nomes = [
    'ana',
    'carol',
    'carolina'
];

while (i < nomes.length){
    console.log(nomes[i]);
    //i = i + i;
    i++;
}

/*
for(var i = 1; i <= 10; i++) {
    let result = numero + ' * ' + i + ' = ' + (numero * i) + '<br>';
    document.write(result);
}
*/