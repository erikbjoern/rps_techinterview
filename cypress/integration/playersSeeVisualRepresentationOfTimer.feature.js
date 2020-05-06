describe('Players should see', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('a timer countdown', () => {
    cy.get('#countdown').should('be.visible')
  })

  it('the timer ticking', () => {
    cy.get('#countdown').should('contain', 'rock')
    cy.wait(1000)
    cy.get('#countdown').should('contain', 'paper')
    cy.wait(1000)
    cy.get('#countdown').should('contain', 'scissors')
  })
})