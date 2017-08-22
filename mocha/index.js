/**
 * Created by  lyl on 17/8/21.
 */
/**
 * should和expect只是语法有细微区别，都属于BDD风格测试断言。
 */
var assert = chai.assert,
    expect = chai.expect,
    should = chai.should();//!
describe("Array", function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 4].indexOf(5), -1);
            assert.equal([1, 2, 4].indexOf(2), 1);
        })
    })
})
describe('test',function () {
    describe('#add()', function () {
        it('should return 5', function () {
            assert.equal(add(2,3),5);
            expect(add(2,3)).to.equal(5);
            add(2,3).should.equal(5);
        })

    })
    describe('#sub()', function () {
        it('should return 1', function () {
            assert.equal(sub(3,2),1);
            expect(sub(3,2)).to.equal(1);
            sub(3,2).should.equal(1);
        })
    })
})
