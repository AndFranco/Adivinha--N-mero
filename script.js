let numeroSecreto = 0
let contador = 1
let min = 1
let max = 20
let situacao = ""

let entrada = document.getElementById("entrada")
let btn = document.getElementById("botao") 
let aviso = document.getElementById("aviso")

function gerarNumeroSecreto(){
    numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min;
    // console.log(numeroSecreto)
}

function verificarSeAcertou(){
    chute = parseInt(document.getElementById("entrada").value)

    console.log("N° do Chute " + contador)
    console.log("Chute " + chute)

    if(numeroSecreto === chute){
        console.log("Acertou")
        situacao = "Acertou"
        gameOver(situacao)
        
    } else if ( chute > numeroSecreto){
        console.log("Chute maior")
        situacao = "Chute maior"
        gameOver(situacao)

    } else if (chute < numeroSecreto){
        console.log("Chute menor")
        situacao = "Chute menor"
        gameOver(situacao)
    }else {
        console.log("Impossivel verificar se acertou!")
    }

}

function jogar(){
    console.log("Jogando")
    verificarSeAcertou()
}

function gameOver(situacao){
    switch (situacao){

        case "Acertou":
            aviso.classList.add("acertou")
            mensagemRapida("Acertou, o numero secreto era " + numeroSecreto)
            break
        case "Chute maior":
            aviso.classList.add("errou")
            mensagemRapida("Errou, o número chutado é maior que o número secreto")
            break
        case "Chute menor":
            aviso.classList.add("errou")
            mensagemRapida("Errou, o número chutado é menor que o número secreto")
            break

        default:
            console.log("Informe a situação")

    }
}

function mensagemRapida(mensagem){
    aviso.textContent = mensagem
    setTimeout(function(){
        aviso.textContent = ""
        aviso.classList.remove("acertou")
        aviso.classList.remove("errou")
        inputNumero.value = ""
    }, 2000)
}