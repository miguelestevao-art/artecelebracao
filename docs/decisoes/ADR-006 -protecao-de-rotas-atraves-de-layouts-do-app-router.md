# ADR-006 — Proteção de Rotas através de Layouts do App Router

## Status

Aprovado

---

## Contexto

Durante a implementação da autenticação do ArteCelebração Hub, foi considerada a criação de um componente genérico (`ProtectedRoute`) para controlar o acesso às páginas autenticadas.

Entretanto, durante a evolução da arquitetura observou-se que o Next.js App Router oferece uma abordagem mais simples, organizada e nativa através dos Route Groups e Layouts.

Também foi identificado que a estrutura da aplicação já possuía os grupos:

```text
src/app/
├── (auth)
└── (dashboard)
```

A tentativa de criar um novo grupo `(protected)` gerou conflito de rotas, pois múltiplos Route Groups podem produzir o mesmo caminho de URL.

Essa situação reforçou a necessidade de adotar uma estratégia única para as áreas protegidas.

---

## Decisão

A área autenticada da aplicação será representada pelo Route Group:

```text
src/app/(dashboard)
```

Todas as páginas que exigirem autenticação deverão estar dentro desse grupo.

A proteção das rotas será realizada pelo arquivo:

```text
src/app/(dashboard)/layout.tsx
```

Esse layout será responsável por:

- verificar se existe um usuário autenticado;
- redirecionar usuários não autenticados para `/login`;
- renderizar a estrutura padrão da aplicação (AppShell);
- disponibilizar Header e Sidebar para todas as páginas internas.

---

## Estrutura adotada

```text
src/app
│
├── (auth)
│   ├── login
│   ├── recuperar-senha
│   └── ...
│
└── (dashboard)
    ├── layout.tsx
    ├── dashboard
    ├── programacoes
    ├── biblioteca
    ├── equipe
    ├── contextos
    └── ...
```

---

## Benefícios

- Aproveita recursos nativos do App Router.
- Elimina duplicação de código.
- Centraliza a proteção das rotas.
- Mantém todas as páginas autenticadas sob uma única estrutura.
- Facilita futuras expansões da área administrativa.
- Reduz a complexidade da aplicação.

---

## Consequências

O projeto deixa de utilizar componentes do tipo `ProtectedRoute`.

Toda proteção de acesso passa a ocorrer exclusivamente através dos Layouts do App Router.

Essa decisão simplifica a arquitetura e torna o código mais aderente às boas práticas do ecossistema Next.js.

---

## Relação com outras ADRs

Esta decisão complementa:

- ADR-001 — Arquitetura Baseada em Funcionalidades.
- ADR-005 — Estratégia de Providers Globais.

Juntas, essas decisões estabelecem a arquitetura base do ArteCelebração Hub.
