document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleção de elementos do DOM
    const btnVerify = document.getElementById('btnVerify');
    const btnComplete = document.getElementById('btnComplete');
    const btnNextModule = document.getElementById('btnNextModule');
    const feedback = document.getElementById('feedback');

    // 2. Definição das respostas corretas do questionário
    const correctAnswers = {
        q1: 'integridade',
        q2: 'engenharia_social'
    };

    // 3. Funcionalidade: Verificar Respostas
    if (btnVerify) {
        btnVerify.addEventListener('click', () => {
            const q1Selected = document.querySelector('input[name="q1"]:checked');
            const q2Selected = document.querySelector('input[name="q2"]:checked');

            // Limpa feedbacks e bordas anteriores
            feedback.textContent = '';
            document.querySelectorAll('.question-block').forEach(block => {
                block.style.borderColor = '#1e293b';
            });

            // Validação se o utilizador respondeu a tudo
            if (!q1Selected || !q2Selected) {
                feedback.style.color = '#ef4444';
                feedback.textContent = '⚠️ Por favor, responda a todas as questões antes de verificar.';
                return;
            }

            const isQ1Correct = q1Selected.value === correctAnswers.q1;
            const isQ2Correct = q2Selected.value === correctAnswers.q2;

            // Destaca visualmente os blocos conforme o resultado
            document.getElementById('block-q1').style.borderColor = isQ1Correct ? '#22c55e' : '#ef4444';
            document.getElementById('block-q2').style.borderColor = isQ2Correct ? '#22c55e' : '#ef4444';

            // Feedback geral
            if (isQ1Correct && isQ2Correct) {
                feedback.style.color = '#22c55e';
                feedback.textContent = '🎉 Excelente! Respostas corretas. Podes agora concluir a aula.';
            } else {
                feedback.style.color = '#f59e0b';
                feedback.textContent = '❌ Algumas respostas estão incorretas. Ajusta as tuas escolhas e tenta novamente.';
            }
        });
    }

    // 4. Funcionalidade: Concluir Aula 1
    if (btnComplete) {
        btnComplete.addEventListener('click', () => {
            // Grava o progresso no navegador
            localStorage.setItem('cybersec_aula1_completed', 'true');
            
            // Liberta o botão de próximo módulo
            if (btnNextModule) {
                btnNextModule.disabled = false;
                btnNextModule.removeAttribute('disabled');
            }
            
            feedback.style.color = '#00f2fe';
            feedback.textContent = '✅ Aula 1 marcada com sucesso! O próximo módulo foi liberado.';
        });
    }

    // 5. Funcionalidade: Direcionar para a Próxima Página / Módulo
    if (btnNextModule) {
        btnNextModule.addEventListener('click', () => {
            if (!btnNextModule.disabled) {
                window.location.href = 'inicio.html'; 
            }
        });
    }

    // Mantém o próximo módulo desbloqueado ao recarregar se já tiver sido concluído antes
    if (localStorage.getItem('cybersec_aula1_completed') === 'true' && btnNextModule) {
        btnNextModule.disabled = false;
        btnNextModule.removeAttribute('disabled');
    }
});