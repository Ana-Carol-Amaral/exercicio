
'use strict'

var nome = frm.txtNome;
var email = frm.txtEmail;
var data = frm.txtData;
var sobre = frm.txtSobre;
var senha = frm.txtSenha;
var conf = frm.txtConf;

function validar(){


    if(nome == "" || nome.length <= 5){
        frm.nome.focus();
        return false;
    }

    if(email == "" || email.lenght <= 5){
        frm.email.focus();
        return false;
    }

    if(!data.test(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/)){
        frm.data.focus();
        return false;
    }

    if(sobre == "" || sobre.length <= 30 || sobre.length >= 150){
        return false;
    }

    if(senha == "" || senha.length <= 5){
        frm.senha.focus();
        return false;
    }

    if(conf == "" || conf.length <= 5){
        frm.conf.focus();
        return false;
    }

    if(senha != conf){
        frm.conf.focus();
        return false;
    }
}

console.log(validar)