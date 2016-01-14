function primeFactors (num) {
  return factor(num, []) || [];
};

function factor (num, result) {
  for ( var i = 2; i <= num; i++ ) {
    if ( !(num % i) ) {
      result.push(i);
      num /= i;
      
      return ( num === 1 ) ? result : factor(num, result);
    };
  };
};

module.exports = {
  for: primeFactors
};