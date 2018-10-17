var assert = require('assert');
// const assert = require("assert")
const {
    add,
    mul,
    conver
} = require("../src/math")

describe('#add()', function () {
    it('add函数', function () {
        assert.equal(add(2, 3), 5);
    });
    it.skip('add函数2', function () {
        assert.equal(add(2, 3), 6);
    });
    it('mul函数3', function () {
        assert.equal(mul(2, 3), 6);
    });
});
describe("#conver", function () {
    it("conver函数", function () {
        assert.equal(conver(3, 6), 9)
    })
    it("conver函数", function () {
        assert.equal(conver(6, 3), 3)
    })
    it("conver函数", function () {
        assert.equal(conver(3, 3), 3)
    })
})