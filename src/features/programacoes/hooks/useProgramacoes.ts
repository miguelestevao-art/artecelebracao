"use client";

import { useMemo, useState } from "react";

import { programacoesMock } from "../mocks/programacoes.mock";

export function useProgramacoes() {
  const [search, setSearch] = useState("");

  const programacoes = useMemo(() => {
    return programacoesMock.filter((programacao) =>
      programacao.nome
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return {
    search,
    setSearch,
    programacoes,
  };
}
