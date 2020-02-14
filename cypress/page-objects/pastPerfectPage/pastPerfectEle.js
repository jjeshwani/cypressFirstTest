class pastPerfectEle {

    visit() {
        cy.visit('/verbs/conjugation/past-perfect/');
    }

    getHeader() {
        return cy.get('#content h1');
    }

    getSpecial1() {
        return cy.get('[onclick="add_special1(\'ß\')"]');
    }

    getInput1() {
     return cy.get('[name*="input1"]')
    }


}

export default pastPerfectEle;