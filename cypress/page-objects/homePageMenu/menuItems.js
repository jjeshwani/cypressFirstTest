class menuItems {

    visit() {
        cy.visit('/');
    }

    getConjugation() {
        return cy.get('#top_navigation > [href="verbs/conjugation/"]');
    }

}

export default menuItems;