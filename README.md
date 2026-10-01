# Instituto CF - Criança Feliz

Projeto acadêmico desenvolvido como atividade prática da graduação em **Engenharia de Software**, com o objetivo de aplicar conceitos de desenvolvimento Front-end utilizando **HTML5, CSS3 e JavaScript**.

O projeto simula o site institucional de uma ONG fictícia chamada **Instituto CF - Criança Feliz**, voltada para ações sociais relacionadas à educação, alimentação, voluntariado e apoio à comunidade.

Durante a evolução do projeto foram implementados recursos como **Single Page Application (SPA), ES6 Modules, manipulação do DOM, validação de formulários, máscaras de campos, localStorage, integração com a API ViaCEP, acessibilidade, otimização de performance, build com Vite, versionamento com Git/GitHub e deploy em produção**.

---

## 🎯 Objetivo da atividade

A atividade teve como objetivo aplicar, de forma prática, conceitos relacionados ao desenvolvimento de aplicações web, incluindo:

- Estrutura semântica com HTML5;
- Estilização com CSS3;
- Layout responsivo;
- Manipulação do DOM com JavaScript;
- Navegação dinâmica;
- Single Page Application (SPA);
- Modularização com ES6 Modules;
- `import` e `export`;
- Eventos com `addEventListener`;
- Formulários HTML;
- Validação de campos;
- Máscaras para CPF, telefone e CEP;
- Persistência com `localStorage`;
- Manipulação de JSON;
- Consumo de API externa;
- `async/await`;
- Fetch API;
- Tratamento de erros;
- History API;
- Acessibilidade;
- Otimização de imagens;
- Build de produção;
- Git e GitHub;
- GitFlow;
- Deploy em ambiente de produção.

---

## 🌐 Projeto publicado

O projeto possui uma versão publicada em produção utilizando a **Vercel**.

**Produção:**

https://instituto-cf-crianca-feliz.vercel.app/

**Versão:** `v1.0.0`

---

## 🖥️ Páginas desenvolvidas

### `index.html`

Página inicial do **Instituto CF - Criança Feliz**.

Apresenta informações institucionais e funciona como ponto principal da aplicação.

A página também utiliza uma estrutura de **SPA (Single Page Application)**, permitindo navegar entre determinadas áreas do sistema sem recarregar completamente o documento HTML.

### `projetos.html`

Apresenta os projetos e ações sociais desenvolvidos pelo Instituto CF, incluindo iniciativas relacionadas a:

- Educação;
- Alimentação;
- Voluntariado.

Os cards também podem ser gerados dinamicamente pelo JavaScript.

### `cadastro.html`

Página destinada ao cadastro de pessoas interessadas em participar das ações do Instituto.

O formulário trabalha com informações como:

- Nome;
- E-mail;
- Data de nascimento;
- CPF;
- Telefone;
- CEP;
- Endereço;
- Número;
- Bairro;
- Complemento;
- Cidade;
- Estado.

---

## ⚙️ JavaScript

O JavaScript foi dividido em diferentes módulos utilizando **ES6 Modules**.

A aplicação utiliza:

```javascript
import
```

e:

```javascript
export
```

Isso permite separar responsabilidades e manter cada módulo responsável por uma parte específica do sistema.

O ponto principal da aplicação é:

```text
js/script.js
```

---

## 🧩 Modularização

### `script.js`

Integra os módulos e controla funcionalidades gerais da aplicação, incluindo:

- Inicialização;
- Formulários;
- Menu responsivo;
- Modal;
- Toast;
- Histórico visual dos cadastros;
- Integração entre módulos.

### `mascaras.js`

Responsável pela formatação automática de:

- CPF;
- Telefone;
- CEP.

Exemplos:

```text
CPF:      123.456.789-01
Telefone: (11) 99999-9999
CEP:      00000-000
```

### `validacao.js`

Centraliza as regras de validação.

Utiliza recursos da **Constraint Validation API**, como:

```javascript
checkValidity()
validity.valueMissing
validity.typeMismatch
validity.patternMismatch
```

Também controla mensagens e estados visuais dos campos.

### `storage.js`

Responsável pela persistência dos cadastros utilizando:

```javascript
localStorage
```

Entre as operações utilizadas estão:

```javascript
localStorage.setItem()
localStorage.getItem()
localStorage.removeItem()
JSON.stringify()
JSON.parse()
```

Os dados permanecem armazenados no navegador após a atualização da página.

> O `localStorage` é utilizado neste projeto para fins educacionais. Em aplicações reais, dados pessoais exigem mecanismos adequados de segurança, privacidade e armazenamento.

### `viacep.js`

Responsável pela integração com a API pública **ViaCEP**.

Ao informar um CEP válido, a aplicação pode preencher automaticamente:

- Logradouro;
- Bairro;
- Cidade;
- Estado.

A integração utiliza:

```javascript
fetch()
async
await
try
catch
finally
```

Também existe tratamento para CEP inexistente, indisponibilidade da API e preenchimento manual.

### `projetos.js`

Centraliza os dados relacionados aos projetos sociais e permite sua utilização dinâmica pela aplicação.

### `spa.js`

Responsável pelo funcionamento da **Single Page Application**.

Controla:

- Rotas internas;
- Alteração dinâmica do conteúdo;
- Navegação;
- `history.pushState()`;
- Evento `popstate`;
- Botões Voltar e Avançar;
- Integração entre as páginas e a navegação dinâmica.

---

## 🔄 Funcionamento da SPA

Fluxo simplificado:

```text
Usuário seleciona uma opção
        ↓
JavaScript identifica a rota
        ↓
SPA altera o conteúdo
        ↓
DOM é atualizado
        ↓
History API atualiza a navegação
```

A implementação utiliza rotas internas e mantém integração com as páginas HTML tradicionais.

---

## 💾 Persistência com localStorage

Fluxo de armazenamento:

```text
Objeto / Array JavaScript
        ↓
JSON.stringify()
        ↓
String JSON
        ↓
localStorage
```

Na recuperação:

```text
localStorage
        ↓
JSON.parse()
        ↓
Objeto / Array JavaScript
        ↓
Interface
```

Os registros podem ser recuperados e removidos pela interface.

---

## 🌐 Integração com ViaCEP

Fluxo:

```text
CEP
 ↓
JavaScript
 ↓
fetch()
 ↓
ViaCEP
 ↓
JSON
 ↓
Endereço preenchido automaticamente
```

Número e complemento continuam sendo informados manualmente.

---

## ✅ Validação de formulários

O formulário combina recursos do HTML5 com validações JavaScript.

Entre os recursos utilizados:

- `required`;
- `pattern`;
- `type="email"`;
- `type="date"`;
- `type="tel"`;
- `maxlength`;
- `inputmode`;
- `checkValidity()`.

Também são utilizadas máscaras para CPF, telefone e CEP e mensagens de validação apresentadas dinamicamente.

---

## ♿ Acessibilidade

O projeto recebeu uma etapa específica de melhorias de acessibilidade, considerando critérios trabalhados da **WCAG 2.1**.

Entre os recursos implementados estão:

- HTML semântico;
- `<header>`;
- `<nav>`;
- `<main>`;
- `<section>`;
- `<article>`;
- `<footer>`;
- `<fieldset>`;
- `<legend>`;
- `<label>`;
- textos alternativos em imagens;
- labels associados aos campos;
- `aria-label`;
- `aria-expanded`;
- `aria-pressed`;
- regiões de status;
- skip link;
- navegação por teclado;
- estados `:focus-visible`;
- controle de foco em modal;
- fechamento do modal com `Esc`;
- focus trap;
- retorno do foco após fechar o modal;
- modo de alto contraste;
- persistência da preferência de contraste;
- suporte a `prefers-reduced-motion`.

Essas melhorias foram implementadas visando tornar a interface mais acessível e facilitar a utilização por teclado e tecnologias assistivas.

---

## 📱 Responsividade

A interface foi desenvolvida para diferentes tamanhos de tela utilizando:

- Flexbox;
- CSS Grid;
- Media Queries;
- Menu responsivo;
- Layout adaptável;
- Imagens responsivas.

---

## ⚡ Otimização de performance

Foi realizada uma etapa específica de otimização dos recursos da aplicação.

### Imagens

As principais imagens foram convertidas de **PNG para WebP** utilizando a biblioteca **Sharp**.

O script responsável pela otimização está em:

```text
scripts/otimizar-imagens.js
```

Para executá-lo:

```bash
npm run otimizar-imagens
```

As imagens de conteúdo originalmente possuíam aproximadamente **6,38 MB** e passaram para aproximadamente **350 KB**, representando uma redução aproximada de **94,5%**.

Também foi criada uma versão otimizada da logo para utilização na interface.

### CSS e JavaScript

Antes do build:

```text
CSS:              32,51 KB
JavaScript:       67,46 KB
Total:            99,97 KB
```

Após o build de produção:

```text
CSS:              15,24 KB
JavaScript:       22,13 KB
Total:            37,37 KB
```

Redução aproximada:

```text
62,6%
```

Com compressão gzip, os principais arquivos CSS e JavaScript totalizam aproximadamente:

```text
8,84 KB
```

---

## 📦 Vite e build de produção

O projeto utiliza **Vite** para desenvolvimento, build e preparação dos arquivos para produção.

### Desenvolvimento

```bash
npm run dev
```

### Gerar build

```bash
npm run build
```

O resultado é gerado em:

```text
dist/
```

### Testar a versão de produção localmente

```bash
npm run preview
```

O arquivo `vite.config.js` configura as três páginas HTML como entradas do build:

- `index.html`;
- `projetos.html`;
- `cadastro.html`.

---

## 🚀 Deploy

O deploy de produção foi realizado utilizando a **Vercel**, integrada ao repositório GitHub.

Configuração utilizada:

```text
Production Branch: main
Build Command: npm run build
Output Directory: dist
```

O fluxo de publicação é:

```text
GitHub
   ↓
main
   ↓
Vercel
   ↓
npm install
   ↓
npm run build
   ↓
dist/
   ↓
Produção
```

Site publicado:

https://instituto-cf-crianca-feliz.vercel.app/

---

## 🌿 Versionamento e GitFlow

O desenvolvimento foi versionado utilizando **Git e GitHub**.

Fluxo utilizado:

```text
feature/*
    ↓
develop
    ↓
release/*
    ↓
main
    ↓
tag
```

Branches utilizadas durante o desenvolvimento incluíram:

```text
feature/acessibilidade-wcag
feature/otimizacao-performance
release/1.0.0
develop
main
```

As funcionalidades foram integradas utilizando **Pull Requests**.

A primeira versão de produção foi marcada com:

```text
v1.0.0
```

Fluxo simplificado:

```text
feature/acessibilidade-wcag ──────┐
                                  ├── develop
feature/otimizacao-performance ───┘
                                      ↓
                               release/1.0.0
                                      ↓
                                    main
                                      ↓
                                   v1.0.0
                                      ↓
                                    Vercel
```

---

## 🛠️ Tecnologias utilizadas

- HTML5;
- CSS3;
- JavaScript;
- ES6 Modules;
- DOM API;
- Constraint Validation API;
- Fetch API;
- History API;
- Web Storage API (`localStorage`);
- JSON;
- ViaCEP;
- Vite;
- Sharp;
- Node.js / npm;
- Git;
- GitHub;
- Vercel;
- Visual Studio Code.

---

## 📁 Estrutura do projeto

```text
projeto-ong/
│
├── img/
│   ├── imagens PNG
│   └── imagens WebP otimizadas
│
├── js/
│   ├── mascaras.js
│   ├── projetos.js
│   ├── script.js
│   ├── spa.js
│   ├── storage.js
│   ├── validacao.js
│   └── viacep.js
│
├── scripts/
│   └── otimizar-imagens.js
│
├── cadastro.html
├── index.html
├── projetos.html
├── style.css
├── vite.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

As pastas abaixo são geradas localmente e não precisam ser versionadas:

```text
node_modules/
dist/
```

---

## ▶️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/diegoScarvalho-dev/instituto-cf-crianca-feliz.git
```

### 2. Entre na pasta

```bash
cd instituto-cf-crianca-feliz
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o ambiente de desenvolvimento

```bash
npm run dev
```

### 5. Abra o endereço apresentado pelo Vite

Normalmente:

```text
http://localhost:5173/
```

---

## 🧪 Funcionalidades implementadas

- Navegação SPA;
- History API;
- Páginas institucionais;
- Formulário de cadastro;
- Validação em tempo real;
- Máscara de CPF;
- Máscara de telefone;
- Máscara de CEP;
- Consulta automática de endereço pelo ViaCEP;
- Persistência com localStorage;
- Recuperação de cadastros;
- Exclusão de cadastros;
- Feedback visual;
- Modal;
- Toast;
- Menu responsivo;
- JavaScript modular;
- Navegação por teclado;
- Modo de alto contraste;
- Otimização de imagens;
- Build de produção;
- Deploy público.

---

## 📚 Contexto acadêmico

Este projeto foi desenvolvido para fins educacionais como parte de uma atividade da graduação em **Engenharia de Software**.

A proposta permitiu aplicar conhecimentos teóricos em uma aplicação funcional, evoluindo desde HTML, CSS e JavaScript até conceitos de modularização, SPA, consumo de APIs, armazenamento local, acessibilidade, performance, versionamento e publicação de uma aplicação web.

O desenvolvimento também permitiu trabalhar conceitos relacionados ao ciclo de desenvolvimento de software:

```text
Desenvolvimento
      ↓
Versionamento
      ↓
Feature
      ↓
Integração
      ↓
Testes
      ↓
Release
      ↓
Produção
```

O **Instituto CF - Criança Feliz é uma organização fictícia**, criada exclusivamente para o desenvolvimento desta atividade acadêmica.

---

## 👨‍💻 Autor

**Diego Carvalho**

Projeto acadêmico - Engenharia de Software

**Versão:** `v1.0.0`

**Produção:**  
https://instituto-cf-crianca-feliz.vercel.app/