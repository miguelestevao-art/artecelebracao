# Continuação do Projeto — ArteCelebração Hub

Assuma o papel de **Arquiteto de Software, Tech Lead, Product Manager, UX Designer e Mentor Técnico** durante todo este projeto.

Estamos desenvolvendo o **ArteCelebração Hub**, uma plataforma web para gestão ministerial do ministério de música da minha igreja.

Não quero apenas respostas para dúvidas. Quero uma mentoria profissional, conduzindo o desenvolvimento passo a passo, explicando decisões arquiteturais, propondo melhorias e garantindo que o projeto siga boas práticas de engenharia de software.

## Tecnologias

* Next.js (App Router)
* TypeScript
* React
* Firebase Authentication
* Cloud Firestore
* Firebase Hosting (futuramente)
* Git
* GitHub
* VS Code
* Windows 11

## Estrutura atual

O projeto já foi criado, inicializado com Git e publicado no GitHub.

A documentação oficial encontra-se na pasta docs/ e deve ser considerada a principal fonte de verdade do projeto.

Os principais documentos são:

* 00-visao-do-projeto.md
* 01-pilares-do-produto.md
* 02-requisitos-funcionais.md
* 03-regras-de-negocio.md
* 04-modelo-de-dominio.md
* 05-fluxo-operacional.md
* 06-controle-de-acesso.md
* 07-modelo-conceitual.md

Também utilizamos ADRs para registrar decisões arquiteturais.

## Filosofia do Produto

O sistema possui três pilares estratégicos:

1. Gestão da Equipe de Servos.
2. Inteligência de Repertório.
3. Inteligência Ministerial.

Toda nova funcionalidade deve fortalecer pelo menos um desses pilares.

## Conceitos importantes do domínio

* Todos pertencem ao ministério ArteCelebração.
* O ArteCelebração atende diferentes Contextos (Tenda, GF, CR, Somos Atos, Radical, SAL, A2, Mulhé, Seji Homi, EDL etc.).
* Cada Programação pertence a um Contexto.
* Uma Programação possui Mensagem, Repertório, Equipe de Servos e Preparações.
* Preparações podem ser do tipo Ensaio ou Passagem de Som.
* O catálogo de músicas será uma Biblioteca Musical, contendo metadados, palavras-chave, referências bíblicas e links para arquivos (partituras, cifras, playback, multitracks, vídeos etc.).
* As observações específicas de execução pertencem à Programação, não ao cadastro da música.

## Controle de acesso

Existem três experiências principais:

* Administrador (gestão completa).
* Líder de Louvor / Diretor Musical (permissões futuras e específicas).
* Integrante (consulta, confirmação e acompanhamento das próprias programações).

Os dashboards e a experiência de uso devem ser diferentes para cada perfil.

## Forma de trabalho

Conduza a mentoria em pequenos passos.

Sempre explique o motivo técnico das decisões.

Não avance para a próxima etapa sem minha confirmação.

Sempre que identificar uma melhoria arquitetural, proponha-a antes de implementá-la.

Considere que este projeto possui potencial para crescer e atender o ministério por muitos anos.

## Próxima etapa

Quero iniciar a modelagem das telas (wireframes), seguida pela modelagem do Firestore e, posteriormente, iniciar a implementação do sistema.

Perfeito. A sequência que você propôs faz bastante sentido e está alinhada com a forma como equipes de produto costumam desenvolver sistemas que terão vida longa.

A única alteração que eu faria na ordem é uma pequena, mas importante:

Documentação → Wireframes → Modelo de Dados → Arquitetura Front-end → Implementação

Em outras palavras, não começaria a programar imediatamente após os wireframes. Antes disso, definiríamos a estrutura do Firestore e também a arquitetura da aplicação (rotas, componentes, organização das pastas, serviços, hooks, etc.). Isso evita retrabalho.

A visão que teremos ao final

Nossa documentação ficará aproximadamente assim:

docs/

00-visao-do-projeto.md
01-pilares-do-produto.md
02-requisitos-funcionais.md
03-regras-de-negocio.md
04-modelo-de-dominio.md
05-fluxo-operacional.md
06-controle-de-acesso.md
07-modelo-conceitual.md

08-wireframes/
    dashboard-admin.md
    dashboard-integrante.md
    dashboard-lider.md
    programacoes.md
    programacao-detalhes.md
    biblioteca-musical.md
    musica.md
    equipe.md
    perfil.md
    configuracoes.md

09-modelagem-firestore.md

10-arquitetura-frontend.md

11-roadmap.md

adr/

Isso cria uma documentação bastante próxima da utilizada em projetos profissionais.

Como construiremos os Wireframes

Não vamos desenhar telas bonitas neste momento.

Vamos modelar a experiência.

Cada documento responderá cinco perguntas.

1. Objetivo da tela

Exemplo

Esta tela permite ao integrante visualizar suas próximas escalas e confirmar presença.

2. Quem acessa

Exemplo

Administrador

Integrante

Líder
3. Componentes da tela

Exemplo

Header

Menu lateral

Cards

Tabela

Filtros

Botões

Busca
4. Fluxos possíveis

Exemplo

Entrar

Pesquisar

Abrir Programação

Confirmar presença

Ver repertório
5. Regras

Exemplo

Se estiver sem internet...

Se a programação estiver cancelada...

Se não houver repertório...

Se estiver vencida...

Depois transformaremos isso em interfaces reais.

A primeira tela

Existe uma decisão importante de UX antes de desenharmos qualquer outra tela.

Qual é a primeira tela após o login?

Essa decisão influencia praticamente toda a navegação do sistema.

Hoje eu vejo três possibilidades.

Opção A — Dashboard
Entrou

↓

Dashboard

No dashboard aparecem:

próximas programações
notificações
atalhos
confirmações
aniversariantes
indicadores

É o padrão da maioria dos sistemas modernos.

Opção B — Programações
Entrou

↓

Lista de Programações

Mais simples.

O usuário entra diretamente no calendário das escalas.

Opção C — Dashboard personalizado por perfil

Administrador

Login

↓

Dashboard Administrativo

Integrante

Login

↓

Meu Ministério

Líder

Login

↓

Dashboard de Liderança

Cada perfil possui uma experiência diferente.

Minha recomendação

Eu escolheria a Opção C.

Ela conversa diretamente com um dos pilares do ArteCelebração Hub: oferecer experiências diferentes conforme o papel do usuário.

Na prática:

Integrante

Abre algo como:

Bom dia, Miguel

Próxima programação

Confirmar presença

Meu repertório

Meus ensaios

Avisos

Escalas futuras

Tudo pensado para quem participa das programações.

Líder

Além do que o integrante vê:

Pendências

Confirmações

Equipe incompleta

Preparações

Próximas programações

Atalhos para montar equipes

Focado na coordenação das atividades sob sua responsabilidade.

Administrador

Uma visão operacional completa:

Programações

Equipe

Biblioteca Musical

Indicadores

Usuários

Configurações

Alertas

Pendências

Voltado à gestão global do ministério.

A proposta de organização dos wireframes

Em vez de começarmos pela tela de login, sugiro iniciar pelo núcleo do produto:

Dashboard do Administrador
Dashboard do Integrante
Dashboard do Líder
Lista de Programações
Detalhes da Programação
Biblioteca Musical
Detalhes da Música
Equipe de Servos
Perfil do Usuário
Configurações

Essa ordem acompanha o fluxo natural de uso e facilita validar a experiência antes da implementação.

Uma melhoria arquitetural que proponho desde já

Antes de desenhar qualquer tela, gostaria de acrescentar um documento que costuma fazer muita diferença em projetos de longo prazo:

08-mapa-de-navegacao.md (ou 08-sitemap.md)

Ele descreveria todas as páginas da aplicação e como elas se conectam, por exemplo:

Login
│
├── Dashboard (varia por perfil)
│   ├── Programações
│   │   ├── Detalhes da Programação
│   │   └── Preparações
│   ├── Biblioteca Musical
│   │   └── Música
│   ├── Equipe
│   │   └── Integrante
│   ├── Meu Perfil
│   └── Configurações

Esse mapa servirá de ponte entre a documentação funcional e a implementação no Next.js App Router, pois praticamente se transforma na futura estrutura de rotas (app/dashboard, app/programacoes, app/biblioteca, etc.), reduzindo ambiguidades quando começarmos a codificar.

Se concordar, eu começaria por esse Mapa de Navegação e só então seguiríamos para o primeiro wireframe: o Dashboard do Administrador. Isso nos dará uma base sólida para todo o restante do projeto.

Vamos prosseguir. Enviarei a árvore de pastas em formato de print. Caso não esteja bem definido ou faltando informação, me informe imediatamente de forma suscinta e me peça para reenviar.  Sobre as outras informações, me sinalize para enviar.
Print da pasta src

Conteúdo package.json:

{
  "name": "artecelebracao",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "next": "16.2.10",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.10",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

Conteúdo tsconfig.json:

{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}


Perfeito. Segue print:
Perfeito. Segue estrutura:
Enviarei algumas fotos e quero que você pondere sobre a identidade visual do ArteCelebração:
Uma observação: Os arquivos AppShell.tsx, Header.tsx e Sidebar.tsx já haviam sido criados em uma etapa e já possuem linha de código.

AppShell.tsx, conteúdo:
import { ReactNode } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />

      <div
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        <Sidebar />

        <main
          style={{
            flex: 1,
            padding: "24px",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
Header.tsx, conteúdo:
export default function Header() {
  return (
    <header
      style={{
        height: "64px",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        fontWeight: 600,
      }}
    >
      ArteCelebração Hub
    </header>
  );
}
Sidebar.tsx, conteúdo:
const menuItems = [
  "Dashboard",
  "Programações",
  "Biblioteca Musical",
  "Equipe",
  "Contextos",
];

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "240px",
        borderRight: "1px solid #e5e7eb",
        padding: "24px",
      }}
    >
      <nav>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {menuItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

Segue também print da estrutura:


StatCard gerado. Uma observação: A sequência de nossa documentação está atualmente assim conforme print:

Perfeito. Vamos organizar. Segue conteúdo do arquivo AppShell.tsx:

import { ReactNode } from "react";

import PageContainer from "../PageContainer";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({
  children,
}: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <PageContainer>
          {children}
        </PageContainer>
      </div>
    </div>
  );
}
Segue também estrutura de pastas e arquivos de layout.

Obs.: Não sei se você consegue diferenciar cores, mas há arquivos e pastas na cor verde e arquivos na cor laranja. O que significa? Outra dúvida é quando lanço o comando npm run dev, não consigo mais escrever. Como conseguir escrever novamente no mesmo terminal?


Excelente. Esse documento está muito bom e, mais importante, está alinhado com a arquitetura que construímos. Não faz sentido descartá-lo.

Minha recomendação é a opção 2: atualizar parcialmente.

O que manter

Eu manteria praticamente tudo:

✅ Objetivo
✅ Responsabilidades
✅ Informações principais
✅ Fluxo de status
✅ Objetivo da interface
✅ Próximas telas

Esses tópicos continuam corretos.

O que eu acrescentaria

Ao longo do desenvolvimento, amadurecemos alguns conceitos que ainda não aparecem nesse documento.

A principal evolução é que percebemos que uma Programação não deve estar ligada diretamente ao repertório, mas sim a blocos da programação.

Isso torna o sistema muito mais flexível.

Por exemplo:

Culto Domingo Manhã
│
├── Recepção
├── Louvor Inicial
│      ├── Música 1
│      ├── Música 2
│      └── Música 3
├── Avisos
├── Mensagem
├── Santa Ceia
├── Louvor Final
│      ├── Música 4
│      └── Música 5
└── Encerramento

Ou então:

Somos Atos
│
├── Abertura
├── Louvor
├── Teatro
├── Mensagem
└── Ministração Final

Perceba que o mesmo modelo atende diferentes tipos de programação sem criar exceções.

Atualização sugerida

Eu acrescentaria ao documento uma nova seção logo após Relacionamentos.

---

# Estrutura Interna

Uma Programação poderá ser organizada em blocos.

Exemplos de blocos:

- Recepção
- Louvor Inicial
- Avisos
- Mensagem
- Santa Ceia
- Louvor Final
- Encerramento

Cada bloco poderá possuir características próprias e, quando aplicável, um repertório específico.

Essa abordagem torna o sistema flexível para atender diferentes tipos de eventos ministeriais, como cultos dominicais, encontros de jovens, retiros, conferências e demais programações da igreja.

---

# Modelo Conceitual

Programação

↓

Blocos

↓

Repertório

↓

Equipe de Servos
Outra atualização

Na seção Relacionamentos, eu faria um pequeno ajuste.

Hoje está:

Uma programação possui:

- repertório
- equipe de servos
- observações
- histórico

Eu alteraria para:

Uma programação possui:

- blocos
- equipe de servos
- observações
- histórico

Cada bloco poderá possuir:

- repertório
- facilitador
- diretor musical
- observações específicas

Essa mudança reflete melhor a arquitetura que queremos construir.

Uma decisão de produto

Gostaria de aproveitar este momento para propor uma decisão que considero uma das mais importantes do projeto.

Até agora temos tratado a Programação como o centro do sistema, e isso continua sendo verdade. Porém, acredito que podemos definir com mais clareza o papel de cada entidade principal:

Entidade	Responsabilidade
Programação	O evento ministerial (culto, encontro, conferência etc.)
Bloco	Uma etapa ou momento dentro da programação (louvor, mensagem, avisos...)
Repertório	O conjunto de músicas associado a um bloco específico
Equipe de Servos	As pessoas escaladas para servir na programação
Biblioteca Musical	O catálogo mestre de músicas da igreja

Perceba que isso forma uma hierarquia bem definida:

Programação
│
├── Blocos
│     ├── Repertório
│     │      ├── Música 1
│     │      ├── Música 2
│     │      └── Música 3
│     └── Responsáveis
│
├── Equipe de Servos
│
└── Histórico

Na minha visão, essa modelagem será um dos grandes diferenciais do ArteCelebração Hub. Ela permite representar desde um culto simples até eventos muito mais complexos, sem alterar a estrutura do sistema. Além disso, facilita futuras funcionalidades, como cronogramas detalhados, ordem de execução, duração dos blocos e planejamento integrado de toda a programação.

Acredito que vale a pena adotarmos essa arquitetura agora, antes de começarmos a implementar o CRUD de Programações, porque ela servirá de base para praticamente todos os módulos do sistema.

Vamos prosseguir

Perfeito. Agora começamos a fase que, na minha opinião, será a mais importante do projeto. E quero mudar um pequeno detalhe na nossa metodologia.

Até aqui, construímos código.

Daqui para frente, vamos construir domínio.

Essa diferença é enorme.

Um sistema como o ArteCelebração Hub terá vida longa. A qualidade dele dependerá muito mais da modelagem do domínio do que das telas.

Sprint 1 — Modelagem do Domínio

Antes de criarmos qualquer coleção no Firestore ou qualquer CRUD, quero definir o modelo de negócio.

Essa será nossa "planta baixa".

Primeiro Diagrama

Quero que criemos o documento:

docs/21-modelo-de-dominio-programacoes.md

Conteúdo:

# 21 — Modelo de Domínio — Programações

## Objetivo

Definir as principais entidades do módulo Programações e seus relacionamentos.

Este documento servirá como base para a modelagem do Firestore, implementação dos serviços e construção das interfaces.

---

# Entidades

## Programação

Representa um evento ministerial.

Exemplos:

- Culto Domingo Manhã
- Culto Domingo Noite
- Somos Atos
- Radical
- GF
- CR
- SAL
- EDL

Uma programação concentra todo o planejamento do evento.

---

## Bloco

Representa um momento específico dentro da programação.

Exemplos:

- Recepção
- Louvor Inicial
- Avisos
- Mensagem
- Santa Ceia
- Louvor Final
- Encerramento

Cada bloco possui finalidade própria.

---

## Repertório

Representa o conjunto de músicas executadas em um bloco.

Um bloco poderá possuir:

- nenhuma música;
- uma música;
- diversas músicas.

---

## Música

Representa uma música cadastrada na Biblioteca Musical.

A música pertence apenas à Biblioteca Musical.

A programação apenas referencia músicas existentes.

---

## Equipe de Servos

Representa as pessoas escaladas para servir em uma programação.

Inclui:

- vocalistas
- instrumentistas
- facilitadores
- diretor musical
- técnico de áudio (futuramente)
- mídia (futuramente)

---

# Relacionamentos

Programação

↓

possui

↓

Blocos

↓

cada bloco possui

↓

Repertório

↓

composto por

↓

Músicas

---

Programação

↓

possui

↓

Equipe de Servos

---

# Observações

As músicas nunca serão copiadas para uma programação.

A programação armazenará apenas referências às músicas cadastradas na Biblioteca Musical.
A primeira decisão de arquitetura do domínio

Quero propor uma decisão que vai influenciar praticamente todo o restante do projeto.

Minha proposta

A Programação deve funcionar como um agregador de informações.

Ela não será dona das entidades.

Ela apenas fará referência a elas.

Ou seja:

Programação

↓

referencia

↓

Biblioteca Musical

↓

Equipe

↓

Contextos

Isso significa que:

uma música existe apenas uma vez na Biblioteca Musical;
um servo existe apenas uma vez na Equipe;
um contexto existe apenas uma vez;
uma programação apenas aponta para esses registros.

Esse conceito evita duplicação de dados e mantém o sistema consistente.

Um exemplo prático

Imagine que a música Bondade de Deus tenha sua tonalidade atualizada.

Se copiássemos a música para cada programação, precisaríamos atualizar dezenas de registros.

Com referências, atualizamos apenas um cadastro na Biblioteca Musical, e todas as programações passam a utilizar a informação atualizada.

Uma observação importante

Há apenas um ponto em que eu faria uma ressalva.

Embora a programação deva referenciar a música da Biblioteca, algumas informações precisam ficar congeladas no momento da escala.

Por exemplo:

tonalidade utilizada naquele culto;
andamento escolhido;
observações específicas ("iniciar somente piano", "modulação no refrão", etc.).

Esses dados pertencem à execução daquela programação, não ao cadastro permanente da música.

Assim, teremos dois níveis de informação:

Biblioteca Musical → dados permanentes da música.
Programação → dados específicos daquela execução.

Essa distinção é muito importante e evitará vários problemas no futuro.

Próximo passo

Depois que esse documento estiver criado, entraremos em uma etapa que considero uma das mais interessantes do projeto: desenhar o modelo do Firestore.

Vamos definir as coleções, documentos, subcoleções e referências antes de criar qualquer código. Com essa base, a implementação será muito mais segura e coerente, e teremos um banco de dados preparado para crescer junto com o ArteCelebração Hub.

hoje 12:15
Antes de prosseguirmos, quero tirar algumas dúvidas. Em qual linguagem está sendo construída essa aplicação? Atualmente temos um aplicativo (na igreja onde trabalho) que foi construído utilizando React com Tailwind. Também utiliza nest e temos um banco de dados chamado colyfi dentro de uma VPS.

Essa é uma excelente pergunta e, na verdade, é um ótimo momento para esclarecermos isso antes de avançarmos. Entender a stack ajuda a tomar decisões melhores e também facilita conversar com a equipe de TI da sua igreja.

Em qual linguagem o ArteCelebração Hub está sendo construído?

Na prática, o projeto utiliza TypeScript como linguagem principal.

O restante é o ecossistema em volta dela.

Front-end
TypeScript (linguagem)
React 19 (biblioteca de interface)
Next.js 16 (framework baseado em React)
Tailwind CSS v4 (estilização)
shadcn/ui (biblioteca de componentes)

Ou seja, quando você abre um arquivo como:

export default function Dashboard() {
  return (
    <div>
      Dashboard
    </div>
  );
}

Esse arquivo é um componente React, escrito em TypeScript, utilizando a sintaxe TSX (TypeScript + JSX).

E o back-end?

Aqui está uma diferença importante em relação ao aplicativo da sua igreja.

No ArteCelebração Hub não existe um back-end tradicional.

Estamos utilizando:

Firebase Authentication
Cloud Firestore

Ou seja:

React
      ↓
Next.js
      ↓
Firebase
      ↓
Firestore

Em vez de:

React
      ↓
API NestJS
      ↓
PostgreSQL/MySQL
Comparando com o aplicativo da sua igreja

Pelo que você descreveu, o aplicativo utiliza algo parecido com isto:

React
      ↓
NestJS
      ↓
Banco de dados (Colyfi?)
      ↓
VPS

Tenho uma observação sobre o banco de dados.

Você mencionou:

"banco de dados chamado colyfi"

Acredito que pode haver um pequeno equívoco no nome.

É possível que seja:

PostgreSQL
MySQL
MariaDB
MongoDB

E "Colyfi" seja o nome interno do banco, do projeto ou da aplicação.

Se você puder confirmar depois, será interessante.

Diferença arquitetural
Aplicativo da igreja
React

↓

NestJS

↓

Banco SQL

↓

Servidor VPS

O NestJS faz toda a lógica.

ArteCelebração Hub
Next.js

↓

Firebase Auth

↓

Firestore

↓

Hosting Firebase

Grande parte da lógica fica distribuída entre:

Front-end
Firestore
Regras de segurança do Firebase (quando as implementarmos)

Isso reduz bastante a necessidade de manter um servidor próprio.

E o Next.js?

Muita gente pensa que o Next.js é apenas React.

Na verdade:

Next.js

contém

↓

React

É como dizer:

React é o motor.

Next.js é o carro inteiro.

O Next.js oferece recursos adicionais, como:

roteamento automático;
renderização no servidor (SSR);
geração de páginas estáticas;
Server Components;
API Routes (caso precisemos);
otimizações de desempenho.
O que aconteceria se usássemos NestJS?

Se optássemos por uma arquitetura semelhante à do aplicativo da sua igreja, teríamos algo assim:

Next.js

↓

NestJS

↓

PostgreSQL

↓

Servidor VPS

É uma arquitetura excelente, mas também mais complexa de desenvolver e manter.

Você teria que cuidar de:

servidor;
API;
autenticação;
banco de dados;
deploy do back-end;
deploy do front-end;
backups;
monitoramento.
Por que escolhemos Firebase?

Lá no início do projeto, nossa decisão foi baseada em alguns critérios:

desenvolvimento mais rápido;
menor custo operacional;
excelente integração com React/Next.js;
autenticação pronta;
banco em tempo real;
escalabilidade;
praticamente nenhuma administração de infraestrutura.

Para um sistema como o ArteCelebração Hub, essa escolha faz bastante sentido.

Uma observação pensando no futuro

Quero comentar algo que pode ser relevante para você, já que existe um aplicativo na sua igreja.

Se esse aplicativo já utiliza React e NestJS, existe uma vantagem importante: o conhecimento da equipe é bastante compatível com o nosso projeto.

Mesmo que o back-end seja diferente (Firebase em vez de NestJS), os desenvolvedores já estarão familiarizados com conceitos como:

React;
TypeScript;
componentes;
hooks;
Tailwind CSS.

Isso reduz bastante a curva de aprendizado caso, no futuro, vocês queiram integrar o ArteCelebração Hub ao ecossistema existente ou compartilhar componentes, estilos e até parte da lógica de interface. A principal diferença estará na camada de dados e autenticação, não na forma de construir a aplicação em si.
