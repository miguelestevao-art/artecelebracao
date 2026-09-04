# 18 — Arquitetura de Interface do Módulo Programações

## Objetivo

Definir a estrutura visual e funcional do módulo de Programações.

Este documento descreve todas as telas, componentes e fluxos de navegação antes da implementação.

---

# Princípios de UX

O módulo deverá seguir os princípios abaixo:

- simplicidade;
- navegação intuitiva;
- poucas ações por tela;
- foco na tarefa atual;
- redução da carga cognitiva;
- consistência visual.

O objetivo é que um novo líder consiga utilizar o sistema sem necessidade de treinamento.

---

# Estrutura Geral

```text
Programações
│
├── Lista
├── Nova Programação
├── Detalhes
├── Editar
└── Histórico
```

---

# Tela 1 — Lista de Programações

Objetivo:

Apresentar todas as programações cadastradas.

Componentes:

- título
- botão "Nova Programação"
- filtros
- pesquisa
- tabela/cards

Filtros:

- Contexto
- Status
- Período
- Responsável

Ordenação:

- mais próximas primeiro

---

# Informações exibidas

Cada item mostrará:

- Nome
- Contexto
- Data
- Horário
- Status
- Responsável
- Quantidade de integrantes
- Quantidade de músicas

Ações rápidas:

- visualizar
- editar
- duplicar
- arquivar

---

# Tela 2 — Nova Programação

Fluxo em etapas.

Stepper superior:

```text
Informações

↓

Repertório

↓

Equipe

↓

Preparações

↓

Confirmações

↓

Revisão
```

O usuário poderá salvar como rascunho em qualquer etapa.

---

# Etapa 1 — Informações

Campos:

- Contexto
- Nome
- Data
- Horário
- Local
- Tema
- Texto Base
- Referência Bíblica
- Observações

Botões:

Anterior (desabilitado)

Próximo

Salvar Rascunho

---

# Etapa 2 — Repertório

Exibe:

Pesquisa na Biblioteca Musical.

Adicionar Música.

Lista ordenável.

Cada música possui:

- tonalidade
- facilitador
- observações

---

# Etapa 3 — Equipe

Adicionar integrantes.

Agrupamento por função:

- Líder
- Diretor Musical
- Facilitadores
- Back Vocal
- Instrumentistas
- Técnicos
- Produção

Cada integrante mostra:

- nome
- função
- confirmação

---

# Etapa 4 — Preparações

Lista de encontros.

Adicionar:

- ensaio vocal
- ensaio instrumental
- ensaio geral
- passagem de som

Cada preparação:

- data
- horário
- local

---

# Etapa 5 — Confirmações

Resumo da equipe.

Status:

- pendente
- confirmado
- recusado

Ações:

Enviar confirmações.

Reenviar.

Substituir integrante.

---

# Etapa 6 — Revisão

Resumo completo.

Informações Gerais

↓

Repertório

↓

Equipe

↓

Preparações

↓

Confirmações

Botão principal:

Publicar Programação

---

# Tela de Detalhes

Após publicada.

Possui abas.

```text
Visão Geral

Repertório

Equipe

Preparações

Confirmações

Histórico
```

Cada aba possui ações específicas.

---

# Dashboard da Programação

Na parte superior:

Nome

Status

Contexto

Data

Local

Logo abaixo:

Cards:

- músicas
- integrantes
- confirmações
- preparações

---

# Estados Visuais

Cada status terá uma identidade visual.

Rascunho

Cinza

Planejamento

Azul

Equipe Montada

Amarelo

Confirmações

Laranja

Preparação

Roxo

Realizada

Verde

Arquivada

Cinza Escuro

---

# Navegação

Dashboard

↓

Programações

↓

Lista

↓

Detalhes

↓

Editar

↓

Salvar

↓

Retorna aos Detalhes

---

# Componentes reutilizáveis

O módulo utilizará:

PageHeader

SectionCard

StatCard

DataTable

Badge

Avatar

Tabs

Dialog

Button

Input

Select

Calendar

Command

AlertDialog

Tooltip

---

# Objetivo Final

Toda Programação deverá ser criada com o menor número possível de cliques, mantendo clareza, organização e rastreabilidade.

O usuário deverá sentir que está sendo guiado pelo sistema durante todo o processo de planejamento.
