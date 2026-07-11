# Controle de Acesso

## Objetivo

Este documento define os perfis de acesso, permissões e princípios de segurança do ArteCelebração Hub.

---

# Princípios

O sistema separa claramente quatro conceitos distintos:

* Perfil de Acesso
* Especialidades Musicais
* Habilitações Ministeriais
* Participação na Programação

Cada um possui uma responsabilidade específica dentro da plataforma.

---

# Perfis de Acesso

## Administrador

Responsável pela gestão completa do sistema.

Permissões:

* Criar, editar e arquivar Programações.
* Gerenciar Integrantes.
* Gerenciar Catálogo de Músicas.
* Montar Repertórios.
* Montar Equipes de Servos.
* Definir Facilitadores.
* Definir Diretor Musical.
* Enviar solicitações de confirmação.
* Gerenciar usuários e permissões.
* Acessar relatórios.
* Configurar parâmetros do sistema.

---

## Integrante

Perfil padrão de todos os servos cadastrados.

Permissões:

* Visualizar suas Programações.
* Consultar Repertórios das Programações em que participa.
* Confirmar ou recusar participação.
* Consultar observações da Programação.

---

# Perfis previstos para futuras versões

## Líder de Louvor

Permissões previstas:

* Sugerir repertórios.
* Editar repertórios autorizados.
* Inserir observações musicais.
* Organizar a sequência das músicas.

---

## Diretor Musical

Permissões previstas:

* Inserir observações técnicas.
* Informar tonalidade sugerida.
* Informar andamento (BPM).
* Registrar transições.
* Registrar observações para instrumentistas.

---

# Especialidades Musicais

As especialidades representam as capacidades musicais do integrante.

Exemplos:

* Tenor
* Contralto
* Soprano
* Violonista
* Guitarrista
* Baixista
* Tecladista
* Pianista
* Baterista
* Percussionista

Um integrante poderá possuir diversas especialidades.

---

# Habilitações Ministeriais

Representam autorizações concedidas pela liderança do ministério.

Inicialmente:

* Facilitador
* Diretor Musical

A habilitação apenas autoriza o integrante a exercer determinada função quando for designado para uma Programação.

Ela não determina sua atuação em todas as Programações.

---

# Participação na Programação

Cada Programação define como o integrante atuará.

A participação registra:

* Especialidades utilizadas.
* Papel exercido.
* Status da confirmação.
* Observações específicas.

Um integrante poderá exercer mais de uma especialidade na mesma Programação.

---

# Regras de Segurança

## MVP

Somente Administradores poderão:

* criar Programações;
* editar Programações;
* montar Repertórios;
* montar Equipes de Servos;
* cadastrar Integrantes;
* cadastrar músicas.

Os Integrantes terão acesso apenas às informações relacionadas às Programações das quais participam.

---

# Evolução

A arquitetura deverá permitir a ampliação das permissões sem necessidade de alterações estruturais no banco de dados.

Novos perfis poderão ser adicionados futuramente mantendo compatibilidade com as versões anteriores.
