//botao
document.getElementById('calcular').onclick = function (){calcular();}
//o proprio VScode me recomendou fazer esse import
import { writeFileSync } from 'fs';
const fs = require(fs);

//funções
function calcular(){

    let primeiroNumero = Number(document.getElementById('inicialNumber').value);
    let ultimoNumero = Number(document.getElementById('finalNumber').value);
    let numeroDePulo = Number(document.getElementById('puloNumber').value);
    let resultado = document.getElementById('resultado');

    if(primeiroNumero === ""){
        resultado.innerText += 'Por favor insira um valor valido no primeiro numero!';
    } else if(ultimoNumero === ""){
        resultado.innerText = 'Por favor insira um valor valido no numero final!';
    } else if(ultimoNumero <= primeiroNumero ){
        resultado.innerHTML = 'Os valores do ultimo numero não pode ser menor ou igual ao do numero inicial';
    } else if(numeroDePulo === ''){
        resultado.innerHTML = 'Por favor insira um valor valido no numero de pulos!';
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

    //essa foi a solução que achei na net
    let data = JSON.stringify(student);
    writeFileSync('valoresDosResultados', data);

    //let teste = JSON.stringify(valoresDosresultados)
    
    

    //let fs = require('json')
    //fs.writeFile('dados.json', json, 'utf8', callback);
}