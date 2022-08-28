const calcularBalanco = function (conta) {
  conta.balanco = conta.movimentos.reduce((acc, mov) => acc + mov, 0);
  document.querySelector('.js-balanco__valor').textContent = formatarMoeda(
    conta.balanco,
    conta.localizacao,
    conta.moeda,
  );
};
