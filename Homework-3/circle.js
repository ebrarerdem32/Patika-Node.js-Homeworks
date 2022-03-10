const pi=Math.PI;

const circleArea = (r) => {
     console.log("The area is:", pi * r * r)
}

const circleCircumference = ( r) => {
     console.log("The circle circumference is:", 2 * pi * r)
}

module.exports={
 circleArea,
 circleCircumference  
}