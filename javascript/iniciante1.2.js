function validarExercicios() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const feedback = document.getElementById('feedback-geral');

  // Remove classes anteriores para atualizar o estado visual
  feedback.className = 'feedback-container';

  // Valida se o utilizador respondeu a ambas as perguntas
  if (!q1 || !q2) {
    feedback.style.display = 'block';
    feedback.classList.add('warning');
    feedback.innerHTML = '⚠️ Por favor, responda a ambas as questões antes de verificar!';
    return;
  }

  let acertos = 0;
  let mensagem = '<strong>Resultado da Avaliação:</strong><br><br>';

  // Validação da Questão 1 (A resposta correta é 'c' - Integridade)
  if (q1.value === 'c') {
    acertos++;
    mensagem += '✅ <strong>Questão 1:</strong> Correto! A Integridade foi violada porque os dados foram modificados.<br>';
  } else {
    mensagem += '❌ <strong>Questão 1:</strong> Incorreto. O pilar afetado por alterações indevidas de dados é a Integridade.<br>';
  }

  // Validação da Questão 2 (A resposta correta é 'b' - Engenharia Social)
  if (q2.value === 'b') {
    acertos++;
    mensagem += '✅ <strong>Questão 2:</strong> Correto! Trata-se de Engenharia Social (manipulação do fator humano).<br>';
  } else {
    mensagem += '❌ <strong>Questão 2:</strong> Incorreto. A manipulação de pessoas fingindo ser uma figura de autoridade é Engenharia Social.<br>';
  }

  // Exibição do resultado visual
  feedback.style.display = 'block';
  if (acertos === 2) {
    feedback.classList.add('success');
  } else {
    feedback.classList.add('error');
  }

  feedback.innerHTML = mensagem;
}