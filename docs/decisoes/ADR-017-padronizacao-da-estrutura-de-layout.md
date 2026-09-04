# ADR-017 — Padronização da Estrutura de Componentes de Layout

## Status

Aceito

---

## Contexto

Durante as primeiras etapas do desenvolvimento, alguns componentes de layout foram agrupados na pasta `AppShell` para acelerar a construção da infraestrutura inicial.

Com a evolução do projeto, essa organização passou a dificultar a separação de responsabilidades e a reutilização dos componentes.

---

## Decisão

Cada componente estrutural de layout será organizado em sua própria pasta, contendo:

- o componente principal (`*.tsx`);
- um arquivo `index.ts` para exportação.

A pasta `AppShell` passa a conter apenas o componente responsável por compor o layout da aplicação.

---

## Consequências

### Positivas

- Estrutura mais consistente.
- Componentes desacoplados.
- Melhor reutilização.
- Imports mais limpos.
- Facilidade para manutenção e evolução.

### Negativas

- Pequena refatoração inicial da estrutura de pastas.

---

## Observações

Este padrão deverá ser seguido por todos os novos componentes de layout criados no projeto.
