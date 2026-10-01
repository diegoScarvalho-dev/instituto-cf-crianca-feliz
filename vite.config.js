const { defineConfig } = require("vite");
const { resolve } = require("path");

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                projetos: resolve(__dirname, "projetos.html"),
                cadastro: resolve(__dirname, "cadastro.html")
            }
        }
    }
});