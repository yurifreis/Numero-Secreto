let inputNumero = document.querySelector(".numero");
let tentativas = 5;

let numeroSecreto;
let resultado = document.querySelector(".res");

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);  
};

document.addEventListener("DOMContentLoaded", () =>{
    numeroSecreto = gerarNumeroAleatorio();
    console.log(`Número Secreto foi gerado com sucesso! ${numeroSecreto}`);

    inputNumero.focus();

    let containerPlacar = document.querySelector(".container_placar");
    if(!containerPlacar){
        let placarTentativas = document.createElement('p');
        placarTentativas.className = "container_placar";
        document.body.appendChild(containerPlacar);
    }; 
});

function atualizarPlacar() {
    let placarTentativas = document.querySelector(".container_placar");
    if (placarTentativas) {
        placarTentativas.textContent = `Número de tentativas: ${tentativas}`;
    };
};

let btnChutar = document.querySelector(".chutar");
btnChutar.addEventListener("click", () =>{
    
    function verificarNumero(){
        
        let numero = parseInt(inputNumero.value);
       
       if(numero <= 0 || numero > 10 || inputNumero.value === ""){
        alert("Digite um número entre 1 e 10.");
        limparMensagemCampo();
        console.error("Input acima do permitido!");
    
       }else if(numero > numeroSecreto){
            resultado.textContent = (`O número secreto é menor que ${numero}`);
            limparMensagemCampo();
            tentativas--;
        
        }else if(numero < numeroSecreto){
            resultado.textContent = (`O número secreto é maior que ${numero}`);
            limparMensagemCampo();
            tentativas--;
        
        }else if(numero == numeroSecreto){
            resultado.textContent = (`Parabéns! Você acertou!`);
            btnChutar.style.display = "none";
            
            document.querySelector("form").style.background = '#A0CD60';
            document.querySelector('h3').style.color = 'white';
        };

        atualizarPlacar();

        if(tentativas == 0){
            resultado.textContent = "`Que pena... As tentativas acabaram`";
            btnChutar.style.display = "none";
        };
    };

    inputNumero.focus();
    verificarNumero();
    console.log(numeroSecreto);
});

atualizarPlacar();
function limparMensagemCampo(){
    inputNumero.value = "";
    setTimeout(() =>{
        resultado.textContent = "";
    }, 1000);
};

let btnReiniciar = document.querySelector(".reiniciar");
btnReiniciar.addEventListener("click", () => {
    
    resultado.textContent = `Jogo reiniciado com sucesso!`;
    console.log("Reiniciar NumeroSecreto: " + numeroSecreto);
    
    console.log("Reiniciar Tentatvas: " + tentativas);
    console.log("jogo reiniciado com sucesso!")
    
    setTimeout(()=>{
        window.location.reload();
        resultado.textContent = "";
    }, 1000);
});