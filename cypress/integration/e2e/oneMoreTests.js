context('Actions', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    describe('given `Conjugation` page', () => {
        before( () =>{
            cy.visit('verbs/conjugation/')
        });
        describe('when user selects `Past Perfect Conjugation` in drop down and clicks `Start` button', () => {
            before( () =>{

                cy.get('.choosebox').select('Past Perfect Conjugation')

                cy.get('form > div:nth-child(2) .button').click({force: true})

            });
            it('should navigate to `Verbs/conjugation/present/` form', () => {
                // TODO add assertion to verify that you were redirected to `verbs/conjugation/present/` page
                console.log(cy.url())

                // TODO add assertion that the form with Conjugation is present
            });
        });
    });
});
