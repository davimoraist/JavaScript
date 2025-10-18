 var a = 5
var b = 6
var c = 7

if (a == b && b == c) {
    console.log('É um triângulo Equilátero')
} else if (a == b || a == c || b == c) {
    console.log('É um triângulo Isósceles')
} else {
    console.log('É um triângulo Escaleno')
}
