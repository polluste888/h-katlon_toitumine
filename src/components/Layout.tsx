import type { Page } from "../game/types"
import { Icon } from "./GameVisuals"

export function Header({
  page,
  setPage,
}: {
  page: Page
  setPage: (page: Page) => void
}) {
  const items: {
    id: Page
    label: string
    mobileLabel: string
    icon: "spark" | "play" | "book"
  }[] = [
    { id: "home", label: "Avaleht", mobileLabel: "Avaleht", icon: "spark" },
    {
      id: "game",
      label: "SööklaRändur",
      mobileLabel: "Mäng",
      icon: "play",
    },
    { id: "guide", label: "Juhend", mobileLabel: "Juhend", icon: "book" },
  ]
  return (
    <header className="fixed inset-x-0 bottom-0 z-50 border-t border-[#183d42]/10 bg-[#f7f4eb]/95 backdrop-blur md:sticky md:top-0 md:bottom-auto md:border-t-0 md:border-b">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-3 pb-[calc(.5rem+env(safe-area-inset-bottom))] pt-2 md:h-[72px] md:px-8 md:py-0">
        <button
          className="hidden items-center gap-3 text-left md:flex"
          onClick={() => setPage("home")}
        >
          <span className="grid size-10 place-items-center rounded-full bg-[#183d42] text-[#f7f4eb]">
            <Icon name="spark" className="size-5" />
          </span>
          <span>
            <span className="font-design-bold block text-sm tracking-[0.12em] text-[#183d42]">
              SÖÖKLARÄNDUR
            </span>
            <span className="block text-[11px] text-[#526b69]">
              LÜ õppemäng
            </span>
          </span>
        </button>
        <nav
          aria-label="Põhinavigatsioon"
          className="grid w-full grid-cols-3 items-center gap-1 rounded-[22px] bg-white p-1 shadow-[0_4px_18px_rgba(24,61,66,.08)] md:flex md:w-auto md:rounded-full"
        >
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              aria-current={page === item.id ? "page" : undefined}
              className={`font-design-medium flex min-w-0 flex-col items-center justify-center gap-1 rounded-[17px] px-2 py-2 text-[11px] transition md:block md:rounded-full md:px-5 md:text-sm ${
                page === item.id
                  ? "bg-[#183d42] text-white"
                  : "text-[#526b69] hover:bg-[#eef0e9]"
              }`}
            >
              <Icon name={item.icon} className="size-5 md:hidden" />
              <span className="md:hidden">{item.mobileLabel}</span>
              <span className="hidden md:inline">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export function PrimaryButton({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode
  onClick: () => void
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={`font-design-bold group inline-flex items-center justify-center gap-3 rounded-full bg-[#d75f50] px-7 py-4 text-sm tracking-[0.08em] text-white shadow-[0_12px_28px_rgba(215,95,80,.24)] transition hover:-translate-y-0.5 hover:bg-[#c84f42] ${className}`}
    >
      {children}
      <Icon
        name="arrow"
        className="size-5 transition-transform group-hover:translate-x-1"
      />
    </button>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-[#183d42]/10 bg-[#f7f4eb] px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-3 text-sm text-[#6f817f] sm:flex-row sm:items-center sm:justify-between">
        <p className="font-design-bold tracking-[.1em] text-[#183d42]">
          SÖÖKLARÄNDUR · LÜ ÕPPEMÄNG
        </p>
        <p>Õpi valima. Õpi tasakaalustama.</p>
      </div>
    </footer>
  )
}
