describe('Game rules',  () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Rock wins over Scissors', () => {
        Left.picks('rock')
        Right.picks('scissors')
        cy.get('#winner').should('contain', 'Left')
    })

    it('Scissors win over Paper', () => {
        Left.pick('paper')
        Right.picks('scissors')
        cy.get('#winner').should('contain', 'Right')
    })
    
    it('Paper wins over Rock', () => {
        Left.pick('paper')
        Right.picks('rock')
        cy.get('#winner').should('contain', 'Left')
    })
})