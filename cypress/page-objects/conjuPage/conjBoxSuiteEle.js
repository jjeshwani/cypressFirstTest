class conjBoxSuiteEle{
    visit() {
        cy.visit('/verbs/conjugation/');
    }

    getDropDown() {
        return cy.get('[name="tense_id"]')
    }
    getstartButton(){
        return cy.get('form > div:nth-child(2) .button')
    }

}

export default conjBoxSuiteEle;
