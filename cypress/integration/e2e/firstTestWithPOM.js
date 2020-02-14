import menuItems from '../../page-objects/homePageMenu/menuItems';
context('Actions', () => {
    const menu = new menuItems();
    beforeEach(() => {
        menu.visit();
    });

    describe('given main page', () => {
        it('should navigate to `Conjugation` tab', () => {
            const menu =new menuItems();
            const menuConj = new menu.getConjugation();
            menuConj.click()
            //cy.get('#top_navigation > [href="verbs/conjugation/"]').click()
        });
    });
});