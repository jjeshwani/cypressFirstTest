export class ConjBoxSuitePage {

    open() {
        return '/verbs/conjugation/';
    }

    getDropDown() {
        return '[name="tense_id"]';
    }

    getStartButton() {
        return 'form > div:nth-child(2) .button';
    }
}
