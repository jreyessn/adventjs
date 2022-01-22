function createXmasTree(height) {
    // ¡Y no olvides también poner los turrones!
    let length = (height * 2) - 1
    let media  = Math.round(length / 2)
    let xmas   = ''
    let prevI  = 0
    
    for(let i = 1; i <= height; i++){
       const lineStart = media - i
       const stars     = i + prevI
       const lineEnd   = length - stars - lineStart 
       
       xmas += Array(lineStart).fill("_").join("")
       xmas += Array(stars).fill("*").join("")
       xmas += Array(lineEnd).fill("_").join("")
       xmas += '\n'
       
       prevI = i
    }
    
    for(let i = 0; i < 2; i++){
        xmas += Array(length - media).fill("_").join("")
        xmas += "#"
        xmas += Array(length - media).fill("_").join("")
        xmas += i < 1? '\n' : ''
    }
  
    return xmas
}

console.log(createXmasTree(10))