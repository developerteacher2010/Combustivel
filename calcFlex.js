//variável declara fora da função, passa a ser uma global, pode ser usada em todo documento//

//nome do formulário caminho, caixa txt etanol 

// replace troca o caractere por outro caractere ("",", "".")

//DOM Document Object Model(Modelo de documento de objeto) é uma forma de manipular o layout do site
//através do código. É uma API - cria um modelo da página HTML - Apllication Program Interface.
// O DOM cria o modelo da página HTML

// Modelo criado ao carregar a página na memória
// O DOM é chamado de objeto pq o modelo árvore DOM é feito de objetos que são a tag HTML
// Nó - Document,nós elementos tags - atributos status elemento IMG - modificar img
let etanol, gasolina
function calcular() {
  etanol = Number(frmFlex.txtEtanol.value.replace(",","."))
  gasolina = Number(frmFlex.txtGasolina.value.replace(",","."))
  if(etanol < 0.7 * gasolina){
    document.getElementById("status").src="etanol.png" // no doecumento obtenha esse id status
  }else{
    document.getElementById("status").src="gasolina.png"
  }
  
}

function resetar(){ // função resetar
document.getElementById("status").src="neutro.png"

}