'use strict'

function clicado(){
    //getById
    let nome = document.getElementById('txtNome');
    console.log(nome.value);

    //getByClass
    let classes = document.getElementsByClassName('lista')

    for (var i = 0; i < classes.length; i++){
        //classes [i].innerHTML += '********';  
        //console.log(classes[i]);
        //let value = classes [i];
        //classes [i].innerHTML = value + '*******';
    }

    //GetByTagNome
    var a = document.getElementsByTagName('a');

    for (var i = 0; i < a.length; i++){
        if (!a[i].hasAttribute('target')){
            if (a[i].getAttribute('href').indexOf('satellasogt') == -1){
                a[i].setAttribute('target','_blank');
                a[i].style.backgroundColor = 'red';
            }
        }
    }
}

//document.title = "Olha eu aqui";

//document.location.hrfe = "https://google.com";