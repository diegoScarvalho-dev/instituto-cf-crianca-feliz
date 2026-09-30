// =========================================================
// API VIACEP
// Instituto CF - Criança Feliz
// =========================================================

import {
    validarCampo
} from "./validacao.js";


export function mostrarErroCEP(texto) {

    const campoCEP =
        document.getElementById("cep");


    if (!campoCEP) {
        return;
    }


    const container =
        campoCEP.closest(".campo");


    if (!container) {
        return;
    }


    let mensagem =
        container.querySelector(
            ".mensagem-erro"
        );


    if (!mensagem) {

        mensagem =
            document.createElement("small");

        mensagem.className =
            "mensagem-erro";

        mensagem.setAttribute(
            "role",
            "alert"
        );

        container.appendChild(
            mensagem
        );
    }


    campoCEP.classList.remove(
        "campo-valido"
    );

    campoCEP.classList.add(
        "campo-invalido"
    );

    mensagem.textContent = texto;
}


export async function buscarEnderecoPorCEP(cep) {

    const cepNumerico =
        cep.replace(/\D/g, "");


    if (cepNumerico.length !== 8) {
        return;
    }


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


    if (
        !campoCEP ||
        !campoEndereco ||
        !campoCidade ||
        !campoEstado
    ) {
        return;
    }


    try {

        campoCEP.readOnly = true;

        campoEndereco.value =
            "Buscando endereço...";

        if (campoBairro) {
            campoBairro.value = "";
        }

        campoCidade.value = "";
        campoEstado.value = "";


        const resposta =
            await fetch(
                `https://viacep.com.br/ws/${cepNumerico}/json/`
            );


        if (!resposta.ok) {

            throw new Error(
                "Erro na consulta do CEP."
            );
        }


        const dados =
            await resposta.json();


        if (dados.erro) {

            campoEndereco.value = "";

            if (campoBairro) {
                campoBairro.value = "";
            }

            campoCidade.value = "";
            campoEstado.value = "";


            mostrarErroCEP(
                "CEP não encontrado."
            );

            campoCEP.focus();

            return;
        }


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


        validarCampo(campoCEP);
        validarCampo(campoEndereco);

        if (campoBairro) {
            validarCampo(campoBairro);
        }

        validarCampo(campoCidade);
        validarCampo(campoEstado);


        if (campoNumero) {

            campoNumero.focus();

        }

        else if (!dados.logradouro) {

            campoEndereco.focus();

        }

    }

    catch (erro) {

        console.error(
            "Erro ao consultar o CEP:",
            erro
        );


        campoEndereco.value = "";

        if (campoBairro) {
            campoBairro.value = "";
        }

        campoCidade.value = "";
        campoEstado.value = "";


        mostrarErroCEP(
            "Não foi possível consultar o CEP. " +
            "Preencha o endereço manualmente."
        );

    }

    finally {

        campoCEP.readOnly = false;

    }
}