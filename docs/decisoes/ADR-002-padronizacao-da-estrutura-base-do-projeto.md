# ADR-002 — Padronização da Estrutura Base do Projeto

## Status

Aceita

---

## Contexto

Após a definição da arquitetura baseada em funcionalidades (ADR-001), tornou-se necessário estabelecer uma estrutura base para o projeto que separasse claramente as responsabilidades da aplicação, facilitando sua evolução e manutenção.

A organização deveria atender aos seguintes objetivos:

- escalabilidade;
- baixo acoplamento;
- facilidade de localização dos arquivos;
- alinhamento entre documentação, domínio e implementação.

---

## Decisão

A estrutura do projeto será organizada da seguinte forma:

src/

app/

components/
- layout/
- shared/
- ui/

config/

features/
- administracao/
- auth/
- biblioteca/
- contextos/
- dashboard/
- equipe/
- perfil/
- programacoes/

hooks/

lib/

services/

styles/

types/

utils/

Além disso:

- A pasta `app/` será responsável exclusivamente pelo roteamento utilizando o App Router do Next.js.
- Toda lógica de domínio deverá permanecer dentro dos respectivos módulos em `features/`.
- A pasta `config/` armazenará configurações relacionadas ao domínio da aplicação.
- A pasta `lib/` armazenará integrações com bibliotecas e serviços externos (Firebase, por exemplo).
- Componentes reutilizáveis ficarão em `components/`.

---

## Consequências

### Positivas

- Organização consistente.
- Facilidade para localizar arquivos.
- Redução do acoplamento.
- Melhor reutilização de componentes.
- Facilidade para crescimento do projeto.

### Negativas

- Estrutura inicial um pouco maior.
- Exige disciplina para manter a organização.

---

## Alternativas consideradas

### Organização por tipo de arquivo

Exemplo:

components/
hooks/
services/
utils/

Foi descartada por favorecer o crescimento desorganizado do projeto ao longo do tempo.

---

## Data

Julho de 2026
