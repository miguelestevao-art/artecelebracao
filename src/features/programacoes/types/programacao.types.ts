export type ProgramacaoStatus =
  | "rascunho"
  | "planejamento"
  | "equipe"
  | "confirmacoes"
  | "preparacao"
  | "realizada"
  | "arquivada";

export interface Programacao {
  id: string;

  nome: string;

  contexto: string;

  data: string;

  horario: string;

  local: string;

  tema: string;

  textoBase: string;

  referenciaBiblica: string;

  status: ProgramacaoStatus;
}
