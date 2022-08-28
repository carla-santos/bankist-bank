const initTemporizadorLogout = function () {
  const marcarTempo = function () {
    //const min = String(Math.trunc(tempo / 60)).padStart(2, 0);
    const min = String(parseInt(tempo / 60, 10)).padStart(2, '0');
    //const seg = String(Math.trunc(tempo % 60)).padStart(2, 0);
    const seg = String(parseInt(tempo % 60, 10)).padStart(2, '0');

    // Em cada chamada, imprima o tempo restante na interface do usuário
    mensagemTempo.textContent = `${min}:${seg}`;

    // Quando 0 segundos, pare o cronômetro e faça logout do usuário
    if (tempo === 0) {
      clearInterval(timer);

      containerApp.classList.add('hidden');
      containerForm.classList.remove('hidden');
      mensagem.textContent = `Bem vindo(a), usuário`;
      mensagemLogin.classList.toggle('hidden');
    }

    // Subtrair 1 segundo do tempo para a próxima iteração
    tempo--;
  };

  // Defina o tempo para 2 minutos
  //let tempo = 120;
  let tempo = 10 * 60;

  // Chame o timer a cada segundo
  marcarTempo();
  const timer = setInterval(marcarTempo, 1000);

  return timer;
};
