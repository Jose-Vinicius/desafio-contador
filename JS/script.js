//botao
document.getElementById('calcular').onclick = function (){calcular();}

//funções

function calcular(){
    let pNumero = Number(document.getElementById('inicialNumber').value)
    let fNumero = Number(document.getElementById('finalNumber').value)
    let pularNumero = Number(document.getElementById('puloNumber').value)

    for( i = pNumero; i < fNumero; i + pularNumero){
        console.log(i)
    }
}

function loop(){
    
}