# Casos de Teste - Funcionalidade de Login (Sauce Demo)

**Funcionalidade:** Autenticação de Usuário - Sauce Demo
**Data:** 21/09/2025
**Autor:** David Queoma da Silva

---

## Tabela de Casos de Teste

| ID do Teste | Título do Teste | Pré-condições | Passos para Execução | Dados de Teste | Resultado Esperado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **CT-001** | Login Válido | Usuário deve estar cadastrado e ativo. | 1. Acessar `https://www.saucedemo.com/`.   
 2. Informar usuário válido.   
 3. Informar senha válida.   
 4. Clicar em "Login". | Usuário: `standard_user`   
 Senha: `secret_sauce` | Login deve ser realizado com sucesso e o usuário deve ser redirecionado para a página de produtos (`/inventory.html` ). |
| **CT-002** | Login Inválido (senha incorreta) | Usuário deve estar cadastrado. | 1. Acessar a página de login.   
 2. Informar usuário válido.   
 3. Informar senha inválida.   
 4. Clicar em "Login". | Usuário: `standard_user`   
 Senha: `senha_errada` | Sistema deve exibir mensagem de erro: **"Username and password do not match"** e não deve permitir o login. |
| **CT-003** | Usuário Bloqueado | Usuário bloqueado cadastrado no sistema. | 1. Acessar a página de login.   
 2. Informar usuário bloqueado.   
 3. Informar senha válida.   
 4. Clicar em "Login". | Usuário: `locked_out_user`   
 Senha: `secret_sauce` | Sistema deve exibir mensagem de erro: **"Sorry, this user has been locked out."** |
| **CT-004** | Campos em Branco (usuário e senha) | N/A | 1. Acessar a página de login.   
 2. Deixar campos de usuário e senha em branco.   
 3. Clicar em "Login". | Usuário: `(vazio)`   
 Senha: `(vazio)` | Sistema deve exibir mensagem de erro: **"Username is required"**. |
| **CT-005** | Login com Espaço em Branco | Usuário deve estar cadastrado. | 1. Acessar a página de login.   
 2. Informar usuário válido com um espaço no final.   
 3. Informar senha válida.   
 4. Clicar em "Login". | Usuário: `'standard_user '`   
 Senha: `secret_sauce` | Sistema deve exibir mensagem de erro: **"Username and password do not match"**. |
| **CT-006** | Usuário Inexistente | N/A | 1. Acessar a página de login.   
 2. Informar um usuário que não existe.   
 3. Informar qualquer senha.   
 4. Clicar em "Login". | Usuário: `usuario_nao_existe`   
 Senha: `secret_sauce` | Sistema deve exibir mensagem de erro: **"Username and password do not match"**. |
| **CT-007** | Campo de Senha em Branco | Usuário deve estar cadastrado. | 1. Acessar a página de login.   
 2. Informar um usuário válido.   
 3. Deixar o campo de senha em branco.   
 4. Clicar em "Login". | Usuário: `standard_user`   
 Senha: `(vazio)` | Sistema deve exibir mensagem de erro: **"Password is required"**. |
| **CT-008** | Tentativa de SQL Injection | N/A | 1. Acessar a página de login.   
 2. Inserir uma string de SQL Injection no campo de usuário.   
 3. Informar qualquer senha.   
 4. Clicar em "Login". | Usuário: `' OR '1'='1`   
 Senha: `teste` | O login não deve ser efetuado. O sistema deve tratar a entrada como inválida e exibir a mensagem de erro: **"Username and password do not match"**. |

---

## Observações
- Todos os testes foram planejados para o ambiente público [Sauce Demo](https://www.saucedemo.com/ ).
- Esse documento serve como referência para a automação criada em `cypress/e2e/login/login.cy.js`.
- Manter a documentação dos casos de teste garante rastreabilidade entre **especificação** e **automação**.

