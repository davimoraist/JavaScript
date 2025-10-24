var comu = 100
var vip = 110
var novo = 500
var valos = 0
 
if (vip > 500 || vip == 500){
    console.log('vip: 20% de desconto');
    
} else if(vip > valos || vip < valos ){

     console.log('vip: 10% de desconto');
     
} else if(valos == 0 || valos < 0 ){

    console.log('vip: Valor inválido!');  
} 

if (novo > 500 || novo == 500){
    console.log('novo: 15% de desconto');
    
} else if(vip > valos || vip < valos ){

     console.log('novo: 5% de desconto');
     
} else if(valos == 0 || valos < 0 ){

    console.log('novo: Valor inválido!');  
} 

if (comu > 500 || comu == 500 || vip > valos || vip < valos ){
    console.log('comu 5% desconto');
} else if (valos == 0 || valos < 0 ){
  console.log('comu Valor inválido!');  
} 