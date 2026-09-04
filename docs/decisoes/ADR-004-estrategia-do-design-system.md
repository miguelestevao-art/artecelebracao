# ADR-004 — Estratégia do Design System

## Status

Aceita

---

## Contexto

O ArteCelebração Hub é uma plataforma de uso contínuo, destinada ao gerenciamento ministerial do ArteCelebração.

A interface será utilizada diariamente por administradores, líderes e integrantes, exigindo consistência visual, facilidade de uso, acessibilidade e rapidez no desenvolvimento de novas funcionalidades.

Era necessário definir uma estratégia para construção do Design System da aplicação.

---

## Decisão

O projeto adotará uma estratégia híbrida para o Design System.

Os componentes-base serão construídos utilizando o **shadcn/ui**, por oferecer componentes modernos, acessíveis e totalmente incorporados ao código-fonte do projeto.

Todos os componentes adicionados passarão a fazer parte do repositório do ArteCelebração Hub, podendo ser personalizados livremente conforme a identidade visual e as necessidades do domínio.

A identidade visual (cores, tipografia, espaçamentos, bordas e demais tokens) será definida pelo próprio projeto e centralizada na pasta `src/styles`.

---

## Motivação

A estratégia escolhida busca equilibrar:

- produtividade;
- qualidade da interface;
- liberdade de customização;
- baixo acoplamento com bibliotecas externas;
- facilidade de manutenção.

---

## Consequências

### Positivas

- Desenvolvimento mais rápido.
- Componentes acessíveis por padrão.
- Código sob domínio do projeto.
- Facilidade para personalização.
- Consistência visual em toda a aplicação.
- Redução de retrabalho na criação de componentes básicos.

### Negativas

- Necessidade de acompanhar atualizações do shadcn/ui quando desejado.
- Curva inicial de aprendizado da ferramenta.

---

## Alternativas consideradas

### Design System totalmente próprio

Foi descartado por demandar elevado esforço inicial na implementação de componentes básicos, atrasando a entrega das funcionalidades de negócio.

### Material UI

Foi descartado por gerar maior acoplamento com uma biblioteca externa e limitar a identidade visual da aplicação.

### Ant Design

Foi descartado por possuir identidade visual muito característica e distante da proposta do projeto.

### Chakra UI

Foi descartado por depender fortemente da biblioteca para composição dos componentes.

---

## Relação com outras ADRs

- ADR-001 — Arquitetura Baseada em Funcionalidades.
- ADR-002 — Padronização da Estrutura Base do Projeto.
- ADR-003 — Arquitetura em Camadas para Integrações Externas.

Esta decisão complementa as anteriores ao definir como será construída e mantida a camada de interface da aplicação.

---

## Data

Julho de 2026
