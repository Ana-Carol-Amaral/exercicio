debugger
var numero = prompt('Digite um número 1 a 7');

numero = parseInt(numero);

switch(numero){
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    case 3:
        console.log('Quarta');
        break;
    case 4:
        console.log('Quinta');
        break;
    case 5:
        console.log('Sexta');
        break;
    case 6:
        console.log('Sábado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('Dia da semana inválido');
}

/*
if (numero == 1) {
    if (!confirm('algo')) {
        alert('Cancelado');
    }
}

if(nemero == 1 || numero == 5){
    alert(nemero);
}

if(numero == 1){
    console.log('1');
} else if(numero <= 0) {
console.log('Número negativo');
} else {
    console.log('Algum outro');
}
*/