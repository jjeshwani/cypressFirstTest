//import menuItems from '../../page-objects/homePageMenu/menuItems';
import conjBoxSuiteEle from '../../page-objects/conjuPage/conjBoxSuiteEle';
import pastPerfectEle from "../../page-objects/pastPerfectPage/pastPerfectEle";

describe('Given Conjugation Page', () => {
    const conj = new conjBoxSuiteEle();
    const pastPerfect =  new pastPerfectEle();

    before(() => {
        cy.visit(conj.visit())
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
            cy.visit(pastPerfect.visit())

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
