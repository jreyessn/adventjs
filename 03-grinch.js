function isValid(letter) {
  var symbols = {
    '(': { belong: "()", q:  1 },
    ')': { belong: "()", q: -1 },
    '[': { belong: "[]", q:  1 },
    ']': { belong: "[]", q: -1 },
    '{': { belong: "{}", q:  1 },
    '}': { belong: "{}", q: -1 },
  }

  var acumSymbol = {}

  for(let i = 0; i < letter.length; i++){
      if(symbols[letter[i]] && !symbols[letter[i - 1]]){
        const symbolCurrent = symbols[letter[i]]
        
        acumSymbol[symbolCurrent.belong] = (acumSymbol[symbolCurrent.belong]? acumSymbol[symbolCurrent.belong] : 0) + symbolCurrent.q
          
          if(acumSymbol[symbolCurrent.belong] < 0){
            return false
          }
      }
  }

  return Object.values(acumSymbol).filter(num => num > 0).length > 0? false : true
}

console.log(isValid("bici coche (balón) bici coche peluche")) // true
console.log(isValid("bici eluche (bici [coche) bici coche balón")) // false