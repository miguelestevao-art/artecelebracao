# ADR-001 — Arquitetura Baseada em Funcionalidades

## Status

Aprovada

## Contexto

O ArteCelebração Hub é um sistema com potencial de crescimento contínuo, contemplando múltiplos módulos, diferentes ministérios e novas funcionalidades ao longo do tempo.

Era necessário definir uma estratégia de organização do código que favorecesse escalabilidade, manutenção e facilidade de navegação.

## Decisão

O projeto adotará uma arquitetura baseada em funcionalidades (*Feature-Based Architecture*).

Cada funcionalidade será responsável por concentrar seus próprios componentes, regras de negócio, serviços e demais arquivos relacionados.

A estrutura do projeto deverá refletir os domínios do negócio, evitando organização baseada apenas em tipos de arquivos.

## Consequências

### Benefícios

* Maior organização do projeto.
* Facilidade para localizar arquivos relacionados.
* Melhor escalabilidade conforme o sistema crescer.
* Menor acoplamento entre funcionalidades.

### Desafios

* Exige disciplina na definição dos limites de cada funcionalidade.
* Requer revisões periódicas da arquitetura conforme novas necessidades surgirem.

## Alternativas consideradas

### Organização por tipo de arquivo

Exemplo:

* components/
* services/
* hooks/
* utils/

Essa abordagem foi descartada por dificultar a navegação em projetos maiores e por espalhar arquivos pertencentes à mesma funcionalidade em diferentes diretórios.

## Revisão

Esta decisão poderá ser revisada caso o crescimento do projeto demonstre necessidade de outra estratégia arquitetural.
