describe('La app me saluda correctamente', () => {

  it('Puedo visitar el sitio', () => {
      // Va a la baseUrl configurada en cypress.json
      cy.visit('/')

  })

  it('El estado incial de mi app es el correcto', () => {
    
   // Va a la baseUrl configurada en cypress.json
  cy.visit('/')

  // Mis inputs se esta renderizando y es visible
  cy.get('#name-input')
  .should('be.visible')
  
  // Mis botton existe y es visible
  cy.get('#name-btn')
  .should('be.visible')

  // Mi saludo no deberia existir
  cy.get('#greeting')
  .should('not.exist')

  })

  it('La app me saluda', () => {
   // Va a la baseUrl configurada en cypress.json
  cy.visit('/')

  cy.get('#name-input')
  .type('Raúl Barrón')
  
  cy.get('#name-btn')
  .click()
  
  cy.get('#greeting')
  .should('have.text', 'Bienvenido a Cypress, Raúl Barrón')

  })

})