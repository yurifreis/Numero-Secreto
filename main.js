
let inputNumero = document.querySelector(".numero");
let tentativas = 5;

let numeroSecreto;
let resultado = document.querySelector(".res");

inputNumero.addEventListener("blur", () => {
    inputNumero.focus();
});

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
};

document.addEventListener("DOMContentLoaded", () =>{
    numeroSecreto = gerarNumeroAleatorio();
    console.log(`Número Secreto foi gerado com sucesso! ${numeroSecreto}`);
    
    let placarTentaivas = document.createElement('h4');
    placarTentaivas.textContent = `Número de Tentativas ${tentativas}`
    document.form.appendChild(placarTentaivas);
});

let btnChutar = document.querySelector(".chutar");
btnChutar.addEventListener("click", () =>{
    
    function verificarNumero(){
        
        let numero = parseInt(inputNumero.value);
       
       if(numero <= 0 || numero > 10 || inputNumero.value === ""){
        alert("Digite um número entre 1 e 10.");
    
       }else if(numero > numeroSecreto){
            resultado.textContent = (`O número secreto é menor que ${numero} e o número de tentativas é ${tentativas}`);
            limparMensagemCampo();
            tentativas--;
        
        }else if(numero < numeroSecreto){
            resultado.textContent = (`O número secreto é maior que ${numero} e o número de tentativas é ${tentativas}`);
            limparMensagemCampo();
            tentativas--;
        
        }else if(numero == numeroSecreto){
            resultado.textContent = (`Parabéns! Você acertou e o número de tentativas é ${tentativas}`);
            btnChutar.style.display = "none";
        };

        if(tentativas == 0){
            resultado.textContent = "`Que pena... As tentativas acabaram`"
            btnChutar.style.display = "none";
        }
    };
    verificarNumero();
    console.log(numeroSecreto);
});

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
    
    setTimeout(()=>{
        window.location.reload();
        resultado.textContent = "";
    }, 1000);
});