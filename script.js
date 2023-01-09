let pedidosSelecionados=0
let nomePrato = null;
let precoPrato = 0;
let nomeBebida = null;
let precoBebida = 0;
let nomeSobremesa = null;
let precoSobremesa = 0;
let precoTotal = 0;

function selecionarPrato(prato) {

    const pratoSelecionado = document.querySelector(".selecionado");

    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado");
        pratoSelecionado.querySelector("ion-icon").classList.add("escondido");
    
    } else {
        pedidosSelecionados++;
    }

    prato.classList.add("selecionado");
    prato.querySelector("ion-icon").classList.remove("escondido");

    nomePrato = prato.querySelector("prato").innerHTML;
    precoPrato = prato.querySelector("preço").innerHTML;

}

function selecionarBebida(bebida) {

    const bebidaSelecionada = document.querySelector(".selecionado2");

    if (bebidaSelecionada !== null) {
        bebidaSelecionada.classList.remove("selecionado2");
        bebidaSelecionada.querySelector("ion-icon").classList.add("escondido");
    
    } else {
        pedidosSelecionados++;
    }

    bebida.classList.add("selecionado2");
    bebida.querySelector("ion-icon").classList.remove("escondido");

    nomeBebida = bebida.querySelector("prato").innerHTML;
    precoBebida = bebida.querySelector("preço").innerHTML;

}

function selecionarSobremesa(sobremesa) {

    const sobremesaSelecionada = document.querySelector(".selecionado3");

    if (sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.remove("selecionado3");
        sobremesaSelecionada.querySelector("ion-icon").classList.add("escondido");
    
    } else {
        pedidosSelecionados++;
    }

    sobremesa.classList.add("selecionado3");
    sobremesa.querySelector("ion-icon").classList.remove("escondido");

    //parte de fechar pedidos
    const pedidos=document.querySelector(".fechamento")
    if (pedidosSelecionados=3) {
        pedidos.classList.add("fecharPedidos")
        pedidos.innerHTML="Fechar pedidos"
    }

    nomeSobremesa = bebida.querySelector("prato").innerHTML;
    precoSobremesa = bebida.querySelector("preço").innerHTML;

}

function fecharPedido () {
    let mensagem = "Olá, gostaria de fazer o pedido: - Prato: " +nomePrato+ "- Bebida: "+ nomeBebida +"- Sobremesa: " +nomeSobremesa + "Total: R$"
    window.open("https://api.whatsapp.com/send/?phone=" + 55999999999 + "&text=" + mensagem, "_blank");

}
