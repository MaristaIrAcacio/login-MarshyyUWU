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

function salvarUser(){
    let nomeUser = document.getElementById("nomeUser").value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        criarLista();
        document.getElementById('nomeUser').value = '';
    }
}

/* FUNÇÃO PARA CRIAR LISTA DE USUÁRIO*/
function criarLista(){
    let tabela = document.getElementById('tabela').innerHTML =  "<tr><th>Nome Usuário</th><th>Ações</th></tr>";

    for(let i = 0;i <= (dadosLista.length - 1);i++){
        tabela+= "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-success' onclick='Editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='Excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}

    /*FUNÇÃO PARA EDITAR NOME*/
      function Editar(i){
          document.getElementById('nomeUser').value = dadosLista[(i-1)];
          dadosLista.splice(dadosLista[i-1], 1);
    
  }

     function Excluir(i){
         dadosLista.splice((i-1), 1);
         document.getElementById('tabela').deleteRow(i);

     }
