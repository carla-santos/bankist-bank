// Inicializa eventListeners
function initEventListeners() {
  document.querySelector('.js-form__button').addEventListener('click', btnFazerLogin);
  document.querySelector('.js-btn--logout').addEventListener('click', btnEncerrarSessao);
  document.querySelector('.js-form__btn--transf').addEventListener('click', btnTransferirDinheiro);
  document.querySelector('.js-form__btn--empres').addEventListener('click', btnFazerEmprestimo);
  document.querySelector('.js-form__btn--close').addEventListener('click', btnEliminarConta);
  document.querySelector('.js-btn--sort').addEventListener('click', btnClassificar);
}
initEventListeners();
