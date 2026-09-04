# ADR-013 — Diálogo de Confirmação Compartilhado

## Status

Aceito

---

## Contexto

Diversas ações do sistema exigem confirmação do usuário antes de serem executadas.

Implementar diálogos específicos em cada módulo aumentaria a duplicação de código e a inconsistência da interface.

---

## Decisão

Criar um componente compartilhado denominado ConfirmDialog, baseado no Alert Dialog do shadcn/ui.

O componente será reutilizado por todos os módulos que executem ações potencialmente destrutivas ou irreversíveis.

---

## Consequências

### Positivas

- Consistência visual;
- Reutilização;
- Centralização de futuras melhorias;
- Melhor experiência do usuário.

### Negativas

- Nenhuma relevante.

---

## Observações

O componente deve permanecer desacoplado das regras de negócio, recebendo apenas o conteúdo do diálogo e a ação de confirmação.
