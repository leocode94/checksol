// Esconde "Qual a condição do barramento...?" se barramento não for coletivo
// Esconde "127/220 V" e "220/380 V" se a ligação for "Monofásica"
// Esconde "127 V" e "220 V" se a ligação for "Bifásica" ou "Trifásica"
$(document).ready(function () {
    $('#barramento_sim, #barramento_nao').click(function () {
        if ($('#barramento_sim').is(':checked')) {
            $('#barramento_condicao_all').show();
        }
        if ($('#barramento_nao').is(':checked')) {
            $('#barramento_condicao_all').hide();
        }
    });

    $('#tipo_de_ligacao_monofasica,#tipo_de_ligacao_bifasica, #tipo_de_ligacao_trifasica').click(function () {
        if ($('#tipo_de_ligacao_monofasica').is(':checked')) {
            $('#tensao_bifasica_trifasica').hide();
            $('#tensao_monofasica').show();
            $('br').append();
        }
        if ($('#tipo_de_ligacao_bifasica,#tipo_de_ligacao_trifasica').is(':checked')) {
            $('#tensao_monofasica').hide();
            $('#tensao_bifasica_trifasica').show();
        }
    });
})

// Calcula áreas das águas do telhado
function calcularAreas() {
    let larguraFrente = document.getElementById("largura_frente").value;
    let comprimentoFrente = document.getElementById("comprimento_frente").value;
    var calculoAreaFrente = (parseFloat(larguraFrente) * parseFloat(comprimentoFrente));

    let larguraTras = document.getElementById("largura_tras").value;
    let comprimentoTras = document.getElementById("comprimento_tras").value;
    var calculoAreaTras = (parseFloat(larguraTras) * parseFloat(comprimentoTras));

    let larguraEsquerda = document.getElementById("largura_esquerda").value;
    let comprimentoEsquerda = document.getElementById("comprimento_esquerda").value;
    var calculoAreaEsquerda = (parseFloat(larguraEsquerda) * parseFloat(comprimentoEsquerda));

    let larguraDireita = document.getElementById("largura_direita").value;
    let comprimentoDireita = document.getElementById("comprimento_direita").value;
    var calculoAreaDireita = (parseFloat(larguraDireita) * parseFloat(comprimentoDireita));



    if (isNaN(calculoAreaFrente)) {
        calculoAreaFrente = document.getElementById("resultado_agua_frente").value = "0.00";
    } else if (calculoAreaFrente < 10.0) {
        calculoAreaFrente = calculoAreaFrente.toPrecision(3)
    } else if (calculoAreaFrente < 100.0) {
        calculoAreaFrente = calculoAreaFrente.toPrecision(4)
    } else if (calculoAreaFrente < 1000.0) {
        calculoAreaFrente = calculoAreaFrente.toPrecision(5)
    } else {
        calculoAreaFrente = calculoAreaFrente.toPrecision(6)
    }

    if (isNaN(calculoAreaTras)) {
        calculoAreaTras = document.getElementById("resultado_agua_tras").value = "0.00";
    } else if (calculoAreaTras < 10.0) {
        calculoAreaTras = calculoAreaTras.toPrecision(3)
    } else if (calculoAreaTras < 100.0) {
        calculoAreaTras = calculoAreaTras.toPrecision(4)
    } else if (calculoAreaTras < 1000.0) {
        calculoAreaTras = calculoAreaTras.toPrecision(5)
    } else {
        calculoAreaTras = calculoAreaTras.toPrecision(6)
    }

    if (isNaN(calculoAreaEsquerda)) {
        calculoAreaEsquerda = document.getElementById("resultado_agua_esquerda").value = "0.00";
    } else if (calculoAreaEsquerda < 10.0) {
        calculoAreaEsquerda = calculoAreaEsquerda.toPrecision(3)
    } else if (calculoAreaEsquerda < 100.0) {
        calculoAreaEsquerda = calculoAreaEsquerda.toPrecision(4)
    } else if (calculoAreaEsquerda < 1000.0) {
        calculoAreaEsquerda = calculoAreaEsquerda.toPrecision(5)
    } else {
        calculoAreaEsquerda = calculoAreaEsquerda.toPrecision(6)
    }

    if (isNaN(calculoAreaDireita)) {
        calculoAreaDireita = document.getElementById("resultado_agua_direita").value = "0.00";
    } else if (calculoAreaDireita < 10.0) {
        calculoAreaDireita = calculoAreaDireita.toPrecision(3)
    } else if (calculoAreaDireita < 100.0) {
        calculoAreaDireita = calculoAreaDireita.toPrecision(4)
    } else if (calculoAreaDireita < 1000.0) {
        calculoAreaDireita = calculoAreaDireita.toPrecision(5)
    } else {
        calculoAreaDireita = calculoAreaDireita.toPrecision(6)
    }

    return [document.getElementById("resultado_agua_frente").value = ("Água da frente: " + calculoAreaFrente + " m²"),
    document.getElementById("resultado_agua_tras").value = ("Água de trás: " + calculoAreaTras + " m²"),
    document.getElementById("resultado_agua_esquerda").value = ("Água da esquerda: " + calculoAreaEsquerda + " m²"),
    document.getElementById("resultado_agua_direita").value = ("Água da direita: " + calculoAreaDireita + " m²")];
}
