'use strict'

var maxlength = 150 ;

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('frmCadastro').addEventListener('submit', function(){
        alert('AEEEEEEEE');
    });
});

function contaCaracteres(){
    let text = document.getElementById('txtMensagem');
    ///////////150--------------------------10
    let contador = maxlength - text.value.length;

    let caracteres = document.getElementById('caracteres');
    caracteres.innerText = contador;

    if(contador < 0){
        caracteres.style.color = 'red';
        text.style.border = '3px solid red';
    }else{
        //caracteres.classNome = 'classeCSS';
        caracteres.style.color = 'green';
        text.style.border = '3 px solid green';
    }
}

function enviaForm(){
    return false;
}