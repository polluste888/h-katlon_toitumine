import { Icon } from "../components/GameVisuals"
import { PrimaryButton } from "../components/Layout"
import type { Page } from "../game/types"

export default function Guide({ setPage }: { setPage: (page: Page) => void }) {
  const steps = [
    [
      "01",
      "Loe tellimust",
      "Iga pingviin ütleb, milliseid toidugruppe tema tasakaalustatud lõuna vajab.",
    ],
    [
      "02",
      "Vali toit",
      "Klõpsa toidul või lohista see taldrikule. Uuesti klõpsates saad valiku eemaldada.",
    ],
    [
      "03",
      "Jälgi piire",
      "Ühe tellimuse jaoks on 1 minut. Igal pingviinil on oma eelarve alates 3,70 eurost ning summa on alati ekraani ülaservas.",
    ],
    [
      "04",
      "Anna toit",
      "Kui taldrik on valmis, vajuta „Anna toit“. Seejärel näed punktisummat ja täpset tagasisidet.",
    ],
    [
      "05",
      "Kontrolli väidet",
      "Kolmel korral avaneb Valeinfo detektor. Vali, kas tervisliku toitumise väide on õige või vale, ja loe selgitust.",
    ],
    [
      "06",
      "Liigu edasi",
      "Kasuta pingviini kõrval olevat toidupüramiidi spikrina ning vajuta „Järgmine“, et aidata järgmist õpilast.",
    ],
  ]
  return (
    <main>
      <section className="relative overflow-hidden bg-[#183d42] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="absolute -right-24 -top-40 size-[520px] rounded-full border-[90px] border-white/[.04]" />
        <div className="relative mx-auto max-w-[1240px]">
          <p className="font-design-semibold text-xs tracking-[.16em] text-[#efc76d]">
            MÄNGUJUHEND
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_.7fr]">
            <h1 className="font-design-bold max-w-3xl text-5xl leading-[.98] tracking-[-.05em] md:text-7xl">
              Nii saad söökla osavaimaks valijaks.
            </h1>
            <p className="max-w-lg self-end text-lg leading-8 text-white/68">
              SööklaRändur aitab tõsta õpilaste toitumisteadlikkust ja
              motiveerib tervislikumalt sööma. Mängides õpid tundma toidugruppe,
              seostama valikuid toidupüramiidiga ning vaatama tasakaalustatud
              menüüd tervikuna.
            </p>
          </div>
        </div>
      </section>
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1000px]">
          {steps.map(([number, title, text], index) => (
            <article
              key={number}
              className="grid gap-4 border-b border-[#183d42]/12 py-8 md:grid-cols-[100px_260px_1fr] md:items-start md:py-10"
            >
              <span className="font-design-bold text-sm text-[#d75f50]">
                {number}
              </span>
              <h2 className="font-design-bold text-2xl text-[#183d42]">
                {title}
              </h2>
              <p className="max-w-xl leading-7 text-[#526b69]">{text}</p>
              {index === 2 && (
                <div className="md:col-start-3 mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#e8f0ec] px-4 py-2 text-sm text-[#386e79]">
                    <Icon name="clock" /> 1 min
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#fff3db] px-4 py-2 text-sm text-[#7c6328]">
                    <Icon name="wallet" /> 3,70–4,60 €
                  </span>
                </div>
              )}
            </article>
          ))}
          <div className="mt-14 flex flex-col items-center rounded-[40px] bg-[#e8f0ec] p-8 text-center md:p-14">
            <h2 className="font-design-bold text-3xl tracking-[-.035em] text-[#183d42]">
              Nüüd oled valmis alustama.
            </h2>
            <p className="mt-3 text-[#526b69]">
              Pea meeles: kõige rohkem punkte annab täpne ja eelarves valik.
            </p>
            <PrimaryButton onClick={() => setPage("game")} className="mt-8">
              MÄNGI
            </PrimaryButton>
          </div>
        </div>
      </section>
    </main>
  )
}
