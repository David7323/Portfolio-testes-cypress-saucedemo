// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/**



 * Comando personalizado para realizar o login na aplicação Sauce Demo.
 * @param {string} usuario - O nome de usuário para o login.
 * @param {string} senha - A senha para o login.
 */
Cypress.Commands.add('login', (usuario, senha) => {
  // Preenche o campo de usuário, se um usuário for fornecido
  if (usuario) {
    cy.get('[data-test="username"]').type(usuario);
  }

  // Preenche o campo de senha, se uma senha for fornecida
  if (senha) {
    cy.get('[data-test="password"]').type(senha);
  }

  // Clica no botão de login
  cy.get('[data-test="login-button"]').click();
});
/**
 * Comando personalizado para resetar o estado da aplicação.
 * Navega até o menu lateral, clica em "Reset App State" e fecha o menu.
 * Garante um estado limpo (ex: carrinho vazio) para os testes.
 */
Cypress.Commands.add('limparCarrinho', () => {
  cy.get('#react-burger-menu-btn').click();
  cy.get('#reset_sidebar_link').click();
  cy.get('#react-burger-cross-btn').click();
   // Validação extra: carrinho deve estar vazio
  cy.get('.shopping_cart_badge').should('not.exist');
});

/**
 * Comando personalizado para fazer logout da aplicação.
 * Abre o menu lateral e clica no link de logout.
 */
Cypress.Commands.add('logout', () => {
  cy.get('#react-burger-menu-btn').click();
  cy.get('#logout_sidebar_link').click();
});