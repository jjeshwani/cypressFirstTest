context('Actions', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    describe('given main page', () => {
        it('should navigate to `Conjugation` tab', () => {
            //cy.get('#top_navigation > [href="vocabulary/"]').click()
            //cy.get('.chosen').click()
            cy.get('#top_navigation > [href="verbs/conjugation/"]').click()
        });
    });
});
