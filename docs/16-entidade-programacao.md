# 16 — Entidade Programação

## Objetivo

A Programação representa todo evento ministerial apoiado pelo ArteCelebração.

Ela é a entidade central do sistema e organiza pessoas, repertório, contexto e preparação para cada ocasião.

---

# Conceito

Uma Programação é um compromisso ministerial planejado.

Ela possui informações próprias, equipe responsável, repertório, cronograma e histórico.

Todo o restante do sistema existe para apoiar sua realização.

---

# Estrutura Geral

Uma Programação é composta por:

- Identificação
- Informações Gerais
- Contexto
- Planejamento
- Equipe
- Repertório
- Preparações
- Confirmações
- Histórico

---

# Identificação

Cada Programação possui:

| Campo | Obrigatório |
|---------|------------|
| ID | Sim |
| Nome | Sim |
| Status | Sim |

---

# Informações Gerais

Campos previstos:

- Data

- Horário

- Local

- Tema

- Texto Base

- Referência Bíblica

- Observações

---

# Contexto

Cada Programação pertence a um único Contexto.

Exemplos:

- Tenda

- Somos Atos

- Radical

- GF

- CR

---

# Responsáveis

Cada Programação poderá possuir:

## Líder de Louvor

Responsável ministerial pela condução do momento de louvor.

---

## Diretor Musical

Responsável pelos aspectos musicais.

---

## Facilitador(es)

Responsáveis por conduzir músicas específicas.

Uma programação poderá possuir diversos facilitadores.

---

# Repertório

Uma programação possui uma lista ordenada de músicas.

Cada item referencia uma música existente na Biblioteca Musical.

Cada música poderá possuir informações específicas da programação:

- tonalidade utilizada

- observações

- facilitador

- ordem

---

# Equipe

A equipe é composta por diversos servos.

Cada integrante possui:

- função

- instrumento (quando aplicável)

- confirmação

- observações

---

# Preparações

Cada Programação poderá possuir:

- Ensaio Vocal

- Ensaio Instrumental

- Ensaio Geral

- Passagem de Som

- Outros encontros

Cada preparação possuirá:

- data

- horário

- local

- observações

---

# Confirmações

Cada integrante poderá estar em um dos estados:

- Pendente

- Confirmado

- Recusado

- Substituído

---

# Status da Programação

Uma programação percorre os seguintes estados.

```text
Rascunho

↓

Planejamento

↓

Equipe Montada

↓

Repertório Definido

↓

Confirmações

↓

Preparação

↓

Realizada

↓

Arquivada
```

Nem toda alteração modifica o status.

---

# Permissões

Administrador

- acesso total

---

Líder de Louvor

- editar programação

- editar repertório

- visualizar equipe

---

Diretor Musical

- editar repertório

- editar observações musicais

---

Facilitador

- visualizar programação

- visualizar repertório

- acessar materiais

---

Demais Servos

- visualizar programação

- confirmar presença

- acessar materiais autorizados

---

# Indicadores futuros

A Programação será utilizada para gerar:

- frequência de serviço

- músicas mais utilizadas

- tempo médio entre execuções

- participação por contexto

- taxa de confirmação

- indicadores ministeriais

---

# Relações

Programação

├── Contexto

├── Equipe

├── Repertório

├── Preparações

├── Confirmações

└── Histórico

---

# Observações

Toda nova funcionalidade do sistema deverá, sempre que possível, relacionar-se à Programação, preservando-a como entidade central do domínio.
