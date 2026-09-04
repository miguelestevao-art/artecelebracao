# 21 — Modelo de Domínio — Programações

## Objetivo

Definir as principais entidades do módulo Programações e seus relacionamentos.

Este documento servirá como base para a modelagem do Firestore, implementação dos serviços e construção das interfaces.

---

# Entidades

## Programação

Representa um evento ministerial.

Exemplos:

- Culto Domingo Manhã
- Culto Domingo Noite
- Somos Atos
- Radical
- GF
- CR
- SAL
- EDL

Uma programação concentra todo o planejamento do evento.

---

## Bloco

Representa um momento específico dentro da programação.

Exemplos:

- Recepção
- Louvor Inicial
- Avisos
- Mensagem
- Santa Ceia
- Louvor Final
- Encerramento

Cada bloco possui finalidade própria.

---

## Repertório

Representa o conjunto de músicas executadas em um bloco.

Um bloco poderá possuir:

- nenhuma música;
- uma música;
- diversas músicas.

---

## Música

Representa uma música cadastrada na Biblioteca Musical.

A música pertence apenas à Biblioteca Musical.

A programação apenas referencia músicas existentes.

---

## Equipe de Servos

Representa as pessoas escaladas para servir em uma programação.

Inclui:

- vocalistas
- instrumentistas
- facilitadores
- diretor musical
- técnico de áudio (futuramente)
- mídia (futuramente)

---

# Relacionamentos

Programação

↓

possui

↓

Blocos

↓

cada bloco possui

↓

Repertório

↓

composto por

↓

Músicas

---

Programação

↓

possui

↓

Equipe de Servos

---

# Observações

As músicas nunca serão copiadas para uma programação.

A programação armazenará apenas referências às músicas cadastradas na Biblioteca Musical.
