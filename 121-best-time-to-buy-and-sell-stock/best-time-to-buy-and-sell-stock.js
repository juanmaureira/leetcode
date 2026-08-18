/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let buyPrice = Infinity
   let maxProfit = -Infinity

   for(let i = 0; i < prices.length; i++){

      if(prices[i] < buyPrice)
         buyPrice = prices[i]
      
      let profit = prices[i] - buyPrice

      if(profit > maxProfit) maxProfit = profit
   }

   return maxProfit
};