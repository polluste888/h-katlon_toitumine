import { useEffect, useState, type DragEvent } from "react"
import { FoodIcon, FoodPyramid, Icon, Penguin } from "../components/GameVisuals"
import { PrimaryButton } from "../components/Layout"
import { detectorClaims, detectorRounds, foods, penguins } from "../game/data"
import type { GamePhase } from "../game/types"

type RoundResult = {
  student: string
  selectedFoodIds: string[]
  score: number
  spent: number
  budget: number
  matchedGroups: number
  wantedGroups: number
}

type DetectorResult = {
  correct: boolean
}

export default function Game({ restartKey }: { restartKey: number }) {
  const [phase, setPhase] = useState<GamePhase>("intro")
  const [round, setRound] = useState(0)
  const [plate, setPlate] = useState<string[]>([])
  const [time, setTime] = useState(60)
  const [totalScore, setTotalScore] = useState(0)
  const [roundScore, setRoundScore] = useState(0)
  const [detectorAnswer, setDetectorAnswer] = useState<boolean | null>(null)
  const [roundResults, setRoundResults] = useState<RoundResult[]>([])
  const [detectorResults, setDetectorResults] = useState<DetectorResult[]>([])

  const current = penguins[round]
  const availableFoods = foods.filter((food) =>
    current.availableFoodIds.includes(food.id),
  )
  const selectedFoods = foods.filter((food) => plate.includes(food.id))
  const spent = selectedFoods.reduce((sum, food) => sum + food.price, 0)
  const budget = current.budget

  useEffect(() => {
    setPhase("intro")
    setRound(0)
    setPlate([])
    setTime(60)
    setTotalScore(0)
    setDetectorAnswer(null)
    setRoundResults([])
    setDetectorResults([])
  }, [restartKey])

  useEffect(() => {
    if (phase !== "playing") return
    if (time <= 0) {
      evaluate()
      return
    }
    const timer = window.setTimeout(() => setTime((value) => value - 1), 1000)
    return () => window.clearTimeout(timer)
  }, [time, phase])

  function toggleFood(id: string) {
    if (phase !== "playing") return
    setPlate((items) =>
      items.includes(id) ? items.filter((item) => item !== id) : [...items, id],
    )
  }

  function dropFood(event: DragEvent<HTMLDivElement>) {
    event.preventDefault()
    const id = event.dataTransfer.getData("text/plain")
    if (id && !plate.includes(id)) setPlate((items) => [...items, id])
  }

  function evaluate() {
    const selectedCategories = new Set(
      selectedFoods.map((food) => food.category),
    )
    const matched = current.wanted.filter((category) =>
      selectedCategories.has(category),
    ).length
    const extraFoods = selectedFoods.filter(
      (food) => food.recommended && !current.wanted.includes(food.category),
    ).length
    const unhealthyFoods = selectedFoods.filter(
      (food) => !food.recommended,
    ).length
    const categoryPoints = Math.round((matched / current.wanted.length) * 70)
    const budgetPoints = spent <= budget ? 20 : 0
    const timePoints = time > 0 ? Math.min(10, Math.ceil(time / 6)) : 0
    const score = Math.max(
      0,
      categoryPoints +
        budgetPoints +
        timePoints -
        extraFoods * 5 -
        unhealthyFoods * 15,
    )
    setRoundScore(score)
    setTotalScore((value) => value + score)
    setRoundResults((results) => [
      ...results,
      {
        student: current.name,
        selectedFoodIds: selectedFoods.map((food) => food.id),
        score,
        spent,
        budget,
        matchedGroups: matched,
        wantedGroups: current.wanted.length,
      },
    ])
    setPhase("feedback")
  }

  function completeRound() {
    if (round === penguins.length - 1) {
      setPhase("finished")
      return
    }
    setRound((value) => value + 1)
    setPlate([])
    setTime(60)
    setPhase("playing")
  }

  function advanceAfterFeedback() {
    if (detectorRounds.includes(round)) {
      setDetectorAnswer(null)
      setPhase("detector")
      return
    }
    completeRound()
  }

  function answerDetector(answer: boolean) {
    if (detectorAnswer !== null) return
    setDetectorAnswer(answer)
    const claim = detectorClaims[detectorRounds.indexOf(round)]
    const correct = answer === claim.correct
    setDetectorResults((results) => [...results, { correct }])
    if (correct) {
      setTotalScore((value) => value + 10)
    }
  }

  function returnToStart() {
    setRound(0)
    setPlate([])
    setTime(60)
    setTotalScore(0)
    setDetectorAnswer(null)
    setRoundResults([])
    setDetectorResults([])
    setPhase("intro")
  }

  if (phase === "intro") {
    return (
      <main className="game-surface min-h-[calc(100vh-72px)] px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-[1050px] overflow-hidden rounded-[44px] bg-white shadow-[0_30px_80px_rgba(24,61,66,.14)] lg:grid-cols-[.9fr_1.1fr]">
          <div className="flex flex-col justify-center p-8 md:p-14">
            <p className="font-design-semibold text-xs tracking-[.16em] text-[#4e8491]">
              SÖÖKLARÄNDUR
            </p>
            <h1 className="font-design-bold mt-5 text-4xl tracking-[-.045em] text-[#183d42] md:text-6xl">
              Lõunapaus algab!
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-[#526b69]">
              Söökla õpilased ootavad sinu abi. Loe tellimust, tõsta sobiv toit
              taldrikule ning püsi aja- ja rahalimiidis. Mängu jooksul
              kontrollid ka terviseteemalisi väiteid.
            </p>
            <div className="mt-8 flex gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#e8f0ec] px-4 py-2 text-sm text-[#386e79]">
                <Icon name="clock" /> 1 min
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#fff3db] px-4 py-2 text-sm text-[#7c6328]">
                <Icon name="wallet" /> alates 3,70 €
              </span>
            </div>
            <PrimaryButton
              onClick={() => setPhase("playing")}
              className="mt-10 self-start"
            >
              ALUSTA
            </PrimaryButton>
          </div>
          <div className="relative min-h-[480px] overflow-hidden bg-[#4e8491] p-8">
            <div className="absolute -right-20 -top-24 size-80 rounded-full border-[50px] border-white/10" />
            <div className="absolute bottom-7 left-7 rounded-3xl bg-white/12 p-4 text-sm text-white backdrop-blur">
              <span className="font-design-bold block text-2xl">
                {penguins.length}
              </span>
              erinevat tellimust
            </div>
            <div className="absolute bottom-0 left-1/2 h-[90%] w-[70%] -translate-x-1/2">
              <Penguin data={penguins[0]} />
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (phase === "finished") {
    const maxScore = penguins.length * 100 + detectorClaims.length * 10
    const percent = Math.round((totalScore / maxScore) * 100)
    const averageScore = Math.round(
      roundResults.reduce((sum, result) => sum + result.score, 0) /
        Math.max(1, roundResults.length),
    )
    const budgetSuccesses = roundResults.filter(
      (result) => result.spent <= result.budget,
    ).length
    const matchedGroups = roundResults.reduce(
      (sum, result) => sum + result.matchedGroups,
      0,
    )
    const wantedGroups = roundResults.reduce(
      (sum, result) => sum + result.wantedGroups,
      0,
    )
    const groupCoverage = Math.round(
      (matchedGroups / Math.max(1, wantedGroups)) * 100,
    )
    const detectorCorrectCount = detectorResults.filter(
      (result) => result.correct,
    ).length
    const foodCounts = roundResults
      .flatMap((result) => result.selectedFoodIds)
      .reduce<Record<string, number>>((counts, foodId) => {
        counts[foodId] = (counts[foodId] ?? 0) + 1
        return counts
      }, {})
    const chosenFoods = foods
      .filter((food) => foodCounts[food.id])
      .sort((a, b) => foodCounts[b.id] - foodCounts[a.id])
    const recommendedChoices = chosenFoods.filter((food) => food.recommended)
    const occasionalChoices = chosenFoods.filter((food) => !food.recommended)
    const recommendedChoiceCount = roundResults
      .flatMap((result) => result.selectedFoodIds)
      .filter(
        (foodId) => foods.find((food) => food.id === foodId)?.recommended,
      ).length
    const occasionalChoiceCount = roundResults
      .flatMap((result) => result.selectedFoodIds)
      .filter(
        (foodId) => !foods.find((food) => food.id === foodId)?.recommended,
      ).length

    const focusAreas: { title: string; text: string }[] = []
    if (groupCoverage < 90) {
      focusAreas.push({
        title: "Vaata taldrikut tervikuna",
        text: `Täitsid ${groupCoverage}% soovitud toidugruppidest. Päriselus kontrolli, et einel oleks mitu erinevat toitainerikast osa, mitte ainult üks tuttav valik.`,
      })
    }
    if (budgetSuccesses < roundResults.length) {
      focusAreas.push({
        title: "Planeeri enne ostmist",
        text: `Ületasid eelarvet ${roundResults.length - budgetSuccesses} korral. Võrdle hindu enne valimist ja otsi samast toidugrupist soodsamat alternatiivi.`,
      })
    }
    if (occasionalChoiceCount > 0) {
      focusAreas.push({
        title: "Hoia harvad valikud harvana",
        text: `Valisid energiajooke, maiustusi või teisi harva sobivaid toite ${occasionalChoiceCount} korral. Need võivad menüüsse mahtuda, kuid ei tohiks asendada põhitoidugruppe ega vett.`,
      })
    }
    if (detectorCorrectCount < detectorResults.length) {
      focusAreas.push({
        title: "Kontrolli toitumisväiteid",
        text: `Vastasid õigesti ${detectorCorrectCount}/${detectorResults.length} väitele. Küsi alati, kas väide põhineb tervikul, usaldusväärsel allikal ja tavapärasel kogusel.`,
      })
    }
    if (focusAreas.length === 0) {
      focusAreas.push({
        title: "Jätka sama teadlikult",
        text: "Sinu valikud olid tasakaalus. Päriselus jätka toidugruppide vaheldamist, eelista joogiks vett ning jälgi nii keha vajadusi kui ka koguseid.",
      })
    }

    return (
      <main className="game-surface min-h-[calc(100vh-72px)] px-4 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-[1100px] overflow-hidden rounded-[44px] bg-white shadow-[0_30px_80px_rgba(24,61,66,.14)]">
          <section className="bg-[#183d42] px-6 py-10 text-white md:px-12 md:py-14">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <div className="grid size-16 place-items-center rounded-full bg-[#efc76d] text-[#183d42]">
                  <Icon name="spark" className="size-8" />
                </div>
                <p className="font-design-semibold mt-7 text-xs tracking-[.16em] text-[#efc76d]">
                  MÄNGU KOKKUVÕTE
                </p>
                <h1 className="font-design-bold mt-4 max-w-2xl text-4xl tracking-[-.04em] md:text-6xl">
                  Sinu otsused kujundavad sinu tervist.
                </h1>
                <p className="mt-5 max-w-2xl leading-7 text-white/68">
                  Vaata, milliseid valikuid tegid, mis läks hästi ja millele
                  tasub päriselus teadlikumalt tähelepanu pöörata.
                </p>
              </div>
              <div className="shrink-0 md:text-right">
                <p className="font-design-semibold text-xs tracking-[.13em] text-white/55">
                  LÕPPTULEMUS
                </p>
                <div className="font-design-bold mt-2 text-6xl text-[#efc76d] md:text-7xl">
                  {percent}%
                </div>
                <p className="mt-2 text-sm text-white/60">
                  {totalScore} / {maxScore} punkti
                </p>
              </div>
            </div>
            <div className="mt-9 h-3 overflow-hidden rounded-full bg-white/12">
              <div
                className="h-full rounded-full bg-[#efc76d]"
                style={{ width: `${percent}%` }}
              />
            </div>
          </section>

          <div className="p-5 sm:p-8 md:p-12">
            <section>
              <p className="font-design-semibold text-xs tracking-[.15em] text-[#4e8491]">
                TULEMUSED
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {[
                  ["Keskmine voor", `${averageScore}/100`],
                  [
                    "Eelarves",
                    `${budgetSuccesses}/${roundResults.length} vooru`,
                  ],
                  ["Toidugrupid", `${groupCoverage}% kaetud`],
                  [
                    "Valeinfo",
                    `${detectorCorrectCount}/${detectorResults.length} õige`,
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[24px] border border-[#183d42]/10 bg-[#f7f4eb] p-5"
                  >
                    <p className="text-xs text-[#6f817f]">{label}</p>
                    <p className="font-design-bold mt-2 text-xl text-[#183d42] sm:text-2xl">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10 grid gap-5 lg:grid-cols-2">
              <div className="rounded-[30px] bg-[#e8f0ec] p-6 md:p-8">
                <p className="font-design-semibold text-xs tracking-[.15em] text-[#4e8491]">
                  SINU VALIKUD
                </p>
                <h2 className="font-design-bold mt-3 text-2xl text-[#183d42]">
                  Toitainerikkad valikud
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#526b69]">
                  Valisid soovituslikke põhitoite {recommendedChoiceCount}{" "}
                  korral. Kõige sagedamini jõudsid sinu taldrikule:
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {recommendedChoices.slice(0, 6).map((food) => (
                    <span
                      key={food.id}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs text-[#183d42]"
                    >
                      <FoodIcon
                        name={food.icon}
                        color={food.color}
                        className="size-5"
                      />
                      {food.name} · {foodCounts[food.id]}×
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] bg-[#fff3db] p-6 md:p-8">
                <p className="font-design-semibold text-xs tracking-[.15em] text-[#9b6d22]">
                  HARVEM SOBIVAD VALIKUD
                </p>
                <h2 className="font-design-bold mt-3 text-2xl text-[#183d42]">
                  Märka valikute sagedust
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#6d5115]">
                  Tasakaal ei tähenda täielikku keelamist. Oluline on, et
                  magusad joogid, maiustused ja tugevalt töödeldud näksid
                  jääksid harvaks ega asendaks põhitoitu.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {occasionalChoices.length > 0 ? (
                    occasionalChoices.map((food) => (
                      <span
                        key={food.id}
                        className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs text-[#6d5115]"
                      >
                        <FoodIcon
                          name={food.icon}
                          color={food.color}
                          className="size-5"
                        />
                        {food.name} · {foodCounts[food.id]}×
                      </span>
                    ))
                  ) : (
                    <span className="rounded-full bg-white px-3 py-2 text-xs text-[#32775f]">
                      Sa ei valinud ühtegi harva sobivat toitu.
                    </span>
                  )}
                </div>
              </div>
            </section>

            <section className="mt-10">
              <p className="font-design-semibold text-xs tracking-[.15em] text-[#d75f50]">
                PERSONAALNE ANALÜÜS
              </p>
              <h2 className="font-design-bold mt-3 text-3xl tracking-[-.03em] text-[#183d42]">
                Millele päriselus keskenduda?
              </h2>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {focusAreas.map((area, index) => (
                  <article
                    key={area.title}
                    className="flex gap-4 rounded-[24px] border border-[#183d42]/10 p-5"
                  >
                    <span className="font-design-bold grid size-9 shrink-0 place-items-center rounded-full bg-[#183d42] text-xs text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-design-bold text-base text-[#183d42]">
                        {area.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#526b69]">
                        {area.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <div className="mt-10 flex flex-col items-center rounded-[30px] bg-[#f7f4eb] p-7 text-center md:p-9">
              <h2 className="font-design-bold text-2xl text-[#183d42]">
                Võta üks teadlik otsus kaasa.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#526b69]">
                Järgmisel söögikorral vaata kõigepealt taldrikut tervikuna:
                millised toidugrupid on olemas, kas joogiks on vesi ning kas
                valik vastab sinu tegelikule vajadusele.
              </p>
              <PrimaryButton onClick={returnToStart} className="mt-7">
                TAGASI MÄNGU ALGUSESSE
              </PrimaryButton>
            </div>
          </div>
        </div>
      </main>
    )
  }

  const isFeedback = phase === "feedback"
  const isDetector = phase === "detector"
  const detectorIndex = detectorRounds.indexOf(round)
  const detectorClaim =
    detectorIndex >= 0 ? detectorClaims[detectorIndex] : detectorClaims[0]
  const detectorCorrect =
    detectorAnswer !== null && detectorAnswer === detectorClaim.correct
  return (
    <main className="game-surface min-h-[calc(100vh-72px)] px-4 py-6 md:px-8 md:py-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4 rounded-[28px] bg-white p-4 shadow-[0_14px_38px_rgba(24,61,66,.1)] sm:px-5">
          <div className="flex items-center gap-4">
            <span className="font-design-bold text-sm text-[#183d42]">
              Õpilane {round + 1}/{penguins.length}
            </span>
            <div className="hidden h-2 w-40 overflow-hidden rounded-full bg-[#e8f0ec] sm:block">
              <div
                className="h-full rounded-full bg-[#4e8491] transition-all"
                style={{ width: `${((round + 1) / penguins.length) * 100}%` }}
              />
            </div>
          </div>
          {isDetector ? (
            <span className="font-design-semibold inline-flex items-center gap-2 rounded-full bg-[#fae2de] px-4 py-2 text-sm text-[#a64138]">
              <Icon name="spark" /> VALEINFO DETEKTOR {detectorIndex + 1}/
              {detectorClaims.length}
            </span>
          ) : (
            <div className="grid w-full grid-cols-2 gap-3 lg:w-auto">
              <div
                className={`flex min-h-[88px] items-center gap-3 rounded-[22px] border-2 px-3 py-3 shadow-[0_8px_20px_rgba(24,61,66,.12)] sm:min-w-[180px] sm:px-4 ${
                  time < 10
                    ? "border-[#d75f50] bg-[#b94035] text-white"
                    : "border-[#183d42] bg-[#183d42] text-white"
                }`}
              >
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-full ${
                    time < 10 ? "bg-white/16" : "bg-[#efc76d] text-[#183d42]"
                  }`}
                >
                  <Icon name="clock" className="size-6" />
                </span>
                <span>
                  <span className="font-design-semibold block text-[9px] tracking-[.13em] opacity-70 sm:text-[10px]">
                    AEGA JÄÄNUD
                  </span>
                  <span className="font-design-bold mt-0.5 block text-2xl leading-none sm:text-[28px]">
                    {time}
                    <span className="ml-1 text-xs opacity-70 sm:text-sm">
                      SEK
                    </span>
                  </span>
                </span>
              </div>
              <div
                className={`flex min-h-[88px] items-center gap-3 rounded-[22px] border-2 px-3 py-3 shadow-[0_8px_20px_rgba(24,61,66,.1)] sm:min-w-[210px] sm:px-4 ${
                  spent > budget
                    ? "border-[#d75f50] bg-[#b94035] text-white"
                    : "border-[#d8a94d] bg-[#fff3db] text-[#6d5115]"
                }`}
              >
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-full ${
                    spent > budget
                      ? "bg-white/16"
                      : "bg-[#d8a94d] text-[#183d42]"
                  }`}
                >
                  <Icon name="wallet" className="size-6" />
                </span>
                <span className="min-w-0">
                  <span className="font-design-semibold block text-[9px] tracking-[.13em] opacity-70 sm:text-[10px]">
                    KASUTADA
                  </span>
                  <span className="font-design-bold mt-0.5 block text-2xl leading-none sm:text-[28px]">
                    {budget.toFixed(2).replace(".", ",")} €
                  </span>
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="grid gap-5 lg:grid-cols-[460px_1fr]">
          <aside className="overflow-hidden rounded-[36px] border border-[#4e8491]/15 bg-[#cfe0db] p-5 text-[#183d42] shadow-[0_20px_50px_rgba(24,61,66,.08)] sm:p-6 lg:min-h-[680px]">
            <p className="font-design-semibold text-xs tracking-[.15em] text-[#386e79]">
              TELLIMUS
            </p>
            <h1 className="font-design-bold mt-3 text-3xl">{current.name}</h1>
            <div className="relative z-10 mt-5 rounded-[24px] bg-white p-5 text-[#183d42] shadow-xl">
              <p className="font-design-semibold leading-6">
                “{current.request}”
              </p>
              <p className="mt-3 text-xs leading-5 text-[#6f817f]">
                {current.note}
              </p>
            </div>
            <div className="mt-4 grid grid-cols-[.82fr_1.18fr] items-end gap-2 sm:gap-4 lg:mt-7">
              <div className="h-[220px] sm:h-[270px] lg:h-[330px]">
                <Penguin
                  data={current}
                  mood={
                    (isFeedback || isDetector) && roundScore < 65
                      ? "sad"
                      : "happy"
                  }
                />
              </div>
              <div className="pb-3">
                <FoodPyramid />
              </div>
            </div>
          </aside>

          <section className="rounded-[36px] bg-white p-5 shadow-[0_20px_50px_rgba(24,61,66,.1)] md:p-8">
            {isDetector ? (
              <div className="flex min-h-[560px] flex-col justify-center lg:min-h-[620px]">
                <div className="mx-auto w-full max-w-xl">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-full bg-[#fae2de] text-[#a64138]">
                      <Icon name="spark" />
                    </span>
                    <div>
                      <p className="font-design-semibold text-xs tracking-[.15em] text-[#d75f50]">
                        VALEINFO DETEKTOR
                      </p>
                      <p className="mt-1 text-xs text-[#6f817f]">
                        Kontroll {detectorIndex + 1}/{detectorClaims.length}
                      </p>
                    </div>
                  </div>
                  <h2 className="font-design-bold mt-8 text-3xl leading-tight tracking-[-.035em] text-[#183d42] sm:text-4xl">
                    “{detectorClaim.statement}”
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-[#6f817f]">
                    Kas see tervisliku toitumise väide on õige või vale?
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                    <button
                      disabled={detectorAnswer !== null}
                      onClick={() => answerDetector(true)}
                      className={`font-design-bold rounded-[22px] border-2 px-4 py-6 text-base transition sm:text-lg ${
                        detectorAnswer === true
                          ? detectorCorrect
                            ? "border-[#4e8491] bg-[#dfeee8] text-[#32775f]"
                            : "border-[#d75f50] bg-[#fae2de] text-[#a64138]"
                          : "border-[#183d42]/12 text-[#183d42] hover:border-[#4e8491] hover:bg-[#e8f0ec]"
                      } disabled:cursor-default`}
                    >
                      ÕIGE
                    </button>
                    <button
                      disabled={detectorAnswer !== null}
                      onClick={() => answerDetector(false)}
                      className={`font-design-bold rounded-[22px] border-2 px-4 py-6 text-base transition sm:text-lg ${
                        detectorAnswer === false
                          ? detectorCorrect
                            ? "border-[#4e8491] bg-[#dfeee8] text-[#32775f]"
                            : "border-[#d75f50] bg-[#fae2de] text-[#a64138]"
                          : "border-[#183d42]/12 text-[#183d42] hover:border-[#d75f50] hover:bg-[#fae2de]"
                      } disabled:cursor-default`}
                    >
                      VALE
                    </button>
                  </div>

                  {detectorAnswer !== null && (
                    <div
                      className={`mt-6 rounded-[24px] p-5 ${
                        detectorCorrect
                          ? "bg-[#dfeee8] text-[#265f4d]"
                          : "bg-[#fff3db] text-[#765718]"
                      }`}
                    >
                      <div className="flex gap-3">
                        <Icon
                          name={detectorCorrect ? "check" : "spark"}
                          className="mt-0.5 size-6 shrink-0"
                        />
                        <div>
                          <p className="font-design-bold">
                            {detectorCorrect
                              ? "Täpselt nii! +10 boonuspunkti"
                              : `Seekord mitte. Õige vastus on ${
                                  detectorClaim.correct ? "ÕIGE" : "VALE"
                                }.`}
                          </p>
                          <p className="mt-2 text-sm leading-6 opacity-85">
                            {detectorClaim.feedback}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {detectorAnswer !== null && (
                    <PrimaryButton onClick={completeRound} className="mt-7">
                      JÄRGMINE ÕPILANE
                    </PrimaryButton>
                  )}
                </div>
              </div>
            ) : isFeedback ? (
              <div className="min-h-[620px]">
                <div className="flex flex-col justify-between gap-5 border-b border-[#183d42]/10 pb-7 sm:flex-row sm:items-end">
                  <div className="flex items-center gap-4">
                    <div
                      className={`grid size-16 shrink-0 place-items-center rounded-full ${
                        roundScore >= 75
                          ? "bg-[#dfeee8] text-[#32775f]"
                          : "bg-[#fff3db] text-[#9b6d22]"
                      }`}
                    >
                      {roundScore >= 75 ? (
                        <Icon name="check" className="size-8" />
                      ) : (
                        <Icon name="spark" className="size-8" />
                      )}
                    </div>
                    <div>
                      <p className="font-design-semibold text-xs tracking-[.15em] text-[#4e8491]">
                        {current.name.toUpperCase()} · TULEMUS
                      </p>
                      <h2 className="font-design-bold mt-2 text-3xl tracking-[-.04em] text-[#183d42]">
                        {roundScore >= 90
                          ? "Suurepärane valik!"
                          : roundScore >= 65
                            ? "Hea ja tasakaalus eine"
                            : "Vajadused jäid täitmata"}
                      </h2>
                    </div>
                  </div>
                  <div className="font-design-bold text-6xl text-[#d75f50]">
                    {roundScore}
                    <span className="ml-1 text-base text-[#6f817f]">/ 100</span>
                  </div>
                </div>

                {roundScore < 65 && (
                  <div className="mt-6 rounded-[24px] border border-[#d75f50]/20 bg-[#fae2de] p-5 text-left text-[#873c35]">
                    <p className="font-design-bold">
                      Pingviin jäi kurvaks ja kõhnemaks.
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {current.name} ei saanud piisavalt tema vajadustele
                      vastavat toitu. Kasvav keha vajab regulaarselt valku,
                      kiudaineid, vitamiine ja energiat. Tervise, keskendumise
                      ning normaalse arengu hoidmiseks loe järgmises voorus soov
                      lähemalt läbi ja eelista toitainerikkaid valikuid.
                    </p>
                  </div>
                )}

                <div className="mt-6 grid w-full gap-3 text-left sm:grid-cols-2">
                  {current.wanted.map((category) => {
                    const found = selectedFoods.some(
                      (food) => food.category === category,
                    )
                    return (
                      <div
                        key={category}
                        className={`flex items-center gap-3 rounded-2xl p-4 text-sm ${
                          found
                            ? "bg-[#dfeee8] text-[#32775f]"
                            : "bg-[#fae2de] text-[#a64138]"
                        }`}
                      >
                        <Icon name={found ? "check" : "spark"} />{" "}
                        <span className="capitalize">{category}</span>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-8">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-design-bold text-lg text-[#183d42]">
                      Sinu valikud
                    </h3>
                    <div className="flex flex-wrap justify-end gap-2 text-xs">
                      <span className="rounded-full bg-[#e8f0ec] px-3 py-1.5 text-[#386e79]">
                        Kulunud: {spent.toFixed(2).replace(".", ",")} €
                      </span>
                      <span className="rounded-full bg-[#fff3db] px-3 py-1.5 text-[#7c6328]">
                        Eelarve: {budget.toFixed(2).replace(".", ",")} €
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 grid gap-3">
                    {selectedFoods.length === 0 ? (
                      <div className="rounded-[20px] bg-[#fae2de] p-5 text-sm leading-6 text-[#873c35]">
                        Toitu ei valitud. Ilma piisava energiata ja toitaineteta
                        langevad keskendumisvõime ning kehaline jõud.
                      </div>
                    ) : (
                      selectedFoods.map((food) => {
                        const matchesNeed = current.wanted.includes(
                          food.category,
                        )
                        const positive = food.recommended && matchesNeed
                        return (
                          <article
                            key={food.id}
                            className={`grid grid-cols-[52px_1fr] gap-4 rounded-[22px] border p-4 text-left ${
                              positive
                                ? "border-[#4e8491]/18 bg-[#f1f7f4]"
                                : "border-[#d75f50]/15 bg-[#fff8f3]"
                            }`}
                          >
                            <div className="grid size-12 place-items-center rounded-2xl bg-white shadow-sm">
                              <FoodIcon
                                name={food.icon}
                                color={food.color}
                                className="size-9"
                              />
                            </div>
                            <div>
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <p className="font-design-bold text-sm text-[#183d42]">
                                  {food.name} ·{" "}
                                  {food.price.toFixed(2).replace(".", ",")} €
                                </p>
                                <span
                                  className={`rounded-full px-2.5 py-1 text-[10px] ${
                                    positive
                                      ? "bg-[#dfeee8] text-[#32775f]"
                                      : "bg-[#fae2de] text-[#a64138]"
                                  }`}
                                >
                                  {positive
                                    ? "sobib vajadusega"
                                    : food.recommended
                                      ? "hea toit, vale toidugrupp"
                                      : "harv valik"}
                                </span>
                              </div>
                              <p className="mt-2 text-xs leading-5 text-[#526b69]">
                                {food.benefit}
                              </p>
                              {food.caution && (
                                <p className="mt-1.5 text-xs leading-5 text-[#a64138]">
                                  <b>Miks piirata?</b> {food.caution}
                                </p>
                              )}
                              {food.recommended && !matchesNeed && (
                                <p className="mt-1.5 text-xs leading-5 text-[#9b6d22]">
                                  See võib olla osa heast menüüst, kuid ei
                                  täitnud
                                  {` ${current.name}`} praegust tellimust.
                                </p>
                              )}
                            </div>
                          </article>
                        )
                      })
                    )}
                  </div>
                </div>

                <div
                  className={`mt-5 flex items-start gap-3 rounded-[20px] p-4 text-sm ${
                    spent > budget
                      ? "bg-[#fae2de] text-[#a64138]"
                      : "bg-[#dfeee8] text-[#32775f]"
                  }`}
                >
                  <Icon
                    name={spent > budget ? "spark" : "check"}
                    className="size-5 shrink-0"
                  />
                  <div>
                    <p className="font-design-bold">
                      {spent > budget
                        ? "Rahalimiidi ületamine vähendas lõpptulemust."
                        : "Eelarveosa: 20/20 punkti."}
                    </p>
                    <p className="mt-1 leading-6">
                      {spent > budget
                        ? `Eelarve ületati ${(spent - budget).toFixed(2).replace(".", ",")} euro võrra, mistõttu said eelarveosa eest 0/20 punkti. See oli üks põhjus, miks ${current.name} tulemus jäi negatiivsemaks. Vali sama vajaduse katmiseks soodsam toit.`
                        : `Püsisid ${current.name} ${budget.toFixed(2).replace(".", ",")} euro suuruses eelarves ja said selle eest kõik 20 punkti.`}
                    </p>
                  </div>
                </div>

                <PrimaryButton onClick={advanceAfterFeedback} className="mt-7">
                  {round === penguins.length - 1
                    ? "VAATA TULEMUST"
                    : detectorRounds.includes(round)
                      ? "KONTROLLI VÄIDET"
                      : "JÄRGMINE"}
                </PrimaryButton>
              </div>
            ) : (
              <>
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="font-design-semibold text-xs tracking-[.15em] text-[#4e8491]">
                      SÖÖKLALETT
                    </p>
                    <h2 className="font-design-bold mt-2 text-2xl text-[#183d42]">
                      Vali sobivad toidud
                    </h2>
                  </div>
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    <p className="text-xs text-[#6f817f]">
                      Klõpsa või lohista taldrikule
                    </p>
                    <span
                      className={`font-design-bold rounded-full px-3 py-2 text-xs ${
                        spent > budget
                          ? "bg-[#fae2de] text-[#b94035]"
                          : "bg-[#e8f0ec] text-[#386e79]"
                      }`}
                    >
                      KULUNUD {spent.toFixed(2).replace(".", ",")} €
                    </span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {availableFoods.map((food) => {
                    const selected = plate.includes(food.id)
                    return (
                      <button
                        key={food.id}
                        draggable
                        onDragStart={(event) =>
                          event.dataTransfer.setData("text/plain", food.id)
                        }
                        onClick={() => toggleFood(food.id)}
                        className={`group relative min-h-[112px] rounded-[22px] border p-4 text-left transition ${
                          selected
                            ? "border-[#4e8491] bg-[#e8f0ec] ring-2 ring-[#4e8491]/15"
                            : "border-[#183d42]/10 hover:-translate-y-0.5 hover:border-[#4e8491]/45"
                        }`}
                      >
                        <span
                          className="mb-2 grid size-11 place-items-center rounded-2xl"
                          style={{ backgroundColor: `${food.color}18` }}
                        >
                          <FoodIcon
                            name={food.icon}
                            color={food.color}
                            className="size-9"
                          />
                        </span>
                        <span className="font-design-semibold block text-sm leading-5 text-[#183d42]">
                          {food.name}
                        </span>
                        <span className="mt-1 block text-xs text-[#6f817f]">
                          {food.price.toFixed(2).replace(".", ",")} €
                        </span>
                        {selected && (
                          <span className="absolute right-3 top-3 grid size-6 place-items-center rounded-full bg-[#4e8491] text-white">
                            <Icon name="check" className="size-4" />
                          </span>
                        )}
                        {!food.recommended && (
                          <span className="absolute bottom-3 right-3 rounded-full bg-[#fae2de] px-2 py-1 text-[9px] text-[#a64138]">
                            harva
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
                <div
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={dropFood}
                  className="relative mt-7 flex min-h-[165px] items-center justify-center overflow-hidden rounded-[30px] border-2 border-dashed border-[#4e8491]/25 bg-[#f7f4eb]"
                >
                  <div className="absolute left-1/2 top-1/2 h-32 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border-[10px] border-[#e1ded4] bg-white shadow-inner" />
                  <div className="relative z-10 flex max-w-[75%] flex-wrap justify-center gap-2">
                    {selectedFoods.length === 0 ? (
                      <p className="text-sm text-[#8a9997]">
                        Taldrik on veel tühi
                      </p>
                    ) : (
                      selectedFoods.map((food) => (
                        <button
                          onClick={() => toggleFood(food.id)}
                          key={food.id}
                          className="font-design-semibold rounded-full px-3 py-2 text-xs text-white shadow-md"
                          style={{ backgroundColor: food.color }}
                        >
                          {food.name} ×
                        </button>
                      ))
                    )}
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="text-xs leading-5 text-[#6f817f]">
                    Vihje: üks toiduaine võib katta ühe soovitud toidugrupi.
                  </p>
                  <button
                    disabled={plate.length === 0}
                    onClick={evaluate}
                    className="font-design-bold inline-flex shrink-0 items-center gap-2 rounded-full bg-[#183d42] px-6 py-3.5 text-sm text-white transition hover:bg-[#28565b] disabled:cursor-not-allowed disabled:opacity-35"
                  >
                    ANNA TOIT <Icon name="arrow" />
                  </button>
                </div>
              </>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}
