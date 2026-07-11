# Modelo de Domínio — ArteCelebração Hub

## 1. Objetivo

Este documento descreve o modelo conceitual do **ArteCelebração Hub**, estabelecendo as entidades de negócio, seus relacionamentos e as principais regras que orientam o funcionamento da plataforma.

O objetivo é garantir que todas as decisões de desenvolvimento, modelagem do banco de dados, criação das APIs e construção da interface estejam fundamentadas em uma compreensão única do domínio da aplicação.

O modelo apresentado representa a realidade operacional do ministério **ArteCelebração**, responsável pelo apoio musical às programações da igreja.

Mais do que documentar estruturas técnicas, este documento procura representar a forma como o ministério organiza suas atividades, permitindo que o software acompanhe a rotina real da igreja em vez de impor um processo artificial.

---

## 2. Visão Geral do Domínio

O **ArteCelebração** é o ministério responsável por organizar toda a estrutura musical das programações da igreja.

As programações pertencem às diferentes Áreas Ministeriais da igreja, enquanto o ArteCelebração atua como equipe responsável pelo planejamento musical dessas programações.

Cada programação segue, de maneira geral, o seguinte fluxo:

Programação

↓

Tema

↓

Escolha do Repertório

↓

Montagem da Equipe

↓

Confirmação dos Participantes

↓

Execução

↓

Histórico

Este fluxo representa o processo principal do ArteCelebração Hub e servirá como base para a organização das funcionalidades do sistema.
---

## 3. Ecossistema da Igreja

O **ArteCelebração** é o ministério responsável pelo planejamento, organização e execução de todo o suporte musical das programações da igreja.

Embora existam diversas programações voltadas para diferentes públicos, todos os integrantes envolvidos com música pertencem ao ArteCelebração.

As demais áreas da igreja realizam suas próprias programações e contam com o apoio do ArteCelebração para a organização do repertório musical, formação da equipe de servos e acompanhamento das confirmações.

### Fluxo de relacionamento

```text
Igreja
    │
    ├── ArteCelebração
    │      │
    │      ├── Cadastro de Integrantes
    │      ├── Cadastro de Músicas
    │      ├── Planejamento Musical
    │      └── Formação das Equipes
    │
    └── Programações
           │
           ├── Tenda
           ├── GF
           ├── Radical
           ├── Somos Atos
           ├── CR
           ├── SAL
           ├── Seji Homi
           ├── Mulhé
           ├── A2
           └── EDL
```

O ArteCelebração atua como ministério de apoio, fornecendo toda a estrutura musical necessária para cada programação da igreja.

### Contextos de Programação

| Sigla      | Nome                     | Público-alvo                        |
| ---------- | ------------------------ | ----------------------------------- |
| Tenda      | Celebração Principal     | Todas as idades                     |
| GF         | Geração Futuro           | Crianças                            |
| Radical    | Radical                  | Adolescentes                        |
| Somos Atos | Somos Atos               | Jovens                              |
| CR         | Celebrando a Restauração | Adultos                             |
| SAL        | Surf Adoração e Louvor   | Jovens                              |
| Seji Homi  | Seji Homi                | Homens                              |
| Mulhé      | Mulhé                    | Mulheres                            |
| A2         | A Dois                   | Casais                              |
| EDL        | Encontro de Liderança    | Líderes de Grupos de Relacionamento |

Cada programação cadastrada no sistema estará vinculada a um desses contextos.

O contexto identifica o ambiente ministerial da programação e permite organizar históricos, repertórios, equipes e relatórios de maneira consistente.
---

## 4. Entidades do Domínio

O ArteCelebração Hub é composto por um conjunto de entidades que representam a operação do ministério e seus relacionamentos.

### 4.1 Integrante

Representa cada servo pertencente ao ArteCelebração.

Cada integrante possui um cadastro único e poderá participar de diversas programações ao longo do tempo.

Informações previstas:

* Nome
* Contato
* Foto
* Status (Ativo/Inativo)
* Especialidades Musicais
* Habilitações Ministeriais
* Disponibilidade
* Histórico de Participações

---

### 4.2 Especialidades Musicais

Representam as capacidades musicais do integrante.

Um integrante pode possuir uma ou mais especialidades.

Exemplos:

**Vocal**

* Soprano
* Contralto
* Tenor

**Instrumentos**

* Violonista
* Guitarrista
* Baixista
* Tecladista
* Pianista
* Baterista
* Percussionista

A lista deverá ser expansível para futuras necessidades do ministério.

---

### 4.3 Habilitações Ministeriais

Representam funções de liderança para as quais um integrante está autorizado.

Inicialmente serão consideradas:

* Facilitador
* Diretor Musical

As habilitações não determinam a atuação do integrante em todas as programações.

Elas apenas autorizam que esses papéis possam ser atribuídos quando necessário.

---

### 4.4 Contextos de Programação

Representam os ambientes ministeriais atendidos pelo ArteCelebração.

Exemplos:

* Tenda
* GF
* Radical
* Somos Atos
* CR
* SAL
* Seji Homi
* Mulhé
* A2
* EDL

Cada programação pertence a um único contexto.

---

### 4.5 Programação

É a entidade central do sistema.

Cada programação representa um evento específico apoiado pelo ArteCelebração.

Uma programação poderá conter:

* Tema
* Data
* Horário
* Local
* Repertório
* Equipe de Servos
* Confirmações
* Observações
* Histórico

---

### 4.6 Catálogo de Músicas

Representa todas as músicas disponíveis para utilização nas programações.

As músicas pertencem ao catálogo e podem ser reutilizadas em diferentes repertórios ao longo do tempo.
