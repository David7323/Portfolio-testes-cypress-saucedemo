describe('Funcionalidade de Carrinho - Sauce Demo', () => {

  // O beforeEach vai: carregar dados, visitar, logar.
  beforeEach(function() {
    // Carrega os dados das fixtures para uso no teste
    cy.fixture('usuarios').as('usuarios');
    cy.fixture('produtos').as('produtos');

    // --- SETUP COMPLETO ANTES DE CADA TESTE ---
    // 1. Visita a página de login
    cy.visit('/');

    // 2. Pega os dados do usuário válido da fixture e faz o login
    cy.get('@usuarios').then((usuarios) => {
      cy.login(usuarios.valido.username, usuarios.valido.password);
    });

    // 3. Garante que o login foi bem-sucedido e estamos na página de produtos
    cy.url().should('include', '/inventory.html');
    
    // Como estamos visitando a página do zero a cada teste, o carrinho já começa limpo.
  });

  it('CT-CART-001: Deve adicionar um produto específico ao carrinho', function() {
    const nomeProduto = this.produtos.produto_1;

    cy.contains('.inventory_item_name', nomeProduto)
      .parents('.inventory_item')
      .find('[data-test^="add-to-cart-"]')
      .click();

    cy.get('.shopping_cart_badge').should('have.text', '1');
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    cy.get('.inventory_item_name').should('have.text', nomeProduto);
  });

  it('CT-CART-002: Deve remover um produto do carrinho com sucesso', function() {
    const nomeProduto = this.produtos.produto_1;

    // Adiciona o item
    cy.contains('.inventory_item_name', nomeProduto)
      .parents('.inventory_item')
      .find('[data-test^="add-to-cart-"]')
      .click();
    cy.get('.shopping_cart_badge').should('have.text', '1');

    // Remove o item
    cy.get('.shopping_cart_link').click();
    cy.contains('.inventory_item_name', nomeProduto)
      .parents('.cart_item')
      .find('[data-test^="remove-"]')
      .click();

    cy.get('.shopping_cart_badge').should('not.exist');
    cy.contains('.inventory_item_name', nomeProduto).should('not.exist');
  });

  it('CT-CART-003: Deve adicionar múltiplos produtos ao carrinho', function() {
    const primeiroProduto = this.produtos.produto_2;
    const segundoProduto = this.produtos.produto_3;

    cy.contains('.inventory_item_name', primeiroProduto).parents('.inventory_item').find('[data-test^="add-to-cart-"]').click();
    cy.contains('.inventory_item_name', segundoProduto).parents('.inventory_item').find('[data-test^="add-to-cart-"]').click();

    cy.get('.shopping_cart_badge').should('have.text', '2');
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('have.length', 2);
    cy.contains('.inventory_item_name', primeiroProduto).should('be.visible');
    cy.contains('.inventory_item_name', segundoProduto).should('be.visible');
  });
  it('CT-CART-004: Deve manter os itens no carrinho após logout e login', function() {
    const nomeProduto = this.produtos.produto_1;
    const usuario = this.usuarios.valido;

    // --- ETAPA 1: Adicionar item e fazer logout ---
    
    // Adiciona o produto ao carrinho
    cy.contains('.inventory_item_name', nomeProduto)
      .parents('.inventory_item')
      .find('[data-test^="add-to-cart-"]')
      .click();

    // Valida que o item foi adicionado
    cy.get('.shopping_cart_badge').should('have.text', '1');

    // Faz logout usando o novo comando
    cy.logout();

    // Valida que voltamos para a página de login
    cy.url().should('not.include', 'inventory');
    cy.get('[data-test="login-button"]').should('be.visible');

    // --- ETAPA 2: Fazer login novamente e verificar o carrinho ---

    // Faz login novamente com o mesmo usuário
    cy.login(usuario.username, usuario.password);

    // Valida que o login foi bem-sucedido
    cy.url().should('include', '/inventory.html');

    // VERIFICAÇÃO FINAL: O ícone do carrinho deve mostrar "1",
    // provando que o item persistiu.
    cy.get('.shopping_cart_badge').should('have.text', '1');

    // Verificação extra: Acessa o carrinho e confirma o item
    cy.get('.shopping_cart_link').click();
    cy.contains('.inventory_item_name', nomeProduto).should('be.visible');
  });
});
