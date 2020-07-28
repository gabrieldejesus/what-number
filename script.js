function verificar() {
    // pegar conteudo dentro da div
    let n1 = document.getElementById("n1").innerHTML;

    // pegar o valor do campo
    let n2 = document.getElementById("n2").value;

    // verificar se o número 1 for igual ao número 2 então entra no if 
    // caso não seja então entra no else
    if(n1 == n2) {
        document.getElementById("result").innerHTML = "Você acertou o número!";
        document.querySelector("body").style.background = "#27AE60";
    } else {
        document.getElementById("result").innerHTML = "Você errou o número!";
        document.querySelector("body").style.background = "#EB5757";
    }

    // usar função resetar
    resetar();
}

// zerar o campo digitado pelo usuário
// resetar o número de verificação
function resetar() {
    document.getElementById("n2").value = "";

    // gerar número aleatório
    let numeroAleatorio = Math.floor(Math.random() * 100);
    document.getElementById("n1").innerHTML = numeroAleatorio;
}