"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import EmptyState from "@/components/shared/EmptyState";
import PageActions from "@/components/shared/PageActions";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import SearchInput from "@/components/shared/SearchInput";
import SectionCard from "@/components/shared/SectionCard/SectionCard";

import ProgramacoesTable from "@/features/programacoes/components/ProgramacoesTable";
import { useProgramacoes } from "@/features/programacoes/hooks/useProgramacoes";

export default function ProgramacoesPage() {
  const {
    search,
    setSearch,
    programacoes,
  } = useProgramacoes();

  return (
    <>
      <PageHeader
        title="Programações"
        description="Gerencie todas as programações do ministério."
      />

      <PageActions>
        <SearchInput
          value={search}
          placeholder="Pesquisar programação..."
          onChange={setSearch}
        />

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nova Programação
        </Button>
      </PageActions>

      <SectionCard>
        {programacoes.length === 0 ? (
          <EmptyState
            title="Nenhuma programação encontrada"
            description="Cadastre a primeira programação para iniciar o planejamento ministerial."
          />
        ) : (
          <ProgramacoesTable
            programacoes={programacoes}
          />
        )}
      </SectionCard>
    </>
  );
}
