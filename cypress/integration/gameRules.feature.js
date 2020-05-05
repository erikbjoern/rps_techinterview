describe('Game rules',  () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Rock wins over Scissors', () => {
    cy.get('body').trigger('keydown', {keyCode: 49})
    cy.get('body').trigger('keydown', {keyCode: 39})
    cy.get('#determineWinner').click()
    cy.get('#winner').should('contain', 'Left')
  })
  
  it('Scissors win over Paper', () => {
    cy.get('body').trigger('keydown', {keyCode: 50})
    cy.get('body').trigger('keydown', {keyCode: 39})
    cy.get('#determineWinner').click()
    cy.get('#winner').should('contain', 'Right')
  })
  
  it('Paper wins over Rock', () => {
    cy.get('body').trigger('keydown', {keyCode: 50})
    cy.get('body').trigger('keydown', {keyCode: 37})
    cy.get('#determineWinner').click()
    cy.get('#winner').should('contain', 'Left')
  })
  
  it('Identicals picks result in a tie', () => {
    cy.get('body').trigger('keydown', {keyCode: 49})
    cy.get('body').trigger('keydown', {keyCode: 37})
    cy.get('#determineWinner').click()
    cy.get('#winner').should('contain', 'Tie')
  })
})