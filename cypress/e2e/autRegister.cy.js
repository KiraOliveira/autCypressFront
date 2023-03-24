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

      //Aqui ele valida se a frase "De qual lado da aplicação desenvolve?" aparece e se label "Back-end" existe e está visível
      cy.contains('De qual lado da aplicação desenvolve?')
      cy.contains('Back-end')
      cy.get(':nth-child(3) > :nth-child(3)').should('exist').and('be.visible')
      cy.get(':nth-child(3) > :nth-child(3)').click()

      //Aqui ele valida se a label "Senioridade" existe e está visível
      cy.contains('Senioridade')
      cy.get('#senioridade').should('exist').and('be.visible')
      cy.get('#senioridade').select('Pleno')

      //Aqui ele valida se a frase "Selecione as tecnologias que utiliza:" aparece
      cy.contains('Selecione as tecnologias que utiliza:')

      //Após validar a frase, ele valida se as labels que serão marcadas aparecem

      //Aguardar 2 segundos para poder ver o teste
      cy.wait(2000)

      //CSS - Será marcado e desmarcado
      cy.contains('CSS')
      cy.get('#tecnologia2').should('exist').and('be.visible')
      cy.get('#tecnologia2').check().uncheck()

      //Aguardar 2 segundos para poder ver o teste
      cy.wait(2000)

      //JavaScript - Será marcado e desmarcado
      cy.contains('JavaScript')
      cy.get('#tecnologia3').should('exist').and('be.visible')
      cy.get('#tecnologia3').check().uncheck()

      //Aguardar 2 segundos para poder ver o teste
      cy.wait(2000)

      //Java - Será marcado e desmarcado
      cy.contains('Java')
      cy.get('#tecnologia7').should('exist').and('be.visible')
      cy.get('#tecnologia7').check().uncheck()

      //Aguardar 2 segundos para poder ver o teste
      cy.wait(2000)

      //Python - Será marcado e permanecerá marcado
      cy.contains('Python')
      cy.get('#tecnologia6').should('exist').and('be.visible')
      cy.get('#tecnologia6').check()

      //Aqui valida o campo "Experiência" e insere dados
      cy.contains('Conte um pouco da sua experiência:')
      cy.get('#experiencia').should('exist').and('be.visible')
      cy.get('#experiencia').type('6 anos na área de QA')

      cy.screenshot('Full Screen')

      //Aqui valida o botão e clica nele
      cy.get('.botao').should('exist').and('be.visible')
      cy.get('.botao').click()
    })
  })
})
/*})*/
