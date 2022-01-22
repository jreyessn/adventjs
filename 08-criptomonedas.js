function maxProfit(prices) {
    let current = prices.length > 0? prices[0] : 0
    let profit  = 0
  
    for(let i = 0; i < prices.length; i++){
        current = prices[i] < prices[i + 1] && prices[i] < current? prices[i] : current
  
        if(current != prices[i])
          profit = prices[i] - current > profit? prices[i] - current : profit;
      
    }
  
    return profit > 0? profit : -1
}


const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
console.log(maxProfit(pricesBtc)) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
console.log(maxProfit(pricesEth)) // -> 60 (compra a 10, vende a 70)
    
const pricesDoge = [18, 15, 12, 11, 9, 7]
console.log(maxProfit(pricesDoge)); // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
console.log(maxProfit(pricesAda)); // -> -1 (no hay ganancia posible)