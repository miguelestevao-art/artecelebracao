# ADR-005 — Estratégia de Providers Globais

## Status

Aprovado

---

## Contexto

O ArteCelebração Hub possuirá estados compartilhados entre diversas funcionalidades da aplicação.

Exemplos:

- Usuário autenticado
- Tema da aplicação
- Notificações
- Configurações globais
- Permissões do usuário
- Contexto ministerial

Esses estados não pertencem a uma funcionalidade específica e precisam estar disponíveis para toda a aplicação.

---

## Decisão

Adotar uma camada de Providers Globais localizada em:

src/providers

Cada Provider será responsável exclusivamente por um contexto global da aplicação.

Exemplo:

src/providers/
├── AuthProvider.tsx
├── ThemeProvider.tsx
├── ToastProvider.tsx
└── ...

---

## Critérios

Um estado deve ser promovido para um Provider quando:

- for utilizado por múltiplas funcionalidades;
- representar um contexto global da aplicação;
- precisar permanecer sincronizado durante toda a sessão.

Caso contrário, o estado deverá permanecer dentro da própria Feature.

---

## Benefícios

- Separação de responsabilidades.
- Melhor organização arquitetural.
- Redução de duplicação de código.
- Escalabilidade.
- Facilidade para testes.
- Baixo acoplamento.

---

## Consequências

A aplicação passa a possuir uma camada explícita de gerenciamento de estados globais, enquanto as regras de negócio continuam organizadas por funcionalidades (Feature-First).

Essa estratégia complementa a ADR-001 (Arquitetura Baseada em Funcionalidades).
