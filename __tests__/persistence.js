const persistence = require('../js/persistence')

    // Test.assertEquals(persistence(39),3); 
    // Test.assertEquals(persistence(4),0); 
    // Test.assertEquals(persistence(25),2); 
    // Test.assertEquals(persistence(999),4);
describe('Initial Tests', () => { 
    
    test('Return 3 for 39', () => {
        expect(persistence(39)).toBe(3);
    }) 

    test('Return 0 for 4', () => {
        expect(persistence(4)).toBe(0);
        
    }) 

    test('Return 2 for 25', () => {
        expect(persistence(25)).toBe(2);
        
    }) 

    test('Return 4 for 999', () => {
        expect(persistence(999)).toBe(4);
    }) 
});
   