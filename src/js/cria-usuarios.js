const criaNomeUsuario = function (usuarios) {
  usuarios.forEach((usuario) => {
    usuario.usuario = usuario.proprietario
      .toLowerCase()
      .split(' ')
      .map((nome) => nome[0])
      .join('');
  });
};
criaNomeUsuario(contas);

// Atualizar UI(Invocar as funções)
function atualizarUI(conta) {
  exibirMovimentos(conta);
  calcularBalanco(conta);
  calcularSumario(conta);
}
