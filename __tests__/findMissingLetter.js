const findMissingLetter = require('../js/findMissingLetter')

describe("FindMissingLetterTests", function(){ 
    it("exampleTests", function(){ 
        // Test.assertEquals(findMissingLetter(['a','b','c','d','f']), 'e');
        // Test.assertEquals(findMissingLetter(['O','Q','R','S']), 'P');  });

        expect(findMissingLetter(['a','b','c','d','f'])).toBe('e');
        expect(findMissingLetter(['g','h','j','k','l'])).toBe('i');
        expect(findMissingLetter(['M','N','O','P','R'])).toBe('Q');
        expect(findMissingLetter(['S','T','U','W'])).toBe('V');
   });
   
});