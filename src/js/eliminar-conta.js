const btnEliminarConta = function (e) {
  const encerraContaUsuario = document.querySelector('.js-form__input--usuario');
  const encerraContaPin = document.querySelector('.js-form__input--pin');
  e.preventDefault();

  if (
    encerraContaUsuario.value === contaAtual.usuario &&
    +encerraContaPin.value === contaAtual.pin
  ) {
    const index = contas.findIndex((conta) => conta.usuario === contaAtual.usuario);

    // Deletar a conta pelo índice passado.
    contas.splice(index, 1);

    // Deixa a interface invisível depois de deletar a conta.
    containerApp.classList.add('hidden');
    containerForm.classList.remove('hidden');
    mensagem.textContent = `Bem vindo(a), usuário`;
    mensagemLogin.classList.toggle('hidden');
  }

  encerraContaUsuario.value = encerraContaPin.value = '';
};
