# ADR-014 — Programações como Agregado Principal

## Status

Aceito

---

## Contexto

Diversos elementos do sistema dependem de uma Programação.

Repertório, equipe, confirmações e preparação não fazem sentido isoladamente.

---

## Decisão

A entidade Programação será o agregado principal do domínio.

Os demais módulos relacionam-se a ela.

---

## Consequências

### Positivas

- Modelo consistente
- Fácil expansão
- Navegação intuitiva
- Organização do domínio

### Negativas

Maior responsabilidade da entidade Programação, exigindo boa modelagem.

---

## Observações

Toda funcionalidade relacionada ao planejamento ministerial deverá partir de uma Programação.
