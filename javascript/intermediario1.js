document.addEventListener('DOMContentLoaded', () => {
    const btnComplete = document.getElementById('btnCompleteModulo3');
    const feedback = document.getElementById('feedbackModulo3');

    if (btnComplete) {
        btnComplete.addEventListener('click', () => {
            // Guarda a conclusão específica do Módulo 3 no localStorage
            localStorage.setItem('cybersec_modulo3_completed', 'true');

            if (feedback) {
                feedback.style.color = '#00ff66';
                feedback.textContent = '✅ Aula 3 concluída com sucesso! O teu progresso foi guardado.';
            }

            // Efeito visual no botão para indicar sucesso
            btnComplete.style.backgroundColor = '#00cc52';
            btnComplete.textContent = 'Aula 3 Concluída ✓';
        });
    }

    // Mantém o botão com o aspeto de concluído caso o aluno recarregue a página
    if (localStorage.getItem('cybersec_modulo3_completed') === 'true' && btnComplete) {
        btnComplete.style.backgroundColor = '#00cc52';
        btnComplete.textContent = 'Aula 3 Concluída ✓';
    }
});