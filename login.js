//################
//codigo de validação de formulário de login

function Verificar(){

    let email = document.getElementById('LoginEmail').value;
    let senha = document.getElementById('loginSenha').value;
    console.log(email);
    
    if(!email || !senha){
        alert("campos de preenchimento obrigatório. porfavor preencher");
    } else {
        window.location.href = "aula2.html"
    }

}


//#############################################