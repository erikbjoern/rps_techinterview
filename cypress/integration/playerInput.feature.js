describe('Player can use hotkeys for input', () => {
  before(() => { 
    cy.visit('/')
  })
  
  it('Left player can press "1" for "rock"', () => {
    cy.get('body').trigger('keydown', { keyCode: 49 })
    cy.get('#leftChoice').should('have.value', 'rock')
  })
  
  it('Left player can press "2" for "paper"', () => {
    cy.get('body').trigger('keydown', { keyCode: 50 })
    cy.get('#leftChoice').should('have.value', 'paper')
  })
  
  it('Left player can press "3" for "scissors"', () => {
    cy.get('body').trigger('keydown', { keyCode: 51 })
    cy.get('#leftChoice').should('have.value', 'scissors')
  })
  
  it('Right player can press "ArrowLeft" for "rock"', () => {
    cy.get('body').trigger('keydown', { keyCode: 37 })
    cy.get('#rightChoice').should('have.value', 'rock')
  })
  
  it('Right player can press "ArrowUp" for "paper"', () => {
    cy.get('body').trigger('keydown', { keyCode: 38 })
    cy.get('#rightChoice').should('have.value', 'paper')
  })
  
  it('Right player can press "ArrowRight" for "scissors"', () => {
  cy.get('body').trigger('keydown', { keyCode: 39 })
    cy.get('#rightChoice').should('have.value', 'scissors')
  })
})