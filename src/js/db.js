'use strict';

const conta1 = {
  proprietario: 'Carla Santos',
  movimentos: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  taxaJuros: 1.2,
  pin: 1111,
  movimentosDatas: [
    '2022-01-02T18:40:00.000Z',
    '2022-01-23T18:52:00.000Z',
    '2022-02-02T13:00:00.000Z',
    '2022-02-04T14:05:00.000Z',
    '2022-02-18T16:28:00.000Z',
    '2022-03-26T16:30:00.000Z',
    '2022-03-28T16:45:00.000Z',
    '2022-03-31T20:28:00.000Z',
  ],
  moeda: 'EUR',
  localizacao: 'pt-PT',
};

const conta2 = {
  proprietario: 'Patricia Silva',
  movimentos: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  taxaJuros: 1.5,
  pin: 2222,
  movimentosDatas: [
    '2022-01-02T18:40:00.000Z',
    '2022-01-23T18:52:00.000Z',
    '2022-02-02T13:00:00.000Z',
    '2022-02-04T14:05:00.000Z',
    '2022-02-18T16:28:00.000Z',
    '2022-03-26T16:30:00.000Z',
    '2022-03-28T16:45:00.000Z',
    '2022-03-31T20:28:00.000Z',
  ],
  moeda: 'USD',
  localizacao: 'en-US',
};

const conta3 = {
  proprietario: 'Jade Suellen',
  movimentos: [1000, -200, 2000, -300, -20, 100, 9000, -460],
  taxaJuros: 0.7,
  pin: 3333,
  movimentosDatas: [
    '2022-01-02T18:40:00.000Z',
    '2022-01-23T18:52:00.000Z',
    '2022-02-02T13:00:00.000Z',
    '2022-02-04T14:05:00.000Z',
    '2022-02-18T16:28:00.000Z',
    '2022-03-26T16:30:00.000Z',
    '2022-03-28T16:45:00.000Z',
    '2022-03-31T20:28:00.000Z',
  ],
  moeda: 'BRL',
  localizacao: 'pt-BR',
};

const conta4 = {
  proprietario: 'Tarique Layon',
  movimentos: [430, 7000, 1000, 2000, 90, 200, 8000, 20],
  taxaJuros: 1,
  pin: 4444,
  movimentosDatas: [
    '2022-01-02T18:40:00.000Z',
    '2022-01-23T18:52:00.000Z',
    '2022-02-02T13:00:00.000Z',
    '2022-02-04T14:05:00.000Z',
    '2022-02-18T16:28:00.000Z',
    '2022-03-26T16:30:00.000Z',
    '2022-03-28T16:45:00.000Z',
    '2022-03-31T20:28:00.000Z',
  ],
  moeda: 'GBP',
  localizacao: 'en-GB',
};

const contas = [conta1, conta2, conta3, conta4];

const containerForm = document.querySelector('.nav');
const containerApp = document.querySelector('.js-app');
const mensagem = document.querySelector('.js-header__welcome');
const mensagemLogin = document.querySelector('.header__login');
const balancoData = document.querySelector('.balanco__data .data');
const mensagemTempo = document.querySelector('.timer');

let contaAtual;
let timer;
let ordenar = false;
