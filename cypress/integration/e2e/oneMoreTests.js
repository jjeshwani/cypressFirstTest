describe('Actions', () => {
    before(() => {
        cy.visit('/')
    });

    describe('given `Conjugation` page', () => {
        before(() => {
            cy.visit('verbs/conjugation/')
        });
        describe('when user selects `Past Perfect Conjugation` in drop down and clicks `Start` button', () => {
            before(() => {
                cy.get('.choosebox').select('Past Perfect Conjugation');
                cy.get('form > div:nth-child(2) .button').click()
            });
            it('should navigate to `Verbs/conjugation/present/` form', () => {
                cy.url().should('include', 'past-perfect');
                cy.get('#content h1').should('contains.text', 'Past Perfect Conjugation');
            });
        });
    });
});
