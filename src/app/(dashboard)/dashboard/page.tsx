import PageHeader from "@/components/shared/PageHeader/PageHeader";
import SectionCard from "@/components/shared/SectionCard/SectionCard";
import StatCard from "@/components/shared/StatCard/StatCard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard"
        description="Bem-vindo ao ArteCelebração Hub."
      />

      <SectionCard title="Próxima programação">
        <div className="space-y-2">
          <p className="font-medium">
            Nenhuma programação cadastrada.
          </p>

          <p className="text-sm text-muted-foreground">
            Quando a primeira programação for criada, ela aparecerá aqui com
            informações como data, horário, contexto, tema e equipe escalada.
          </p>
        </div>
      </SectionCard>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Programações"
          value="0"
          description="Cadastradas"
        />

        <StatCard
          title="Biblioteca Musical"
          value="0"
          description="Músicas"
        />

        <StatCard
          title="Equipe de Servos"
          value="0"
          description="Integrantes"
        />

        <StatCard
          title="Contextos"
          value="0"
          description="Ativos"
        />
      </section>

      <SectionCard title="Atividades recentes">
        <p className="text-muted-foreground">
          Ainda não existem atividades registradas.
        </p>
      </SectionCard>
    </div>
  );
}
