# ADR-003 — Arquitetura em Camadas para Integrações Externas

## Status

Aceita

---

## Contexto

O ArteCelebração Hub utilizará diferentes serviços externos ao longo de sua evolução, como Firebase Authentication, Cloud Firestore, Cloud Storage e outros que poderão ser incorporados futuramente.

Era necessário definir uma arquitetura que evitasse o acoplamento entre a interface da aplicação e essas tecnologias, preservando a organização do código e facilitando futuras manutenções.

---

## Decisão

Toda comunicação com serviços externos deverá ocorrer por meio de uma arquitetura em camadas.

Fluxo definido:

Interface (Pages / Components)
↓
Hooks
↓
Services
↓
Lib
↓
Serviço Externo (Firebase)

Cada camada possui uma responsabilidade específica:

### Interface

Responsável apenas pela apresentação e interação com o usuário.

Não deve conhecer detalhes da implementação do Firebase.

---

### Hooks

Responsáveis por encapsular estados, efeitos e comportamentos reutilizáveis da interface.

Não devem conter regras de acesso ao Firebase.

---

### Services

Responsáveis pela lógica de comunicação entre a aplicação e os serviços externos.

Cada módulo funcional possuirá seus próprios serviços.

Exemplos:

- AuthService
- ProgramacoesService
- BibliotecaService
- EquipeService

---

### Lib

Responsável pela configuração e inicialização de bibliotecas externas.

Exemplos:

- Firebase App
- Authentication
- Firestore

---

## Consequências

### Positivas

- Baixo acoplamento entre interface e infraestrutura.
- Maior facilidade para manutenção.
- Melhor organização por responsabilidades.
- Facilidade para testes.
- Possibilidade de substituir implementações com menor impacto.

### Negativas

- Maior quantidade de arquivos.
- Necessidade de disciplina para manter a arquitetura.

---

## Alternativas consideradas

### Acesso direto ao Firebase pela interface

Exemplo:

Page → Firebase

Essa abordagem foi descartada por aumentar o acoplamento entre a interface e a infraestrutura, dificultando manutenção, testes e evolução do sistema.

---

## Relação com outras ADRs

- ADR-001 — Arquitetura Baseada em Funcionalidades.
- ADR-002 — Padronização da Estrutura Base do Projeto.

Esta decisão complementa as ADRs anteriores ao definir como os módulos funcionais devem acessar serviços externos.

---

## Data

Julho de 2026
