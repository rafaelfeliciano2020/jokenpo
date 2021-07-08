let pontuacaoJogador = 0;
let pontuacaoComputador = 0;
let vencedor = " ";
//imprime 0 na pontuação ao carregar a pagina***************
const destino1 = document.getElementById("pontuação-jogador")// destino recebe o id
destino1.innerText = pontuacaoComputador;
const destino2 = document.getElementById("pontuação-computador")// destino recebe o id
destino2.innerText = pontuacaoJogador;

//Botoes*********************************************************
const botPedra = document.getElementById("id-bot-pe"); //id botao pedra
botPedra.addEventListener("click",funcPrincipal);

const botPapel = document.getElementById("id-bot-pa");
botPapel.addEventListener("click",funcPrincipal);

const botTesoura = document.getElementById("id-bot-te");
botTesoura.addEventListener("click",funcPrincipal);
//fim*********************************************************

// Verifica botao click, printa a imagem da jogada, retorna a escolha do click
function funcJogador(){
   // document.getElementById("jogada").src="img/pedra-g.png" // atribui uma imagem
   let idBotao = event.currentTarget.getAttribute("id"); // lê a id do botao
     const destino = document.getElementById("id-jogador1") //id da imegegem / <img  id="jogada">
     //destino.src= "img/pedra-g.png";                   //atribui a imagem a id jogada
     switch (idBotao){
          case "id-bot-pe": destino.src = "img/pedra-g.png";     idBotao = "pedra";  break;
          case "id-bot-pa": destino.src = "img/papel-g.png";     idBotao = "papel";  break; 
          case "id-bot-te": destino.src = "img/tesoura-g.png";   idBotao = "tesoura";break;
     }
     return  idBotao; // retorna: pedra  , papel, tesoura
}
//fim********************************************************************************

// Gera numero aleatorio, preinta imagem da jogada,  retorna a escolha do aleatorio
function funcComputador(){ //Jogada do Computador
     const destino = document.getElementById("id-computador");
     computador = Math.floor((Math.random() * 3)+ 1);  //Numero aleatorio
     switch (computador){
          case 1 : destino.src = "img/pedra-g-computador.png";    computador = "pedra";    break;
          case 2 : destino.src = "img/papel-g-computador.png";    computador = "papel";    break;
          case 3 : destino.src = "img/tesoura-g-computador.png";  computador = "tesoura";    break;
     }
     return computador;
}
//************************************************************************* */

//Verifica quem ganha a cada jogada***************************************
function funcGanha(jogador,computador){
     let arrayGanha = [
          ["pedra","tesoura"],
          ["tesoura","papel"],
          ["papel","pedra"]
     ];

     let ganhador  ;
     //Verifica se jogador ganha********
     for (let i=0; i<3 ; i++){
          if (jogador == arrayGanha[i][0] && computador == arrayGanha[i][1]) {
               ganhador = "jogador"
               return  ganhador;
          }
     }
     //****************************** */
     //verifica se computador ganha******
     for (let i=0 ; i<3 ; i++){
          if (computador == arrayGanha[i][0] && jogador == arrayGanha[i][1]) {
              ganhador = "computador";
              return ganhador;
          }
     }
     //****************************** */
     //verifica se empate*************
     if (ganhador == undefined){
          ganhador = "Empate"
          return ganhador;
     }
     //******************************** */  
}
//************************************************************************ */

//Pontuação  e retorna o vencedor****************************************************************
function funcPontuacao(ganhador){ // pega o valor de quem ganhou pra fazer a pontuação e o vencedor
     const destino = document.getElementById("pontuação-jogador")// destino recebe o id - printa a pontuação

     if (ganhador == "jogador"){
          pontuacaoJogador += 1;
          const destino = document.getElementById("pontuação-jogador")// destino recebe o id
          destino.innerText = pontuacaoJogador
          if (pontuacaoJogador == 5) {// determinda oo vencedor da partida
               vencedor = "Jogador 1";     
          } 
     }
     if (ganhador == "computador"){
          pontuacaoComputador += 1; 
          const destino = document.getElementById("pontuação-computador")// destino recebe o id
          destino.innerText = pontuacaoComputador;
          if (pontuacaoComputador == 5) {// determinda oo vencedor da partida
               vencedor = "Computador";      
          } 
     }

     const destino2 = document.getElementById("vencedor")// destino recebe o id
     console.log(vencedor)
     destino2.innerText = "Ganhou: " + ganhador;
     // retorna vencedro se pontuação  = 5
     return vencedor; 
}
//********************************************************************** */
//Printa na tela o vencedor
// function funcVencedor(vencedor){
//      const destino = document.getElementById("vencedor")// destino recebe o id
//           destino.innerText = "Vencedor: " + vencedor;
//           if (vencedor !=" "){
//                alert("Vencedor: " + vencedor);
//                pontuacaoJogador = 0;
//                pontuacaoComputador = 0;
//                vencedor = " ";
//                return vencedor;
//           }
          
// }

//************************************************************************** */
//Acionada ao clicar botao e chama as funcoes************************************************
function funcPrincipal(){
     
     let jogador = funcJogador();                // verifica o botao de escolha do jogador em printa na tela
     let computador = funcComputador();          // gera numero aleatorio Computador em printa tela a jogada
     let ganhador = funcGanha(jogador,computador);              // Verifica quem ganha a cada jogada
     let pontuacao = funcPontuacao(ganhador); //contagem da pontuação e retorna o vencedor
     // let printaVencedor = funcVencedor(pontuacao)
  
     console.log(pontuacao);
}
//**********************************************************************************************



// Aparecer a mão apos click no botao
//função aleatorio pedra papel tesoura
// aparecer tela opção aleatoria
// comparação para ver o vencedror