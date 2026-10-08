import type { Food, PenguinData } from "./types"

export const foods: Food[] = [
  {
    id: "broccoli",
    name: "Brokoli",
    category: "köögivili",
    price: 1.2,
    color: "#48A37A",
    icon: "broccoli",
    recommended: true,
    benefit:
      "Brokoli annab kiudaineid, C-vitamiini ja folaati, mis toetavad seedimist ning immuunsüsteemi.",
  },
  {
    id: "carrot",
    name: "Porgand",
    category: "köögivili",
    price: 0.8,
    color: "#EA8A48",
    icon: "carrot",
    recommended: true,
    benefit:
      "Porgandi beetakaroteenist toodab keha A-vitamiini, mis toetab nägemist ja immuunsust.",
  },
  {
    id: "rice",
    name: "Täisterariis",
    category: "teravili",
    price: 1.4,
    color: "#C8A96B",
    icon: "rice",
    recommended: true,
    benefit:
      "Täisterariis annab liitsüsivesikuid ja kiudaineid, mistõttu vabaneb energia ühtlasemalt.",
  },
  {
    id: "bread",
    name: "Rukkileib",
    category: "teravili",
    price: 0.7,
    color: "#85654B",
    icon: "bread",
    recommended: true,
    benefit:
      "Rukkileib sisaldab kiudaineid, mis aitavad hoida täiskõhutunnet ja toetavad soolestikku.",
  },
  {
    id: "fish",
    name: "Ahjukala",
    category: "valk",
    price: 2.8,
    color: "#5D8FB5",
    icon: "fish",
    recommended: true,
    benefit:
      "Kala annab kvaliteetset valku ja oomega-3-rasvhappeid, mis toetavad aju ning südame tööd.",
  },
  {
    id: "beans",
    name: "Oahautis",
    category: "valk",
    price: 1.7,
    color: "#B85D5A",
    icon: "beans",
    recommended: true,
    benefit:
      "Oad annavad taimset valku ja kiudaineid, mis toetavad lihaseid ning hoiavad kõhu kauem täis.",
  },
  {
    id: "yogurt",
    name: "Maitsestamata jogurt",
    category: "piimatoode",
    price: 1.3,
    color: "#B8D8E2",
    icon: "yogurt",
    recommended: true,
    benefit:
      "Maitsestamata jogurt annab valku ja kaltsiumi, mida vajavad luud ning hambad.",
  },
  {
    id: "apple",
    name: "Õun",
    category: "puuvili",
    price: 0.9,
    color: "#B6C95A",
    icon: "apple",
    recommended: true,
    benefit:
      "Terve õun annab vett ja kiudaineid ning tõstab veresuhkrut aeglasemalt kui mahl.",
  },
  {
    id: "berries",
    name: "Marjad",
    category: "puuvili",
    price: 1.6,
    color: "#825B91",
    icon: "berries",
    recommended: true,
    benefit:
      "Marjad sisaldavad kiudaineid, C-vitamiini ja taimseid ühendeid, mis kaitsevad keharakke.",
  },
  {
    id: "energy",
    name: "Energiajook",
    category: "muu",
    price: 1.9,
    color: "#5E68A6",
    icon: "energy",
    recommended: false,
    benefit: "See annab lühiajaliselt kofeiinist erksust.",
    caution:
      "Lastele energiajook ei sobi: kofeiin võib häirida und, tõsta pulssi ja põhjustada rahutust.",
  },
  {
    id: "cake",
    name: "Kreemikook",
    category: "muu",
    price: 2.4,
    color: "#D98188",
    icon: "cake",
    recommended: false,
    benefit: "Kook annab kiiresti energiat, kuid vähe vajalikke toitaineid.",
    caution:
      "Rohke lisatud suhkur ja küllastunud rasv ei hoia kõhtu kaua täis ning sage tarbimine kahjustab hammaste tervist.",
  },
  {
    id: "fries",
    name: "Friikartulid",
    category: "muu",
    price: 2.2,
    color: "#E4AA43",
    icon: "fries",
    recommended: false,
    benefit:
      "Kartul annab süsivesikuid, kuid praadimine muudab eine rasva- ja energiarikkaks.",
    caution:
      "Friikartulites on sageli palju soola ja rasva, mistõttu ei sobi need tasakaalustatud lõuna põhivalikuks.",
  },
  {
    id: "soda",
    name: "Limonaad",
    category: "muu",
    price: 1.5,
    color: "#C95C58",
    icon: "soda",
    recommended: false,
    benefit: "Limonaad annab kiiresti suhkrust energiat.",
    caution:
      "Suhkruga jook ei anna kiudaineid ega täiskõhutunnet ning sage joomine suurendab hambakaariese riski.",
  },
  {
    id: "candy",
    name: "Kummikommid",
    category: "muu",
    price: 1.1,
    color: "#B66B9D",
    icon: "candy",
    recommended: false,
    benefit: "Kommides olev suhkur annab väga lühiajalist energiat.",
    caution:
      "Kommides on vähe vitamiine, mineraalaineid ja kiudaineid; sage näksimine kahjustab hambaid.",
  },
]

const challengeTemplates: Omit<PenguinData, "name" | "color" | "accessory" | "budget" | "focus">[] =
  [
    {
      request: "Palun vali mulle köögivili ja midagi valgurikast.",
      wanted: ["köögivili", "valk"],
      note: "Pikk koolipäev vajab värsket energiat.",
      availableFoodIds: [
        "carrot",
        "broccoli",
        "beans",
        "fish",
        "energy",
        "cake",
      ],
    },
    {
      request: "Soovin täisteratoitu ja ühe puuvilja.",
      wanted: ["teravili", "puuvili"],
      note: "Täisterad aitavad mul kauem keskenduda.",
      availableFoodIds: ["rice", "bread", "apple", "berries", "soda", "fries"],
    },
    {
      request: "Vali mulle piimatoode ja köögivili.",
      wanted: ["piimatoode", "köögivili"],
      note: "Mitmekesine taldrik teeb tuju heaks.",
      availableFoodIds: [
        "yogurt",
        "broccoli",
        "carrot",
        "apple",
        "cake",
        "candy",
      ],
    },
    {
      request: "Palun pane taldrikule valku ja täisteratoitu.",
      wanted: ["valk", "teravili"],
      note: "Mul on pärast lõunat trenn.",
      availableFoodIds: ["fish", "beans", "rice", "bread", "energy", "fries"],
    },
    {
      request: "Soovin puuvilja ning midagi valgurikast.",
      wanted: ["puuvili", "valk"],
      note: "Tark valik hoiab päeva rütmis.",
      availableFoodIds: [
        "apple",
        "berries",
        "beans",
        "yogurt",
        "soda",
        "candy",
      ],
    },
    {
      request: "Koosta mulle eine köögiviljast, teraviljast ja piimatootest.",
      wanted: ["köögivili", "teravili", "piimatoode"],
      note: "Vaata tähelepanelikult ka eelarvet.",
      availableFoodIds: [
        "carrot",
        "broccoli",
        "bread",
        "rice",
        "yogurt",
        "cake",
        "energy",
      ],
    },
    {
      request: "Palun vali köögivili ja üks värske puuvili.",
      wanted: ["köögivili", "puuvili"],
      note: "Värviline taldrik annab erinevaid vitamiine.",
      availableFoodIds: [
        "broccoli",
        "carrot",
        "apple",
        "berries",
        "soda",
        "candy",
      ],
    },
    {
      request: "Soovin täisteratoitu ja maitsestamata piimatoodet.",
      wanted: ["teravili", "piimatoode"],
      note: "Vajan energiat ja kaltsiumi pikaks päevaks.",
      availableFoodIds: ["rice", "bread", "yogurt", "apple", "cake", "fries"],
    },
    {
      request: "Vali mulle valgurikas toit ja piimatoode.",
      wanted: ["valk", "piimatoode"],
      note: "Valk ja kaltsium toetavad kasvavat keha.",
      availableFoodIds: [
        "fish",
        "beans",
        "yogurt",
        "berries",
        "energy",
        "candy",
      ],
    },
    {
      request: "Palun koosta lõuna köögiviljast ja täisteratoidust.",
      wanted: ["köögivili", "teravili"],
      note: "Kiudained aitavad hoida kõhu kauem täis.",
      availableFoodIds: [
        "carrot",
        "broccoli",
        "rice",
        "bread",
        "soda",
        "fries",
      ],
    },
  ]

const studentProfiles: Pick<PenguinData, "name" | "color" | "accessory" | "budget">[] =
  [
    { name: "Mia", color: "#D66B5D", accessory: "scarf", budget: 3.7 },
    { name: "Oskar", color: "#4E8491", accessory: "glasses", budget: 3.8 },
    { name: "Roosi", color: "#D29A47", accessory: "cap", budget: 3.9 },
    { name: "Hugo", color: "#6D7DA8", accessory: "bow", budget: 4.0 },
    { name: "Kärt", color: "#A36B8A", accessory: "headphones", budget: 4.1 },
    { name: "Rasmus", color: "#4D9884", accessory: "bag", budget: 4.2 },
    { name: "Liis", color: "#C96E58", accessory: "glasses", budget: 4.3 },
    { name: "Martin", color: "#547A91", accessory: "scarf", budget: 4.4 },
    { name: "Anni", color: "#C58C42", accessory: "bow", budget: 4.5 },
    { name: "Sander", color: "#7886B0", accessory: "cap", budget: 4.6 },
    { name: "Emma", color: "#3F8E8C", accessory: "headphones", budget: 4.7 },
    { name: "Markus", color: "#B85D5A", accessory: "bag", budget: 4.8 },
    { name: "Nora", color: "#7D9B5B", accessory: "scarf", budget: 4.9 },
    { name: "Aron", color: "#9B6B4F", accessory: "glasses", budget: 5.0 },
    { name: "Säde", color: "#6B73A8", accessory: "cap", budget: 5.1 },
    { name: "Robin", color: "#4A8070", accessory: "bow", budget: 5.2 },
    { name: "Laura", color: "#B4697B", accessory: "headphones", budget: 5.3 },
    { name: "Erik", color: "#677F98", accessory: "bag", budget: 5.4 },
    { name: "Marta", color: "#A88747", accessory: "scarf", budget: 5.5 },
    { name: "Karl", color: "#678E83", accessory: "glasses", budget: 5.6 },
    { name: "Eliise", color: "#D07752", accessory: "cap", budget: 5.7 },
    { name: "Henry", color: "#447885", accessory: "bow", budget: 5.8 },
    { name: "Kadri", color: "#916A8E", accessory: "headphones", budget: 5.9 },
    { name: "Oliver", color: "#719255", accessory: "bag", budget: 6.0 },
    { name: "Grete", color: "#B37D4F", accessory: "scarf", budget: 6.1 },
    { name: "Kaspar", color: "#5C6FA1", accessory: "glasses", budget: 6.2 },
    { name: "Aino", color: "#BE6262", accessory: "cap", budget: 6.3 },
    { name: "Joonas", color: "#408F81", accessory: "bow", budget: 6.4 },
    { name: "Piret", color: "#967A4F", accessory: "headphones", budget: 6.5 },
    { name: "Tõnis", color: "#687B8D", accessory: "bag", budget: 6.6 },
  ]

const stageVariations = [
  { focus: "Tasakaalustatud taldrik", requestAddition: "Tee valik mitmekesiseks.", note: "Värviline taldrik annab eri toitaineid." },
  { focus: "Tasakaalustatud taldrik", requestAddition: "Mõtle, kuidas see eine kõhtu täidab.", note: "Terve puuvili pakub rohkem kiudaineid kui mahl." },
  { focus: "Tasakaalustatud taldrik", requestAddition: "Vali midagi, mida sööd hea meelega.", note: "Erinevad toidugrupid toetavad keha eri viisidel." },
  { focus: "Tasakaalustatud taldrik", requestAddition: "Vaata, et valikus oleks kaks eri toidugruppi.", note: "Teravili annab kehale igapäevast energiat." },
  { focus: "Tasakaalustatud taldrik", requestAddition: "Lisa taldrikule midagi värsket.", note: "Puuvili ja valk moodustavad koos toitva eine." },
  { focus: "Tasakaalustatud taldrik", requestAddition: "Jälgi, et kõik soovitud grupid oleks kaetud.", note: "Mitmekesisus aitab katta erinevaid toitainevajadusi." },
  { focus: "Tasakaalustatud taldrik", requestAddition: "Eelista tervet toitu magusale joogile.", note: "Köögiviljad ja puuviljad annavad kiudaineid." },
  { focus: "Tasakaalustatud taldrik", requestAddition: "Koosta eine, mis annab energiat pikaks päevaks.", note: "Täistera ja maitsestamata piimatoode sobivad hästi kokku." },
  { focus: "Tasakaalustatud taldrik", requestAddition: "Vali tasakaal, mitte ainult üks lemmiktoit.", note: "Valgu- ja piimatooted annavad erinevaid toitaineid." },
  { focus: "Tasakaalustatud taldrik", requestAddition: "Mõtle taldrikust kui tervikust.", note: "Köögivilja ja täistera kooslus lisab kiudaineid." },
  { focus: "Eelarve ja hinnavõrdlus", requestAddition: "Võrdle hindu ja eelista soodsamat sobivat valikut.", note: "Odavam valik võib olla sama toitev." },
  { focus: "Eelarve ja hinnavõrdlus", requestAddition: "Jäta eelarvesse ruumi ka puuviljale.", note: "Kõige kallim toode pole automaatselt parim." },
  { focus: "Eelarve ja hinnavõrdlus", requestAddition: "Kontrolli hinda enne, kui taldriku täidad.", note: "Väiksem hinnavahe aitab kogu eine eelarves hoida." },
  { focus: "Eelarve ja hinnavõrdlus", requestAddition: "Leia valik, mis täidab vajadused ja jääb limiiti.", note: "Võrdle taimse ja loomse valgu hinda." },
  { focus: "Eelarve ja hinnavõrdlus", requestAddition: "Arvesta kogu taldriku maksumust.", note: "Soodne köögivili jätab rohkem raha põhitoidule." },
  { focus: "Eelarve ja hinnavõrdlus", requestAddition: "Jaga raha kolme toidugrupi vahel.", note: "Planeeri portsjonid enne valiku tegemist." },
  { focus: "Eelarve ja hinnavõrdlus", requestAddition: "Võrdle puuvilja ja valgu hinda.", note: "Taimsed valguallikad võivad olla hea säästlik valik." },
  { focus: "Eelarve ja hinnavõrdlus", requestAddition: "Kasuta raha toidu, mitte limonaadi peale.", note: "Hind ja toiteväärtus tasub koos läbi mõelda." },
  { focus: "Eelarve ja hinnavõrdlus", requestAddition: "Leia kaks sobivat toodet, mis mahuvad limiiti.", note: "Täisteratooted annavad sageli hea hinna eest kiudaineid." },
  { focus: "Eelarve ja hinnavõrdlus", requestAddition: "Võrdle alternatiive, enne kui otsustad.", note: "Soodne valguallikas aitab eelarvet tasakaalus hoida." },
  { focus: "Toidupüramiid ja kiirenergia", requestAddition: "Vali püramiidi põhjast sagedamini sobivaid toite.", note: "Täisteratooted ja köögiviljad sobivad menüüsse sageli." },
  { focus: "Toidupüramiid ja kiirenergia", requestAddition: "Terve puuvili on parem igapäevane valik kui magus jook.", note: "Mahlas on vähem kiudaineid kui terves puuviljas." },
  { focus: "Toidupüramiid ja kiirenergia", requestAddition: "Jäta kook harvaks, mitte põhitoidu asemele.", note: "Maiustused kuuluvad püramiidi tippu." },
  { focus: "Toidupüramiid ja kiirenergia", requestAddition: "Energiajoogist ei saa vajalikku lõunasööki.", note: "Lapsed peaksid kofeiiniga energiajooke vältima." },
  { focus: "Toidupüramiid ja kiirenergia", requestAddition: "Võrdle puuvilja ja kommi mõju täiskõhule.", note: "Kiudained aitavad kõhul kauem täis püsida." },
  { focus: "Toidupüramiid ja kiirenergia", requestAddition: "Vali päris toit, mitte vaid kiire ergutus.", note: "Regulaarne eine toetab õppimist paremini kui kofeiin." },
  { focus: "Toidupüramiid ja kiirenergia", requestAddition: "Limonaad ei asenda köögivilja ega puuvilja.", note: "Magus jook annab suhkrut, kuid vähe kasulikke toitaineid." },
  { focus: "Toidupüramiid ja kiirenergia", requestAddition: "Friikartulid jäta harvemaks valikuks.", note: "Täisterad sobivad sagedamini kui tugevalt töödeldud näksid." },
  { focus: "Toidupüramiid ja kiirenergia", requestAddition: "Ära aja segi kofeiini ja toidust saadavat energiat.", note: "Kasvav keha vajab und ja mitmekesist toitu." },
  { focus: "Toidupüramiid ja kiirenergia", requestAddition: "Võrdle tervet einekomplekti püramiidi järgi.", note: "Tasakaalu loob eri toidugruppide kooslus." },
] satisfies { focus: string; requestAddition: string; note: string }[]

const usedFoodLists = new Set<string>()

function addStageFoodOptions(availableFoodIds: string[], roundIndex: number) {
  const options = [...availableFoodIds]
  let offset = roundIndex * 3
  const targetLength = Math.min(
    availableFoodIds.length + 2 + Math.floor(roundIndex / 10),
    foods.length,
  )

  while (true) {
    while (options.length < targetLength) {
      const candidate = foods[offset % foods.length].id
      if (!options.includes(candidate)) options.push(candidate)
      offset++
    }

    const signature = [...options].sort().join(",")
    if (!usedFoodLists.has(signature)) {
      usedFoodLists.add(signature)
      return options
    }

    const nextCandidate = foods[offset % foods.length].id
    if (!options.includes(nextCandidate)) options.push(nextCandidate)
    offset++
  }
}

export const penguins: PenguinData[] = studentProfiles.map((student, index) => {
  const challenge = challengeTemplates[index % challengeTemplates.length]
  const variation = stageVariations[index]

  return {
    ...student,
    ...challenge,
    focus: variation.focus,
    request: `${challenge.request} ${variation.requestAddition}`,
    note: variation.note,
    availableFoodIds: addStageFoodOptions(challenge.availableFoodIds, index),
  }
})

export const detectorRounds = [3, 8, 13, 18, 23, 28]

export const detectorClaims = [
  {
    statement:
      "Puuviljamahl on janu kustutamiseks sama hea igapäevane valik kui vesi.",
    correct: false,
    feedback:
      "Vesi on parim janukustutaja. Mahlas võib olla palju looduslikku suhkrut ning selles on vähem kiudaineid kui terves puuviljas.",
  },
  {
    statement:
      "Täisteratooted sisaldavad üldiselt rohkem kiudaineid kui rafineeritud teraviljatooted.",
    correct: true,
    feedback:
      "Täisteras säilib rohkem tera osi ja kiudaineid. Need aitavad kõhul kauem täis püsida ning toetavad seedimist.",
  },
  {
    statement:
      "Tervislikuks toitumiseks peab kõik rasvad menüüst täielikult välja jätma.",
    correct: false,
    feedback:
      "Keha vajab ka rasvu. Eelistada tasub küllastumata rasvu, mida leidub näiteks kalas, pähklites ja seemnetes.",
  },
  {
    statement:
      "Gluteenivaba toode on alati tervislikum kui tavaline samalaadne toode.",
    correct: false,
    feedback:
      "Gluteenivaba toit on vajalik tsöliaakia korral, kuid see ei tähenda automaatselt rohkem kiudaineid ega paremat toiteväärtust.",
  },
  {
    statement:
      "Taimsed valgud, näiteks oad, aitavad samuti keha kasvatada ja taastada.",
    correct: true,
    feedback:
      "Oad ja teised kaunviljad annavad valku. Mitmekesine menüü aitab saada kätte kõik vajalikud aminohapped ja muud toitained.",
  },
  {
    statement:
      "Regulaarsed mitmekesised toidukorrad aitavad hoida energiat ja keskendumist.",
    correct: true,
    feedback:
      "Sobiva rütmiga toidukorrad aitavad nälga ennetada ja toetavad õppimist. Vajadused on siiski inimestel erinevad.",
  },
]
