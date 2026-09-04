# ADR-016 — Primeira Tela Funcional Baseada em Componentes Compartilhados

## Status

Aceito

---

## Contexto

Após a construção da infraestrutura visual e dos componentes compartilhados, tornou-se necessário validar se a arquitetura adotada realmente facilita o desenvolvimento de módulos completos.

---

## Decisão

Implementar a primeira tela funcional do sistema (Listagem de Programações) reutilizando exclusivamente componentes compartilhados e componentes específicos do módulo.

---

## Consequências

### Positivas

- Validação prática da arquitetura Feature-First.
- Redução de duplicação de código.
- Facilidade para replicar o padrão em novos módulos.
- Maior consistência visual entre as telas.

### Negativas

- Exige maior planejamento inicial antes da implementação de funcionalidades.

---

## Observações

A tela de Programações passa a ser a referência arquitetural para os demais módulos do ArteCelebração Hub.
