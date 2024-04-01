import { assert } from "chai"
import { solution } from '../src/02_multiplesOf3or5.js'

describe("Sum of multiples of 3 or 5", () => {
  describe("Entry validation", () => {
    it("Should return 0 when the given number is negative", () => {
      assert.strictEqual(solution(-10), 0);
    })
  })

  describe("Fixed tests", () => {
    it("Should return 0 when the given number is 0", () => {
      assert.strictEqual(solution(0), 0);;
    })  

    it("Should return 23 when the given number is 10", () => {
      assert.strictEqual(solution(10), 23);
    })
    
    it("Should return 0 when the given number is 3", () => {
      assert.strictEqual(solution(3), 0);;
    })

    it("Should return 3 when the given number is 5", () => {
      assert.strictEqual(solution(5), 3);;
    })

  })
  
})