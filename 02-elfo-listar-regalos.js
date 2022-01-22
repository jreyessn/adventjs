function listGifts(letter) {
    let regalos = {},
        separate = letter.split(" ")
  
    separate.forEach(str => {
        if(!str.startsWith("_") && str != ''){
          regalos[str] = (regalos[str]? regalos[str]: 0) + 1
        }
    })
  
    return regalos
}

const carta = 'bici coche balón _playstation bici coche peluche'
const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
