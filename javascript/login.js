document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o formulário de login pelo ID
    const formLogin = document.getElementById("loginForm");

    if (formLogin) {
        formLogin.addEventListener("submit", function (event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            // Captura os inputs de e-mail e senha
            const inputEmail = document.querySelector("input[type='email']");
            const inputSenha = document.querySelector("input[type='password']");

            const email = inputEmail ? inputEmail.value.trim() : "";
            const senha = inputSenha ? inputSenha.value.trim() : "";

            // Validação simples
            if (email === "" || senha === "") {
                alert("Por favor, preencha o e-mail e a senha para continuar.");
                return;
            }

            // Redireciona para a página de cursos (inicio.html)
            window.location.href = "inicio.html";
        });
    }
});