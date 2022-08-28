const btnFazerEmprestimo = function (e) {
  const emprestimo = document.querySelector('.js-form__input--empres');
  const montante = Math.floor(emprestimo.value);
  e.preventDefault();

  if (montante > 0 && contaAtual.movimentos.some((mov) => mov >= montante * 0.1)) {
    setTimeout(function () {
      contaAtual.movimentos.push(montante);
      contaAtual.movimentosDatas.push(new Date().toISOString());
      atualizarUI(contaAtual);
      clearInterval(timer);
      timer = initTemporizadorLogout();
    }, 2500);
  }
  emprestimo.value = '';
};
