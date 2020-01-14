context('Actions', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    describe('given main page', () => {
        it('should navigate to `Vocabulary` tab', () => {
            cy.get('#top_navigation > [href="vocabulary/"]').click()
        });
    });

});
