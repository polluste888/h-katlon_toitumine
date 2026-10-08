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

const challengeTemplates: Omit<PenguinData, "name" | "color" | "accessory" | "budget">[] =
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
  ]

export const penguins: PenguinData[] = studentProfiles.map(
  (student, index) => ({
    ...student,
    ...challengeTemplates[index % challengeTemplates.length],
  }),
)

export const detectorRounds = [2, 5, 8]

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
]
