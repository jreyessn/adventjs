function contains(store, product) {
    const values = Object.values(store)
    if(typeof store == "string")
       return false
    if(values.includes(product)){
        return true;
    }     
    for(let i = 0; i < values.length; i++){
        if(contains(values[i], product))
          return true
    }    
    return false
}

const almacen = {
    'estanteria1': {
      'cajon1': {
        'producto1': 'coca-cola',
        'producto2': 'fanta',
        'producto3': 'sprite'
      }
    },
    'estanteria2': {
      'cajon1': 'vacio',
      'cajon2': {
        'producto1': 'pantalones',
        'producto2': 'camiseta' // <- ¡Está aquí!
      }
    }
  }
              
  console.log(contains(almacen, 'camiseta')) // true
  
  const otroAlmacen = {
    'baul': {
      'fondo': {
        'objeto': 'cd-rom',
        'otro-objeto': 'disquette',
        'otra-cosa': 'mando'
      }
    }
  }
    
  console.log(contains(otroAlmacen, 'gameboy')) // false