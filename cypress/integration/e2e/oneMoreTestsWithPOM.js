import {ConjBoxSuitePage} from '../../page-objects/conjuPage/ConjBoxSuitePage';
import {PastPerfectPage} from "../../page-objects/pastPerfectPage/PastPerfectPage";

describe('given `Conjugation` page', () => {
    const conjugationBox = new ConjBoxSuitePage();
    const pastPerfect = new PastPerfectPage();

    before(() => {
        cy.visit(conjugationBox.open())
    });

    describe('when user selects `Past Perfect Conjugation` in drop down and clicks `Start` button', () => {
        before(() => {
            cy.get(conjugationBox.getDropDown()).select('Past Perfect Conjugation');
            cy.get(conjugationBox.getStartButton()).click()
        });
        it('should navigate to `Verbs/conjugation/past-perfect/` form', () => {
            cy.url().should('include', 'past-perfect');
            cy.get(pastPerfect.getHeader()).should('contains.text', 'Past Perfect Conjugation');
        });
    });


    describe('given `Past Perfect Conjugation` page', () => {
        before(() => {
            cy.visit(pastPerfect.open())

        });
        describe('when user clicks on `ß` letter in front of `ich`', () => {
            before(() => {

                cy.get(pastPerfect.getSpecialSymbolWithNumber(1)).click()
            });
            it('should display `ß` letter inside input filed', () => {

                cy.get(pastPerfect.getInputFieldNumber(1)).should('have.value', 'ß')
            });
        });
    });
});
