# 17 — Fluxo do Módulo de Programações

## Objetivo

Definir o fluxo completo de utilização do módulo de Programações, desde sua criação até o arquivamento.

Este documento servirá como base para:

- Interface
- Firestore
- Permissões
- Regras de Negócio
- APIs futuras

---

# Visão Geral

A Programação é o centro operacional do ArteCelebração Hub.

Todo evento ministerial seguirá um fluxo padronizado.

```text
Nova Programação
        │
        ▼
Informações Gerais
        │
        ▼
Definição do Repertório
        │
        ▼
Montagem da Equipe
        │
        ▼
Planejamento dos Ensaios
        │
        ▼
Envio das Confirmações
        │
        ▼
Execução
        │
        ▼
Arquivamento
```

---

# Etapa 1 — Nova Programação

Responsável:

Administrador
ou
Líder de Louvor

Informações mínimas:

- Contexto
- Data
- Horário
- Local

Ao salvar:

Status:

Rascunho

---

# Etapa 2 — Planejamento

São adicionados:

- Tema
- Texto Base
- Referência Bíblica
- Observações

Status:

Planejamento

---

# Etapa 3 — Construção do Repertório

Nesta etapa o líder escolhe músicas da Biblioteca Musical.

Para cada música poderão existir:

- tonalidade
- facilitador
- observações
- ordem de execução

Status:

Repertório Definido

---

# Etapa 4 — Montagem da Equipe

São escalados:

- Líder
- Diretor Musical
- Facilitadores
- Back Vocais
- Instrumentistas
- Técnicos
- Produção

Cada integrante inicia como:

Pendente

---

# Etapa 5 — Preparações

Cadastro de:

- Ensaio Vocal
- Ensaio Instrumental
- Ensaio Geral
- Passagem de Som

Cada preparação possui:

- data
- horário
- local

---

# Etapa 6 — Confirmações

O sistema envia notificações.

Cada servo poderá:

- Confirmar
- Recusar

Caso haja recusa:

Administrador poderá substituir o integrante.

---

# Etapa 7 — Execução

No dia da programação poderão ser registrados:

- alterações de última hora
- mudanças no repertório
- substituições
- observações

---

# Etapa 8 — Encerramento

Após o evento:

Status:

Realizada

São congelados:

- repertório final
- equipe participante
- confirmações

Essas informações passam a compor o Histórico Ministerial.

---

# Arquivamento

Após encerramento:

Status:

Arquivada

Nenhuma alteração estrutural será permitida.

Apenas observações administrativas.

---

# Fluxo Resumido

```text
Nova

↓

Planejamento

↓

Repertório

↓

Equipe

↓

Preparações

↓

Confirmações

↓

Execução

↓

Realizada

↓

Arquivada
```

---

# Objetivo de UX

O usuário nunca deverá visualizar uma tela complexa.

O sistema conduzirá naturalmente cada etapa do planejamento por meio de um fluxo progressivo.

Essa abordagem reduz erros e facilita o treinamento de novos líderes.
