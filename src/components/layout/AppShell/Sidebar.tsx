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
