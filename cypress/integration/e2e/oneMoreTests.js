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
                cy.get('[name="tense_id"]').select('Past Perfect Conjugation');
                cy.get('form > div:nth-child(2) .button').click()
            });
            it('should navigate to `Verbs/conjugation/past-perfect/` form', () => {
                cy.url().should('include', 'past-perfect');
                cy.get('#content h1').should('contains.text', 'Past Perfect Conjugation');
            });
        });
    });

    describe('given `Present Tense Conjugation` page', () => {
        before( () =>{
            cy.visit('verbs/conjugation/present/')
        });
        describe('when user clicks on `ß` letter in front of `ich`', () => {
            before( () =>{
                cy.get('[onclick="add_special1(\'ß\')"]').click()
            });
            it('should display `ß` letter inside input filed', () => {
                cy.get('[name*="input1"]').should('have.value', 'ß')
            });
        });
    });
});
