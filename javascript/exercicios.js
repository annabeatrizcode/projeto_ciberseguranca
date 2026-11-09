document.addEventListener('DOMContentLoaded', () => {
    const urlAtual = window.location.pathname;
    let numeroDoModulo = 1; // Padrão

    // Deteta o módulo com base no nome da página atual
    if (urlAtual.includes('iniciante2')) {
        numeroDoModulo = 1;
    } else if (urlAtual.includes('intermediario2')) {
        numeroDoModulo = 2;
    } else if (urlAtual.includes('avancado2')) {
        numeroDoModulo = 3;
    }

    const btnConcluir = document.getElementById('btnConcluirModulo');
    const feedback = document.getElementById('feedbackConclusao');

    if (btnConcluir) {
        function atualizarEstadoBotao() {
            const chave = `cybersec_modulo${numeroDoModulo}_completed`;
            if (localStorage.getItem(chave) === 'true') {
                btnConcluir.style.backgroundColor = '#22c55e';
                btnConcluir.style.color = '#080c14';
                btnConcluir.textContent = `Módulo ${numeroDoModulo} Concluído ✓ (Clique para refazer)`;
            } else {
                btnConcluir.style.backgroundColor = '#1e293b';
                btnConcluir.style.color = '#f8fafc';
                btnConcluir.textContent = `Concluir Módulo ${numeroDoModulo}`;
            }
        }

        atualizarEstadoBotao();

        btnConcluir.addEventListener('click', () => {
            const chave = `cybersec_modulo${numeroDoModulo}_completed`;
            const estadoAtual = localStorage.getItem(chave);

            if (estadoAtual === 'true') {
                localStorage.removeItem(chave);
                if (feedback) {
                    feedback.style.color = '#94a3b8';
                    feedback.textContent = `🔄 Progresso do Módulo ${numeroDoModulo} reiniciado.`;
                }
            } else {
                localStorage.setItem(chave, 'true');
                if (feedback) {
                    feedback.style.color = '#22c55e';
                    feedback.textContent = `✅ Módulo ${numeroDoModulo} concluído com sucesso!`;
                }
            }

            atualizarEstadoBotao();
        });
    }
});