function carregar (){ 
     var msg = window.document.getElementById('msg')
     var img = window.document.getElementById('foto')
     var data = new Date()
     var hora = data.getHours()
         msg.innerHTML = `Agora são ${hora} hora`
     if (hora >= 0 && hora < 12){
        img.src ='img/manhã-removebg-preview.png'
        document.body.style.background = '#c69e70'
     } else if (hora >= 12 & hora <= 18 ){
        img.src ='img/tarte-removebg-preview.png'
        document.body.style.background ='#404635'
     } else {
         img.src ='img/noite-removebg-preview.png'
         document.body.style.background ='#2671a8'
     }
}
    