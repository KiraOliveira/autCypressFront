///<reference types="cypress" />

describe('Acessar site', () => {
  before(() => {
    cy.visit('https://viagenskira.netlify.app/')
    cy.get('.btn-primary').click()
  })
  describe('Validando formulário', () => {
    it('Passo 1 - Validando que estou na tela do formulário', () => {
      cy.contains('Formulário de Cadastro')

      /*describe('Inserindo o nome', () => {
      it('Passo 2 - Nome', () => {*/
      //Aqui ele começa dentro do link do formulário
      cy.visit('https://viagenskira.netlify.app/register.html')

      //Aqui ele valida se a label "Nome" existe e está visível
      cy.contains('Nome')
      cy.get(':nth-child(1) > :nth-child(1) > label > strong')
        .should('exist')
        .and('be.visible')

      //Validando o campo "Nome"
      cy.get('#nome').should('exist').and('be.visible')
      cy.get('#nome').type('Kira')
      /*})*/
      //Aqui ele valida se a label "Sobrenome" existe e está visível
      cy.contains('Sobrenome')
      cy.get(':nth-child(1) > :nth-child(2) > label > strong')
        .should('exist')
        .and('be.visible')

      //Validando o campo "Sobrenome"
      cy.get('#sobrenome').should('exist').and('be.visible')
      cy.get('#sobrenome').type('Oliveira')

      //Aqui ele valida se a label "Email" existe e está visível
      cy.contains('Email')
      cy.get('form > :nth-child(2) > label > strong')
        .should('exist')
        .and('be.visible')

      //Validando o campo "email"
      cy.get('#email').should('exist').and('be.visible')
      cy.get('#email').type('kira@gmail.com')
    })
  })
})
/*})*/
