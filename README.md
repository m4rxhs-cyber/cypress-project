# Cypress Automation Framework

> Framework de Automação de Testes End-to-End utilizando **Cypress**, seguindo boas práticas de desenvolvimento, arquitetura escalável e integração contínua.

![Cypress](https://img.shields.io/badge/Cypress-Automation-17202C?logo=cypress)
![NodeJS](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-blue?logo=githubactions)
![License](https://img.shields.io/badge/License-MIT-green)

---

# 📑 Índice

- Sobre o Projeto
- Tecnologias
- Arquitetura
- Padrões Utilizados
- Estrutura do Projeto
- Instalação
- Execução dos Testes
- CI/CD
- Boas Práticas
- Roadmap
- Autor

---

# 🚀 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de servir como uma forma de estudo profissional de automação de testes E2E utilizando Cypress.

O framework foi estruturado para ser:

- Escalável
- Reutilizável
- Fácil manutenção
- Baixo acoplamento
- Alta legibilidade

Todo o projeto segue conceitos utilizados em empresas para automação de testes.

---

# 🛠 Tecnologias

- Cypress
- JavaScript
- Node.js
- GitHub Actions
- Page Object Model (POM)

---

# 🏗 Arquitetura

O framework foi desenvolvido utilizando uma arquitetura em camadas.

```
Tests
   │
   ▼
Pages (POM)
   │
   ▼
Commands
   │
   ▼
Fixtures
```

Cada camada possui uma responsabilidade específica.

### Testes

Contêm apenas os cenários.

### Pages

Contêm todas as interações com a interface.

### Commands

Centralizam comandos reutilizáveis do Cypress.

### Fixtures

Responsáveis pelos dados de teste.

---

# 📂 Estrutura do Projeto

```text
cypress/

│
├── e2e/
│     ├── login.cy.js
│     ├── cadastro.cy.js
│     └── ...
│
├── pages/
│     ├── LoginPage.js
│     ├── HomePage.js
│     └── ...
│
├── fixtures/
│     ├── usuarios.json
│     └── ...
│
├── support/
│     ├── commands.js
│     ├── e2e.js
│     └── ...
│
└── downloads/
```

---

# 📐 Padrões de Projeto

## ✅ Page Object Model (POM)

O projeto utiliza o padrão **Page Object Model**, separando a lógica da aplicação da implementação dos testes.

### Exemplo

```javascript
class LoginPage {

    preencherEmail(email){
        cy.get('#email').type(email)
    }

    preencherSenha(senha){
        cy.get('#password').type(senha)
    }

    clicarEntrar(){
        cy.get('button').click()
    }

}

export default new LoginPage();
```

No teste:

```javascript
LoginPage.preencherEmail(usuario.email)
LoginPage.preencherSenha(usuario.senha)
LoginPage.clicarEntrar()
```

### Benefícios

- Código reutilizável
- Fácil manutenção
- Menor duplicação
- Melhor organização

---

# ♻️ Boas Práticas Implementadas

- Page Object Model
- Separação entre dados e testes
- Reutilização de comandos
- Organização por responsabilidade
- Código limpo
- Testes independentes
- Fácil escalabilidade

---

# ⚙️ Instalação

Clone o projeto

```bash
git clone https://github.com/m4rxhs-cyber/cypress-project.git
```

Entre na pasta

```bash
cd cypress-project
```

Instale as dependências

```bash
npm install
```

---

# ▶️ Executando os Testes

### Abrir interface gráfica

```bash
npx cypress open
```

### Executar em modo Headless

```bash
npx cypress run
```

### Executar um teste específico

```bash
npx cypress run --spec cypress/e2e/login.cy.js
```

---

# 🔄 Integração Contínua (CI/CD)

Este projeto está preparado para integração contínua utilizando GitHub Actions.

Fluxo da pipeline:

```
Push

   ↓

Checkout

   ↓

Instala dependências

   ↓

Executa testes Cypress

   ↓

Publica resultados
```

Benefícios:

- Execução automática
- Validação em Pull Requests
- Feedback rápido
- Redução de regressões
- Padronização das execuções

---

# 📈 Escalabilidade

O framework foi estruturado para facilitar a inclusão de novos testes sem impactar os existentes.

Novos cenários exigem apenas:

- Nova Page (caso necessário)
- Novo arquivo de teste
- Reutilização dos comandos existentes

---

# 📌 Convenções Utilizadas

- Um Page para cada tela
- Um teste para cada funcionalidade
- Dados desacoplados dos testes
- Seletores centralizados
- Métodos pequenos e reutilizáveis

---

# 🎯 Objetivos do Framework

- Automatizar cenários críticos
- Garantir regressão
- Facilitar manutenção
- Servir como base para novos projetos
- Demonstrar boas práticas em automação

---

# 📚 Conceitos Aplicados

- End-to-End Testing
- Page Object Model
- Reutilização de código
- Clean Code
- DRY (Don't Repeat Yourself)
- Single Responsibility
- Organização em camadas

---

# 🚧 Roadmap

- [ ] Relatórios HTML
- [ ] Integração com Allure Report
- [ ] Execução paralela
- [ ] Testes de API
- [ ] Massa de dados dinâmica
- [ ] Integração com Docker
- [ ] Execução multiambiente

---

# 👨‍💻 Autor

**Neemias Sales**

QA Automation Engineer

GitHub:

https://github.com/m4rxhs-cyber

LinkedIn:

https://linkedin.com/in/neemias-sales

---

## ⭐ Se este projeto foi útil, deixe uma estrela no repositório!
