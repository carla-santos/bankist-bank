const btnFazerLogin = function (e) {
  const logaUsuario = document.querySelector('.js-nav__input--usuario');
  const logaPin = document.querySelector('.js-nav__input--pin');
  e.preventDefault();
  contaAtual = contas.find((conta) => conta.usuario === logaUsuario.value);

  if (contaAtual?.pin === +logaPin.value) {
    const saudacaoMensagem = () => {
      const saudacao = ['Boa madrugada', 'Bom dia', 'Boa tarde', 'Boa noite'];
      const horas = new Date().getHours();
      return saudacao[Math.floor(horas / 6)];
    };
    mensagem.textContent = `${saudacaoMensagem()}, ${contaAtual.proprietario}`;
    mensagem.classList.add('blue');

    // Exiba a UI
    containerApp.classList.remove('hidden');
    containerForm.classList.add('hidden');
    mensagemLogin.classList.add('hidden');

    formatarData();
    setInterval(formatarData, 1000);

    // Limpa os campos de entrada
    logaUsuario.value = logaPin.value = '';
    logaPin.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = initTemporizadorLogout();

    // Atualiza UI
    atualizarUI(contaAtual);
  }
};
