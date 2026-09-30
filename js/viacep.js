// =========================================================
// INSTITUTO CF - CRIANÇA FELIZ
// MÓDULO DE CONSULTA DE CEP
// API VIACEP
// =========================================================


// =========================================================
// 1. IMPORTAÇÕES
// =========================================================

import {
    validarCampo,
    marcarCampoInvalido
} from "./validacao.js";


// =========================================================
// 2. LIMPAR CAMPOS DE ENDEREÇO
// =========================================================

function limparEndereco() {

    const campoEndereco =
        document.getElementById("endereco");

    const campoNumero =
        document.getElementById("numero");

    const campoBairro =
        document.getElementById("bairro");

    const campoCidade =
        document.getElementById("cidade");

    const campoEstado =
        document.getElementById("estado");


    if (campoEndereco) {

        campoEndereco.value = "";

    }


    if (campoNumero) {

        campoNumero.value = "";

    }


    if (campoBairro) {

        campoBairro.value = "";

    }


    if (campoCidade) {

        campoCidade.value = "";

    }


    if (campoEstado) {

        campoEstado.value = "";

    }
}


// =========================================================
// 3. MOSTRAR ERRO NO CAMPO CEP
// =========================================================

export function mostrarErroCEP(texto) {

    const campoCEP =
        document.getElementById("cep");


    if (!campoCEP) {

        return;

    }


    marcarCampoInvalido(
        campoCEP,
        texto
    );
}


// =========================================================
// 4. BUSCAR ENDEREÇO PELO CEP
// =========================================================

export async function buscarEnderecoPorCEP(
    cep
) {

    // Remove tudo que não seja número.
    const cepNumerico =
        cep.replace(
            /\D/g,
            ""
        );


    // CEP precisa possuir exatamente
    // 8 números.
    if (cepNumerico.length !== 8) {

        return;

    }


    // =====================================================
    // CAMPOS DO FORMULÁRIO
    // =====================================================

    const campoCEP =
        document.getElementById("cep");

    const campoEndereco =
        document.getElementById("endereco");

    const campoNumero =
        document.getElementById("numero");

    const campoBairro =
        document.getElementById("bairro");

    const campoCidade =
        document.getElementById("cidade");

    const campoEstado =
        document.getElementById("estado");


    // Se os campos essenciais não existirem,
    // interrompe a função.
    if (
        !campoCEP ||
        !campoEndereco ||
        !campoCidade ||
        !campoEstado
    ) {

        return;

    }


    // =====================================================
    // 5. CONSULTA À API
    // =====================================================

    try {

        // Impede alteração do CEP enquanto
        // a consulta está acontecendo.
        campoCEP.readOnly = true;


        // Feedback visual para o usuário.
        campoEndereco.value =
            "Buscando endereço...";


        if (campoBairro) {

            campoBairro.value = "";

        }


        campoCidade.value = "";

        campoEstado.value = "";


        // =================================================
        // FETCH
        // =================================================

        const resposta =
            await fetch(
                `https://viacep.com.br/ws/${cepNumerico}/json/`
            );


        // Verifica erro HTTP.
        if (!resposta.ok) {

            throw new Error(
                `Erro HTTP: ${resposta.status}`
            );

        }


        // Converte a resposta JSON
        // para um objeto JavaScript.
        const dados =
            await resposta.json();


        // =================================================
        // 6. CEP NÃO ENCONTRADO
        // =================================================

        if (dados.erro) {

            limparEndereco();


            mostrarErroCEP(
                "CEP não encontrado."
            );


            campoCEP.focus();


            return;

        }


        // =================================================
        // 7. PREENCHIMENTO AUTOMÁTICO
        // =================================================

        campoEndereco.value =
            dados.logradouro || "";


        if (campoBairro) {

            campoBairro.value =
                dados.bairro || "";

        }


        campoCidade.value =
            dados.localidade || "";


        campoEstado.value =
            dados.uf || "";


        // =================================================
        // 8. VALIDAÇÃO DOS CAMPOS PREENCHIDOS
        // =================================================

        validarCampo(
            campoCEP
        );


        validarCampo(
            campoEndereco
        );


        if (campoBairro) {

            validarCampo(
                campoBairro
            );

        }


        validarCampo(
            campoCidade
        );


        validarCampo(
            campoEstado
        );


        // =================================================
        // 9. FOCO NO NÚMERO
        // =================================================

        // Normalmente o ViaCEP não fornece
        // o número do imóvel.
        if (campoNumero) {

            campoNumero.focus();

        }


        // Caso o ViaCEP não possua o nome
        // da rua, permite preenchimento manual.
        else if (!dados.logradouro) {

            campoEndereco.focus();

        }

    }


    // =====================================================
    // 10. TRATAMENTO DE ERROS
    // =====================================================

    catch (erro) {

        console.error(
            "Erro ao consultar o ViaCEP:",
            erro
        );


        limparEndereco();


        mostrarErroCEP(
            "Não foi possível consultar o CEP. " +
            "Preencha o endereço manualmente."
        );


        // Deixa o endereço disponível
        // para preenchimento manual.
        campoEndereco.focus();

    }


    // =====================================================
    // 11. FINALIZAÇÃO
    // =====================================================

    finally {

        // O campo volta a ficar editável,
        // independentemente de sucesso ou erro.
        campoCEP.readOnly = false;

    }
}