const btnEncerrarSessao = function (e) {
  e.preventDefault();
  containerApp.classList.add('hidden');
  containerForm.classList.remove('hidden');
  mensagem.textContent = `Bem vindo(a), usuário`;
  mensagemLogin.classList.toggle('hidden');
};
