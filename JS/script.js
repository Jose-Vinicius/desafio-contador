//botao
document.getElementById('calcular').onclick = function (){calcular();}

//funções
function calcular(){

    let primeiroNumero = Number(document.getElementById('inicialNumber').value);
    let ultimoNumero = Number(document.getElementById('finalNumber').value);
    let numeroDePulo = Number(document.getElementById('puloNumber').value);
    let resultado = document.getElementById('resultado');

    if(primeiroNumero === ""){
        resultado.innerHTML = '<h2>Por favor insira um valor valido no primeiro numero!</h2>';
    } else if(ultimoNumero === ''){
        resultado.innerHTML = '<h2>Por favor insira um valor valido no numero final!</h2>';
    } else if(ultimoNumero <= primeiroNumero ){
        resultado.innerHTML = '<h2>Os valores do ultimo numero não pode ser menor ou igual ao do numero inicial</h2>';
    } else if(numeroDePulo === ''){
        resultado.innerHTML = '<h2>Por favor insira um valor valido no numero de pulos!</h2>';
    } else if(numeroDePulo == 0){
        numeroDePulo = 1;
        loop();
        agruparDados()
    } else {
        loop();
        agruparDados()
    }
}
function loop(){

    let primeiroNumero = Number(document.getElementById('inicialNumber').value);
    let ultimoNumero = Number(document.getElementById('finalNumber').value);
    let numeroDePulo = Number(document.getElementById('puloNumber').value);
    let resultado = document.getElementById('resultado');
        
    resultado.innerHTML = "";
    for( let i = primeiroNumero; i <= ultimoNumero; i += numeroDePulo){
        resultado.innerHTML += `<span> ${i}, </span>`;
    };
}

function agruparDados(){ 

    let primeiroNumero = Number(document.getElementById('inicialNumber').value);
    let ultimoNumero = Number(document.getElementById('finalNumber').value);
    let numeroDePulo = Number(document.getElementById('puloNumber').value);
    
    let valoresDosresultados = [];

    let valoresDosInputs = [
            {primeiroNumero: `${primeiroNumero}`,
            ultimoNumero: `${ultimoNumero}`, 
            numeroDePulo: `${numeroDePulo}`},
        ];
    
    valoresDosresultados.push(valoresDosInputs);

    let valoresDeSaida = [];

    for(let i = primeiroNumero; i <= ultimoNumero; i += numeroDePulo){
        valoresDeSaida.push(i)
    }

    valoresDosresultados.push(valoresDeSaida)

    console.log(valoresDosresultados);

    /*localStorage.setItem('valoresDosResultados', JSON.stringify(valoresDosresultados));

    let = itemSalvo = localStorage.getItem('valoresDosResultados');

    console.log('itemSalvo:', JSON.parse(itemSalvo))*/
}