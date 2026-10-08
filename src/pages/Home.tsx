import { PrimaryButton } from "../components/Layout"
import { FoodIcon, Icon, Penguin } from "../components/GameVisuals"
import { penguins } from "../game/data"
import type { Page } from "../game/types"

export default function Home({ setPage }: { setPage: (page: Page) => void }) {
  const pyramidLevels = [
    {
      label: "Maiustused ja magusad joogid",
      note: "Vali harva",
      color: "#d75f50",
      width: "48%",
      foods: [
        { icon: "cake", color: "#D98188" },
        { icon: "candy", color: "#B66B9D" },
        { icon: "soda", color: "#C95C58" },
      ],
    },
    {
      label: "Valguallikad ja piimatooted",
      note: "Vali mõõdukalt",
      color: "#d8a94d",
      width: "68%",
      foods: [
        { icon: "fish", color: "#5D8FB5" },
        { icon: "beans", color: "#B85D5A" },
        { icon: "yogurt", color: "#83B7C7" },
      ],
    },
    {
      label: "Täisteratooted",
      note: "Vali iga päev",
      color: "#9bb36a",
      width: "84%",
      foods: [
        { icon: "bread", color: "#85654B" },
        { icon: "rice", color: "#A98851" },
      ],
    },
    {
      label: "Köögiviljad, puuviljad ja marjad",
      note: "Vali kõige sagedamini",
      color: "#4e8491",
      width: "100%",
      foods: [
        { icon: "broccoli", color: "#48A37A" },
        { icon: "carrot", color: "#EA8A48" },
        { icon: "apple", color: "#91A83F" },
        { icon: "berries", color: "#825B91" },
      ],
    },
  ] as const

  return (
    <main>
      <section className="relative overflow-hidden px-5 pb-24 pt-16 md:px-8 md:pb-32 md:pt-24">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-45" />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="font-design-semibold mb-7 inline-flex items-center gap-2 rounded-full border border-[#4e8491]/25 bg-white px-4 py-2 text-xs tracking-[0.13em] text-[#386e79]">
              <span className="size-2 rounded-full bg-[#d8a94d]" /> TERVISLIKUD
              VALIKUD ALGAVAD SIIT
            </span>
            <h1 className="font-design-bold max-w-[650px] text-[clamp(3.2rem,7vw,6.8rem)] leading-[.88] tracking-[-.06em] text-[#183d42]">
              Toitu targalt.
              <span className="mt-3 block text-[#d75f50]">Mängides.</span>
            </h1>
            <p className="mt-8 max-w-[560px] text-lg leading-8 text-[#526b69]">
              SööklaRändur õpetab koostama tasakaalustatud koolilõunaid. Aita
              pingviiniõpilastel valida sobiv toit, jälgi eelarvet ja kogu
              punkte.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <PrimaryButton onClick={() => setPage("game")}>
                MÄNGI
              </PrimaryButton>
              <button
                onClick={() => setPage("guide")}
                className="font-design-semibold inline-flex items-center gap-2 text-sm text-[#183d42] underline decoration-[#d8a94d] decoration-2 underline-offset-8"
              >
                <Icon name="book" /> Loe juhendit
              </button>
            </div>
          </div>
          <div className="relative mx-auto min-h-[500px] w-full max-w-[610px]">
            <div className="absolute inset-4 rotate-3 rounded-[56px] bg-[#d8a94d]" />
            <div className="absolute inset-4 -rotate-2 rounded-[56px] bg-[#4e8491]" />
            <div className="relative flex min-h-[500px] flex-col overflow-hidden rounded-[52px] bg-[#e8f0ec] p-8 shadow-[0_30px_70px_rgba(24,61,66,.15)] md:p-11">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-design-semibold text-xs tracking-[.16em] text-[#4e8491]">
                    TÄNANE VÄLJAKUTSE
                  </p>
                  <p className="font-design-bold mt-2 text-2xl text-[#183d42]">
                    Koosta nutikas lõuna
                  </p>
                </div>
                <span className="rounded-full bg-white px-4 py-2 text-xs text-[#526b69]">
                  praktiline õpiteekond
                </span>
              </div>
              <div className="relative mt-auto flex h-[330px] items-end justify-center">
                <div className="absolute left-0 top-12 rounded-3xl bg-white p-4 shadow-lg">
                  <Icon name="clock" className="size-6 text-[#4e8491]" />
                  <p className="font-design-bold mt-2 text-lg text-[#183d42]">
                    1 min
                  </p>
                  <p className="text-xs text-[#6f817f]">ühe tellimuse jaoks</p>
                </div>
                <Penguin data={penguins[0]} />
                <div className="absolute bottom-8 right-0 rounded-3xl bg-[#183d42] p-4 text-white shadow-lg">
                  <Icon name="wallet" className="size-6 text-[#efc76d]" />
                  <p className="font-design-bold mt-2 text-lg">3,70–4,60 €</p>
                  <p className="text-xs text-white/65">isiklik eelarve</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#183d42] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="font-design-semibold text-xs tracking-[.16em] text-[#efc76d]">
                MIDA SIIT ÕPPIDA SAAB?
              </p>
              <h2 className="font-design-bold mt-5 max-w-[430px] text-4xl leading-tight tracking-[-.035em] md:text-5xl">
                Väikesed valikud, suur mõju.
              </h2>
            </div>
            <p className="max-w-[680px] text-lg leading-8 text-white/70 lg:pt-9">
              Läbi mängimise õpib mängija tegema teadlikumaid toiduvalikuid:
              tundma peamisi toidugruppe, kasutama toidupüramiidi ning mõistma,
              et tasakaalukas toitumine sõltub kogu menüü tervikust, mitte ühest
              üksikust „heast” või „halvast” toidust.
            </p>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              [
                "01",
                "Tunneb toidugruppe",
                "Mängija eristab köögivilju, puuvilju, teravilju, valguallikaid ja piimatooteid ning teab nende rolli organismis.",
              ],
              [
                "02",
                "Seostab toidu püramiidiga",
                "Mängija oskab paigutada toite toidupüramiidi erinevatesse osadesse ja mõistab, mida valida sagedamini või harvem.",
              ],
              [
                "03",
                "Mõistab tervikut",
                "Mängija saab aru, et tasakaalukas toitumine kujuneb mitmekesisusest, sobivatest kogustest ja järjepidevatest valikutest.",
              ],
            ].map(([number, title, text]) => (
              <article
                key={number}
                className="rounded-[32px] border border-white/12 bg-white/[.055] p-7 md:min-h-[270px] md:p-9"
              >
                <span className="font-design-bold text-sm text-[#efc76d]">
                  {number}
                </span>
                <h3 className="font-design-bold mt-12 text-2xl">{title}</h3>
                <p className="mt-4 leading-7 text-white/62">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-5 rounded-[32px] border border-[#efc76d]/30 bg-[#efc76d]/10 p-7 md:grid-cols-[.55fr_1.45fr] md:items-center md:p-9">
            <div>
              <p className="font-design-semibold text-xs tracking-[.15em] text-[#efc76d]">
                PROBLEEM, MIDA LAHENDAME
              </p>
              <h3 className="font-design-bold mt-3 text-2xl">
                Teadlikum valik koolis ja kodus
              </h3>
            </div>
            <p className="leading-7 text-white/72">
              SööklaRändur tõstab õpilaste teadlikkust tervislikust toitumisest
              ja motiveerib neid valima toitainerikkamat ning tasakaalukamat
              toitu. Mänguline harjutamine muudab teadmised praktilisteks
              otsusteks, mida saab kasutada päris koolisööklas.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1240px]">
          <div className="text-center">
            <p className="font-design-semibold text-xs tracking-[.16em] text-[#4e8491]">
              TOIDUPÜRAMIIDI SPIKKER
            </p>
            <h2 className="font-design-bold mt-4 text-4xl tracking-[-.04em] text-[#183d42] md:text-5xl">
              Uuri enne mängu valikute järjekorda.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#526b69]">
              Püramiidi alumistest osadest vali toite sagedamini ja ülemistest
              harvem. Ükski toidugrupp ei tööta eraldi — tasakaalu loob kogu
              päeva mitmekesine menüü.
            </p>
          </div>
          <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.15fr_.85fr]">
            <div className="rounded-[40px] bg-white p-5 shadow-[0_20px_50px_rgba(24,61,66,.1)] sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-design-semibold text-xs tracking-[.14em] text-[#4e8491]">
                    VALI ALT ROHKEM, ÜLALT HARVEM
                  </p>
                  <h3 className="font-design-bold mt-2 text-2xl text-[#183d42]">
                    Toidugrupid ühes tervikus
                  </h3>
                </div>
                <span className="hidden rounded-full bg-[#e8f0ec] px-4 py-2 text-xs text-[#386e79] sm:block">
                  vaata üle
                </span>
              </div>
              <div className="mt-8 flex flex-col items-center gap-2">
                {pyramidLevels.map((level) => (
                  <div
                    key={level.label}
                    className="grid min-h-[82px] grid-cols-[1fr_auto] items-center gap-3 rounded-[18px] px-4 py-3 text-white shadow-sm sm:px-6"
                    style={{
                      width: level.width,
                      minWidth: "min(100%, 300px)",
                      backgroundColor: level.color,
                    }}
                  >
                    <div>
                      <p className="font-design-bold text-xs leading-tight sm:text-sm">
                        {level.label}
                      </p>
                      <p className="mt-1 text-[10px] text-white/70 sm:text-xs">
                        {level.note}
                      </p>
                    </div>
                    <div className="flex -space-x-1">
                      {level.foods.map((food) => (
                        <span
                          key={food.icon}
                          className="grid size-9 place-items-center rounded-xl bg-white sm:size-11"
                        >
                          <FoodIcon
                            name={food.icon}
                            color={food.color}
                            className="size-7 sm:size-9"
                          />
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-[18px] bg-[#e8f0ec] p-4 text-center text-sm text-[#386e79]">
                <b>Janu korral eelista vett.</b> Tasakaalu loob mitmekesine
                toit, mitte üksik „imetoit”.
              </div>
            </div>

            <div className="grid gap-5">
              <article className="rounded-[32px] bg-[#183d42] p-7 text-white sm:p-9">
                <span className="grid size-12 place-items-center rounded-full bg-[#efc76d] text-[#183d42]">
                  <Icon name="wallet" className="size-6" />
                </span>
                <p className="font-design-semibold mt-7 text-xs tracking-[.15em] text-[#efc76d]">
                  RAHALIMIIT
                </p>
                <h3 className="font-design-bold mt-3 text-2xl">
                  Vali teadlikult ja säästa
                </h3>
                <p className="mt-4 leading-7 text-white/68">
                  Igal õpilasel on oma eelarve. Hindade jälgimine õpetab
                  võrdlema sama toidugrupi valikuid, vältima liigseid oste ja
                  koostama toitva eine olemasoleva raha eest.
                </p>
              </article>
              <article className="rounded-[32px] border border-[#4e8491]/20 bg-[#e8f0ec] p-7 sm:p-9">
                <span className="grid size-12 place-items-center rounded-full bg-[#4e8491] text-white">
                  <Icon name="clock" className="size-6" />
                </span>
                <p className="font-design-semibold mt-7 text-xs tracking-[.15em] text-[#4e8491]">
                  AJALIMIIT · 1 MINUT
                </p>
                <h3 className="font-design-bold mt-3 text-2xl text-[#183d42]">
                  Otsusta rahulikult, kuid tõhusalt
                </h3>
                <p className="mt-4 leading-7 text-[#526b69]">
                  Üks minut aitab keskenduda olulisele: loe vajadus läbi,
                  kontrolli püramiidi ja tee valik. Aja jälgimine muudab mängu
                  sujuvamaks ning aitab kogu õpiteekonna efektiivselt läbida.
                </p>
              </article>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center rounded-[44px] bg-[#e8f0ec] px-7 py-14 text-center md:px-16">
            <h2 className="font-design-bold text-3xl tracking-[-.035em] text-[#183d42] md:text-5xl">
              Kas oled valmis menüüd koostama?
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-[#526b69]">
              Kuula soove, kontrolli eelarvet ja näita, kui hästi tunned
              tasakaalustatud toitumist.
            </p>
            <PrimaryButton onClick={() => setPage("game")} className="mt-8">
              ALUSTA MÄNGIMIST
            </PrimaryButton>
          </div>
        </div>
      </section>

      <section className="border-t border-[#183d42]/10 bg-white px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-[1240px] gap-6 rounded-[36px] border border-[#183d42]/10 bg-[#f7f4eb] p-7 md:grid-cols-[auto_1fr_auto] md:items-center md:p-10">
          <span className="grid size-14 place-items-center rounded-full bg-[#183d42] text-[#efc76d]">
            <Icon name="book" className="size-7" />
          </span>
          <div>
            <p className="font-design-semibold text-xs tracking-[.15em] text-[#4e8491]">
              TEADUSLIK ALUS
            </p>
            <h2 className="font-design-bold mt-2 text-2xl text-[#183d42]">
              Info põhineb Eesti tervisesoovitustel
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#526b69]">
              SööklaRänduris kasutatud toidugruppide, toidupüramiidi ja
              tasakaalustatud toitumise põhimõtted lähtuvad Tervise Arengu
              Instituudi avaldatud teaduspõhisest infost ning nende toitumine.ee
              õppematerjalidest. Mängu tekstid on õpilaste jaoks lihtsustatud.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:flex-col md:items-stretch">
            <a
              href="https://www.tai.ee/et"
              target="_blank"
              rel="noreferrer"
              className="font-design-semibold inline-flex items-center justify-center gap-2 rounded-full border border-[#183d42]/15 bg-white px-5 py-3 text-sm text-[#183d42] transition hover:border-[#4e8491] hover:bg-[#e8f0ec]"
            >
              Tervise Arengu Instituut
              <Icon name="arrow" className="size-4" />
            </a>
            <a
              href="https://www.toitumine.ee/"
              target="_blank"
              rel="noreferrer"
              className="font-design-semibold inline-flex items-center justify-center gap-2 rounded-full bg-[#4e8491] px-5 py-3 text-sm text-white transition hover:bg-[#386e79]"
            >
              Toitumine.ee
              <Icon name="arrow" className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
