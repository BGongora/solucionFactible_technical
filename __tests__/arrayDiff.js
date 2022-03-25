const arrayDiff = require('../js/arrayDiff')

    // Test.assertDeepEquals(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
    // Test.assertDeepEquals(arrayDiff([3,4], [3]), [4], "a was [3,4], b was  [3]"); 
    // Test.assertDeepEquals(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b  was []"); 
    // Test.assertDeepEquals(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b  was [1,2]") 

describe("Sample tests", () => { 
    it("Array diff Sample tests", () => { 
        expect(arrayDiff([1,5,8,6,8,5,5,2,5,2,8,8,5,2,8,5], [8,5])).toEqual([1,6,2,2,2])
        expect(arrayDiff([2,5,8,6,8,5,4,6], [6])).toEqual([2,5,8,8,5,4])
        expect(arrayDiff([3,8,6,9,8,9,5,2,4,5], [8,9])).toEqual([3,6,5,2,4,5])
        expect(arrayDiff([3,4], [3])).toEqual([4])
        expect(arrayDiff([1,8,2], [])).toEqual([1,8,2])
        expect(arrayDiff([1,2,3], [3])).toEqual([1,2])
        expect(arrayDiff([1,2,8,9,3,6,5,8,5,2,3], [3])).toEqual([1,2,8,9,6,5,8,5,2])
    })

    test("Should return an empty array", () => {
        expect(arrayDiff([1,2,3], [1,2,3])).toEqual([]);
        expect(arrayDiff([7,87,6], [7,87,6])).toEqual([]);
        expect(arrayDiff([9,10,11], [9,10,11])).toEqual([]);
        expect(arrayDiff([100,20000,5888,456,6], [100,20000,5888,456,6])).toEqual([]);
        expect(arrayDiff([4,5,6], [4,5,6])).toEqual([]);
    })

   });
   