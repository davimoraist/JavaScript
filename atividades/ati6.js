var vel = 80
console.log(`A velocidade do seu carro é ${vel} km/h`)

if (vel > 60) {
    var multa = (vel - 60) * 5
    console.log(`Você ultrapassou a velocidade permitida. MULTA: R$${multa}`)
} else {
    console.log('Dirija sempre usando cinto de segurança!')
}
