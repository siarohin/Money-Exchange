// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
 
// Coins used will be half-dollars, quarters, dimes, nickels, and pennies, worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively.
// They'll be represented by the strings H, Q, D, N and P.

	var currency,
		Error = {
			error: "You are rich, my friend! We don't have so much coins for exchange"
		};

	function makeExchange() {
		if (currency > 10000) {
			return Error;
		} else return currency;
	}

	return makeExchange();
}