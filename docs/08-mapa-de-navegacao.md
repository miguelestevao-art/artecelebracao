# 08 - Mapa de Navegação

## Objetivo

Definir a estrutura de navegação do ArteCelebração Hub, organizando os módulos de negócio, páginas e relacionamentos entre as principais áreas do sistema.

---

# Princípios

## Navegação orientada por domínio

Os menus representam módulos de negócio.

As páginas representam ações e operações dentro desses módulos.

## Experiência orientada por perfil

Após o login, cada perfil acessa uma experiência adequada às suas responsabilidades:

* Administrador
* Líder de Louvor / Diretor Musical
* Integrante

## Escalabilidade

A estrutura deve permitir a inclusão de novos módulos sem necessidade de reorganização completa da navegação.

---

# Estrutura Geral

```text
ArteCelebração Hub
│
├── Login
│
├── Dashboard
│   ├── Dashboard do Administrador
│   ├── Dashboard do Líder
│   └── Dashboard do Integrante
│
├── Programações
│   ├── Lista de Programações
│   ├── Calendário
│   ├── Nova Programação
│   ├── Detalhes da Programação
│   └── Histórico
│
├── Biblioteca Musical
│   ├── Catálogo de Músicas
│   ├── Nova Música
│   ├── Detalhes da Música
│   ├── Arquivos e Referências
│   └── Histórico de Utilização
│
├── Equipe
│   ├── Integrantes
│   ├── Perfil do Integrante
│   ├── Funções Ministeriais
│   └── Histórico Ministerial
│
├── Contextos
│   ├── Lista de Contextos
│   ├── Detalhes do Contexto
│   └── Configurações do Contexto
│
├── Inteligência Ministerial
│   ├── Indicadores
│   ├── Estatísticas
│   ├── Frequência de Escalas
│   ├── Uso de Músicas
│   └── Relatórios
│
├── Meu Perfil
│   ├── Dados Pessoais
│   ├── Minhas Escalas
│   ├── Minhas Confirmações
│   └── Preferências
│
└── Administração
    ├── Usuários
    ├── Perfis de Acesso
    ├── Permissões
    └── Configurações Gerais
```

---

# Fluxo Principal

```text
Login
│
└── Dashboard (conforme perfil)
     │
     ├── Programações
     ├── Biblioteca Musical
     ├── Equipe
     ├── Contextos
     ├── Inteligência Ministerial
     ├── Meu Perfil
     └── Administração
```

---

# Observações

* O Dashboard é o ponto de entrada principal após autenticação.
* O menu lateral será adaptado conforme o perfil do usuário.
* Todas as funcionalidades devem pertencer a um módulo de negócio claramente definido.
* Novos módulos deverão ser avaliados em relação aos três pilares estratégicos do produto antes de serem incorporados à navegação.
