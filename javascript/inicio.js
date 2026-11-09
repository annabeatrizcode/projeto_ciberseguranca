document.addEventListener('DOMContentLoaded', () => {
    const totalModulos = 3; // Total de módulos do curso
    let modulosConcluidos = 0;

    // Verifica um a um no LocalStorage se foram concluídos
    for (let i = 1; i <= totalModulos; i++) {
        if (localStorage.getItem(`cybersec_modulo${i}_completed`) === 'true') {
            modulosConcluidos++;
        }
    }

    // Calcula a percentagem (ex: 1 módulo = 33%, 2 = 67%, 3 = 100%)
    let porcentagem = Math.round((modulosConcluidos / totalModulos) * 100);
    if (modulosConcluidos === totalModulos) porcentagem = 100;

    // Seleciona os elementos da barra na página de início
    const barra = document.querySelector('.progress-fill');
    const texto = document.querySelector('.progress-text');

    // Aplica a largura e o texto dinamicamente
    if (barra) {
        barra.style.width = `${porcentagem}%`;
        // Transição suave opcional para a barra crescer animada
        barra.style.transition = 'width 0.4s ease-in-out';
    }
    
    if (texto) {
        texto.textContent = `${porcentagem}% Completos`;
    }
});