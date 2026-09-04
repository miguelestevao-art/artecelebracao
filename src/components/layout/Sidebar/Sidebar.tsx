import Link from "next/link";

const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Programações",
    href: "/programacoes",
  },
  {
    label: "Biblioteca Musical",
    href: "#",
  },
  {
    label: "Equipe de Servos",
    href: "#",
  },
  {
    label: "Contextos",
    href: "#",
  },
  {
    label: "Relatórios",
    href: "#",
  },
  {
    label: "Administração",
    href: "#",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-60 border-r bg-card px-4 py-6">
      <nav>
        <ul className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
