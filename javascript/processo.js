
const modulosQueContam = [
    "iniciante2.1",
    "intermediario2",
    "avancado2"
];

function recuperarProgresso() {
    return JSON.parse(
        localStorage.getItem("cybersec_progresso")
    ) || [];
}

// Registra a conclusão
function concluirModulo(nome) {
    let concluidos = recuperarProgresso();

    if (!concluidos.includes(nome)) {
        concluidos.push(nome);

        localStorage.setItem(
            "cybersec_progresso",
            JSON.stringify(concluidos)
        );
    }
}


function atualizarProgresso() {
    const concluidos = recuperarProgresso();

    const quantidade = modulosQueContam.filter(
        modulo => concluidos.includes(modulo)
    ).length;

    const porcentagem = Math.round(
        (quantidade / modulosQueContam.length) * 100
    );

    const barra = document.getElementById("barraProgresso");
    const texto = document.getElementById("textoProgresso");

    if (barra) {
        barra.style.width = porcentagem + "%";
    }

    if (texto) {
        texto.textContent = porcentagem + "% Completo";
    }
}

document.addEventListener("DOMContentLoaded", atualizarProgresso);