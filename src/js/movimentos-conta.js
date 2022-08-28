const exibirMovimentos = function (conta, ordenar = false) {
  const containerMovimentos = document.querySelector('.js-movimentos');

  // Limpa o conteúdo inicial
  while (containerMovimentos.firstChild)
    containerMovimentos.removeChild(containerMovimentos.firstChild);

  const movs = ordenar ? conta.movimentos.slice().sort((a, b) => a - b) : conta.movimentos;

  movs.forEach((mov, i) => {
    const tipo = mov > 0 ? 'deposito' : 'saque';
    const data = new Date(conta.movimentosDatas[i]);

    const exibaData = formatarMovimentosData(data, conta.localizacao);
    const formatarMov = formatarMoeda(mov, conta.localizacao, conta.moeda);

    const html = `
        <div class="movimentos__row">
          <div class="movimentos__tipo movimentos__tipo--${tipo}">
            ${i + 1} ${tipo}
          </div>
          <div class="movimentos__data">${exibaData}</div>
          <div class="movimentos__valor">${formatarMov}</div>
      </div>
      `;
    containerMovimentos.insertAdjacentHTML('afterbegin', html);
  });
};

const btnClassificar = function (e) {
  e.preventDefault();
  exibirMovimentos(contaAtual, !ordenar);
  ordenar = !ordenar;
};
