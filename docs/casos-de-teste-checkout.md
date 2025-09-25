# Casos de Teste - Funcionalidade de Checkout (Sauce Demo)

**Funcionalidade:** Finalização de Compra
**Data:** 22/09/2025
**Autor:** David Queoma da Silva

---

## Tabela de Casos de Teste

| ID do Teste | Título do Teste | Pré-condições | Passos para Execução | Dados de Teste | Resultado Esperado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **CT-CHECKOUT-001** | Acessar página de Checkout | Usuário logado com ao menos 1 item no carrinho. | 1. Acessar a página do carrinho.   
 2. Clicar no botão "Checkout". | N/A | O usuário deve ser redirecionado para a página de checkout (`/checkout-step-one.html`).   
 Os campos "First Name", "Last Name" e "Zip/Postal Code" devem estar visíveis. |
| **CT-CHECKOUT-002** | Preencher dados e continuar | Usuário na página de checkout. | 1. Preencher os campos do formulário.   
 2. Clicar em "Continue". | First Name: `David`   
 Last Name: `Queoma`   
 Postal Code: `12345` | O usuário deve ser redirecionado para a página de resumo do pedido (`/checkout-step-two.html`). |

---

## Observações
- Todos os testes foram planejados para o ambiente público [Sauce Demo](https://www.saucedemo.com/ ).
- Esse documento serve como referência para a automação criada em `cypress/e2e/checkout/checkout.cy.js`.
- **Status da Automação:** O teste `CT-CHECKOUT-001` está **automatizado e ativo**. O `CT-CHECKOUT-002` está **planejado e marcado como pendente (`it.skip`)** no código para implementação futura.
- Manter a documentação dos casos de teste garante rastreabilidade entre **especificação** e **automação**.
