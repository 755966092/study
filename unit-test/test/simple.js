// const assert = require("assert")
const {
    add,
    mul,
    ccc
} = require("../src/math")

const {
    should,
    expect,
    assert
} = require("chai")

// assert.equal(add(1, 1), 3, "add不符合预期")
// assert.equal(ccc(1, 1), 2, "add不符合预期")
// assert.equal(mul(1, 1), 3, "mul不符合预期")

should()

// add(2, 3).should.be.equal(6)

assert.equal(add(2, 3), 7)