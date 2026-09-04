import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import StatusBadge from "@/components/shared/StatusBadge";

import { Programacao } from "../../types/programacao.types";

interface ProgramacoesTableProps {
  programacoes: Programacao[];
}

export default function ProgramacoesTable({
  programacoes,
}: ProgramacoesTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Contexto</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {programacoes.map((programacao) => (
          <TableRow key={programacao.id}>
            <TableCell>{programacao.nome}</TableCell>
            <TableCell>{programacao.contexto}</TableCell>
            <TableCell>{programacao.data}</TableCell>
            <TableCell>
              <StatusBadge status={programacao.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
