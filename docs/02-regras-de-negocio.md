# Regras de Negócio

## Objetivo

Este documento descreve todas as regras que representam o funcionamento do ministério ArteCelebração e que deverão ser respeitadas pelo sistema.

---

# RN-01 — Estrutura Ministerial

1. Todos os integrantes pertencem ao ministério ArteCelebração.
2. O ArteCelebração apoia diferentes contextos de programação da igreja.
3. Cada programação pertence a um único contexto.
4. Uma programação pode possuir um título personalizado.

---

# RN-02 — Programações

1. Toda programação deverá possuir data.
2. Toda programação deverá possuir horário.
3. Toda programação deverá possuir contexto.
4. O tema deverá ser informado antes da conclusão do planejamento.
5. Pregador, Referência Bíblica e Direcionamento Musical são opcionais.

---

# RN-03 — Integrantes

1. Um integrante poderá possuir uma ou mais especialidades musicais.
2. Um integrante poderá atuar em mais de uma especialidade na mesma programação.
3. Um integrante poderá ser inativado sem perda de histórico.

---

# RN-04 — Habilitações Ministeriais

1. Facilitador é uma habilitação ministerial.
2. Diretor Musical é uma habilitação ministerial.
3. Apenas integrantes habilitados poderão exercer essas funções.

---

# RN-05 — Equipe de Servos

1. Toda programação deverá possuir pelo menos um Facilitador.
2. Uma programação poderá possuir mais de um Facilitador.
3. O Diretor Musical é opcional.
4. Quando existir Diretor Musical, deverá existir apenas um.
5. O Diretor Musical deverá ser obrigatoriamente um instrumentista.
6. Um integrante poderá cantar e tocar na mesma programação.
7. Um integrante poderá exercer papel de liderança e executar uma especialidade musical simultaneamente.

---

# RN-06 — Repertório

1. Uma música poderá ser utilizada em diversas programações.
2. O repertório pertence exclusivamente à programação.
3. Alterações no repertório não deverão modificar o catálogo de músicas.

---

# RN-07 — Confirmações

1. Todo integrante escalado poderá confirmar ou recusar sua participação.
2. O histórico das confirmações deverá ser preservado.

---

# RN-08 — Controle de Acesso

1. No MVP, apenas Administradores poderão:

   * criar programações;
   * editar programações;
   * montar repertórios;
   * montar Equipes de Servos;
   * cadastrar integrantes;
   * cadastrar músicas.

2. Integrantes poderão visualizar apenas as informações relacionadas às programações das quais fazem parte.

3. A arquitetura deverá permitir expansão futura para novos perfis de acesso sem necessidade de alteração do modelo de dados.

---

# RN-09 — Histórico

1. Nenhuma programação realizada deverá ser excluída.
2. O histórico ministerial deverá ser preservado.
3. Alterações importantes deverão permanecer registradas para consulta futura.

---

# RN-10 — Evolução da Plataforma

O sistema deverá ser desenvolvido de forma incremental.

Funcionalidades futuras deverão poder ser adicionadas sem comprometer a arquitetura existente.
