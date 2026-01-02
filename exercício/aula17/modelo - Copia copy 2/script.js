 function tabuada(){
    let num = document.getElementById('textn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert(`Por favor, digite um Numero!`)
    } else {
        let n = Number(num.value)
        let c = 3
        tab.innerHTML = ''
        while (c <= 10){
            let iten = document.createElement('option')
            iten.text = `${n} x ${c} = ${n * c}`
            tab.value = `tac${C}`
            tab.appendChild(iten)
            c++
        }
    }
}
