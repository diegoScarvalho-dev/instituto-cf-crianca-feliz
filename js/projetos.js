// =========================================================
// INSTITUTO CF - CRIANÇA FELIZ
// MÓDULO DE PROJETOS
// =========================================================


// =========================================================
// 1. DADOS DOS PROJETOS
// =========================================================

export const dadosProjetos = [

    {
        titulo: "Projeto Educação",
        categoria: "Educação",
        classeBadge: "badge-educacao",

        descricao:
            "Ações educacionais destinadas ao desenvolvimento " +
            "de crianças e jovens, promovendo oportunidades " +
            "de aprendizagem e inclusão social."
    },

    {
        titulo: "Projeto Alimentação",
        categoria: "Alimentação",
        classeBadge: "badge-alimentacao",

        descricao:
            "Campanhas de arrecadação e distribuição de " +
            "alimentos para crianças e famílias atendidas " +
            "pelo Instituto CF."
    },

    {
        titulo: "Seja um voluntário",
        categoria: "Voluntariado",
        classeBadge: "badge-voluntariado",

        descricao:
            "Participe das ações sociais realizadas pelo " +
            "Instituto CF e contribua com nossos projetos."
    }

];


// =========================================================
// 2. TEMPLATE DINÂMICO DOS PROJETOS
// =========================================================

export function criarCardsProjetos() {

    return dadosProjetos
        .map((projeto) => {

            return `

                <article class="card">

                    <div class="card-conteudo">

                        <span class="badge ${projeto.classeBadge}">
                            ${projeto.categoria}
                        </span>

                        <h3>
                            ${projeto.titulo}
                        </h3>

                        <p>
                            ${projeto.descricao}
                        </p>

                        ${
                            projeto.categoria === "Voluntariado"

                                ? `
                                    <button
                                        type="button"
                                        data-abrir-cadastro>
                                        Quero ser voluntário
                                    </button>
                                  `

                                : ""
                        }

                    </div>

                </article>

            `;

        })
        .join("");
}