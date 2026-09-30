// =========================================================
// INSTITUTO CF - CRIANÇA FELIZ
// MÓDULO DE ARMAZENAMENTO
// localStorage
// =========================================================


// =========================================================
// 1. CHAVE UTILIZADA NO LOCALSTORAGE
// =========================================================

const CHAVE_CADASTROS =
    "cadastrosInstitutoCF";


// =========================================================
// 2. RECUPERAR CADASTROS
// =========================================================

export function obterCadastros() {

    try {

        // Recupera a string armazenada no navegador
        const dadosSalvos =
            localStorage.getItem(
                CHAVE_CADASTROS
            );


        // Se ainda não existir nenhum cadastro,
        // retorna um array vazio.
        if (!dadosSalvos) {

            return [];

        }


        // Converte a string JSON novamente
        // para um array JavaScript.
        const dadosConvertidos =
            JSON.parse(
                dadosSalvos
            );


        // Confirma que o conteúdo recuperado
        // realmente é um array.
        if (
            !Array.isArray(
                dadosConvertidos
            )
        ) {

            console.warn(
                "Os dados armazenados não são uma lista válida."
            );

            return [];

        }


        return dadosConvertidos;

    }

    catch (erro) {

        // Caso o JSON esteja corrompido ou
        // ocorra outro erro de leitura.
        console.error(
            "Erro ao recuperar os cadastros:",
            erro
        );


        return [];

    }
}


// =========================================================
// 3. SALVAR CADASTROS
// =========================================================

export function salvarCadastros(
    cadastros
) {

    try {

        // O localStorage armazena somente strings.
        // Por isso transformamos o array em JSON.
        const dadosJSON =
            JSON.stringify(
                cadastros
            );


        // Salva a string no navegador.
        localStorage.setItem(
            CHAVE_CADASTROS,
            dadosJSON
        );


        return true;

    }

    catch (erro) {

        console.error(
            "Erro ao salvar os cadastros:",
            erro
        );


        alert(
            "Não foi possível salvar o cadastro."
        );


        return false;

    }
}


// =========================================================
// 4. REMOVER UM CADASTRO
// =========================================================

export function removerCadastro(id) {

    // Recupera todos os cadastros existentes.
    const cadastros =
        obterCadastros();


    // Cria um novo array contendo todos os
    // registros, exceto o cadastro selecionado.
    const novosCadastros =
        cadastros.filter(
            (cadastro) =>
                cadastro.id !== id
        );


    // Atualiza o localStorage.
    return salvarCadastros(
        novosCadastros
    );
}


// =========================================================
// 5. LIMPAR TODOS OS CADASTROS
// =========================================================

export function limparCadastros() {

    try {

        localStorage.removeItem(
            CHAVE_CADASTROS
        );


        return true;

    }

    catch (erro) {

        console.error(
            "Erro ao limpar os cadastros:",
            erro
        );


        return false;

    }
}