export class PastPerfectPage {

    open() {
        return '/verbs/conjugation/past-perfect/';
    }

    getHeader() {
        return '#content h1';
    }

    getSpecialSymbolWithNumber(specialSymbolNumber) {
        return `[onclick="add_special${specialSymbolNumber}(\'ß\')"]`;
    }

    getInputFieldNumber(inputFieldNumber) {
        return `[name*="input${inputFieldNumber}"]`
    }
}

