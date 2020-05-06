describe('Players should see', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('a button to start the game', () => {
    cy.get('#start-game').should('contain', 'Start!')
  })

  it('the button starts the countdown', () => {
    cy.get('#start-game').click()
    cy.get('#countdown').should('contain', 'rock')
    cy.wait(1000)
    cy.get('#countdown').should('contain', 'paper')
    cy.wait(1000)
    cy.get('#countdown').should('contain', 'scissors')
  })
})