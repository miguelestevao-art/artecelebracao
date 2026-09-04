# Design Tokens — ArteCelebração Hub

## Objetivo

Este documento define os Design Tokens oficiais do ArteCelebração Hub.

Os Design Tokens representam os valores fundamentais utilizados pela interface para garantir consistência visual, facilitar manutenção e permitir evolução da identidade do produto.

Nenhuma cor, espaçamento, raio ou sombra deverá ser utilizada diretamente na aplicação sem passar pelos tokens definidos neste documento.

---

# Filosofia

O ArteCelebração Hub adota uma interface baseada no conceito de **Quiet UI**, priorizando:

- simplicidade;
- legibilidade;
- consistência;
- baixa carga cognitiva;
- foco na informação.

Os tokens são a implementação técnica dessa filosofia.

---

# Token de Marca

A identidade institucional do ArteCelebração Hub utiliza um conjunto próprio de cores denominado **Brand**.

Esses tokens representam a identidade visual do ministério e deverão ser utilizados em todos os componentes principais da aplicação.

---

# Escala Brand

| Token | Hex | Uso |
|--------|------|------|
| brand-50 | #F0FAFC | Fundos suaves |
| brand-100 | #D8F2F7 | Cards informativos |
| brand-200 | #B6E4EE | Estados leves |
| brand-300 | #82D0DF | Elementos discretos |
| brand-400 | #43B4C9 | Hover leve |
| brand-500 | #0F6D86 | Cor institucional |
| brand-600 | #0C5E73 | Hover de botões |
| brand-700 | #094D5F | Sidebar |
| brand-800 | #063B4A | Menus escuros |
| brand-900 | #042A35 | Texto especial |
| brand-950 | #02181F | Fundo escuro |

---

# Superfícies

| Token | Hex |
|--------|------|
| background | #F8FAFC |
| surface | #FFFFFF |
| card | #FFFFFF |
| popover | #FFFFFF |

---

# Tipografia

## Texto Principal

```
#0F172A
```

---

## Texto Secundário

```
#64748B
```

---

## Texto Desabilitado

```
#94A3B8
```

---

# Bordas

| Token | Hex |
|--------|------|
| border-light | #E2E8F0 |
| border-default | #CBD5E1 |
| border-strong | #94A3B8 |

---

# Estados Semânticos

## Success

```
#16A34A
```

---

## Warning

```
#D97706
```

---

## Error

```
#DC2626
```

---

## Info

Utilizar:

```
brand-500
```

---

# Raios

| Token | Valor |
|--------|---------|
| radius-sm | 6px |
| radius-md | 10px |
| radius-lg | 16px |
| radius-xl | 24px |

---

# Espaçamento

| Token | Valor |
|--------|---------|
| space-xs | 4px |
| space-sm | 8px |
| space-md | 16px |
| space-lg | 24px |
| space-xl | 32px |
| space-2xl | 48px |
| space-3xl | 64px |

---

# Sombras

Inicialmente serão utilizadas as sombras padrão do Tailwind CSS.

Caso necessário, poderão ser criados tokens específicos futuramente.

---

# Ícones

Biblioteca oficial:

Lucide Icons

Não utilizar outras bibliotecas sem aprovação arquitetural.

---

# Tipografia

Fonte oficial:

Geist

Utilizar sempre a fonte padrão do projeto.

---

# Princípios de Uso

## Nunca utilizar

```css
background: #0F6D86;
```

ou

```tsx
className="bg-[#0F6D86]"
```

---

## Sempre utilizar

```css
var(--brand-500)
```

ou

```tsx
bg-brand
```

---

# Responsabilidades

Os Design Tokens representam a única fonte de verdade para valores visuais da aplicação.

Qualquer alteração visual relevante deverá ser realizada neste documento antes da implementação.

---

# Evolução

Novos tokens poderão ser adicionados conforme o crescimento da plataforma.

Alterações na identidade visual deverão preservar a consistência entre este documento, o Brand Book e o Design System.
