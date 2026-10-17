var numero = [3, 9, 5];

var maior = numero[0];
var menor = numero[0];

if (numero[1] > maior) maior = numero[1];
if (numero[2] > maior) maior = numero[2];

if (numero[1] < menor) menor = numero[1];
if (numero[2] < menor) menor = numero[2];

console.log(`Maior: ${maior}`);
console.log(`Menor: ${menor}`);