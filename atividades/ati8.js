var saldo = 1000
var deposito = 500
var saque = 350

saldo = saldo + deposito - saque

console.log(`Depósito: R$${deposito}`)
console.log(`Saque: R$${saque}`)
console.log(`Saldo final: R$${saldo}`)

if (saldo > 0) {
    console.log(`Seu saldo está positivo!`)
} else if (saldo == 0) {
    console.log(`Sua conta está zerada.`)
} else {
    console.log(`Você está no vermelho!`)
}
