# ![Logo](https://github.com/carla-santos/bankist-bank/blob/main/img/logo.png) Bankist

[![GitHub contributors](https://img.shields.io/github/contributors/carla-santos/bankist-bank?color=blue&label=Colaboradores&style=for-the-badge)](https://github.com/carla-santos/bankist-bank/graphs/contributors)
[![GitHub forks](https://img.shields.io/github/forks/carla-santos/bankist-bank?color=green&style=for-the-badge)](https://github.com/carla-santos/bankist-bank/network/members)
[![GitHub issues](https://img.shields.io/github/issues/carla-santos/bankist-bank?color=red&style=for-the-badge)](https://github.com/carla-santos/bankist-bank/issues)
[![GitHub licence](https://img.shields.io/github/license/carla-santos/bankist-bank?color=black&label=Licen%C3%A7a&style=for-the-badge)](https://github.com/carla-santos/bankist-bank/blob/main/LICENSE)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/carla-santos/bankist-bank?color=pink&style=for-the-badge)](https://github.com/carla-santos/bankist-bank/pulls)

## Sumário

- [Sobre](#sobre-o-projeto)
   - [Tecnologias](#tecnologias) 
- [Funcionalidades](#funcionalidades)
   - [Contas](#contas)
   - [Movimentações](#movimentacoes)
   - [Encerrar sessão](#encerrar-sessao)
   - [Internacionalização](#internacionalizacao)
   - [Sumário](#sumario)
   - [Fechar conta](#fechar-conta)
- [Como executar o projeto](#como-executar-o-projeto)
   - [Pré-requisitos](#pre-requisitos)
   - [Instalação](#instalacao)    
- [Licença](#licenca)
- [Agradecimento](#agradecimento)
- [Deploy](#deploy)
- [Changelog](#changelog) 

## :green_book: Sobre o projeto <a name = "sobre-o-projeto"></a>

[![Screenshot](https://github.com/carla-santos/bankist-bank/blob/main/img/screenshot-1.png)](https://bankist-carla-santos.netlify.app/)

**Bankist** é um aplicativo Web que simula um banco online. Foi desenvolvido com base no curso [The Complete JavaScript Course 2022: From Zero to Expert!](https://www.udemy.com/course/the-complete-javascript-course/)
do professor **Jonas Schmedtmann** como uma forma de praticar **HTML5, CSS3 e Javascript.**

- Utilizei como base [7-1 architecture pattern](https://github.com/KittyGiraudel/sass-boilerplate) para criar os arquivos do SASS dentro do diretório **src/scss**. Lá consta um arquivo principal chamado **main.scss** que tem a função de importar os arquivos parciais dentro de sua respectiva pasta.
- Em cada pasta, consta um arquivo **index.scss** que lista cada um dos outros arquivos, no mesmo diretório, que vão ser incluídos na importação.
- O diretório **build** consta o arquivo **main.css** minificado para o deployment do projeto.
- Adicionei **SASS** ao projeto como uma forma melhor de organizar os diferentes componentes e, por conseguinte, uma melhor manutenção ao mesmo.

### Tecnologias <a name = "tecnologias"></a> :wrench:

O projeto foi desenvolvido com **JavaScript**, além de **HTML5** e **SASS(SCSS)**. Foi usado **NPM** como gerenciador de pacotes e **GULP** para compilar SASS em CSS, 
além de outras dependências utilizadas no desenvolvimento, tais como: Adicionar prefixos proprietários, minificação(compressão).

- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [SASS](https://sass-lang.com/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Arquitetura BEM](http://getbem.com/)
- [NPM](https://www.npmjs.com/)
- [GULP](https://gulpjs.com/)
- [Prettier](https://prettier.io/)

---

## 💡 Funcionalidades <a name = "funcionalidades"></a>

O aplicativo permite que os usuários:

*   Façam transferência para outros usuários.
*   Solicitem empréstimo ao banco.
*   Gerenciem movimentações na conta.
*   Fechem a conta.
*  Classifiquem por tipo de movimentação.

### Contas <a name = "contas"></a> 🔒

> Usuário: cs, PIN: 1111<br>
> Usuário: ps, PIN: 2222<br>
> Usuário: js, PIN: 3333<br>
> Usuário: tl, PIN: 4444

Cada usuário possui uma conta com suas respectivas **movimentações(saque e depósito)** e essas estão armazenadas em um objeto. 
Cada um desses objetos contêm dados importantes, tais como:

* Proprietários da conta.
* Array de movimentações.
* Taxa de Juros.
* PIN
* Datas das movimentações na conta.
* Moeda do país.
* Localização de cada usuário.

Para fazer login na conta, é necessário um nome de usuário e PIN. Esses dados são gerados a partir da primeira letra do nome e a primeira letra do sobrenome. 

Um exemplo de nome de usuário: cs. Foi gerado a partir do nome completo Carla Santos.

![Screenshot](https://github.com/carla-santos/bankist-bank/blob/main/img/screenshot-2.png)

### Movimentações <a name = "movimentacoes"></a> ⏭️

As **movimentações** são armazenadas em um array de movimentos em cada objeto da conta. Esse objeto possui informações, tais como:

* Informação sobre o tipo de movimentação: Depósito ou Saque.
* Data das movimentações.
* Valor monetário da movimentação.
* Saldo total.

### Encerrar sessão <a name = "encerrar-sessao"></a> ⏲️

O **cronômetro** no canto inferior direito indica o tempo restante antes do encerramento da sessão. Assim que for encerrada, o usuário terá que fazer login novamente.
Foi definido um tempo de **10 minutos**.
O usuário poderá também clicar no botão para sair da conta atual.

### Internacionalização <a name = "internacionalizacao"></a> 💱

O dia da semana, data e a hora foram formatadas usando **Internationalization API**. A mesma coisa acontece com todas as **moedas** do aplicativo. 
Cada descrição da movimentação contém informação dos dias que se passaram. Além disso, a localidade é baseada no **idioma do navegador do usuário**.
Tais informações sobre localidade e idioma foram armazenadas no Array de movimentações. 

### Sumário <a name = "sumario"></a> 📇 

O **sumário** exibe informações sobre o total de **depósitos**, **saques** e a **taxa de juros**. O banco faz um pagamento ao cliente por cada depósito em sua conta.
Esse pagamento é igual a **taxa de juros** que fica armazenada no objeto da conta.

Um exemplo de **taxa de juros** é: 1.1, que é 1,1% do depósito.

### Fechar conta <a name = "fechar-conta"></a> 🔐

O usuário pode encerrar sua conta a qualquer momento. Basta digitar o nome de **usuário** e o **PIN**.

---

## :computer: Como executar o projeto <a name = "como-executar-o-projeto"></a>

Para Iniciar o projeto, faça o clone desse repositório ou baixe de forma local em seu sistema. 
Você pode visualizar clicando no link [Bankist](https://bankist-carla-santos.netlify.app/).

### Pré-requisitos <a name = "pre-requisitos"></a>

Antes de começar, você precisa instalar, em sua máquina, as seguintes ferramentas: [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) 
e um editor de código, como [VSCode](https://code.visualstudio.com/).

Siga as instruções abaixo para obter uma cópia local: 

### Instalação <a name = "instalacao"></a>

```bash

# Clone este repositório.
$ https://github.com/carla-santos/bankist-bank.git

# Acesse a pasta do projeto no seu terminal/cmd/(Git bash).
$ cd bankist-bank

# Instale as dependências.
$ npm install

# Execute a aplicação.
$ gulp dev

```
Utilize uma ferramenta como o [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) para criar um servidor local e executar o projeto.

---

## :pencil: Licença <a name = "licenca"></a>  
 
O projeto está sob a licença MIT. Para saber mais, acesse o arquivo [LICENÇA](https://github.com/carla-santos/bankist-bank/blob/main/LICENSE).

---

## 🚀 Agradecimento <a name = "agradecimento"></a>  

- [Img Shields](https://shields.io)
- [Netlify](https://www.netlify.com/)
- [NPM](https://www.npmjs.com/)
- [Google Fonts](https://fonts.google.com/)
- [SASS guidelin](https://sass-guidelin.es/#architecture)
- [CSS-Tricks](https://css-tricks.com/introducing-sass-modules/)
- [Font Awesome](https://fontawesome.com)
- [Jonas Schmedtmann](https://www.udemy.com/user/jonasschmedtmann/)

---

## 📬 Deploy <a name = "deploy"></a>  

[![Deploy no Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/sites/bankist-carla-santos/deploys)

---

## :dizzy: Changelog <a name = "changelog"></a>  

### 1.0.0
- Lançamento inicial<br>
28.08.2022
