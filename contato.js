var botaoEnviar = document.querySelector(".enviar")

botaoEnviar.addEventListener("click", function () {

    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    
    if(nome.value != "" && email.value != "" && telefone.value != ""){
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso, entraremos em contato em breve.');
    }
    
})