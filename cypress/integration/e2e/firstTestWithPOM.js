import {MenuItems} from '../../page-objects/homePageMenu/MenuItems';

describe('First test with POM improvements', () => {
    const menu = new MenuItems();

    describe('given main page', () => {
        before(() => {
            cy.visit(menu.open())
        });

        it('should navigate to `Conjugation` tab', () => {
            cy.get(menu.getConjugationTab()).click()
        });

    });
});
