// Esconde "Qual a condição do barramento...?" se barramento não for coletivo
$(document).ready(function () {
    $('#barramento_sim, #barramento_nao').click(function () {
        if ($('#barramento_sim').is(':checked')) {
            $('#barramento_condicao_all').show();
        }
        if ($('#barramento_nao').is(':checked')) {
            $('#barramento_condicao_all').hide();
        }
    });
});

// Esconde "127/220 V" e "220/380 V" se a ligação for "Monofásica"
// Esconde "127 V" e "220 V" se a ligação for "Bifásica" ou "Trifásica"
$(document).ready(function () {
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
});

function calcularArea() {
    let larguraFrente = document.getElementById("largura_frente").value;
    let comprimentoFrente = document.getElementById("comprimento_frente").value;
    var calculoArea = (parseFloat(larguraFrente) * parseFloat(comprimentoFrente));

    if (isNaN(calculoArea)) {
        calculoArea = document.getElementById("resultado").value = "0.00";
    } else if (calculoArea < 10.0) {
        calculoArea = calculoArea.toPrecision(3)
    } else if (calculoArea < 100.0) {
        calculoArea = calculoArea.toPrecision(4)
    } else if (calculoArea < 1000.0) {
        calculoArea = calculoArea.toPrecision(5)
    } else {
        calculoArea = calculoArea.toPrecision(6)
    }

    return document.getElementById("resultado").value = calculoArea + " m²";
}

function mostrarTensao() {
    let tensaoFaseFase = document.getElementById("tensao_fase_fase").value;
    return tensaoFaseFase.append(" V");
}