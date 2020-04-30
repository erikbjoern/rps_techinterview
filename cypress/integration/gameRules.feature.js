describe('Game rules',  () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Rock wins over Scissors', () => {
        cy.get('#leftChoice').type('rock')
        cy.get('#rightChoice').type('scissors')
        cy.get('#determineWinner').click()
        cy.get('#winner').should('contain', 'Left')
    })
    
    it('Scissors win over Paper', () => {
        cy.get('#leftChoice').type('paper')
        cy.get('#rightChoice').type('scissors')
        cy.get('#determineWinner').click()
        cy.get('#winner').should('contain', 'Right')
    })
    
    it('Paper wins over Rock', () => {
        cy.get('#leftChoice').type('paper')
        cy.get('#rightChoice').type('rock')
        cy.get('#determineWinner').click()
        cy.get('#winner').should('contain', 'Left')
    })
    
    it('Identicals picks result in a tie', () => {
        cy.get('#leftChoice').type('rock')
        cy.get('#rightChoice').type('rock')
        cy.get('#determineWinner').click()
        cy.get('#winner').should('contain', 'Tie')
    })
})