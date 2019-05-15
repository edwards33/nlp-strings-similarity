var natural = require('natural')

var text01 = 'start'
var text02 = 'starter'
var text03 = 'mdsffv'

console.log(natural.JaroWinklerDistance(text01, text03))
console.log(natural.JaroWinklerDistance(text01, text02))

console.log(natural.LevenshteinDistance(text01, text03))
console.log(natural.LevenshteinDistance(text01, text02))

console.log(natural.DiceCoefficient(text01, text03))
console.log(natural.DiceCoefficient(text01, text02))
