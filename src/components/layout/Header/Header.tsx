export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
          AC
        </div>

        <div className="flex flex-col">
          <span className="text-base font-semibold text-foreground">
            ArteCelebração Hub
          </span>

          <span className="text-xs text-muted-foreground">
            Gestão Ministerial
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* UserMenu será implementado futuramente */}
      </div>
    </header>
  );
}
