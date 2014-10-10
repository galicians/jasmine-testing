

// describe('adds two numbers', function {
// 	it("adds numbers", function() {
// 		expect(add(3,4)).toEqual(7);
// 	});
// });


describe("calculator", function() {
    it ("plus", function() {
        expect(addNumber(3,4)).toEqual(7);
    });

    it ("subtraction", function() {
    	expect(sub(8,4)).toEqual(4);
    });

    it ("multiplication", function() {
    	expect(xNumbers(10,2)).toEqual(20);
    });

    it ("division", function() {
    	expect(divisor(8,4)).toEqual(2);
    });
    

});