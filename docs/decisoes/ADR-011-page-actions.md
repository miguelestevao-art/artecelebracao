# ADR-011 — Área Padronizada de Ações das Páginas

## Status

Aceito

---

## Contexto

Os módulos da aplicação apresentam ações recorrentes, como:

- criar registros;
- pesquisar;
- filtrar;
- exportar;
- importar.

Sem padronização, cada página poderia organizar esses elementos de forma diferente.

---

## Decisão

Criar um componente compartilhado denominado PageActions.

Esse componente será responsável apenas pela organização visual da área superior das páginas.

Ele não deverá conter regras de negócio.

---

## Consequências

### Positivas

- Consistência visual;
- Facilidade de manutenção;
- Reutilização entre módulos;
- Melhor experiência do usuário.

### Negativas

Nenhuma relevante.

---

## Observações

O componente aceitará qualquer conteúdo por meio da propriedade `children`, permanecendo totalmente desacoplado das funcionalidades específicas de cada módulo.
