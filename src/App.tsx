import { useState } from "react"
import { Footer, Header } from "./components/Layout"
import type { Page } from "./game/types"
import Game from "./pages/Game"
import Guide from "./pages/Guide"
import Home from "./pages/Home"

export default function App() {
  const [page, setPageState] = useState<Page>("home")
  const [gameKey, setGameKey] = useState(0)

  function setPage(next: Page) {
    if (next === "game" && page !== "game") setGameKey((value) => value + 1)
    setPageState(next)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#f7f4eb] pb-[calc(76px+env(safe-area-inset-bottom))] text-[#183d42] md:pb-0">
      <Header page={page} setPage={setPage} />
      {page === "home" && <Home setPage={setPage} />}
      {page === "game" && <Game restartKey={gameKey} />}
      {page === "guide" && <Guide setPage={setPage} />}
      {page !== "game" && <Footer />}
    </div>
  )
}
