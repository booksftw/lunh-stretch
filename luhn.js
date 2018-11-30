
function isValidCreditCard(creditCardArray){
  // Evenly divisible by 10 means validCard
  var isValidCard;
  var sum = 0;
  creditCardArray.forEach( (num,i)=>{
    var oddKey = !(i % 2 == 0);
    // console.log(oddKey, num)
    if (oddKey) {
      sum += num*2;
    } else {
      sum += num;
    }
  });

  return sum % 10 == 0;
}

// isValidCreditCard(creditCard);
module.exports = isValidCreditCard;