# Design System — ArteCelebração Hub

## Objetivo

Este documento define os princípios, padrões visuais e componentes que compõem o Design System do ArteCelebração Hub.

Seu objetivo é garantir consistência visual, acessibilidade, escalabilidade e uma experiência de uso intuitiva para todos os perfis de usuários da plataforma.

Este documento é a principal referência para toda implementação de interface.

---

# Filosofia da Interface

A interface do ArteCelebração Hub deve transmitir:

- simplicidade;
- organização;
- confiança;
- modernidade;
- leveza;
- produtividade.

O sistema deve permitir que líderes e integrantes encontrem informações rapidamente, reduzindo distrações e destacando o que realmente importa para o ministério.

---

# Princípios de UX

Toda nova funcionalidade deverá respeitar os seguintes princípios.

## Clareza

O usuário deve compreender imediatamente o propósito da tela.

Evitar excesso de informações.

---

## Consistência

Botões, formulários, ícones, tabelas e navegação devem manter comportamento uniforme em toda a aplicação.

---

## Eficiência

As tarefas mais frequentes devem exigir o menor número possível de ações.

---

## Hierarquia Visual

As informações mais importantes devem receber maior destaque.

---

## Feedback

Toda ação do usuário deverá possuir retorno visual.

Exemplos:

- carregando;
- sucesso;
- erro;
- confirmação.

---

## Acessibilidade

Sempre que possível, os componentes deverão seguir boas práticas de acessibilidade (WCAG), aproveitando os recursos oferecidos pelo shadcn/ui.

---

# Identidade Visual

A identidade visual será construída utilizando Design Tokens centralizados.

Os tokens serão implementados através de variáveis CSS e Tailwind CSS.

---

# Paleta de Cores

A paleta oficial será definida posteriormente.

Inicialmente serão utilizados os seguintes grupos:

## Primárias

Representam identidade da aplicação.

---

## Secundárias

Elementos de apoio.

---

## Sucesso

Confirmações e estados positivos.

---

## Aviso

Alertas e atenção.

---

## Erro

Falhas e ações destrutivas.

---

## Informativas

Mensagens neutras e indicadores.

---

# Tipografia

Será utilizada a fonte Geist como padrão da aplicação.

Categorias:

- Heading
- Subheading
- Body
- Caption
- Small

---

# Espaçamentos

Será utilizada uma escala consistente de espaçamento.

Exemplo:

- XS
- SM
- MD
- LG
- XL
- 2XL

---

# Bordas

Os componentes deverão utilizar uma escala padronizada de arredondamento.

Categorias:

- Small
- Medium
- Large
- Extra Large

---

# Ícones

Biblioteca oficial:

Lucide Icons

Todos os ícones deverão utilizar a mesma biblioteca.

---

# Componentes Oficiais

Os componentes reutilizáveis serão construídos utilizando o shadcn/ui como base.

## Componentes Base

- Button
- Input
- Textarea
- Select
- Checkbox
- Switch
- Radio Group
- Badge
- Card
- Avatar
- Separator
- Tabs
- Tooltip
- Dialog
- Drawer
- Popover
- Dropdown Menu
- Toast
- Skeleton

---

## Componentes de Layout

- AppShell
- Header
- Sidebar
- PageContainer
- Section
- PageTitle
- Breadcrumb

---

## Componentes Compartilhados

- EmptyState
- Loading
- ErrorState
- ConfirmDialog
- SearchInput
- Pagination

---

## Componentes do Domínio

Serão implementados dentro de cada Feature.

Exemplos:

Biblioteca

- MusicCard
- MusicFilters

Programações

- ProgramacaoCard
- EscalaCard
- PreparacaoCard

Equipe

- ServoCard
- ConfirmacaoCard

---

# Estados dos Componentes

Todo componente interativo deverá prever:

- Default
- Hover
- Focus
- Active
- Disabled
- Loading
- Error
- Success

---

# Responsividade

O sistema deverá funcionar em:

- Desktop (principal)
- Tablet
- Smartphone

A prioridade inicial será Desktop.

---

# Tema

A aplicação deverá suportar:

- Light Mode
- Dark Mode

Mesmo que o Dark Mode não seja disponibilizado inicialmente ao usuário, toda implementação deverá ser compatível com ambos os temas.

---

# Navegação

A navegação será composta por:

- Header
- Sidebar
- Área de Conteúdo

A Sidebar poderá variar conforme o perfil do usuário.

---

# Convenções

## Componentes

PascalCase

Exemplo:

Button.tsx

MusicCard.tsx

ProgramacaoCard.tsx

---

## Hooks

camelCase iniciando com use.

Exemplo:

useAuth()

useProgramacoes()

---

## Services

Nome terminado em Service.

Exemplo:

auth.service.ts

biblioteca.service.ts

---

## Classes CSS

Sempre priorizar:

- Tailwind CSS
- Componentes do Design System

Evitar CSS isolado quando houver componente equivalente.

---

# Evolução

Este documento deverá evoluir continuamente ao longo do desenvolvimento do ArteCelebração Hub.

Novos componentes e padrões deverão ser registrados aqui antes de serem adotados em larga escala.
