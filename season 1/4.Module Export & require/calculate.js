const x = 10
console.log(x)

function calculate(a, b){
    const sum = a + b
    console.log("Sum is", sum)
}

//module.exports = calculateSum

// module.exports = {x, calculateSum}

// export function calculateSum(a, b){
//     const sum = a + b
//     console.log("Sum is", sum)
// }

module.exports.x = x
module.exports.calculate = calculate