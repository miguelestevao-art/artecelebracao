# ADR-009 — Empty State Padronizado

## Status

Aceito

---

## Contexto

Diversos módulos da aplicação poderão não possuir registros cadastrados durante seu uso inicial.

Exibir apenas uma tabela vazia ou mensagens técnicas prejudica a experiência do usuário.

---

## Decisão

Criar um componente compartilhado denominado EmptyState.

Esse componente deverá apresentar:

- ícone opcional;
- título;
- descrição;
- ação principal opcional.

---

## Consequências

### Positivas

- Interface mais amigável;
- Consistência visual;
- Incentivo à ação do usuário;
- Reutilização em todos os módulos.

### Negativas

- Nenhuma relevante.

---

## Observações

Sempre que um módulo não possuir dados, deverá utilizar o EmptyState em vez de tabelas vazias ou mensagens genéricas.
