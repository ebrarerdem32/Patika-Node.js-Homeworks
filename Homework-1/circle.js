/*Calculator of circle's area*/
const arguments = process.argv.slice(2)

const area = (r) => { 
  
     const area = Math.PI * r*r
     console.log(`Yarıçapı ${r} olan dairenin alanı: ${area}`)
}

area(arguments[0]*1)