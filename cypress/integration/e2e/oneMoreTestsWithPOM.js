import ConjBoxSuiteEle from '../../page-objects/conjuPage/ConjBoxSuiteEle';
import PastPerfectEle from "../../page-objects/pastPerfectPage/PastPerfectEle";

describe('Given Conjugation Page', () => {
    const conj = new ConjBoxSuiteEle();
    const pastPerfect =  new PastPerfectEle();

    before(() => {
        cy.visit(conj.open())
    });

    describe('when user selects `Past Perfect Conjugation` in drop down and clicks `Start` button', () => {
        before(() => {
            cy.get(conj.getDropDown()).select('Past Perfect Conjugation')
            cy.get(conj.getStartButton()).click()
        });
        it('should navigate to `Verbs/conjugation/past-perfect/` form', () => {
            cy.url().should('include', 'past-perfect');
            cy.get(pastPerfect.getHeader()).should('contains.text', 'Past Perfect Conjugation');
        });
    });


    describe('given `Past Perfect Conjugation` page', () => {
        before( () =>{
            cy.visit(pastPerfect.open())

        });
        describe('when user clicks on `ß` letter in front of `ich`', () => {
            before( () =>{

                cy.get(pastPerfect.getSpecial1()).click()
            });
            it('should display `ß` letter inside input filed', () => {

                cy.get(pastPerfect.getInput1()).should('have.value', 'ß')
            });
        });
    });
});
