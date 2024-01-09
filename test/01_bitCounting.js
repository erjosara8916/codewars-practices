import { assert } from "chai"
import { countBits } from '../src/01_bitCounting.js'

describe("Bit Counting of a Given String", () => {
  describe("Entry validation", () => {
    it("Should return 0 when the given number is negative", () => {
      assert.strictEqual(countBits(-10), 0);
    })
  })

  describe("Fixed tests", () => {
    it("Should return 0 when the given number is 0", () => {
      assert.strictEqual(countBits(0), 0);;
    })  

    it("Should return 1 when the given number is 4", () => {
      assert.strictEqual(countBits(4), 1);
    })
    
    it("Should return 3 when the given number is 7", () => {
      assert.strictEqual(countBits(7), 3);;
    })

    it("Should return 2 when the given number is 9", () => {
      assert.strictEqual(countBits(9), 2);;
    })

    it("Should return 2 when the given number is 10", () => {
      assert.strictEqual(countBits(10), 2);;
    })
  })
  
})