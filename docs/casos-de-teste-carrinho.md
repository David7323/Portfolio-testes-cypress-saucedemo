# Casos de Teste - Funcionalidade de Carrinho (Sauce Demo)

**Funcionalidade:** Gerenciamento do Carrinho de Compras
**Data:** 22/09/2025
**Autor:** David Queoma da Silva

---

## Tabela de Casos de Teste

| ID do Teste | Título do Teste | Pré-condições | Passos para Execução | Dados de Teste | Resultado Esperado |
| **CT-CART-001** | Adicionar item ao carrinho | Usuário deve estar logado na página de produtos. | 1. Clicar em "Add to cart" de um item.   
 2. Clicar no ícone do carrinho. | Produto: `Sauce Labs Bike Light` | O contador do carrinho deve exibir "1".   
 O item deve ser listado corretamente na página do carrinho. |
| **CT-CART-002** | Remover item do carrinho | Usuário logado com 1 item no carrinho. | 1. Adicionar um item ao carrinho.   
 2. Acessar a página do carrinho.   
 3. Clicar em "Remove" no item desejado. | Produto: `Sauce Labs Bike Light` | O contador do carrinho deve desaparecer.   
 O item não deve mais ser listado na página. |
| **CT-CART-003** | Adicionar múltiplos itens | Usuário deve estar logado na página de produtos. | 1. Adicionar dois itens diferentes ao carrinho.   
 2. Acessar a página do carrinho. | Produto 1: `Sauce Labs Backpack`   
 Produto 2: `Sauce Labs Bolt T-Shirt` | O contador do carrinho deve exibir "2".   
 Ambos os itens devem ser listados corretamente na página do carrinho. |
| **CT-CART-004** | Persistência do Carrinho | Usuário deve estar cadastrado e ativo. | 1. Fazer login.   
 2. Adicionar um item ao carrinho.   
 3. Fazer logout.   
 4. Fazer login novamente com o mesmo usuário. | Usuário: `standard_user`   
 Produto: `Sauce Labs Bike Light` | Após o segundo login, o contador do carrinho deve exibir "1" e o item deve permanecer no carrinho. |

---

## Observações
- Todos os testes foram planejados para o ambiente público [Sauce Demo](https://www.saucedemo.com/ ).
- Esse documento serve como referência para a automação criada em `cypress/e2e/cart/carrinho.cy.js`.
- Manter a documentação dos casos de teste garante rastreabilidade entre **especificação** e **automação**.

