function discountPrices(prices, discount) {
    var discounted = [];
    var finalPrice = 0;

    for(var i = 0; i < prices.length; i++) {
        var discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    //console.log(i);
    console.log(discountedPrice);
    //console.log(finalPrice);

    return discounted;
}

discountPrices([100, 200, 300], 0.5);

//Answer: it will print out 150, because 300 is the last element in
//the prices array multiplied by 1 - 0.5. so 300(0.5) = 150.
