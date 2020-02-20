export default class PastPerfectPage {

    open() {
        return '/verbs/conjugation/past-perfect/';
    }

    getHeader() {
        return '#content h1';
    }

    getSpecial1() {
        return '[onclick="add_special1(\'ß\')"]';
    }

    getInput1() {
     return '[name*="input1"]'
    }


}

