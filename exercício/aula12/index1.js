var agora =new Date()
var hora = agora.getHours();
var mim = agora.getMinutes()
console.log(`Agora são exatamente ${hora}:${mim} horas`);

if (hora < 12) {
    console.log('Bom dia');
} else if (hora <= 18) {
    console.log('Boa tarde');
} else {
    console.log('Boa noite');
}
