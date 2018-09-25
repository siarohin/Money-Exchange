// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

		var currency,
		 	coins = [50, 25, 10, 5, 1],
			str = ['H', 'Q', 'D', 'N', 'P'],
			cash = {},
			Error = {error: "You are rich, my friend! We don't have so much coins for exchange"};


		if (currency > 10000) return Error; 
		if (currency <= 0) return {}; 

		i = 0;
		while (currency != 0 && i < coins.length) {
			
		    result = currency / coins[i];
			currency -= Math.floor(result) * coins[i];
			cashStr = Math.floor(result);

			if (cashStr != 0) {
	            cash[str[i]] = Math.floor(result); 
	        	}
        i++;

		}

	return cash;
}