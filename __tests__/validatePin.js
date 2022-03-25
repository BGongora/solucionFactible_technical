const validatePIN = require('../js/validatePin');

   describe("validatePIN", function() { 
        it("should return False for pins with length other than 4 or 6", function()  { 
        //Test.assertEquals(validatePIN("1"),false, "Wrong output for '1'")  
        //Test.assertEquals(validatePIN("123"),false, "Wrong output for '123'")  
        //Test.assertEquals(validatePIN("1234567"),false, "Wrong output for  '1234567'") 
        //Test.assertEquals(validatePIN("00000000"),false, "Wrong output for  '00000000'") 
            expect(validatePIN("1")).toBe(false);
            expect(validatePIN('123')).toBe(false);
            expect(validatePIN('1234567')).toBe(false);
            expect(validatePIN('00000000')).toBe(false);
            
        }); 
        
        it("should return False for pins which contain characters other than  digits", function() { 
        //Test.assertEquals(validatePIN("a234"),false, "Wrong output for 'a234'")  
        //Test.assertEquals(validatePIN(".234"),false, "Wrong output for '.234'")  
            expect(validatePIN("a234")).toBe(false);
            expect(validatePIN(".234")).toBe(false);
        }); 
        
        it("should return True for valid pins", function() { 
        // Test.assertEquals(validatePIN("1234"),true, "Wrong output for '1234'");  
        // Test.assertEquals(validatePIN("1111"),true, "Wrong output for '1111'");  
        // Test.assertEquals(validatePIN("123456"),true, "Wrong output for  '123456'"); 
        // Test.assertEquals(validatePIN("098765"),true, "Wrong output for  '098765'"); 
        // Test.assertEquals(validatePIN("123456"),true, "Wrong output for  '123456'"); 
            expect(validatePIN("1234")).toBe(true);
            expect(validatePIN("1111")).toBe(true);
            expect(validatePIN("123456")).toBe(true);
            expect(validatePIN("098765")).toBe(true);
            expect(validatePIN("123a46")).toBe(false);
        }); 
   });
   