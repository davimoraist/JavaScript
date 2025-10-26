function variaficar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('texto')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Variaficado os dados e tente novamente!')
    } else{
          var fsex = document.getElementsByName('redsex')
          var idade = ano - Number()
    }
}