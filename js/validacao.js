// =========================================================
// INSTITUTO CF - CRIANÇA FELIZ
// MÓDULO DE VALIDAÇÃO
// =========================================================


// =========================================================
// 1. CRIAR OU LOCALIZAR MENSAGEM DE ERRO
// =========================================================

function obterMensagemErro(campo) {

    const container =
        campo.closest(".campo");


    if (!container) {
        return null;
    }


    let mensagemErro =
        container.querySelector(
            ".mensagem-erro"
        );


    // Se ainda não existir uma mensagem,
    // cria o elemento dinamicamente.
    if (!mensagemErro) {

        mensagemErro =
            document.createElement(
                "small"
            );


        mensagemErro.className =
            "mensagem-erro";


        mensagemErro.setAttribute(
            "role",
            "alert"
        );


        container.appendChild(
            mensagemErro
        );

    }


    return mensagemErro;
}


// =========================================================
// 2. DEFINIR A MENSAGEM DE ERRO
// =========================================================

function obterTextoErro(campo) {

    // Campo obrigatório vazio
    if (campo.validity.valueMissing) {

        return "Este campo é obrigatório.";

    }


    // E-mail inválido
    if (campo.validity.typeMismatch) {

        if (campo.type === "email") {

            return "Digite um e-mail válido.";

        }


        return "O valor informado não é válido.";

    }


    // Valor fora do formato definido no pattern
    if (campo.validity.patternMismatch) {

        if (campo.id === "cpf") {

            return "Digite os 11 números do CPF.";

        }


        if (campo.id === "telefone") {

            return "Digite o DDD e o número do telefone.";

        }


        if (campo.id === "cep") {

            return "Digite os 8 números do CEP.";

        }


        return "Formato inválido.";

    }


    // Valor menor que o permitido
    if (campo.validity.tooShort) {

        return "O valor informado é muito curto.";

    }


    // Valor maior que o permitido
    if (campo.validity.tooLong) {

        return "O valor informado é muito longo.";

    }


    // Valor numérico abaixo do mínimo
    if (campo.validity.rangeUnderflow) {

        return "O valor informado está abaixo do permitido.";

    }


    // Valor numérico acima do máximo
    if (campo.validity.rangeOverflow) {

        return "O valor informado está acima do permitido.";

    }


    // Fallback para qualquer outra falha
    return "Verifique este campo.";
}


// =========================================================
// 3. LIMPAR A VALIDAÇÃO VISUAL
// =========================================================

export function limparValidacaoCampo(campo) {

    campo.classList.remove(
        "campo-valido",
        "campo-invalido"
    );


    const container =
        campo.closest(".campo");


    if (!container) {
        return;
    }


    const mensagemErro =
        container.querySelector(
            ".mensagem-erro"
        );


    if (mensagemErro) {

        mensagemErro.textContent = "";

    }
}


// =========================================================
// 4. MARCAR CAMPO COMO INVÁLIDO
// =========================================================

export function marcarCampoInvalido(
    campo,
    mensagemPersonalizada = ""
) {

    if (!campo) {
        return false;
    }


    const mensagemErro =
        obterMensagemErro(campo);


    campo.classList.remove(
        "campo-valido"
    );


    campo.classList.add(
        "campo-invalido"
    );


    if (mensagemErro) {

        mensagemErro.textContent =
            mensagemPersonalizada ||
            obterTextoErro(campo);

    }


    return false;
}


// =========================================================
// 5. MARCAR CAMPO COMO VÁLIDO
// =========================================================

export function marcarCampoValido(campo) {

    if (!campo) {
        return false;
    }


    const mensagemErro =
        obterMensagemErro(campo);


    campo.classList.remove(
        "campo-invalido"
    );


    campo.classList.add(
        "campo-valido"
    );


    if (mensagemErro) {

        mensagemErro.textContent = "";

    }


    return true;
}


// =========================================================
// 6. VALIDAR UM CAMPO
// =========================================================

export function validarCampo(campo) {

    if (!campo) {
        return false;
    }


    // checkValidity() utiliza as regras
    // nativas do HTML:
    //
    // required
    // type="email"
    // pattern
    // minlength
    // maxlength
    // min
    // max
    //
    // entre outras.

    if (campo.checkValidity()) {

        return marcarCampoValido(
            campo
        );

    }


    return marcarCampoInvalido(
        campo
    );
}


// =========================================================
// 7. VALIDAR TODOS OS CAMPOS DO FORMULÁRIO
// =========================================================

export function validarFormulario(
    formulario
) {

    if (!formulario) {
        return false;
    }


    const campos =
        formulario.querySelectorAll(
            "input, select, textarea"
        );


    let formularioValido =
        true;


    campos.forEach(
        (campo) => {

            if (!validarCampo(campo)) {

                formularioValido =
                    false;

            }

        }
    );


    return formularioValido;
}


// =========================================================
// 8. LIMPAR VALIDAÇÕES DO FORMULÁRIO
// =========================================================

export function limparValidacoesFormulario(
    formulario
) {

    if (!formulario) {
        return;
    }


    const campos =
        formulario.querySelectorAll(
            "input, select, textarea"
        );


    campos.forEach(
        (campo) => {

            limparValidacaoCampo(
                campo
            );

        }
    );
}