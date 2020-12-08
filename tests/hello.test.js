const assert = require('assert');

const hello = require('../src/hello')

describe("hello function", () => {
    it("should return hello world", () => {
        assert.equal("hello world", hello())
    })
});
