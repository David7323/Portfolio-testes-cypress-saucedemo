describe('Funcionalidade de Login - Sauce Demo', () => {

  // O hook beforeEach agora carrega a fixture antes de CADA teste.
  beforeEach(function() { // Usamos function() para poder usar 'this'
    cy.visit('/');
    // Carrega o arquivo 'usuarios.json' e o apelida de 'usuarios'
    cy.fixture('usuarios').as('usuarios');
  });

  it('CT-001 - Login válido', function() {
    // Acessa os dados da fixture usando this.usuarios
    const usuario = this.usuarios.valido;
    cy.login(usuario.username, usuario.password);
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
  });

  it('CT-002 - Login inválido (senha incorreta)', function() {
    const usuario = this.usuarios.invalido;
    cy.login(usuario.username, usuario.password);
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Username and password do not match');
  });

  it('CT-003 - Usuário bloqueado', function() {
    const usuario = this.usuarios.bloqueado;
    cy.login(usuario.username, usuario.password);
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Sorry, this user has been locked out.');
  });

  // --- TESTES RESTANTES CORRIGIDOS ---

  it('CT-004 - Campos em branco (usuário e senha)', () => { // Não precisa de 'function()' pois não usa 'this'
    // Chama o comando de login sem argumentos
    cy.login();
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Username is required');
  });

  it('CT-005 - Login com espaços em branco no fim do usuário', function() {
    // Podemos construir o dado inválido a partir de um válido
    const usuarioValido = this.usuarios.valido;
    const usuarioComEspaco = `${usuarioValido.username} `; // Adiciona um espaço no final

    cy.login(usuarioComEspaco, usuarioValido.password);
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Username and password do not match');
  });

  it('CT-006 - Usuário inexistente', function() {
    // Podemos usar a senha de um usuário válido, mas um username inventado
    const senhaValida = this.usuarios.valido.password;
    cy.login('usuario_nao_existe', senhaValida);
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Username and password do not match');
  });

  it('CT-007 - Campo de senha em branco', function() {
    const usuarioValido = this.usuarios.valido;
    // Chama o comando de login apenas com o username
    cy.login(usuarioValido.username);
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Password is required');
  });

  it('CT-008 - Tentativa de SQL Injection', () => { // Não precisa de 'function()' pois não usa 'this'
    cy.login("' OR '1'='1", 'teste');
    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Username and password do not match');
  });
});
