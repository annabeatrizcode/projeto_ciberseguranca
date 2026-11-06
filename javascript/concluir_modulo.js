document.addEventListener('DOMContentLoaded', () => {
    // IMPORTANTE: Esta linha limpa o valor antigo preso no navegador (pode apagá-la após testar a primeira vez)
    // localStorage.clear(); 

    const barra = document.getElementById('progress-bar');
    const texto = document.getElementById('progress-text');
    const TOTAL_AULAS_CURSO = 6; // Total exato de aulas do curso

    // 1. Atualiza a barra automaticamente ao carregar a página de início
    if (barra && texto) {
        const aulasConcluidas = parseInt(localStorage.getItem('aulas_concluidas') || '0');
        // Calcula a percentagem real com base no número de aulas concluídas (1 aula = ~17%, 6 aulas = 100%)
        const porcentagem = Math.round((aulasConcluidas / TOTAL_AULAS_CURSO) * 100);
        
        barra.style.width = porcentagem + '%';
        texto.textContent = porcentagem + '% Completos';
    }

    // 2. Quando o aluno clica no botão de concluir a aula
    const btnConcluirModulo = document.getElementById('btn-concluir-modulo');
    
    if (btnConcluirModulo) {
        btnConcluirModulo.addEventListener('click', (e) => {
            e.preventDefault();
            
            let aulasConcluidas = parseInt(localStorage.getItem('aulas_concluidas') || '0');
            
            // Só soma se ainda não concluiu todas as aulas do curso
            if (aulasConcluidas < TOTAL_AULAS_CURSO) {
                aulasConcluidas += 1; // Soma exatamente +1 aula
                localStorage.setItem('aulas_concluidas', aulasConcluidas);
                
                alert('Aula concluída com sucesso!');
                window.location.href = 'inicio.html'; // Redireciona para o início
            } else {
                alert('Já concluiu todas as aulas deste curso!');
                window.location.href = 'inicio.html';
            }
        });
    }
});