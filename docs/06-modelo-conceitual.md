# Modelo Conceitual

## Objetivo

Este documento representa o modelo conceitual do ArteCelebração Hub, descrevendo as principais entidades do domínio e seus relacionamentos, independentemente da tecnologia utilizada para armazenamento dos dados.

---

# Entidades Principais

## ArteCelebração

É o ministério responsável por apoiar musicalmente diferentes contextos de programação da igreja.

Possui:

* Integrantes
* Programações
* Catálogo de Músicas
* Contextos
* Especialidades
* Habilitações Ministeriais

---

## Integrante

Representa uma pessoa pertencente ao ministério.

Relacionamentos:

* possui Especialidades;
* possui Habilitações Ministeriais;
* participa de diversas Programações.

---

## Programação

É a entidade central do sistema.

Relacionamentos:

* pertence a um Contexto;
* possui uma Mensagem;
* possui um Repertório;
* possui uma Equipe de Servos;
* possui um Histórico.

---

## Mensagem

Agrupa as informações relacionadas ao conteúdo da programação.

Campos previstos:

* Tema
* Pregador
* Referência Bíblica
* Direcionamento Musical

---

## Repertório

Representa a seleção ordenada de músicas para uma Programação.

É composto por músicas do Catálogo.

Cada música poderá conter observações específicas para aquela Programação.

---

## Catálogo de Músicas

Representa todas as músicas disponíveis para utilização nas Programações.

Uma música poderá estar presente em diversos repertórios.

---

## Participação

Representa a atuação de um Integrante em uma Programação.

Registra:

* Especialidades utilizadas;
* Papel desempenhado;
* Status da confirmação;
* Observações.

---

## Contexto

Representa o ambiente ministerial onde ocorre a Programação.

Exemplos:

* Tenda
* GF
* CR
* Somos Atos
* Radical
* SAL
* A2
* Mulhé
* Seji Homi
* EDL

---

## Especialidade

Representa uma capacidade musical do Integrante.

Um Integrante poderá possuir diversas Especialidades.

---

## Habilitação Ministerial

Representa uma autorização concedida pela liderança.

Inicialmente:

* Facilitador
* Diretor Musical
