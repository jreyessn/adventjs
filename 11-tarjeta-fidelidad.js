// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$

// Necesito una función que, al pasarle las veces que voy a ir al cine, me diga si vale la pena comprar la tarjeta fidelidad o no.

function shouldBuyFidelity(times) {
    let resultNormal = times * 12;
    let resultExp    = 250;
    
    while(times > 0){
        resultExp += 12 * Math.pow(0.75,times)
        times--;
    }
  
    return (resultNormal > resultExp)
}

console.log(shouldBuyFidelity(1)) // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100)) // true -> Mejor comprar tarjeta fidelidad