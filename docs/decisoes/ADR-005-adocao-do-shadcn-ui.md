# ADR-005 — Adoção do shadcn/ui

## Status

Aceita

---

## Contexto

O ArteCelebração Hub necessita de um Design System moderno, consistente, acessível e de fácil manutenção.

Após análise das alternativas disponíveis, optou-se por utilizar o shadcn/ui como base para os componentes reutilizáveis da interface.

---

## Decisão

O projeto adotará o shadcn/ui para geração dos componentes-base da interface.

Os componentes gerados passarão a fazer parte do código-fonte do projeto, permitindo customizações sem dependência direta de uma biblioteca de componentes.

Os componentes serão armazenados em:

src/components/ui

Componentes específicos do domínio permanecerão organizados em suas respectivas Features ou em `components/shared`.

---

## Motivação

A escolha foi motivada pelos seguintes fatores:

- excelente integração com Next.js;
- compatibilidade com Tailwind CSS v4;
- código sob controle do projeto;
- componentes acessíveis;
- alta capacidade de personalização;
- grande adoção pela comunidade.

---

## Consequências

### Positivas

- aceleração do desenvolvimento;
- padronização visual;
- menor acoplamento;
- facilidade de manutenção;
- maior qualidade da experiência do usuário.

### Negativas

- necessidade de acompanhar evoluções do projeto shadcn/ui;
- revisão dos componentes quando houver atualizações importantes.

---

## Alternativas consideradas

- Design System próprio.
- Material UI.
- Ant Design.
- Chakra UI.

---

## Relação com outras ADRs

Complementa:

- ADR-001
- ADR-002
- ADR-003
- ADR-004

---

## Data

Julho de 2026
