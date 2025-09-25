# Portfólio de Automação de Testes com Cypress - Sauce Demo

![Cypress](https://img.shields.io/badge/Cypress-13.13.1-brightgreen )
![Node.js](https://img.shields.io/badge/Node.js-v20.15.1-blue )
![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub_Actions-blueviolet )

Este repositório contém um projeto de automação de testes de ponta-a-ponta (E2E) para o site de demonstração [Sauce Demo](https://www.saucedemo.com/ ). O objetivo é demonstrar habilidades em automação de testes web utilizando Cypress, cobrindo funcionalidades críticas de um e-commerce.

---

## 🎥 Demonstração em Vídeo (Loom)

*(Espaço reservado para o vídeo de demonstração da execução dos testes)*

**[ASSISTA A EXECUÇÃO DOS TESTES AQUI]** - (Link do Loom será inserido aqui)

---

## 🚀 Tecnologias Utilizadas

*   **Framework de Teste:** [Cypress](https://www.cypress.io/ )
*   **Linguagem:** JavaScript (ES6+)
*   **Gerenciador de Pacotes:** [NPM](https://www.npmjs.com/ )
*   **Controle de Versão:** [Git](https://git-scm.com/ ) & [GitHub](https://github.com/ )
*   **CI/CD:** [GitHub Actions](https://github.com/features/actions )

---

## ⚙️ Como Executar o Projeto

**Pré-requisitos:**
*   [Node.js](https://nodejs.org/en/ ) (versão 18 ou superior)
*   [Git](https://git-scm.com/ )

**Passo a passo:**

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/David7323/Portfolio-testes-cypress-saucedemo.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd Portfolio-testes-cypress-saucedemo
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Execute os testes:**

    *   Para abrir a interface interativa do Cypress (modo de desenvolvimento ):
        ```bash
        npm run test:gui
        ```
    *   Para rodar todos os testes em modo headless (em segundo plano, como no CI/CD):
        ```bash
        npm run test:headless
        ```

---
## 🧪 Funcionalidades e Testes Cobertos

O projeto está estruturado para testar as seguintes funcionalidades, com documentação detalhada para cada caso de teste na pasta `cypress/doc`.

### 1. Autenticação de Usuário (`login.cy.js`)
-   [x] Login com sucesso
-   [x] Login com senha incorreta
-   [x] Login com usuário bloqueado
-   [x] Validação de campos em branco
-   [x] Testes de segurança (espaços em branco, tentativa de SQL Injection)
-   [x] **[Ver Casos de Teste de Login](cypress/doc/casos-de-teste-login.md)**

### 2. Carrinho de Compras (`carrinho.cy.js`)
-   [x] Adicionar um item ao carrinho
-   [x] Adicionar múltiplos itens ao carrinho
-   [x] Remover um item do carrinho
-   [x] **Teste de persistência:** Verificar se o carrinho mantém os itens após logout e login
-   [x] **[Ver Casos de Teste do Carrinho](cypress/doc/casos-de-teste-carrinho.md)**

### 3. Finalização de Compra (`checkout.cy.js`)
-   [x] Navegação para a página de checkout
-   [ ] (Planejado) Preenchimento dos dados de entrega e continuação do fluxo
-   [x] **[Ver Casos de Teste do Checkout](cypress/doc/casos-de-teste-checkout.md)**

--- 
## 🏗️ Estrutura do Projeto

```text
.
├── cypress
│   ├── docs
│   │   ├── casos-de-teste-carrinho.md
│   │   ├── casos-de-teste-checkout.md
│   │   └── casos-de-teste-login.md
│   ├── e2e
│   │   ├── cart
│   │   │   └── carrinho.cy.js
│   │   ├── checkout
│   │   │   └── checkout.cy.js
│   │   └── login
│   │       └── login.cy.js
│   ├── fixtures
│   │   ├── produtos.json
│   │   └── usuarios.json
│   └── support
│       ├── commands.js
│       └── e2e.js
├── .gitignore
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md



Este projeto foi desenvolvido por **David Queoma da Silva** como parte de seu portfólio profissional em Engenharia de Qualidade de Software.

