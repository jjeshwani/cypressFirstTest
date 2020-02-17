class conjBoxSuiteEle{
    visit() {
        return '/verbs/conjugation/';
    }

    getDropDown() {
        return '[name="tense_id"]';
    }
    getStartButton(){
        return 'form > div:nth-child(2) .button';
    }

}

export default conjBoxSuiteEle;
