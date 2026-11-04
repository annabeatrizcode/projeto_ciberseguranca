const formulario = document.getElementById("formCadastro");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmar").value;

    if (senha !== confirmar) {
        alert("As senhas não são iguais!");
        return;
    }

    alert("Cadastro realizado com sucesso!");

    window.location.assign("login.html");

});
