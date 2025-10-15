 var nota1 = 9
var nota2 = 5
var s = nota1 + nota2
var media = s / 2
console.log(`Sua média é ${media}`)

if (media < 5) {
    console.log('Reprovado')
} else if (media <= 6.9) {
    console.log('Recuperação')
} else {
    console.log('Aprovado')
}
