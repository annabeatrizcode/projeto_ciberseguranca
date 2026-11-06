document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('password-input');
  
  // Só executa o código do testador se o input existir na página atual!
  if (input) {
    const meter = document.getElementById('meter-bar');
    const feedback = document.getElementById('feedback');

    input.addEventListener('input', () => {
      const val = input.value;
      let score = 0;

      if (!val) {
        if (meter) meter.style.width = '0%';
        if (feedback) feedback.innerText = 'Aguardando senha...';
        return;
      }

      if (val.length >= 8) score += 20;
      if (val.length >= 12) score += 20;
      if (/[A-Z]/.test(val)) score += 20;
      if (/[0-9]/.test(val)) score += 20;
      if (/[^A-Za-z0-9]/.test(val)) score += 20;

      if (meter) meter.style.width = score + '%';

      if (feedback) {
        if (score <= 40) {
          meter.style.backgroundColor = '#ef4444';
          feedback.innerText = 'Senha Fraca: Curta ou previsível.';
        } else if (score <= 80) {
          meter.style.backgroundColor = '#eab308';
          feedback.innerText = 'Senha Média: Adicione mais caracteres ou símbolos.';
        } else {
          meter.style.backgroundColor = '#00f5d4';
          feedback.innerText = 'Senha Forte: Boa extensão e diversidade de caracteres!';
        }
      }
    });
  }

  // Lógica do botão de concluir (só corre se o botão existir na página)
  const btnConcluirModulo = document.getElementById('btn-concluir-modulo');
  const TOTAL_AULAS_CURSO = 6; 

  if (btnConcluirModulo) {
    btnConcluirModulo.addEventListener('click', (e) => {
      e.preventDefault();
      
      let aulasConcluidas = parseInt(localStorage.getItem('aulas_concluidas') || '0');
      
      if (aulasConcluidas < TOTAL_AULAS_CURSO) {
        aulasConcluidas += 1;
        localStorage.setItem('aulas_concluidas', aulasConcluidas);
      }
      
      window.location.href = 'inicio.html';
    });
  }
});