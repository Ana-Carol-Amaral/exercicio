'use strict'

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('frm').addEventListener('submit', (event) => {
        var obj = getAttributes();

        if (!validar(obj))
            event.preventDefault();
    });
});

function getAttributes() {
    return {
        nome: [getValue('txtNome'), 'txtNome'],
        email: [getValue('txtEmail'), 'txtEmail'],
        senha: [getValue('txtSenha'), 'txtSenha'],
        confirmar: [getValue('txtConf'), 'txtConf'],
        sexo: [getValue('slSexo'), 'slSexo'],
        data: [getValue('txtData'), 'txtData'],
        sobre: [getValue('txtSobre'), 'txtSobre']
    };
}

function validar(obj) {
    let erros = [];

    if (obj.nome[0].length < 3 || obj.nome[0].length > 50) {
        erros.push('Informe um nome válido. Min. 3 e max. 50 caracteres')
        document.getElementById(obj.nome[1]).className = 'invalido';
    } else {
        document.getElementById(obj.nome[1]).className = 'valido';
    }

    if ((obj.email[0].length < 5 || obj.email[0].length > 100) || !/.+?\@.+?\..+/.test(obj.email[0])) {
        erros.push('Informe um Email válido')
        document.getElementById(obj.email[1]).className = 'invalido';
    } else {
        document.getElementById(obj.email[1]).className = 'valido';
    }

    if ((obj.senha[0].length < 7 || obj.senha[0].length > 100) || obj.senha[0] != obj.confirmar[0]) {
        erros.push('Informe um senha válida. Min. 7 e max. 100 caracteres')
        document.getElementById(obj.senha[1]).className = 'invalido';
        document.getElementById(obj.confirmar[1]).className = 'invalido';
    } else {
        document.getElementById(obj.senha[1]).className = 'valido';
        document.getElementById(obj.confirmar[1]).className = 'valido';
    }

    if (obj.sexo[0] == 'F' || obj.sexo[0] == 'M') {
        document.getElementById(obj.sexo[1]).className = 'valido';
    } else {
        erros.push('Gênero inválido')
        document.getElementById(obj.sexo[1]).className = 'invalido';
    }

    let date = obj.data[0].split('-');
    var currentYear = new Date().getFullYear();

    if ((date[0] < 1940 || date[0] > currentYear) ||
        (date[1] <= 0 | date[1] > 12) ||
        (date[2] <= 0 || date[2] > 31)) {
        erros.push('Informe uma data válida')
        document.getElementById(obj.data[1]).className = 'invalido';
    } else {
        document.getElementById(obj.data[1]).className = 'valido';
    }

    if (erros.length > 0) {
        createListError(erros);
        return false;
    }

    return true;
}

function createListError(data) {
    var app = document.getElementById('dvMensagens');
    app.innerHTML = '';

    var ul = document.createElement('ul');

    for (let i = 0; i < data.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = '<div class="alert-warning">' + data[i] + '</div>';

        ul.appendChild(li);
    }

    app.appendChild(ul);
}

console.log('validar');
