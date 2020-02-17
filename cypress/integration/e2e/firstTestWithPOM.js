import menuItems from '../../page-objects/homePageMenu/menuItems';

describe('First test with POM improvements', () => {
    const menu = new menuItems();
    const menuConj = new menu.getConjugation();

    describe('Given main page', ()=>{
        before(()=> {
            menu.visit()
        });
        it('should navigate to `Conjugation` tab', () => {
            menuConj.click()
        });

    });

});
