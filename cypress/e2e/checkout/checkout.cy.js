describe('Funcionalidade de Checkout - Sauce Demo', () => {

  // Este beforeEach vai preparar o cenário para AMBOS os testes de checkout.
  beforeEach(function() {
    // Carrega as fixtures necessárias
    cy.fixture('usuarios').as('usuarios');
    cy.fixture('produtos').as('produtos');

    // Visita a página e faz o login
    cy.visit('/');
    cy.get('@usuarios').then((usuarios) => {
      cy.login(usuarios.valido.username, usuarios.valido.password);
    });
    cy.url().should('include', '/inventory.html');

    // Adiciona um item ao carrinho para poder ir ao checkout
    cy.get('@produtos').then((produtos) => {
      cy.contains('.inventory_item_name', produtos.produto_1)
        .parents('.inventory_item')
        .find('[data-test^="add-to-cart-"]')
        .click();
    });

    // Navega até a página de checkout
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
  });

  it('CT-CHECKOUT-001: Deve navegar para a página de checkout e exibir os campos', () => {
    // Valida se estamos na página correta
    cy.url().should('include', '/checkout-step-one.html');

    // Valida se os campos do formulário estão visíveis
    cy.get('[data-test="firstName"]').should('be.visible');
    cy.get('[data-test="lastName"]').should('be.visible');
    cy.get('[data-test="postalCode"]').should('be.visible');
    cy.get('[data-test="continue"]').should('be.visible');
  });

  // Deicxei it.skip para marcar este teste como "pendente",para demostração.
  // Ele aparecerá no relatório do Cypress, mas não será executado.
  // Isso documenta o trabalho futuro planejado.
  it.skip('CT-CHECKOUT-002: Deve preencher os dados e continuar para o próximo passo', () => {
    // Ações do teste (atualmente comentadas, pois o teste está pulado)
    cy.get('[data-test="firstName"]').type('David');
    cy.get('[data-test="lastName"]').type('Queoma');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();

    // Verificação do resultado
    cy.url().should('include', '/checkout-step-two.html');
    cy.get('.summary_info').should('be.visible');
  });
});

