describe('Game rules',  () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Rock wins over Scissors', () => {
        //1 represents rock
        cy.get('#leftChoice').type('1')
        //3 represents scissors
        cy.get('#rightChoice').type('3')
        cy.get('#determineWinner').click()
        cy.get('#winner').should('contain', 'Left')
    })
    
    it('Scissors win over Paper', () => {
        //2 represents paper
        cy.get('#leftChoice').type('2')
        //3 represents scissors
        cy.get('#rightChoice').type('3')
        cy.get('#determineWinner').click()
        cy.get('#winner').should('contain', 'Right')
    })
    
    it('Paper wins over Rock', () => {
        //2 represents paper
        cy.get('#leftChoice').type('2')
        //1 represents rock
        cy.get('#rightChoice').type('1')
        cy.get('#determineWinner').click()
        cy.get('#winner').should('contain', 'Right')
    })
    
    it('Identicals picks result in a tie', () => {
        //1 represents rock
        cy.get('#leftChoice').type('1')
        //1 represents rock
        cy.get('#rightChoice').type('1')
        cy.get('#determineWinner').click()
        cy.get('#winner').should('contain', 'Tie')
    })
})