// =========================================================
// INSTITUTO CF - CRIANÇA FELIZ
// EXPERIÊNCIA PRÁTICA II
// ARQUIVO PRINCIPAL DA APLICAÇÃO
// ES6 MODULES
// =========================================================


// =========================================================
// 1. IMPORTAÇÕES DOS MÓDULOS
// =========================================================

import {
    aplicarMascaraCPF,
    aplicarMascaraTelefone,
    aplicarMascaraCEP
} from "./mascaras.js";


import {
    obterCadastros,
    salvarCadastros,
    removerCadastro
} from "./storage.js";


import {
    validarCampo
} from "./validacao.js";


import {
    buscarEnderecoPorCEP
} from "./viacep.js";


import {
    configurarSPA
} from "./spa.js";


// =========================================================
// 2. MENU HAMBÚRGUER
// =========================================================

const botaoMenu =
    document.querySelector(".menu-toggle");

const menuPrincipal =
    document.querySelector("#menu-principal");


if (botaoMenu && menuPrincipal) {

    botaoMenu.addEventListener(
        "click",
        () => {

            menuPrincipal.classList.toggle(
                "ativo"
            );

            const menuAberto =
                menuPrincipal.classList.contains(
                    "ativo"
                );

            botaoMenu.setAttribute(
                "aria-expanded",
                String(menuAberto)
            );

        }
    );
}


// =========================================================
// 3. TOAST
// =========================================================

function mostrarToast() {

    const toast =
        document.getElementById("toast");


    if (!toast) {
        return;
    }


    toast.classList.add("ativo");


    setTimeout(
        () => {

            toast.classList.remove(
                "ativo"
            );

        },
        3000
    );
}


// =========================================================
// 4. MODAL
// =========================================================

function abrirModal() {

    const modal =
        document.getElementById("modal");


    if (!modal) {
        return;
    }


    modal.classList.add("ativo");
}


function fecharModal() {

    const modal =
        document.getElementById("modal");


    if (!modal) {
        return;
    }


    modal.classList.remove("ativo");
}


// Fecha o modal clicando fora do conteúdo
window.addEventListener(
    "click",
    (evento) => {

        const modal =
            document.getElementById("modal");


        if (
            modal &&
            evento.target === modal
        ) {

            fecharModal();

        }

    }
);


// Fecha o modal pressionando ESC
document.addEventListener(
    "keydown",
    (evento) => {

        if (evento.key === "Escape") {

            fecharModal();

        }

    }
);


// =========================================================
// 5. RESTAURAR CADASTROS NA INTERFACE
// =========================================================

function restaurarCadastros() {

    const lista =
        document.getElementById(
            "lista-cadastros"
        );


    if (!lista) {
        return;
    }


    const cadastros =
        obterCadastros();


    lista.innerHTML = "";


    // =====================================================
    // NENHUM CADASTRO
    // =====================================================

    if (cadastros.length === 0) {

        const mensagem =
            document.createElement("p");


        mensagem.textContent =
            "Nenhum cadastro salvo.";


        lista.appendChild(
            mensagem
        );


        return;
    }


    // =====================================================
    // CRIA OS CARDS DOS CADASTROS
    // =====================================================

    cadastros.forEach(
        (cadastro) => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "card cadastro-salvo";


            // ---------------------------------------------
            // NOME
            // ---------------------------------------------

            const titulo =
                document.createElement("h4");


            titulo.textContent =
                cadastro.nome || "Sem nome";


            // ---------------------------------------------
            // E-MAIL
            // ---------------------------------------------

            const email =
                document.createElement("p");


            email.textContent =
                `E-mail: ${cadastro.email || ""}`;


            // ---------------------------------------------
            // TELEFONE
            // ---------------------------------------------

            const telefone =
                document.createElement("p");


            telefone.textContent =
                `Telefone: ${cadastro.telefone || ""}`;


            // ---------------------------------------------
            // ENDEREÇO
            // ---------------------------------------------

            const endereco =
                document.createElement("p");


            const numero =
                cadastro.numero
                    ? `, ${cadastro.numero}`
                    : "";


            endereco.textContent =
                `Endereço: ${cadastro.endereco || ""}${numero}`;


            // ---------------------------------------------
            // BAIRRO
            // ---------------------------------------------

            const bairro =
                document.createElement("p");


            bairro.textContent =
                `Bairro: ${cadastro.bairro || ""}`;


            // ---------------------------------------------
            // CIDADE / ESTADO
            // ---------------------------------------------

            const cidade =
                document.createElement("p");


            cidade.textContent =
                `Cidade: ${cadastro.cidade || ""} - ${cadastro.estado || ""}`;


            // ---------------------------------------------
            // BOTÃO EXCLUIR
            // ---------------------------------------------

            const botaoExcluir =
                document.createElement(
                    "button"
                );


            botaoExcluir.type =
                "button";


            botaoExcluir.textContent =
                "Excluir cadastro";


            botaoExcluir.addEventListener(
                "click",
                () => {

                    const removido =
                        removerCadastro(
                            cadastro.id
                        );


                    if (removido) {

                        restaurarCadastros();

                    }

                }
            );


            // ---------------------------------------------
            // MONTA O CARD
            // ---------------------------------------------

            card.appendChild(titulo);
            card.appendChild(email);
            card.appendChild(telefone);
            card.appendChild(endereco);
            card.appendChild(bairro);
            card.appendChild(cidade);
            card.appendChild(botaoExcluir);


            lista.appendChild(card);

        }
    );
}


// =========================================================
// 6. CONFIGURAÇÃO DO FORMULÁRIO
// =========================================================

function configurarFormulario() {

    const formulario =
        document.getElementById(
            "form-cadastro"
        );


    if (!formulario) {
        return;
    }


    // Evita configurar os mesmos eventos
    // mais de uma vez no mesmo formulário.

    if (
        formulario.dataset.configurado ===
        "true"
    ) {

        return;
    }


    formulario.dataset.configurado =
        "true";


    const campos =
        formulario.querySelectorAll(
            "input, select"
        );


    const campoCPF =
        formulario.querySelector("#cpf");


    const campoTelefone =
        formulario.querySelector(
            "#telefone"
        );


    const campoCEP =
        formulario.querySelector("#cep");


    // =====================================================
    // 7. CPF
    // =====================================================

    if (campoCPF) {

        campoCPF.addEventListener(
            "input",
            () => {

                campoCPF.value =
                    aplicarMascaraCPF(
                        campoCPF.value
                    );


                validarCampo(
                    campoCPF
                );

            }
        );
    }


    // =====================================================
    // 8. TELEFONE
    // =====================================================

    if (campoTelefone) {

        campoTelefone.addEventListener(
            "input",
            () => {

                campoTelefone.value =
                    aplicarMascaraTelefone(
                        campoTelefone.value
                    );


                validarCampo(
                    campoTelefone
                );

            }
        );
    }


    // =====================================================
    // 9. CEP
    // =====================================================

    if (campoCEP) {

        campoCEP.addEventListener(
            "input",
            () => {

                campoCEP.value =
                    aplicarMascaraCEP(
                        campoCEP.value
                    );


                validarCampo(
                    campoCEP
                );


                const somenteNumeros =
                    campoCEP.value.replace(
                        /\D/g,
                        ""
                    );


                // Quando chegar aos 8 números,
                // consulta automaticamente o ViaCEP.

                if (
                    somenteNumeros.length === 8
                ) {

                    buscarEnderecoPorCEP(
                        campoCEP.value
                    );

                }

            }
        );
    }


    // =====================================================
    // 10. VALIDAÇÃO DOS DEMAIS CAMPOS
    // =====================================================

    campos.forEach(
        (campo) => {

            // CPF, telefone e CEP já possuem
            // eventos específicos.

            if (
                campo.id === "cpf" ||
                campo.id === "telefone" ||
                campo.id === "cep"
            ) {

                return;
            }


            campo.addEventListener(
                "input",
                () => {

                    validarCampo(campo);

                }
            );


            campo.addEventListener(
                "change",
                () => {

                    validarCampo(campo);

                }
            );

        }
    );


    // =====================================================
    // 11. ENVIO DO FORMULÁRIO
    // =====================================================

    formulario.addEventListener(
        "submit",
        (evento) => {

            evento.preventDefault();


            let formularioValido = true;


            // Valida todos os campos
            campos.forEach(
                (campo) => {

                    if (!validarCampo(campo)) {

                        formularioValido =
                            false;

                    }

                }
            );


            // =================================================
            // FORMULÁRIO INVÁLIDO
            // =================================================

            if (!formularioValido) {

                const primeiroCampoInvalido =
                    formulario.querySelector(
                        ".campo-invalido"
                    );


                if (primeiroCampoInvalido) {

                    primeiroCampoInvalido
                        .focus();

                }


                return;
            }


            // =================================================
            // FUNÇÃO AUXILIAR PARA OBTER VALORES
            // =================================================

            const valor = (nome) => {

                const campo =
                    formulario.elements[nome];


                if (!campo) {
                    return "";
                }


                return campo.value.trim();
            };


            // =================================================
            // CRIA O OBJETO DO CADASTRO
            // =================================================

            const novoCadastro = {

                id:
                    Date.now(),

                nome:
                    valor("nome"),

                email:
                    valor("email"),

                nascimento:
                    valor("nascimento"),

                cpf:
                    valor("cpf"),

                telefone:
                    valor("telefone"),

                cep:
                    valor("cep"),

                endereco:
                    valor("endereco"),

                numero:
                    valor("numero"),

                bairro:
                    valor("bairro"),

                complemento:
                    valor("complemento"),

                cidade:
                    valor("cidade"),

                estado:
                    valor("estado")

            };


            // =================================================
            // RECUPERA OS CADASTROS EXISTENTES
            // =================================================

            const cadastros =
                obterCadastros();


            // Adiciona o novo cadastro
            cadastros.push(
                novoCadastro
            );


            // =================================================
            // SALVA NO LOCALSTORAGE
            // =================================================

            const salvou =
                salvarCadastros(
                    cadastros
                );


            if (!salvou) {
                return;
            }


            // =================================================
            // REMOVE MENSAGEM DE SUCESSO ANTERIOR
            // =================================================

            const mensagemAnterior =
                formulario.querySelector(
                    ".mensagem-formulario"
                );


            if (mensagemAnterior) {

                mensagemAnterior.remove();

            }


            // =================================================
            // CRIA MENSAGEM DE SUCESSO
            // =================================================

            const mensagem =
                document.createElement(
                    "div"
                );


            mensagem.className =
                "alerta alerta-sucesso mensagem-formulario";


            mensagem.setAttribute(
                "role",
                "status"
            );


            mensagem.textContent =
                "✓ Cadastro salvo com sucesso!";


            formulario.prepend(
                mensagem
            );


            // =================================================
            // LIMPA O FORMULÁRIO
            // =================================================

            formulario.reset();


            // =================================================
            // LIMPA AS CLASSES DE VALIDAÇÃO
            // =================================================

            campos.forEach(
                (campo) => {

                    campo.classList.remove(
                        "campo-valido",
                        "campo-invalido"
                    );


                    const container =
                        campo.closest(".campo");


                    if (container) {

                        const erro =
                            container.querySelector(
                                ".mensagem-erro"
                            );


                        if (erro) {

                            erro.textContent = "";

                        }

                    }

                }
            );


            // =================================================
            // ATUALIZA O HISTÓRICO
            // =================================================

            restaurarCadastros();

        }
    );
}


// =========================================================
// 12. INICIALIZAÇÃO DA APLICAÇÃO
// =========================================================

// configurarSPA() retorna true quando existe
// #conteudo-principal e a aplicação está funcionando
// como SPA.

const usandoSPA =
    configurarSPA(
        configurarFormulario,
        restaurarCadastros
    );


// Se não estivermos na página principal da SPA,
// configuramos diretamente o formulário da página,
// como no cadastro.html independente.

if (!usandoSPA) {

    configurarFormulario();

    restaurarCadastros();

}


// =========================================================
// 13. COMPATIBILIDADE COM O HTML EXISTENTE
// =========================================================

// Como ES6 Modules possuem seu próprio escopo,
// funções utilizadas por onclick no HTML antigo
// precisam ser explicitamente disponibilizadas
// no objeto window.

window.mostrarToast =
    mostrarToast;


window.abrirModal =
    abrirModal;


window.fecharModal =
    fecharModal;