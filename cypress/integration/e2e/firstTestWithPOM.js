import menuItems from '../../page-objects/homePageMenu/menuItems';

describe('First test with POM improvements', () => {
    const menu = new menuItems();

    describe('Given main page', () => {
        before(() => {
            cy.visit(menu.visit())
        });

        it('should navigate to `Conjugation` tab', () => {
            cy.get(menu.getConjugation()).click()
        });

    });
});
