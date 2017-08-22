/**
 * Created by  lyl on 17/8/21.
 */
/**
 * should和expect只是语法有细微区别，都属于BDD风格测试断言。
 */
var test = require('../src/index'),
    chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

describe('#add()', function () {
    it('should return 5', function () {
        assert.equal(test.add(2, 3), 5);
        expect(test.add(2, 3)).to.equal(5);
        test.add(2, 3).should.equal(5);
    })

})
describe('#sub()', function () {
    it('should return 1', function () {
        assert.equal(test.sub(3, 2), 1);
        expect(test.sub(3, 2)).to.equal(1);
        test.sub(3, 2).should.equal(1);
    })
})
