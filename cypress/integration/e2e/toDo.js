context('/verbs/conjugation/', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    describe('given `Conjugation` page', () => {
        before( () =>{
            //TODO add action to navigate to the `Conjugation` page
        });
        describe('when user selects `Past Perfect Conjugation` in drop down and clicks `Start` button', () => {
            before( () =>{
                //TODO add action for selecting `Past Perfect Conjugation` option from drop down
                //TODO add action for clicking on the Start button
            });
            it('should navigate to `Verbs/conjugation/present/` form', () => {
                // TODO add assertion to verify that you were redirected to `verbs/conjugation/present/` page
                // TODO add assertion that the form with Conjugation is present
            });
        });
    });


    describe('given `Present Tense Conjugation` page', () => {
        before( () =>{
            //TODO navigate to `/verbs/conjugation/present/`
        });
        describe('when user clicks on `ß` letter in front of `ich`', () => {
            before( () =>{
                //TODO clicks on `ß` letter from the form
            });
            it('should display `ß` letter inside input filed', () => {
                // TODO `ß` letter inside input filed
            });
        });
    });

});
