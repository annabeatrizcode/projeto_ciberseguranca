document.addEventListener("DOMContentLoaded", function () {

    const botao = document.getElementById("concluirModulo");

    if (!botao) return;

    botao.addEventListener("click", function () {

        let concluidos = JSON.parse(
            localStorage.getItem("cybersec_progresso")
        ) || [];

        if (!concluidos.includes("avancado2")) {
            concluidos.push("avancado2");
        }

        localStorage.setItem(
            "cybersec_progresso",
            JSON.stringify(concluidos)
        );

        alert("Módulo Avançado concluído com sucesso!");

        botao.textContent = "Módulo Concluído";
        botao.disabled = true;

    });

});