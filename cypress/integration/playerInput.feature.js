describe('Player can use hotkeys for input', () => {
  before(() => { 
    cy.visit('/')
  })
  
  it('Left player can press "1" for "rock"', () => {
    cy.get('body').type('1')
    cy.get('#leftChoice').should('contain', 'rock')
  })
  
  it('Left player can press "2" for "paper"', () => {
    cy.get('body').type('2')
    cy.get('#leftChoice').should('contain', 'paper')
  })
  
  it('Left player can press "3" for "scissors"', () => {
    cy.get('body').type('3')
    cy.get('#leftChoice').should('contain', 'scissors')
  })
  
  it('Right player can press "1" for "rock"', () => {
    cy.get('body').type('1')
    cy.get('#rightChoice').should('contain', 'rock')
  })
  
  it('Right player can press "2" for "paper"', () => {
    cy.get('body').type('2')
    cy.get('#rightChoice').should('contain', 'paper')
  })
  
  it('Right player can press "3" for "scissors"', () => {
  cy.get('body').type('3')
    cy.get('#rightChoice').should('contain', 'scissors')
  })
})