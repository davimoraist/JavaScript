 function variaficar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('texto')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('redsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'Your/bebeh.png')
            } else if(idade < 21){
                img.setAttribute('src', 'Your/jovemh.png')
            } else if(idade < 50){
                img.setAttribute('src', 'Your/adultoh.png')
            } else {
                img.setAttribute('src', 'Your/idosoh.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'Your/bebem.png')
            } else if(idade < 21){
                img.setAttribute('src', 'Your/jovemm.png')
            } else if(idade < 50){
                img.setAttribute('src', 'Your/adultom.png')
            } else {
                img.setAttribute('src', 'Your/idosom.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
