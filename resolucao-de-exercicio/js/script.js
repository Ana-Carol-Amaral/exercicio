'use strict'

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('frmCadastro').addEventListener('submit', (event) => { 
        var obj = getAttributes();

        console.log(obj);

        if (!validar(obj))
            event.preventDefault();
    });
});

function getAttributes(){
    return {
        nome: [getValue('txtNome'), 'txtNome'],
        email: [getValue('txtEmail'), 'txtEmail'],
        senha: [getValue('txtSenha'), 'txtSenha'],
        conf: [getValue('txtConf'), 'txtConf'],
        genero: [getValue('txtGenero'), 'txtGenero'],
        data: [getValue('txtData'), 'txtData'],
        sobre: [getValue('txtSobre'), 'txtSobre']
    };
}

function validar(obj){
    let erros = [];

    if(obj.nome[0].length < 3 || obj.nome[0].length > 50){
        erros.push('Informe um nome válido')
        setBorderColor(obj.nome[1], 'form invalid');
    }else{
        setBorderColor(obj.nome[1], 'form valid');
    }

    if((obj.email[0].length < 5 || obj.email[0].length > 100) || !/.+?\@.+?\..+/.test(obj.email[0])) {
        erros.push('Informe um email válido')
        setBorderColor(obj.email[1], 'form invalid');
    }else{
        setBorderColor(obj.email[1], 'form valid');
    }

    if((obj.senha[0].length < 7 || obj.nome[0].length > 100) || obj.senha[0] != obj.conf[0]){
        erros.push('Informe uma senha válida')
        setBorderColor(obj.senha[1], 'form invalid');
        setBorderColor(obj.conf[1], 'form invalid');
    }else{
        setBorderColor(obj.senha[1], 'form valid');
        setBorderColor(obj.conf[1], 'form valid');
    }

    if(obj.genero[0] == 'F' || obj.genero[0] == 'M'){
        setBorderColor(obj.genero[1], 'form valid');
    }else{
        erros.push('Gênero inválido')
        setBorderColor(obj.genero[1], 'form invalid');
    }

    let date = obj.data[0].split('-');
    var currentYear = new Date().getFullYear();

    if((date[0] < 1940 || date[0] > currentYear) || (date[1] <= 0 || date[1] > 12) || (date[2] <= 0 || date[2] > 31)){
        erros.push('Informe uma data válida')
        setBorderColor(obj.data[1], 'form invalid');
    }else{
        setBorderColor(obj.data[1], 'form valid');
    }

    if(erros.length > 0) {
        createListError(erros);
        return false;
    }

    return true;
}

function createListError(data){
    var app = document.getElementById('mensagens');
    app.innerHTML = '';

    var ul = document.getElementById('ul');

    for(let i = 0; i < data.length; i++){
        var li = document.createElement('li');
        li.innerHTML = '<div class="alert-warning">'+ data[i] +'</div>'
        ul.appendChild(ul);
    }

    app.appendChild
}

function getValue(el){
    return document.getElementById(el).value;
}

function setBorderColor(el, cor){
    document.getElementById(el).className = cor;
}