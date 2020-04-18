/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')
    cy.visit('https://example.cypress.io/commands/querying')
    cy.get('a[href*="commands/querying"]').contains('Querying').click()
  
  })
})
