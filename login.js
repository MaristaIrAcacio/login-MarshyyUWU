//################
//codigo de validação de formulário de login

function Verificar(){

    let email = document.getElementById('LoginEmail').value;
    let senha = document.getElementById('loginSenha').value;
    console.log(email);
    
    if(!email || !senha){
        alert("campos de preenchimento obrigatório. porfavor preencher");
    } else {
        window.location.href = "aula2.html";
    }

}

// FUNÇÃO PARA ARMAZENAR NOMES EM ARRAY
var dadosLista = [];

function salvarUser()
    let nomeUser = document.getElementById("NomeUser").value;

    if(nomeUser){
        dadosLista.push(nomeUser);
    }

    /* FUNÇÃO PARA VERIFICAR PREENCHIMENTO DE LOGIN*/

function acessar() {

    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;


    if(!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");

    } else {
        window.location.href = "aula2.html";

    }
}


// FUNÇÃO PARA ARMAZENAR NOMES EM ARRAY

var dadosLista = [];

function salvarUser(){
  let nomeUser = document.getElementById("nomeUser").value;

  if(nomeUser){
    dadosLista.push(nomeUser);
}

}
//#############################################