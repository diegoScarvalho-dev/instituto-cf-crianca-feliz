# 👧🧒 Instituto CF – Criança Feliz

Projeto acadêmico desenvolvido como atividade prática da graduação em **Engenharia de Software**, com o objetivo de aplicar conceitos de desenvolvimento Front-end utilizando **HTML5, CSS3 e JavaScript**.

O projeto simula o site institucional de uma ONG fictícia chamada **Instituto CF – Criança Feliz**, voltada para ações sociais relacionadas à educação, alimentação, voluntariado e apoio à comunidade.

Durante a evolução do projeto foram implementados recursos como **Single Page Application (SPA), ES6 Modules, manipulação do DOM, validação de formulários, máscaras de campos, armazenamento com localStorage e integração com a API ViaCEP**.

---

## 🎯 Objetivo da atividade

A atividade teve como objetivo aplicar, de forma prática, conceitos relacionados ao desenvolvimento de aplicações web, incluindo:

- Estrutura semântica com HTML5;
- Estilização com CSS3;
- Layout responsivo;
- Manipulação do DOM com JavaScript;
- Navegação dinâmica;
- Single Page Application (SPA);
- Modularização do JavaScript com ES6 Modules;
- Uso de `import` e `export`;
- Eventos com `addEventListener`;
- Formulários HTML;
- Validação de campos;
- Máscaras para CPF, telefone e CEP;
- Persistência de dados com `localStorage`;
- Manipulação de JSON;
- Consumo de API externa;
- Programação assíncrona com `async/await`;
- Requisições utilizando `fetch`;
- Tratamento de erros com `try/catch/finally`;
- Histórico de navegação com `History API`;
- Acessibilidade;
- Organização de arquivos e responsabilidades;
- Versionamento utilizando Git e GitHub.

---

## 🖥️ Páginas desenvolvidas

### `index.html`

Página inicial do **Instituto CF – Criança Feliz**.

Apresenta informações institucionais e funciona como ponto principal da aplicação.

A página também utiliza uma estrutura de **SPA (Single Page Application)**, permitindo navegar entre determinadas áreas do sistema sem recarregar completamente o documento HTML.

### `projetos.html`

Apresenta os projetos e ações sociais desenvolvidos pelo Instituto CF, incluindo iniciativas relacionadas a:

- Educação;
- Alimentação;
- Voluntariado.

Os cards dos projetos também podem ser gerados dinamicamente através do JavaScript.

### `cadastro.html`

Página destinada ao cadastro de pessoas interessadas em participar das ações do Instituto.

O formulário possui informações pessoais e de endereço, incluindo:

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

## ⚡ JavaScript

O JavaScript da aplicação foi dividido em diferentes módulos utilizando **ES6 Modules**.

A aplicação utiliza:

```javascript
import
```

e:

```javascript
export
```

para permitir a comunicação entre arquivos mantendo cada módulo responsável por uma parte específica do sistema.

O arquivo principal é:

```text
js/script.js
```

Ele realiza a integração dos demais módulos e inicializa os principais recursos da aplicação.

---

## 🧩 Modularização

O JavaScript foi dividido nos seguintes módulos:

### `script.js`

Arquivo principal da aplicação.

Responsável por integrar os demais módulos e controlar funcionalidades gerais, como:

- Inicialização da aplicação;
- Configuração do formulário;
- Menu responsivo;
- Modal;
- Toast;
- Histórico visual dos cadastros;
- Integração entre os módulos.

### `mascaras.js`

Responsável pela formatação automática dos campos:

- CPF;
- Telefone;
- CEP.

Exemplo:

```text
CPF:      123.456.789-01
Telefone: (11) 99999-9999
CEP:      00000-000
```

### `validacao.js`

Centraliza as regras de validação dos campos.

Utiliza recursos da **Constraint Validation API** do navegador, como:

- `checkValidity()`;
- `validity.valueMissing`;
- `validity.typeMismatch`;
- `validity.patternMismatch`.

Também controla mensagens e classes visuais de campos válidos e inválidos.

### `storage.js`

Responsável pela persistência dos cadastros utilizando:

```javascript
localStorage
```

São utilizadas operações como:

```javascript
localStorage.setItem()
localStorage.getItem()
localStorage.removeItem()
JSON.stringify()
JSON.parse()
```

Dessa forma, os cadastros permanecem armazenados no navegador mesmo após atualizar ou fechar a página.

> O uso de `localStorage` neste projeto possui finalidade educacional. Em uma aplicação real, dados pessoais devem ser tratados com mecanismos apropriados de segurança, privacidade e armazenamento.

### `viacep.js`

Responsável pela integração com a API pública **ViaCEP**.

Ao informar um CEP válido, a aplicação pode preencher automaticamente informações como:

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

Também existe tratamento para CEP inexistente, indisponibilidade da API e preenchimento manual em caso de falha.

### `projetos.js`

Contém os dados dos projetos sociais e a função responsável pela geração dinâmica dos cards.

Isso permite separar os dados dos projetos da lógica principal da aplicação.

### `spa.js`

Responsável pelo funcionamento da **Single Page Application**.

Controla:

- Rotas internas;
- Alteração dinâmica do conteúdo;
- Navegação entre Início, Projetos e Cadastro;
- `history.pushState()`;
- Evento `popstate`;
- Botões Voltar e Avançar do navegador;
- Integração com os cards de projetos.

---

## 🔄 Funcionamento da SPA

Na página principal, a navegação pode ocorrer sem o recarregamento completo da página.

O fluxo básico é:

```text
Usuário seleciona uma opção
          ↓
JavaScript identifica a rota
          ↓
SPA altera o conteúdo
          ↓
DOM é atualizado
          ↓
History API atualiza a URL
```

São utilizadas rotas como:

```text
#inicio
#projetos
#cadastro
```

---

## 💾 Persistência com localStorage

Os dados cadastrados pelo usuário são transformados em JSON antes de serem armazenados.

Fluxo de salvamento:

```text
Objeto / Array JavaScript
          ↓
JSON.stringify()
          ↓
String JSON
          ↓
localStorage
```

Na recuperação ocorre o processo inverso:

```text
localStorage
      ↓
JSON.parse()
      ↓
Objeto / Array JavaScript
      ↓
Interface
```

Os cadastros salvos podem ser novamente apresentados na interface e também removidos pelo usuário.

---

## 🌐 Integração com ViaCEP

O projeto utiliza uma API externa para facilitar o preenchimento do endereço.

Quando o usuário informa os oito números do CEP:

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

O número e o complemento continuam sendo preenchidos manualmente pelo usuário.

---

## ✅ Validação de formulários

O formulário combina recursos nativos do HTML5 com validações realizadas em JavaScript.

Entre os recursos utilizados estão:

- `required`;
- `pattern`;
- `type="email"`;
- `type="date"`;
- `type="tel"`;
- `maxlength`;
- `inputmode`;
- `checkValidity()`.

Foram aplicadas máscaras e validações específicas para CPF, telefone e CEP.

Mensagens de erro também são exibidas dinamicamente na interface.

---

## ♿ Acessibilidade e HTML semântico

Durante o desenvolvimento foram utilizadas tags semânticas como:

- `<header>`;
- `<nav>`;
- `<main>`;
- `<section>`;
- `<article>`;
- `<footer>`;
- `<fieldset>`;
- `<legend>`;
- `<label>`.

Também foram utilizados recursos como:

- Atributos `alt` em imagens;
- Labels associados aos campos;
- `aria-label`;
- `aria-expanded`;
- `role="alert"`;
- `role="status"`.

Esses recursos contribuem para uma interface mais organizada e acessível.

---

## 📱 Responsividade

A interface foi desenvolvida para se adaptar a diferentes tamanhos de tela.

O CSS utiliza recursos como:

- Flexbox;
- Grid;
- Media Queries;
- Menu responsivo;
- Organização adaptável dos conteúdos e formulários.

---

## 🎨 Tecnologias utilizadas

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
- Git;
- GitHub;
- Visual Studio Code;
- Live Server.

---

## 📁 Estrutura do projeto

```text
projeto-ong/
│
├── img/
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
├── cadastro.html
├── index.html
├── projetos.html
├── README.md
└── style.css
```

A modularização permite separar as responsabilidades da aplicação e facilita a manutenção e evolução do código.

---

## ▶️ Como executar o projeto

1. Clone ou baixe este repositório.
2. Abra a pasta do projeto no **Visual Studio Code**.
3. Utilize a extensão **Live Server**.
4. Abra o arquivo `index.html`.
5. Selecione **Open with Live Server**.

O uso de um servidor local é recomendado porque o projeto utiliza **ES6 Modules**.

---

## 🧪 Funcionalidades implementadas

- Navegação SPA;
- Navegação utilizando History API;
- Página de projetos;
- Formulário de cadastro;
- Validação em tempo real;
- Máscara de CPF;
- Máscara de telefone;
- Máscara de CEP;
- Consulta automática de endereço pelo ViaCEP;
- Armazenamento de cadastros no navegador;
- Recuperação dos cadastros salvos;
- Exclusão de cadastros;
- Feedback visual de validação;
- Modal;
- Toast;
- Menu responsivo;
- Estrutura JavaScript modular.

---

## 📚 Contexto acadêmico

Este projeto foi desenvolvido para fins educacionais como parte de uma atividade da graduação em **Engenharia de Software**.

A proposta permitiu aplicar conhecimentos teóricos em uma aplicação funcional, passando da estruturação com HTML e CSS para conceitos de JavaScript como manipulação do DOM, eventos, validação, armazenamento local, consumo de APIs, programação assíncrona, SPA e modularização com ES6 Modules.

O desenvolvimento também permitiu trabalhar conceitos de organização e manutenção de código, separando diferentes responsabilidades da aplicação em módulos especializados.

O **Instituto CF – Criança Feliz é uma organização fictícia**, criada exclusivamente para o desenvolvimento desta atividade acadêmica.

---

**Desenvolvido por Diego Carvalho**  
Projeto acadêmico – Engenharia de Software