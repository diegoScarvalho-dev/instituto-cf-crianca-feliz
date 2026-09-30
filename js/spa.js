// =========================================================
// INSTITUTO CF - CRIANÇA FELIZ
// MÓDULO SPA
// Single Page Application
// =========================================================


// =========================================================
// 1. IMPORTAÇÃO DO MÓDULO DE PROJETOS
// =========================================================

import {
    criarCardsProjetos
} from "./projetos.js";


// =========================================================
// 2. VARIÁVEIS DO MÓDULO
// =========================================================

let conteudoPrincipal = null;

let conteudoInicio = "";

let callbackFormulario = null;

let callbackCadastros = null;


// =========================================================
// 3. CONFIGURAÇÃO PRINCIPAL DA SPA
// =========================================================

export function configurarSPA(
    configurarFormulario,
    restaurarCadastros
) {

    // Guarda as funções recebidas do script.js
    callbackFormulario =
        configurarFormulario;

    callbackCadastros =
        restaurarCadastros;


    // Procura o container principal da SPA
    conteudoPrincipal =
        document.getElementById(
            "conteudo-principal"
        );


    // Se não existir, significa que estamos
    // em uma página HTML independente.
    if (!conteudoPrincipal) {

        return false;

    }


    // Guarda o conteúdo original da página inicial.
    conteudoInicio =
        conteudoPrincipal.innerHTML;


    // Configura os links do menu.
    configurarLinksNavegacao();


    // =====================================================
    // BOTÕES VOLTAR / AVANÇAR DO NAVEGADOR
    // =====================================================

    window.addEventListener(
        "popstate",
        () => {

            const rota =
                obterRotaAtual();


            carregarPagina(
                rota
            );

        }
    );


    // =====================================================
    // ROTA INICIAL
    // =====================================================

    const rotaInicial =
        obterRotaAtual();


    carregarPagina(
        rotaInicial
    );


    return true;
}


// =========================================================
// 4. IDENTIFICAR A ROTA ATUAL
// =========================================================

function obterRotaAtual() {

    const rota =
        window.location.hash
            .replace("#", "")
            .trim();


    if (!rota) {

        return "inicio";

    }


    return rota;
}


// =========================================================
// 5. TEMPLATE DA PÁGINA DE CADASTRO
// =========================================================

function criarPaginaCadastro() {

    return `

        <section>

            <h2>
                Cadastro
            </h2>

            <p>
                Preencha seus dados para participar das
                ações e projetos do Instituto CF.
            </p>


            <form
                id="form-cadastro"
                novalidate>


                <!-- =====================================
                     DADOS PESSOAIS
                ====================================== -->

                <fieldset>

                    <legend>
                        Dados pessoais
                    </legend>


                    <div class="campo">

                        <label for="nome">
                            Nome completo:
                        </label>

                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Digite seu nome"
                            autocomplete="name"
                            required>

                    </div>


                    <div class="campo">

                        <label for="email">
                            E-mail:
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="exemplo@email.com"
                            autocomplete="email"
                            required>

                    </div>


                    <div class="campo">

                        <label for="nascimento">
                            Data de nascimento:
                        </label>

                        <input
                            type="date"
                            id="nascimento"
                            name="nascimento"
                            required>

                    </div>


                    <div class="campo">

                        <label for="cpf">
                            CPF:
                        </label>

                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            placeholder="000.000.000-00"
                            maxlength="14"
                            inputmode="numeric"
                            pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                            autocomplete="off"
                            required>

                    </div>


                    <div class="campo">

                        <label for="telefone">
                            Telefone:
                        </label>

                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            placeholder="(11) 99999-9999"
                            maxlength="15"
                            inputmode="numeric"
                            pattern="\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}"
                            autocomplete="tel"
                            required>

                    </div>

                </fieldset>


                <!-- =====================================
                     ENDEREÇO
                ====================================== -->

                <fieldset>

                    <legend>
                        Endereço
                    </legend>


                    <div class="campo">

                        <label for="cep">
                            CEP:
                        </label>

                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            placeholder="00000-000"
                            maxlength="9"
                            inputmode="numeric"
                            pattern="[0-9]{5}-[0-9]{3}"
                            autocomplete="postal-code"
                            required>

                    </div>


                    <div class="campo">

                        <label for="endereco">
                            Endereço:
                        </label>

                        <input
                            type="text"
                            id="endereco"
                            name="endereco"
                            placeholder="Rua / Avenida"
                            autocomplete="street-address"
                            required>

                    </div>


                    <div class="campo">

                        <label for="numero">
                            Nº:
                        </label>

                        <input
                            type="text"
                            id="numero"
                            name="numero"
                            placeholder="Número"
                            inputmode="numeric"
                            required>

                    </div>


                    <div class="campo">

                        <label for="bairro">
                            Bairro:
                        </label>

                        <input
                            type="text"
                            id="bairro"
                            name="bairro"
                            placeholder="Bairro"
                            required>

                    </div>


                    <div class="campo">

                        <label for="complemento">
                            Complemento:
                        </label>

                        <input
                            type="text"
                            id="complemento"
                            name="complemento"
                            placeholder="Apartamento, bloco etc.">

                    </div>


                    <div class="campo">

                        <label for="cidade">
                            Cidade:
                        </label>

                        <input
                            type="text"
                            id="cidade"
                            name="cidade"
                            placeholder="Cidade"
                            autocomplete="address-level2"
                            required>

                    </div>


                    <div class="campo">

                        <label for="estado">
                            Estado:
                        </label>

                        <select
                            id="estado"
                            name="estado"
                            autocomplete="address-level1"
                            required>

                            <option value="">
                                Selecione
                            </option>

                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>

                        </select>

                    </div>

                </fieldset>


                <div class="acoes">

                    <button type="submit">
                        Enviar cadastro
                    </button>

                </div>

            </form>


            <!-- =========================================
                 HISTÓRICO DO LOCALSTORAGE
            ========================================== -->

            <section class="historico-cadastros">

                <h3>
                    Cadastros salvos
                </h3>

                <div id="lista-cadastros">
                </div>

            </section>

        </section>

    `;
}


// =========================================================
// 6. PÁGINAS DA SPA
// =========================================================

function obterPaginas() {

    return {

        // Página inicial original
        inicio:
            conteudoInicio,


        // Página de projetos
        projetos: `

            <section>

                <h2>
                    Nossos Projetos
                </h2>

                <p>
                    Conheça algumas das ações desenvolvidas
                    pelo Instituto CF - Criança Feliz.
                </p>


                <div class="projetos-grid">

                    ${criarCardsProjetos()}

                </div>

            </section>

        `,


        // Página de cadastro
        cadastro:
            criarPaginaCadastro()

    };
}


// =========================================================
// 7. CARREGAR UMA PÁGINA
// =========================================================

export function carregarPagina(rota) {

    if (!conteudoPrincipal) {

        return;

    }


    const paginas =
        obterPaginas();


    // Se a rota não existir,
    // volta para a página inicial.
    if (!paginas[rota]) {

        rota = "inicio";

    }


    // Troca o conteúdo principal sem
    // recarregar o documento HTML inteiro.
    conteudoPrincipal.innerHTML =
        paginas[rota];


    // Volta para o topo.
    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


    // Depois de alterar o DOM,
    // os eventos dos novos elementos
    // precisam ser configurados novamente.
    configurarBotoesCadastro();


    // Se existir callback do formulário,
    // configura os campos recém-criados.
    if (callbackFormulario) {

        callbackFormulario();

    }


    // Só restaura os cadastros quando
    // estivermos na rota Cadastro.
    if (
        rota === "cadastro" &&
        callbackCadastros
    ) {

        callbackCadastros();

    }
}


// =========================================================
// 8. ABRIR CADASTRO
// =========================================================

export function abrirCadastro() {

    carregarPagina(
        "cadastro"
    );


    // Altera a URL sem atualizar a página.
    history.pushState(

        {
            rota: "cadastro"
        },

        "",

        "#cadastro"

    );
}


// =========================================================
// 9. CONFIGURAR BOTÕES "QUERO SER VOLUNTÁRIO"
// =========================================================

function configurarBotoesCadastro() {

    const botoes =
        document.querySelectorAll(
            "[data-abrir-cadastro]"
        );


    botoes.forEach(
        (botao) => {

            botao.addEventListener(
                "click",
                abrirCadastro
            );

        }
    );
}


// =========================================================
// 10. CONFIGURAR LINKS DE NAVEGAÇÃO
// =========================================================

function configurarLinksNavegacao() {

    const links =
        document.querySelectorAll(
            "[data-rota]"
        );


    links.forEach(
        (link) => {

            link.addEventListener(
                "click",
                (evento) => {

                    // Evita que o navegador
                    // carregue outra página.
                    evento.preventDefault();


                    const rota =
                        link.dataset.rota;


                    if (!rota) {

                        return;

                    }


                    // Carrega a nova rota.
                    carregarPagina(
                        rota
                    );


                    // Atualiza a URL.
                    history.pushState(

                        {
                            rota: rota
                        },

                        "",

                        `#${rota}`

                    );


                    // Fecha o menu mobile.
                    const menu =
                        document.getElementById(
                            "menu-principal"
                        );


                    const botaoMenu =
                        document.querySelector(
                            ".menu-toggle"
                        );


                    if (menu) {

                        menu.classList.remove(
                            "ativo"
                        );

                    }


                    if (botaoMenu) {

                        botaoMenu.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }
            );

        }
    );
}