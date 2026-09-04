import { Badge } from "@/components/ui/badge";

type Status =
  | "rascunho"
  | "planejamento"
  | "equipe"
  | "confirmacoes"
  | "preparacao"
  | "realizada"
  | "arquivada";

interface StatusBadgeProps {
  status: Status;
}

const statusConfig = {
  rascunho: {
    label: "Rascunho",
    className: "bg-gray-200 text-gray-700",
  },
  planejamento: {
    label: "Planejamento",
    className: "bg-blue-100 text-blue-700",
  },
  equipe: {
    label: "Equipe Montada",
    className: "bg-yellow-100 text-yellow-800",
  },
  confirmacoes: {
    label: "Confirmações",
    className: "bg-orange-100 text-orange-700",
  },
  preparacao: {
    label: "Preparação",
    className: "bg-purple-100 text-purple-700",
  },
  realizada: {
    label: "Realizada",
    className: "bg-green-100 text-green-700",
  },
  arquivada: {
    label: "Arquivada",
    className: "bg-zinc-300 text-zinc-700",
  },
};

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <Badge className={config.className}>
      {config.label}
    </Badge>
  );
}
