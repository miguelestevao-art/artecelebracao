# 15 — Modelo Funcional do Domínio

## Objetivo

Este documento descreve o comportamento funcional das principais entidades do ArteCelebração Hub.

Seu propósito é estabelecer uma linguagem única entre produto, desenvolvimento e liderança ministerial, definindo como cada entidade se relaciona dentro do sistema, independentemente da tecnologia utilizada.

Este documento representa o domínio do negócio.

---

# Visão Geral

O ArteCelebração Hub possui como entidade central a **Programação**.

Todas as demais entidades existem para apoiar o planejamento, preparação, execução e registro de uma programação.

```text
                Contextos
                     │
                     │
                     ▼
              Programação
        ┌────────┼────────┐
        ▼        ▼        ▼
 Repertório   Equipe   Preparações
        │        │        │
        ▼        ▼        ▼
 Biblioteca Histórico Confirmações
```

---

# Entidades do Domínio

## Programação

Representa um evento ministerial onde haverá participação do ArteCelebração.

Exemplos:

- Culto Tenda
- Somos Atos
- Radical
- GF
- Celebrando a Restauração
- A2
- Mulhé
- Seji Homi
- EDL

A Programação é a entidade principal do sistema.

---

## Contexto

O contexto identifica o ministério, público ou ambiente onde ocorre a programação.

Exemplos:

- Tenda
- Somos Atos
- Radical
- GF
- CR
- A2

Um contexto possui diversas programações ao longo do tempo.

---

## Repertório

Representa o conjunto de músicas executadas em uma programação.

Cada repertório referencia músicas existentes na Biblioteca Musical.

Não existe música cadastrada exclusivamente dentro de uma programação.

---

## Biblioteca Musical

Repositório oficial de músicas do ministério.

Cada música pode conter:

- letra
- cifra
- playback
- guia
- vídeo
- partitura
- arranjo vocal
- tonalidade
- BPM
- palavras-chave
- referências bíblicas
- temas

Uma mesma música pode participar de inúmeras programações.

---

## Equipe de Servos

Representa todas as pessoas escaladas para determinada programação.

Exemplos:

- Líder de Louvor
- Facilitador
- Diretor Musical
- Back Vocal
- Instrumentistas
- Mídia
- Produção
- Técnicos

Cada participação gera histórico ministerial.

---

## Preparações

Representa tudo o que acontece antes da programação.

Exemplos:

- ensaio vocal
- ensaio instrumental
- ensaio geral
- passagem de som
- ajustes finais

---

## Confirmações

Controla a confirmação de presença dos servos.

Estados possíveis:

- Pendente
- Confirmado
- Recusado
- Substituído

---

## Histórico

Registra tudo que ocorreu.

Exemplos:

- músicas executadas
- equipe participante
- alterações
- confirmações
- observações

Este histórico será utilizado futuramente para geração de indicadores.

---

# Relacionamentos

```text
Contexto
    │
    ├──────────────┐
    ▼              │
Programação────────┼──────►Equipe
    │              │
    │              ├──────►Preparações
    │              │
    │              ├──────►Confirmações
    │              │
    ▼              │
Repertório─────────┘
    │
    ▼
Biblioteca Musical
```

---

# Ciclo de Vida da Programação

Toda programação percorre um ciclo.

```text
Rascunho
      │
      ▼
Planejamento
      │
      ▼
Escala Montada
      │
      ▼
Confirmações
      │
      ▼
Preparação
      │
      ▼
Realizada
      │
      ▼
Arquivada
```

Cada mudança de estado gera um registro de histórico.

---

# Princípios do Domínio

O sistema deve obedecer aos seguintes princípios:

## Uma única fonte da verdade

Cada música existe apenas uma vez.

Cada servo existe apenas uma vez.

Cada programação possui identidade própria.

---

## Reutilização

Uma música pode ser utilizada em diversas programações.

Um servo pode participar de inúmeras equipes.

Um contexto possui diversas programações.

---

## Rastreabilidade

Toda alteração relevante deve ser registrada.

Exemplos:

- alteração de repertório
- troca de integrante
- mudança de horário
- alteração de tema
- confirmação de presença

---

## Inteligência Ministerial

As informações históricas deverão permitir:

- identificar frequência de serviço
- acompanhar utilização de músicas
- sugerir repertórios
- evitar repetições excessivas
- apoiar decisões da liderança

---

# Próximos Documentos

Este documento servirá de base para:

- Modelagem da entidade Programação
- Modelo do Firestore
- Fluxos de Interface
- Regras de Negócio
- APIs
- Dashboards
