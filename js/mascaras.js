// =========================================================
// INSTITUTO CF - CRIANÇA FELIZ
// MÓDULO DE MÁSCARAS
// =========================================================


// =========================================================
// 1. MÁSCARA DO CPF
// =========================================================

export function aplicarMascaraCPF(valor) {

    // Remove qualquer caractere que não seja número
    let numeros =
        valor.replace(/\D/g, "");


    // Limita o CPF a 11 números
    numeros =
        numeros.slice(0, 11);


    // Adiciona o primeiro ponto
    numeros =
        numeros.replace(
            /(\d{3})(\d)/,
            "$1.$2"
        );


    // Adiciona o segundo ponto
    numeros =
        numeros.replace(
            /(\d{3})(\d)/,
            "$1.$2"
        );


    // Adiciona o hífen
    numeros =
        numeros.replace(
            /(\d{3})(\d{1,2})$/,
            "$1-$2"
        );


    return numeros;
}


// =========================================================
// 2. MÁSCARA DO TELEFONE
// =========================================================

export function aplicarMascaraTelefone(valor) {

    // Mantém somente números
    let numeros =
        valor.replace(/\D/g, "");


    // Limita a 11 números
    numeros =
        numeros.slice(0, 11);


    // =====================================================
    // TELEFONE FIXO
    // Exemplo: 1133334444
    // Resultado: (11) 3333-4444
    // =====================================================

    if (numeros.length <= 10) {

        numeros =
            numeros.replace(
                /(\d{2})(\d)/,
                "($1) $2"
            );


        numeros =
            numeros.replace(
                /(\d{4})(\d)/,
                "$1-$2"
            );

    }


    // =====================================================
    // CELULAR
    // Exemplo: 11999999999
    // Resultado: (11) 99999-9999
    // =====================================================

    else {

        numeros =
            numeros.replace(
                /(\d{2})(\d)/,
                "($1) $2"
            );


        numeros =
            numeros.replace(
                /(\d{5})(\d)/,
                "$1-$2"
            );

    }


    return numeros;
}


// =========================================================
// 3. MÁSCARA DO CEP
// =========================================================

export function aplicarMascaraCEP(valor) {

    // Mantém somente números
    let numeros =
        valor.replace(/\D/g, "");


    // CEP possui no máximo 8 números
    numeros =
        numeros.slice(0, 8);


    // Adiciona o hífen
    numeros =
        numeros.replace(
            /(\d{5})(\d)/,
            "$1-$2"
        );


    return numeros;
}