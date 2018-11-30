var assert = require('chai').assert;
var luhn = require("../luhn");

describe("testMe", function() {

  it("Checks that it's a valid credit card by modulus 10 being true", function() {

    var testCreditCard = [5,4,6,1,2,4,3,5,6]

    var result = luhn(testCreditCard);
    assert.isTrue(result);
  });

});

