// Las monedas para cambio que puedes usar son estas:

// coins[0] = 1 céntimo
// coins[1] = 2 céntimos
// coins[2] = 5 céntimos
// coins[3] = 10 céntimos
// coins[4] = 20 céntimos
// coins[5] = 50 céntimos

// Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.

function getCoins(change) {
    let rules = [1,2,5,10,20,50]
    let coins = Array(rules.length).fill(0) 
    for(let i = rules.length - 1; i >= 0; i--){
        const division = eval(`${change}/${rules[i]}`)
        const mod      = eval(`${change}%${rules[i]}`)
        
        if(mod == 0){
            coins[i] += division
            break
        }
      
        if(mod != change){
            coins[i] += Math.floor(division)
            change = mod
        }
    }
    return coins
}

console.log(getCoins(51)) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins(3)) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins(5)) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(16)) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100)) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
