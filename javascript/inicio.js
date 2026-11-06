document.addEventListener('DOMContentLoaded', () => {
    const barra = document.getElementById('progress-bar');
    const texto = document.getElementById('progress-text');

    // Total de aulas de todo o curso (3 módulos x 2 aulas = 6 aulas no total)
    const TOTAL_AULAS_CURSO = 6; 

    // 1. Atualiza a barra no inicio.html com base nas aulas concluídas
    if (barra && texto) {
        const aulasConcluidas = parseInt(localStorage.getItem('aulas_concluidas') || '0');
        
        // Calcula a porcentagem exata (arredondada)
        const porcentagem = Math.round((aulasConcluidas / TOTAL_AULAS_CURSO) * 100);
        
        barra.style.width = porcentagem + '%';
        texto.textContent = porcentagem + '% Completos';
    }

    // 2. Regista a conclusão quando o aluno clica no botão de concluir ou avança para o certificado/próximo nível
    const botoesConcluir = document.querySelectorAll('.btn-concluir, a[href*="certificado"], .concluir-aula');
    
    botoesConcluir.forEach(botao => {
        botao.addEventListener('click', () => {
            let aulasConcluidas = parseInt(localStorage.getItem('aulas_concluidas') || '0');
            
            // Incrementa apenas se ainda não tiveres concluído todas as 6 aulas
            if (aulasConcluidas < TOTAL_AULAS_CURSO) {
                aulasConcluidas++;
                localStorage.setItem('aulas_concluidas', aulasConcluidas);
            }
        });
    });
});