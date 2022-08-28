const formatarMovimentosData = function (data) {
  const calcularDiasPassados = (data1, data2) =>
    Math.round(Math.abs(data2 - data1) / (1000 * 60 * 60 * 24));

  const diasPassados = calcularDiasPassados(new Date(), data);

  if (diasPassados === 0) return 'Hoje';
  if (diasPassados === 1) return 'Ontem';
  if (diasPassados <= 7) return `${diasPassados} dias atrás`;

  const dia = `${data.getDate()}`.padStart(2, 0);
  const mes = `${data.getMonth() + 1}`.padStart(2, 0);
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
};

const formatarMoeda = function (valor, localidade, moeda) {
  return new Intl.NumberFormat(localidade, {
    style: 'currency',
    currency: moeda,
  }).format(valor);
};

const formatarData = function () {
  const data = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  };

  balancoData.textContent = new Intl.DateTimeFormat(contaAtual.localizacao, options).format(data);
};
