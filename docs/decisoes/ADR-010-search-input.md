# ADR-010 — Campo de Pesquisa Compartilhado

## Status

Aceito

---

## Contexto

Diversos módulos da aplicação exigem pesquisa textual.

Criar campos de pesquisa independentes aumentaria a duplicação de código e dificultaria a padronização visual.

---

## Decisão

Criar um componente compartilhado denominado SearchInput.

Esse componente será responsável por:

- apresentar um ícone de pesquisa;
- padronizar espaçamento e aparência;
- centralizar futuras evoluções (atalhos, debounce, filtros rápidos).

---

## Consequências

### Positivas

- Consistência visual;
- Reutilização;
- Facilidade de manutenção.

### Negativas

- Nenhuma relevante.

---

## Observações

O componente deverá permanecer desacoplado das regras de negócio, recebendo apenas o valor atual e uma função de atualização.
