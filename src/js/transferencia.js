const btnTransferirDinheiro = function (e) {
  const transferePara = document.querySelector('.js-form__input--para');
  const transfereMontante = document.querySelector('.js-form__input--montante');
  e.preventDefault();

  const montante = +transfereMontante.value;
  const receberTransferencia = contas.find((conta) => conta.usuario === transferePara.value);
  transfereMontante.value = transferePara.value = '';

  if (
    receberTransferencia &&
    montante > 0 &&
    contaAtual?.balanco >= montante &&
    receberTransferencia?.usuario !== contaAtual.usuario
  ) {
    contaAtual.movimentos.push(-montante);
    receberTransferencia.movimentos.push(montante);

    // Adiciona uma data para transferência
    contaAtual.movimentosDatas.push(new Date().toISOString());
    receberTransferencia.movimentosDatas.push(new Date().toISOString());

    // Atualiza UI
    atualizarUI(contaAtual);

    // Reinicia timer
    clearInterval(timer);
    timer = initTemporizadorLogout;
  }
};
