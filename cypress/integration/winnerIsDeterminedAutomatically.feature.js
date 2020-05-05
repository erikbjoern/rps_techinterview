describe('Winner is determined automatically', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('after a timer countdown', () => {
    cy.get('body').trigger('keydown', { keyCode: 49 })
    cy.get('body').trigger('keydown', { keyCode: 39 })
    cy.wait(6000)
    cy.get('#winner').should('contain', 'Left wins')
  })
})