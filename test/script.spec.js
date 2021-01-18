const expect = require('chai').expect;
const Script = require('../src/script');

describe('testando', function(){
    it('string = hello', function(){
        const script = new Script();
        script.text('hello', (value) => {
            expect(value).to.equal('hello');
        })
    })
})