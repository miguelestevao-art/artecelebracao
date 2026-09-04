# ADR-012 — Estado de Carregamento Padronizado

## Status

Aceito

---

## Contexto

Diversos módulos realizam carregamento assíncrono de dados provenientes do Firebase.

O uso de indicadores genéricos de carregamento reduz a percepção de desempenho da interface.

---

## Decisão

Criar um componente compartilhado denominado LoadingState, baseado no componente Skeleton do shadcn/ui.

O componente deverá representar visualmente a estrutura do conteúdo enquanto os dados são carregados.

---

## Consequências

### Positivas

- Melhor experiência do usuário;
- Percepção de carregamento mais rápida;
- Consistência entre módulos;
- Reutilização.

### Negativas

- Pequeno aumento no número de componentes compartilhados.

---

## Observações

Sempre que possível, utilizar Skeleton em substituição a mensagens de texto ou spinners para carregamentos de páginas e listas.
