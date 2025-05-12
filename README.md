# Pokémon API

Esta é uma API construída com [NestJS](https://nestjs.com/) utilizando princípios de **Clean Architecture**. Seu objetivo é buscar habilidades de um Pokémon com base no nome, integrando com serviços externos e organizando o código de forma modular, testável e escalável.

## 🧱 Arquitetura

O projeto segue a Clean Architecture com separação clara de responsabilidades:

```
src/
├── core/                    # Camada central da aplicação (configuracoes gerais e base para o projeto)
│   ├── application/
│   ├── config/
│   ├── entities/
│   ├── errors/
│   └── either.ts
├── domain/                  # Regras de negócio da aplicação
│   └── pokemon/
│       ├── entities/
│       ├── repositories/
│       └── use-cases/
├── infra/                   # Implementações que lidam com a comunicao "externa" da aplicacao, pontos de entrada saida consultas ..
│   ├── http/
│   │   ├── controllers/
│   │   └── presenters/
│   └── repositories/
├── test/                    # Módulos de testes e fakes
│   └── repositories/
├── main.ts                  # Ponto de entrada da aplicação
└── app.module.ts            # Módulo principal
```

## 🚀 Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/Gabriel-Gondo/pokemon-api.git
cd pokemon-api
```

2. Instale as dependências:

```bash
pnpm i
```

3. Inicie o projeto em modo desenvolvimento:

```bash
pnpm start:dev
```

A API estará acessível por padrão em `http://localhost:3000`.

## 🧪 Testes

Este projeto utiliza o **Vitest** como framework de testes.

- Executar testes unitários:

  ```bash
  pnpm test
  ```

- Executar testes com cobertura:

  ```bash
  pnpm test:coverage
  ```

- Executar testes end-to-end:
  ```bash
  pnpm test:e2e
  ```

## 📦 Scripts

| Comando         | Descrição                                             |
| --------------- | ----------------------------------------------------- |
| `start`         | Inicia a aplicação                                    |
| `start:dev`     | Inicia a aplicação em modo desenvolvimento com watch  |
| `start:debug`   | Inicia a aplicação em modo debug                      |
| `start:prod`    | Inicia a aplicação a partir dos arquivos transpilados |
| `build`         | Compila o projeto                                     |
| `format`        | Formata o código com Prettier                         |
| `lint`          | Lint do código com ESLint                             |
| `test`          | Executa os testes unitários com Vitest                |
| `test:watch`    | Executa os testes em watch mode                       |
| `test:coverage` | Gera o relatório de cobertura dos testes              |
| `test:e2e`      | Executa testes end-to-end                             |
