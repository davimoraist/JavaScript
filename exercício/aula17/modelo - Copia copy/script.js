 function contar() {
  let inicio = document.getElementById('textoi')
  let fim = document.getElementById('textof')
  let passo = document.getElementById('textop') 
  let res = document.getElementById("res")

  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert('[ERRO] Faltam dados!')
  } else {
    res.innerHTML = 'Contando: '
    
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (p <= 0) {
      window.alert('Passo inválido! Considerando passo = 1')
      p = 1
    }

    if( i < f){

    for (let c = i; c <= f; c += p) {
  res.innerHTML += ` ${c} \u{1F449}` 
}
  res.innerHTML +=`\u{1F3C1}`

    } else {
        for (let c = i; c >= f; c -= p){
          res.innerHTML += ` ${c} \u{1F449}`
            res.innerHTML +=`\u{1F3C1}`
        }
    }

    
  }
}
