# Guia de Desenvolvimento — ArteCelebração Hub

## Objetivo

Este documento define os padrões de desenvolvimento adotados pelo ArteCelebração Hub.

Seu objetivo é garantir consistência, legibilidade, escalabilidade e facilidade de manutenção do código ao longo da evolução do projeto.

Todo novo código deverá seguir estas diretrizes.

---

# Princípios Gerais

O desenvolvimento do ArteCelebração Hub deverá priorizar:

- simplicidade;
- legibilidade;
- baixo acoplamento;
- alta coesão;
- reutilização;
- escalabilidade;
- previsibilidade.

Sempre que houver dúvida entre duas abordagens, deverá ser escolhida a solução mais simples que atenda aos requisitos do projeto.

---

# Arquitetura

O projeto adota arquitetura baseada em funcionalidades (Feature-First).

Estrutura principal:

```

src/
├── app/
├── components/
├── config/
├── features/
├── hooks/
├── lib/
├── services/
├── styles/
├── types/
└── utils/

```

As responsabilidades de cada pasta estão definidas nas ADRs do projeto.

---

# Organização das Features

Cada funcionalidade deverá possuir sua própria estrutura.

Exemplo:

```

features/
└── auth/
├── components/
├── hooks/
├── services/
├── types/
└── utils/

```

Nem todas as pastas precisam existir inicialmente.

Criar apenas quando houver necessidade.

---

# Organização dos Componentes

## components/ui

Componentes base do Design System.

Exemplos:

- Button
- Input
- Card
- Badge

---

## components/layout

Componentes estruturais.

Exemplos:

- AppShell
- Header
- Sidebar

---

## components/shared

Componentes reutilizáveis que não pertencem a uma feature específica.

---

# Convenção de Nomes

## Componentes

PascalCase.

Exemplo:

```

Button.tsx

MusicCard.tsx

ProgramacaoCard.tsx

```

---

## Hooks

Sempre iniciar com "use".

Exemplo:

```

useAuth.ts

useProgramacoes.ts

```

---

## Services

Nome terminado em `.service.ts`.

Exemplo:

```

auth.service.ts

biblioteca.service.ts

```

---

## Types

Nome terminado em `.types.ts`.

Exemplo:

```

auth.types.ts

programacao.types.ts

```

---

## Utils

Nome terminado em `.utils.ts`.

Quando houver apenas uma função utilitária simples, utilizar um nome descritivo.

Exemplo:

```

formatDate.ts

slugify.ts

```

---

# Imports

Utilizar sempre o alias do projeto.

Preferir:

```ts
import Button from "@/components/ui/button";
```

Evitar:

```ts
import Button from "../../../../components/ui/button";
```

---

# Ordem dos Imports

Utilizar sempre a seguinte ordem:

1. Bibliotecas externas.
2. Imports utilizando alias (`@/`).
3. Imports relativos.
4. Imports de tipos.

Exemplo:

```ts
import { useState } from "react";

import { Button } from "@/components/ui/button";

import Header from "./Header";

import type { User } from "../types/user.types";
```

---

# Organização dos Arquivos

A estrutura recomendada para componentes é:

1. Imports.
2. Tipos/Interfaces.
3. Constantes.
4. Componente.
5. Export.

---

# Componentes

Os componentes devem possuir responsabilidade única.

Evitar componentes excessivamente grandes.

Quando um componente crescer significativamente, considerar dividi-lo em componentes menores.

---

# Estado

Priorizar:

- estado local quando suficiente;
- hooks personalizados para lógica reutilizável;
- Context API apenas quando realmente necessária.

Evitar compartilhamento global de estado sem necessidade.

---

# Firebase

Nenhum componente deve acessar diretamente o Firebase.

Fluxo obrigatório:

```

Interface
↓
Hook
↓
Service
↓
Lib
↓
Firebase

```

---

# Tratamento de Erros

Toda chamada assíncrona deverá prever tratamento de erro.

As mensagens apresentadas ao usuário deverão ser claras e objetivas.

Evitar exibir mensagens técnicas.

---

# Logs

Durante o desenvolvimento:

```
console.log()
```

são permitidos.

Antes de abrir Pull Request ou gerar versão de produção, remover logs desnecessários.

---

# Commits

O projeto utilizará Conventional Commits.

Exemplos:

```
feat(auth): adiciona login

fix(programacoes): corrige filtro por contexto

docs: atualiza modelo de domínio

refactor(layout): reorganiza AppShell
```

Commits devem representar uma única alteração lógica.

---

# ADRs

Toda decisão arquitetural relevante deverá ser registrada em uma nova ADR.

Não alterar ADRs aceitas para refletir mudanças de decisão. Quando necessário, criar uma nova ADR substituindo ou complementando a anterior.

---

# Documentação

Toda funcionalidade significativa deverá atualizar, quando aplicável:

- requisitos funcionais;
- regras de negócio;
- modelo de domínio;
- fluxo operacional;
- controle de acesso;
- arquitetura da interface;
- Design System.

A documentação é parte integrante da entrega.

---

# Testes

Quando a camada de testes for implementada, seguir a estratégia oficial definida para o projeto.

Até essa etapa, o desenvolvimento deverá priorizar componentes desacoplados e facilmente testáveis.

---

# Revisão de Código

Antes de considerar uma tarefa concluída, verificar:

- código legível;
- ausência de duplicação;
- responsabilidade única;
- nomenclatura consistente;
- aderência às ADRs;
- atualização da documentação;
- compilação sem erros.

---

# Filosofia

O ArteCelebração Hub é um projeto de longo prazo.

Toda implementação deve considerar não apenas a entrega imediata, mas também a facilidade de evolução, manutenção e compreensão por futuros desenvolvedores.

Sempre que possível, preferir soluções simples, bem documentadas e alinhadas às decisões arquiteturais do projeto.
