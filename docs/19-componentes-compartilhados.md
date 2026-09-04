# 19 — Componentes Compartilhados

## Objetivo

Padronizar os componentes reutilizáveis da aplicação.

Esses componentes representam o Design System do ArteCelebração Hub acima da camada do shadcn/ui.

---

# Hierarquia

shadcn/ui

↓

Componentes Compartilhados

↓

Componentes dos Módulos

↓

Páginas

---

# Componentes

## EmptyState

Exibido quando não existem registros.

Exemplos:

- Nenhuma programação encontrada
- Nenhuma música cadastrada
- Nenhum integrante encontrado

Possui:

- ilustração
- título
- descrição
- botão principal

---

## PageActions

Agrupa ações principais da página.

Exemplo:

[ Nova Programação ]

[ Exportar ]

[ Filtrar ]

---

## SearchInput

Campo de pesquisa padrão.

Utilizado em todos os módulos.

---

## StatusBadge

Badge padronizado para estados.

Exemplos:

- Rascunho
- Planejamento
- Confirmado
- Recusado
- Ativo
- Arquivado

---

## InfoItem

Exibe pares:

Título

Valor

Exemplo:

Contexto

Tenda

---

## ContentSection

Substitui divisões simples.

Possui:

- título
- descrição
- conteúdo

---

## LoadingState

Estado de carregamento.

Utilizar Skeleton.

Nunca utilizar spinner em páginas completas.

---

## ConfirmDialog

Caixa de confirmação padrão.

Exemplos:

Excluir

Arquivar

Cancelar

---

## AppBreadcrumb

Breadcrumb padrão.

Exemplo:

Dashboard

>

Programações

>

Nova

---

# Benefícios

- consistência visual

- redução de código

- manutenção simplificada

- facilidade de evolução
