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
// 3. ALTO CONTRASTE
// =========================================================

const CHAVE_CONTRASTE =
    "institutoCFAltoContraste";


const botaoContraste =
    document.getElementById(
        "botao-contraste"
    );


// =========================================================
// 4. ATUALIZAR BOTÃO DE CONTRASTE
// =========================================================

function atualizarBotaoContraste(
    ativo
) {

    if (!botaoContraste) {
        return;
    }


    botaoContraste.setAttribute(
        "aria-pressed",
        String(ativo)
    );


    if (ativo) {

        botaoContraste.setAttribute(
            "aria-label",
            "Desativar modo de alto contraste"
        );


        botaoContraste.textContent =
            "◐ Contraste normal";

    }

    else {

        botaoContraste.setAttribute(
            "aria-label",
            "Ativar modo de alto contraste"
        );


        botaoContraste.textContent =
            "◐ Alto contraste";

    }
}


// =========================================================
// 5. APLICAR ALTO CONTRASTE
// =========================================================

function aplicarAltoContraste(
    ativo
) {

    const elementoHTML =
        document.documentElement;


    if (ativo) {

        elementoHTML.setAttribute(
            "data-contraste",
            "alto"
        );

    }

    else {

        elementoHTML.removeAttribute(
            "data-contraste"
        );

    }


    atualizarBotaoContraste(
        ativo
    );
}


// =========================================================
// 6. RECUPERAR PREFERÊNCIA DE CONTRASTE
// =========================================================

function restaurarPreferenciaContraste() {

    try {

        const preferencia =
            localStorage.getItem(
                CHAVE_CONTRASTE
            );


        const contrasteAtivo =
            preferencia === "true";


        aplicarAltoContraste(
            contrasteAtivo
        );

    }

    catch (erro) {

        console.error(
            "Erro ao recuperar preferência de contraste:",
            erro
        );


        aplicarAltoContraste(
            false
        );

    }
}


// =========================================================
// 7. ALTERNAR CONTRASTE
// =========================================================

function alternarContraste() {

    const elementoHTML =
        document.documentElement;


    const contrasteAtivo =
        elementoHTML.getAttribute(
            "data-contraste"
        ) === "alto";


    const novoEstado =
        !contrasteAtivo;


    aplicarAltoContraste(
        novoEstado
    );


    try {

        localStorage.setItem(
            CHAVE_CONTRASTE,
            String(novoEstado)
        );

    }

    catch (erro) {

        console.error(
            "Erro ao salvar preferência de contraste:",
            erro
        );

    }
}


// =========================================================
// 8. CONFIGURAR BOTÃO DE CONTRASTE
// =========================================================

if (botaoContraste) {

    botaoContraste.addEventListener(
        "click",
        alternarContraste
    );
}


restaurarPreferenciaContraste();


// =========================================================
// 9. TOAST
// =========================================================

function mostrarToast() {

    const toast =
        document.getElementById("toast");


    if (!toast) {
        return;
    }


    toast.classList.add(
        "ativo"
    );


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
// 10. MODAL ACESSÍVEL
// =========================================================

let elementoFocoAnterior =
    null;


// =========================================================
// 11. OBTER ELEMENTOS FOCÁVEIS DO MODAL
// =========================================================

function obterElementosFocaveisModal(
    modal
) {

    if (!modal) {
        return [];
    }


    const seletores = [

        "a[href]",

        "button:not([disabled])",

        "input:not([disabled])",

        "select:not([disabled])",

        "textarea:not([disabled])",

        "[tabindex]:not([tabindex='-1'])"

    ];


    return Array.from(
        modal.querySelectorAll(
            seletores.join(",")
        )
    ).filter(
        (elemento) => {

            return (
                elemento.offsetWidth > 0 ||
                elemento.offsetHeight > 0
            );

        }
    );
}


// =========================================================
// 12. ABRIR MODAL
// =========================================================

function abrirModal() {

    const modal =
        document.getElementById(
            "modal"
        );


    if (!modal) {
        return;
    }


    // Guarda o elemento que abriu o modal.
    elementoFocoAnterior =
        document.activeElement;


    // Exibe o diálogo.
    modal.classList.add(
        "ativo"
    );


    // Localiza os elementos que podem
    // receber foco.
    const elementosFocaveis =
        obterElementosFocaveisModal(
            modal
        );


    // Move o foco para o primeiro
    // elemento interativo.
    if (
        elementosFocaveis.length > 0
    ) {

        elementosFocaveis[0]
            .focus();

    }

    else {

        const conteudoModal =
            modal.querySelector(
                ".modal-conteudo"
            );


        if (conteudoModal) {

            conteudoModal.focus();

        }

    }
}


// =========================================================
// 13. FECHAR MODAL
// =========================================================

function fecharModal() {

    const modal =
        document.getElementById(
            "modal"
        );


    if (
        !modal ||
        !modal.classList.contains(
            "ativo"
        )
    ) {

        return;

    }


    modal.classList.remove(
        "ativo"
    );


    // Retorna o foco ao elemento
    // que abriu o modal.
    if (
        elementoFocoAnterior &&
        typeof elementoFocoAnterior.focus ===
            "function"
    ) {

        elementoFocoAnterior.focus();

    }


    elementoFocoAnterior =
        null;
}


// =========================================================
// 14. CONTROLAR FOCO DENTRO DO MODAL
// =========================================================

function controlarFocoModal(
    evento
) {

    const modal =
        document.getElementById(
            "modal"
        );


    if (
        !modal ||
        !modal.classList.contains(
            "ativo"
        )
    ) {

        return;

    }


    // =====================================================
    // ESC
    // =====================================================

    if (
        evento.key === "Escape"
    ) {

        evento.preventDefault();

        fecharModal();

        return;
    }


    // =====================================================
    // SOMENTE TAB E SHIFT + TAB
    // =====================================================

    if (
        evento.key !== "Tab"
    ) {

        return;
    }


    const elementosFocaveis =
        obterElementosFocaveisModal(
            modal
        );


    if (
        elementosFocaveis.length === 0
    ) {

        evento.preventDefault();


        const conteudoModal =
            modal.querySelector(
                ".modal-conteudo"
            );


        if (conteudoModal) {

            conteudoModal.focus();

        }


        return;
    }


    const primeiroElemento =
        elementosFocaveis[0];


    const ultimoElemento =
        elementosFocaveis[
            elementosFocaveis.length - 1
        ];


    // =====================================================
    // SHIFT + TAB
    // =====================================================

    if (
        evento.shiftKey &&
        document.activeElement ===
            primeiroElemento
    ) {

        evento.preventDefault();

        ultimoElemento.focus();

        return;
    }


    // =====================================================
    // TAB
    // =====================================================

    if (
        !evento.shiftKey &&
        document.activeElement ===
            ultimoElemento
    ) {

        evento.preventDefault();

        primeiroElemento.focus();

    }
}


// =========================================================
// 15. FECHAR MODAL CLICANDO FORA
// =========================================================

window.addEventListener(
    "click",
    (evento) => {

        const modal =
            document.getElementById(
                "modal"
            );


        if (
            modal &&
            evento.target === modal
        ) {

            fecharModal();

        }

    }
);


// =========================================================
// 16. EVENTOS DE TECLADO DO MODAL
// =========================================================

document.addEventListener(
    "keydown",
    controlarFocoModal
);


// =========================================================
// 17. RESTAURAR CADASTROS NA INTERFACE
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

    if (
        cadastros.length === 0
    ) {

        const mensagem =
            document.createElement(
                "p"
            );


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
                document.createElement(
                    "h4"
                );


            titulo.textContent =
                cadastro.nome ||
                "Sem nome";


            // ---------------------------------------------
            // E-MAIL
            // ---------------------------------------------

            const email =
                document.createElement(
                    "p"
                );


            email.textContent =
                `E-mail: ${cadastro.email || ""}`;


            // ---------------------------------------------
            // TELEFONE
            // ---------------------------------------------

            const telefone =
                document.createElement(
                    "p"
                );


            telefone.textContent =
                `Telefone: ${cadastro.telefone || ""}`;


            // ---------------------------------------------
            // ENDEREÇO
            // ---------------------------------------------

            const endereco =
                document.createElement(
                    "p"
                );


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
                document.createElement(
                    "p"
                );


            bairro.textContent =
                `Bairro: ${cadastro.bairro || ""}`;


            // ---------------------------------------------
            // CIDADE / ESTADO
            // ---------------------------------------------

            const cidade =
                document.createElement(
                    "p"
                );


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

            card.appendChild(
                titulo
            );

            card.appendChild(
                email
            );

            card.appendChild(
                telefone
            );

            card.appendChild(
                endereco
            );

            card.appendChild(
                bairro
            );

            card.appendChild(
                cidade
            );

            card.appendChild(
                botaoExcluir
            );


            lista.appendChild(
                card
            );

        }
    );
}


// =========================================================
// 18. CONFIGURAÇÃO DO FORMULÁRIO
// =========================================================

function configurarFormulario() {

    const formulario =
        document.getElementById(
            "form-cadastro"
        );


    if (!formulario) {
        return;
    }


    // Evita registrar os mesmos
    // eventos mais de uma vez.

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
        formulario.querySelector(
            "#cpf"
        );


    const campoTelefone =
        formulario.querySelector(
            "#telefone"
        );


    const campoCEP =
        formulario.querySelector(
            "#cep"
        );


    // =====================================================
    // 19. CPF
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
    // 20. TELEFONE
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
    // 21. CEP
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


                if (
                    somenteNumeros.length ===
                    8
                ) {

                    buscarEnderecoPorCEP(
                        campoCEP.value
                    );

                }

            }
        );
    }


    // =====================================================
    // 22. VALIDAÇÃO DOS DEMAIS CAMPOS
    // =====================================================

    campos.forEach(
        (campo) => {

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

                    validarCampo(
                        campo
                    );

                }
            );


            campo.addEventListener(
                "change",
                () => {

                    validarCampo(
                        campo
                    );

                }
            );

        }
    );


    // =====================================================
    // 23. ENVIO DO FORMULÁRIO
    // =====================================================

    formulario.addEventListener(
        "submit",
        (evento) => {

            evento.preventDefault();


            let formularioValido =
                true;


            campos.forEach(
                (campo) => {

                    if (
                        !validarCampo(
                            campo
                        )
                    ) {

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


                if (
                    primeiroCampoInvalido
                ) {

                    primeiroCampoInvalido
                        .focus();

                }


                return;
            }


            // =================================================
            // FUNÇÃO AUXILIAR
            // =================================================

            const valor =
                (nome) => {

                    const campo =
                        formulario.elements[
                            nome
                        ];


                    if (!campo) {
                        return "";
                    }


                    return campo.value
                        .trim();

                };


            // =================================================
            // OBJETO DO CADASTRO
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
            // RECUPERA CADASTROS
            // =================================================

            const cadastros =
                obterCadastros();


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
            // REMOVE MENSAGEM ANTERIOR
            // =================================================

            const mensagemAnterior =
                formulario.querySelector(
                    ".mensagem-formulario"
                );


            if (mensagemAnterior) {

                mensagemAnterior.remove();

            }


            // =================================================
            // MENSAGEM DE SUCESSO
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


            mensagem.setAttribute(
                "aria-live",
                "polite"
            );


            mensagem.textContent =
                "✓ Cadastro salvo com sucesso!";


            formulario.prepend(
                mensagem
            );


            // =================================================
            // LIMPA FORMULÁRIO
            // =================================================

            formulario.reset();


            // =================================================
            // LIMPA VALIDAÇÕES VISUAIS
            // =================================================

            campos.forEach(
                (campo) => {

                    campo.classList.remove(
                        "campo-valido",
                        "campo-invalido"
                    );


                    const container =
                        campo.closest(
                            ".campo"
                        );


                    if (container) {

                        const erro =
                            container.querySelector(
                                ".mensagem-erro"
                            );


                        if (erro) {

                            erro.textContent =
                                "";

                        }

                    }

                }
            );


            // =================================================
            // ATUALIZA HISTÓRICO
            // =================================================

            restaurarCadastros();

        }
    );
}


// =========================================================
// 24. INICIALIZAÇÃO DA SPA
// =========================================================

const usandoSPA =
    configurarSPA(
        configurarFormulario,
        restaurarCadastros
    );


if (!usandoSPA) {

    configurarFormulario();

    restaurarCadastros();

}


// =========================================================
// 25. COMPATIBILIDADE COM ONCLICK DO HTML
// =========================================================

window.mostrarToast =
    mostrarToast;


window.abrirModal =
    abrirModal;


window.fecharModal =
    fecharModal;