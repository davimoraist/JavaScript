var numero = [2, 3, 1];

var n1 = numero[0];
var n2 = numero[1];
var n3 = numero[2];

var menor, meio, maior;

// 1. Identificar quem é o menor de todos
if (n1 <= n2 && n1 <= n3) {
    menor = n1;
    if (n2 <= n3) {
        meio = n2;
        maior = n3;
    } else {
        meio = n3;
        maior = n2;
    }
}
// 2. Se n2 for o menor de todos
else if (n2 <= n1 && n2 <= n3) {
    menor = n2;
    if (n1 <= n3) {
        meio = n1;
        maior = n3;
    } else {
        meio = n3;
        maior = n1;
    }
}
// 3. Se n3 for o menor de todos
else {
    menor = n3;
    if (n1 <= n2) {
        meio = n1;
        maior = n2;
    } else {
        meio = n2;
        maior = n1;
    }
}

console.log(`Ordem crescente: ${menor}, ${meio}, ${maior}`);