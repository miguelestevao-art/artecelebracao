# ADR-008 — Componentes Compartilhados

## Status

Aceito

---

## Contexto

O ArteCelebração Hub utilizará diversos módulos (Programações, Biblioteca Musical, Equipe, Contextos, Relatórios e outros).

Diversas interfaces compartilham padrões visuais e comportamentais.

Sem padronização, haveria duplicação de código e inconsistência visual.

---

## Decisão

Criar uma camada de Componentes Compartilhados acima do shadcn/ui.

Essa camada conterá componentes específicos do domínio da aplicação, como:

- StatusBadge
- EmptyState
- SearchInput
- PageActions
- LoadingState
- ConfirmDialog
- AppBreadcrumb

---

## Consequências

### Positivas

- Consistência visual
- Reutilização
- Facilidade de manutenção
- Evolução centralizada
- Redução de código duplicado

### Negativas

- Pequeno esforço inicial para construção da biblioteca

---

## Observações

Os componentes compartilhados deverão utilizar os componentes do shadcn/ui como base, evitando a implementação direta de elementos HTML sempre que possível.
