# ADR-018 — Padronização dos Componentes Compartilhados

## Status

Aceito

---

## Contexto

Os componentes compartilhados do projeto estavam organizados de forma inconsistente: alguns em arquivos isolados e outros em pastas próprias.

Essa diferença dificultava a previsibilidade da estrutura e aumentava o esforço de manutenção.

---

## Decisão

Todos os componentes compartilhados passam a seguir a mesma convenção:

- uma pasta exclusiva por componente;
- arquivo principal (`NomeDoComponente.tsx`);
- arquivo `index.ts` para exportação.

---

## Consequências

### Positivas

- Estrutura uniforme.
- Imports simplificados.
- Facilidade para adicionar testes, estilos ou utilitários específicos de cada componente.
- Maior escalabilidade.

### Negativas

- Pequena refatoração inicial da estrutura de arquivos.

---

## Observações

Este padrão deverá ser adotado para qualquer novo componente compartilhado criado no ArteCelebração Hub.
