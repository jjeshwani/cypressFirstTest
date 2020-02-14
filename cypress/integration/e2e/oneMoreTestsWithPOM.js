//import menuItems from '../../page-objects/homePageMenu/menuItems';
import conjBoxSuiteEle from '../../page-objects/conjuPage/conjBoxSuiteEle';
import pastPerfectEle from "../../page-objects/pastPerfectPage/pastPerfectEle";

describe('Given Conjugation Page', () => {
    const conj = new conjBoxSuiteEle();
    const pastPerfect =  new pastPerfectEle();
    before(() => {
        conj.visit();
    });

    describe('when user selects `Past Perfect Conjugation` in drop down and clicks `Start` button', () => {
        before(() => {
            //const conj = new conjBoxSuiteEle();
            const conjdropDown = new conj.getDropDown();
            conjdropDown.select('Past Perfect Conjugation')
            //cy.wait(2000)
            const startBtn = new conj.getstartButton();
            startBtn.click()
            //cy.get('[name="tense_id"]').select('Past Perfect Conjugation');
            //cy.get('form > div:nth-child(2) .button').click()
        });
        it('should navigate to `Verbs/conjugation/past-perfect/` form', () => {
            cy.url().should('include', 'past-perfect');

            const pastHeader = new pastPerfect.getHeader();
            pastHeader.should('contains.text', 'Past Perfect Conjugation');
            //cy.get('#content h1').should('contains.text', 'Past Perfect Conjugation');
        });
    });


    describe('given `Past Perfect Conjugation` page', () => {
        before( () =>{
            pastPerfect.visit()
            //cy.visit('verbs/conjugation/present/')
        });
        describe('when user clicks on `ß` letter in front of `ich`', () => {
            before( () =>{
                const special1 = pastPerfect.getSpecial1();
                special1.click()
                //cy.get('[onclick="add_special1(\'ß\')"]').click()
            });
            it('should display `ß` letter inside input filed', () => {
                const input1 = pastPerfect.getInput1();
                input1.should('have.value', 'ß')
                //cy.get('[name*="input1"]').should('have.value', 'ß')
            });
        });
    });
});
