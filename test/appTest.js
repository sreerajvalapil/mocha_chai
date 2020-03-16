const assert = require('chai').assert ;
const app = require('../app') ;

describe("App testing" , ()=> {
    it("App",() => {
        assert.equal(app(),'hello');
    })
});