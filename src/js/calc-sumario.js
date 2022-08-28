const calcularSumario = function (conta) {
  const deposito = document.querySelector('.js-sumario__valor--deposito');
  const saque = document.querySelector('.js-sumario__valor--saque');
  const juros = document.querySelector('.js-sumario__valor--juros');

  const calculaDeposito = conta.movimentos
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  deposito.textContent = formatarMoeda(calculaDeposito, conta.localizacao, conta.moeda);

  const calculaSaque = conta.movimentos.filter((mov) => mov < 0).reduce((acc, mov) => acc + mov, 0);
  saque.textContent = formatarMoeda(Math.abs(calculaSaque), conta.localizacao, conta.moeda);

  const calculaJuros = conta.movimentos
    .filter((mov) => mov > 0)
    .map((deposito) => (deposito * conta.taxaJuros) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  juros.textContent = formatarMoeda(calculaJuros, conta.localizacao, conta.moeda);
};
