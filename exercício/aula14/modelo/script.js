function variaficar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('texto')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Variaficado os dados e tente novamente!')
    } else{
          var fsex = document.getElementsByName('redsex')
          var idade = ano - Number(fano.value)
          var genero = ''
          var img = document.createElement('ing')
          img = setAttribute('id', 'foto')
          if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('img', 'bebeh.png')
            } else if (idade < 21){
                //jovem
            }(idade < 50){
                //adulto
            } else {
                //idoso
            }
          } else if (fsex[1].checked){
            genero= 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
            } else if (idade < 21){
                //jovem
            }(idade < 50){
                //adulto
            } else {
                //idoso
            }
          }
          //res.Style.textAlign='center'
          res.style.textAlign = 'center';
          res.innerHTML = `Detecamos ${genero} com ${idade} ano`
    }
}