# ArteCelebração Hub

> Plataforma web para gestão ministerial do ministério de música **ArteCelebração**.

O ArteCelebração Hub foi concebido para centralizar a gestão do ministério, promovendo organização, comunicação, inteligência de repertório e apoio à liderança por meio de uma plataforma moderna, escalável e intuitiva.

---

# Visão do Produto

O projeto está fundamentado em três pilares estratégicos:

- 🎼 Gestão da Equipe de Servos
- 📚 Inteligência de Repertório
- 📈 Inteligência Ministerial

Toda funcionalidade implementada deve fortalecer pelo menos um desses pilares.

---

# Stack Tecnológica

- Next.js 16 (App Router)
- React 19
- TypeScript
- Firebase Authentication
- Cloud Firestore (Standard Edition)
- Tailwind CSS v4
- shadcn/ui
- Lucide Icons
- Git
- GitHub

---

# Arquitetura

O projeto adota uma arquitetura **Feature-First**, separando claramente domínio, interface, infraestrutura e regras de negócio.

## Estrutura simplificada

```
src/
├── app/
├── components/
├── layout/
├── shared/
│   ├── EmptyState
│   ├── PageActions
│   ├── PageContainer
│   ├── PageHeader
│   ├── SearchInput
│   ├── SectionCard
│   ├── StatCard
│   └── StatusBadge
└── ui/
├── config/
├── features/
├── hooks/
├── lib/
│   └── firebase/
├── providers/
├── services/
├── styles/
├── types/
└── utils/
```

As decisões arquiteturais são registradas por meio de ADRs (Architectural Decision Records).

---

# Fluxo de Desenvolvimento

Todo incremento do projeto segue o fluxo:

```
Ideia
    ↓
Documentação
    ↓
ADR (quando necessário)
    ↓
Implementação
    ↓
Validação
    ↓
Commit
    ↓
Atualização da documentação
```

Essa abordagem garante rastreabilidade, consistência e facilidade de manutenção.

---

# Documentação

Toda a documentação oficial encontra-se na pasta:

```
docs/
```

## Documentos

| Documento | Descrição                      |
| --------- | ------------------------------ |
| 00        | Visão do Projeto               |
| 01        | Pilares do Produto             |
| 02        | Regras de Negócio              |
| 03        | Modelo de Domínio              |
| 04        | Fluxo Operacional              |
| 05        | Controle de Acesso             |
| 06        | Modelo Conceitual              |
| 07        | Requisitos Funcionais          |
| 08        | Mapa de Navegação              |
| 09        | Arquitetura da Interface       |
| 10        | Design System                  |
| 11        | Guia de Desenvolvimento        |
| 12        | Brand Book                     |
| 13        | Design Tokens                  |
| 14        | Padrões de Desenvolvimento     |
| decisoes/ | Architectural Decision Records |

---

# Configuração do Ambiente

## 1. Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

---

## 2. Instalar dependências

```bash
npm install
```

---

## 3. Configurar variáveis de ambiente

Criar:

```
.env.local
```

utilizando como referência:

```
.env.example
```

---

## 4. Executar o projeto

```bash
npm run dev
```

Aplicação disponível em:

```
http://localhost:3000
```

---

# Scripts

```bash
npm run dev
```

Inicia o ambiente de desenvolvimento.

```bash
npm run build
```

Gera a versão de produção.

```bash
npm run start
```

Executa a aplicação compilada.

```bash
npm run lint
```

Executa a análise estática do código.

---

# Convenções

O projeto utiliza:

- Feature-First Architecture
- Conventional Commits
- TypeScript Strict Mode
- Firebase como Backend-as-a-Service
- Design System baseado em shadcn/ui

As convenções completas encontram-se em:

```
docs/11-guia-de-desenvolvimento.md
```

---
## Decisões Arquiteturais

As principais decisões do projeto são documentadas por meio de ADRs.

Até o momento foram aprovadas decisões relacionadas a:

- Arquitetura Feature-First
- Estrutura Base do Projeto
- Camadas para acesso a serviços externos
- Estratégia do Design System
- Adoção do shadcn/ui
- Providers Globais
- Proteção de Rotas baseada em Layouts
---
# Mapa de Navegação

✅ Fase 1 — Fundação da Plataforma

- Arquitetura
- Firebase
- Providers
- Login
- Design System
- AppShell
- Componentes Compartilhados

🚧 Fase 2 — Módulos Principais

- Dashboard
- Programações
- Biblioteca Musical
- Equipe de Servos
- Contextos

🔜 Fase 3 — Operação Ministerial

- Escalas
- Confirmações
- Disponibilidade
- Preparações

🔮 Fase 4 — Inteligência Ministerial

- Indicadores
- Histórico
- Relatórios
- Dashboards

---

# Status do Projeto

🚧 Em desenvolvimento.

Atualmente o projeto concluiu a Fase 1 (Fundação da Plataforma) e iniciou a construção dos módulos de negócio.

A autenticação, o Design System, a arquitetura Feature-First e a infraestrutura base encontram-se implementados.
---

# Licença

Projeto desenvolvido para uso interno do ministério **ArteCelebração**.
