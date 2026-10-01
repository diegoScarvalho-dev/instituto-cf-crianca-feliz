const sharp = require("sharp");
const path = require("path");

const pastaImagens = path.join(__dirname, "..", "img");

const imagens = [
    {
        entrada: "Alimentação_CF.png",
        saida: "Alimentação_CF.webp",
        largura: 1200,
        qualidade: 82
    },
    {
        entrada: "Educação_CF.png",
        saida: "Educação_CF.webp",
        largura: 1200,
        qualidade: 82
    },
    {
        entrada: "Projeto_CF.png",
        saida: "Projeto_CF.webp",
        largura: 1200,
        qualidade: 82
    },
    {
        entrada: "Logo_CF.png",
        saida: "Logo_CF.webp",
        largura: 160,
        qualidade: 90
    }
];

async function otimizarImagens() {
    console.log("Iniciando otimização das imagens...\n");

    for (const imagem of imagens) {
        const caminhoEntrada = path.join(pastaImagens, imagem.entrada);
        const caminhoSaida = path.join(pastaImagens, imagem.saida);

        try {
            await sharp(caminhoEntrada)
                .resize({
                    width: imagem.largura,
                    withoutEnlargement: true
                })
                .webp({
                    quality: imagem.qualidade
                })
                .toFile(caminhoSaida);

            console.log(
                `✓ ${imagem.entrada} → ${imagem.saida} | largura: ${imagem.largura}px`
            );
        } catch (erro) {
            console.error(`✗ Erro ao otimizar ${imagem.entrada}:`);
            console.error(erro.message);
        }
    }

    console.log("\nOtimização concluída.");
}

otimizarImagens();