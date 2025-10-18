 var valorCompra = 1000
 var desconto = 0 

 if(valorCompra >= 200){
    desconto = 10 
 } else{
    desconto = 5
 }

 var valorFinal = valorCompra - (valorCompra * desconto / 100)

// Mostra no console
console.log(`Valor da compra: R$${valorCompra}`)
console.log(`Desconto aplicado: ${desconto}%`)
console.log(`Valor final a pagar: R$${valorFinal}`)