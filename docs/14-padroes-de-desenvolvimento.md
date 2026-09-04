# 12 - Padrões de Desenvolvimento

> Status: Aprovado
>
> Versão: 1.0
>
> Última atualização: Julho/2026

---

# Objetivo

Este documento estabelece os padrões oficiais de desenvolvimento do **ArteCelebração Hub**.

Seu objetivo é garantir consistência arquitetural, facilitar a manutenção do sistema e orientar todos os desenvolvedores que participarem do projeto.

Todas as novas funcionalidades deverão seguir estas convenções.

---

# Filosofia

O desenvolvimento do ArteCelebração Hub baseia-se em cinco princípios fundamentais:

1. Clareza acima de complexidade.
2. Responsabilidade única para cada módulo.
3. Arquitetura orientada por funcionalidades (Feature-First).
4. Escalabilidade desde o início.
5. Documentação como parte do desenvolvimento.

---

# Estrutura do Projeto

A estrutura principal deverá permanecer organizada da seguinte forma:

```text
src/
│
├── app/
├── assets/
├── components/
├── features/
├── hooks/
├── lib/
├── providers/
├── shared/
└── styles/
```

Cada pasta possui responsabilidades bem definidas.

---

# Arquitetura Feature-First

Toda regra de negócio deverá ser organizada por funcionalidade.

Exemplo:

```text
features/
└── auth/
    ├── components/
    ├── hooks/
    ├── services/
    ├── types/
    └── index.ts
```

A mesma estrutura deverá ser adotada para:

- Programações
- Biblioteca Musical
- Equipe
- Contextos
- Inteligência Ministerial
- Administração

---

# Responsabilidades

## Components

Responsáveis exclusivamente pela interface.

Não devem conter regras de negócio.

Podem utilizar Hooks.

---

## Hooks

Responsáveis por:

- gerenciamento de estado;
- comportamento;
- fluxo da funcionalidade;
- integração entre Interface e Services.

Não devem renderizar interface.

---

## Services

Responsáveis pela comunicação com:

- Firebase
- APIs
- Serviços externos

Não devem possuir código de interface.

---

## Types

Contêm contratos, interfaces e tipos TypeScript.

---

## Shared

Código reutilizável entre diferentes funcionalidades.

Exemplos futuros:

- hooks compartilhados;
- constantes;
- utilitários;
- helpers.

---

# Convenções de Nomenclatura

## Hooks

Sempre iniciar com:

```text
use
```

Exemplos:

```text
useLogin.ts
useProgramacao.ts
useBiblioteca.ts
```

---

## Services

Sempre utilizar:

```text
*.service.ts
```

Exemplos:

```text
auth.service.ts
music.service.ts
programacao.service.ts
```

---

## Types

Sempre utilizar:

```text
*.types.ts
```

Exemplos:

```text
auth.types.ts
music.types.ts
```

---

## Componentes

Utilizar PascalCase.

Exemplos:

```text
LoginForm.tsx
ProgramacaoCard.tsx
MusicTable.tsx
```

---

# Organização dos Imports

Sempre seguir esta ordem:

## 1. Bibliotecas externas

```ts
import { useState } from "react";
```

---

## 2. Componentes compartilhados

```ts
import { Button } from "@/components/ui/button";
```

---

## 3. Imports utilizando alias

```ts
import { auth } from "@/lib/firebase";
```

---

## 4. Imports relativos

```ts
import { useLogin } from "../hooks/useLogin";
```

---

# Uso de Alias

Sempre preferir:

```text
@/
```

Evitar caminhos longos como:

```text
../../../
```

---

# Componentes

Todo componente deverá possuir responsabilidade única.

Evitar componentes muito grandes.

Quando um componente ultrapassar aproximadamente 200 linhas, avaliar sua divisão.

---

# Hooks

Todo Hook deverá retornar apenas o necessário para a interface.

Evitar expor implementações internas.

---

# Services

Services não devem conhecer componentes React.

Devem apenas executar operações.

---

# Firebase

Toda comunicação com Firebase deverá ocorrer através dos Services.

Componentes nunca deverão acessar Firebase diretamente.

Fluxo esperado:

```text
Interface

↓

Hook

↓

Service

↓

Firebase
```

---

# Design System

Todos os novos componentes deverão utilizar:

- Tailwind CSS
- shadcn/ui
- Design Tokens oficiais

Evitar CSS isolado.

---

# Componentes Base

Sempre reutilizar componentes existentes antes de criar novos.

Exemplos:

- Button
- Card
- Input
- Label

---

# Desenvolvimento de Funcionalidades

Toda nova funcionalidade deverá seguir o fluxo abaixo:

1. Definição do domínio.
2. Atualização da documentação (quando necessário).
3. Modelagem da interface.
4. Criação da estrutura da Feature.
5. Implementação dos Types.
6. Implementação dos Services.
7. Implementação dos Hooks.
8. Implementação da Interface.
9. Testes.
10. Commit.

---

# ADRs

Uma nova ADR deverá ser criada sempre que houver decisões arquiteturais relevantes.

Exemplos:

- alteração estrutural;
- mudança de tecnologia;
- novo padrão arquitetural.

Não utilizar ADR para pequenas implementações.

---

# Commits

Os commits deverão representar pequenas entregas funcionais.

Evitar commits muito grandes.

Sempre validar:

- compilação;
- lint;
- funcionamento da funcionalidade.

antes do commit.

---

# Evolução deste Documento

Este documento deverá evoluir continuamente conforme novos padrões forem sendo consolidados.

Ele representa o guia oficial de desenvolvimento do ArteCelebração Hub.

## Componentes Compartilhados

Sempre que um componente puder ser reutilizado em duas ou mais funcionalidades, ele deverá ser implementado em:

src/components/shared

Exemplos:

- PageHeader
- EmptyState
- LoadingState
- ConfirmDialog
- SearchBar
- DataTableToolbar

Essa abordagem reduz duplicação de código e garante consistência visual entre os módulos da aplicação.

### Componentes Compartilhados

Os componentes reutilizáveis da aplicação deverão ficar em:

src/components/shared

Componentes existentes:

- AppShell
- Header
- Sidebar
- PageContainer
- PageHeader
- StatCard

Novos componentes deverão ser adicionados sempre que forem reutilizados por duas ou mais funcionalidades.
