var numero = [1,2,3]

var menor = [0]
var meio = [1]
var maior = [2]

if(numero[0] > menor || numero[0] > meio) {maior = numero[0]}
if(numero[1] > meio || numero[1] > meio) { maior = numero[1]}
if(numero[2] > maior ){maior = numero[2]}

if(numero[0] > menor || numero[0] > maior){meio = numero[0]}
if(numero[1] > meio || numero[1] > maior){meio = numero[1]}
if(numero[2] < maior ){meio = numero[2]}

console.log(meio)
console.log(maior)