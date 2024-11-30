function ligarDesligar() {
    var lampada = document.getElementById("lampada");
    var botao = document.getElementById("botao");

    // Verificar se a lâmpada está apagada ou acesa
    if (lampada.src.includes("lampada_apagada.png")) {
        lampada.src = "lampada_acessa.png";  // Imagem de lâmpada acesa
        botao.textContent = "Apagar";        // Muda o texto do botão para "Apagar"
        document.body.style.backgroundColor = "#f8f8f8";  // Cor de fundo para lâmpada acesa
    } else {
        lampada.src = "lampada_apagada.png";  // Imagem de lâmpada apagada
        botao.textContent = "Acender";        // Muda o texto do botão para "Acender"
        document.body.style.backgroundColor = "#2c2c2c";  // Cor de fundo para lâmpada apagada
    }
}