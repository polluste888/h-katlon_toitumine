// 1. RIIKIDE ANDMED
const gameData = {
  continents: {
    "europe": {
      name: "Euroopa",
      countries: [
        {
          id: "estonia", name: "Eesti Koolisöökla", flag: "🇪🇪", flagCode: "ee",
          vibe: {
            name: "Metsaline & kodune",
            primary: "#ea580c",
            secondary: "#f59e0b",
            accent: "#fbbf24",
            soft: "#fff7ed"
          },
          foods: [
            { id: "ee1", name: "Porgand & kapsas", tag: "Tervislik", kcal: 45, portion: 100, unit: "g", protein: 2, carbs: 9, fat: 0, category: "veg", emoji: "🥕", price: 1.20 },
            { id: "ee2", name: "Hautatud peet", tag: "Raud", kcal: 55, portion: 100, unit: "g", protein: 2, carbs: 11, fat: 0, category: "veg", emoji: "🫚", price: 1.40 },
            { id: "ee3", name: "Kartulipuder", tag: "Süsivesik", kcal: 140, portion: 150, unit: "g", protein: 3, carbs: 23, fat: 4, category: "side", emoji: "🥔", price: 2.20 },
            { id: "ee4", name: "Tatrapuder", tag: "Aeglane energia", kcal: 130, portion: 150, unit: "g", protein: 5, carbs: 25, fat: 1, category: "side", emoji: "🥣", price: 2.10 },
            { id: "ee5", name: "Lihapallid", tag: "Valk", kcal: 190, portion: 100, unit: "g", protein: 16, carbs: 5, fat: 10, category: "main", emoji: "🧆", price: 3.50 },
            { id: "ee6", name: "Ahjulõhefilee", tag: "Omega-3", kcal: 175, portion: 100, unit: "g", protein: 20, carbs: 0, fat: 10, category: "main", emoji: "🐟", price: 3.40 }
          ],
          students: [
            { name: "Marten (4.b)", avatar: "👦", tag: "Traditsiooniline", desiredId: "ee5", dialogue: "Mina sooviksin täna kindlasti Lihapalle ja sinna juurde köögivilja ning lisandit!" },
            { name: "Liisi (2.a)", avatar: "👧", tag: "Kala-sõber", desiredId: "ee6", dialogue: "Tere! Sööksin hea meelega Ahjulõhet koos värske peediga." },
            { name: "Peeter (5.c)", avatar: "🧑", tag: "Taimetoitlane", desiredId: "ee1", dialogue: "Ma liha ei soovi. Pane mulle taldrikule Porgandit & kapsast ning Tatraputru!" },
            { name: "Katrin (3.b)", avatar: "👧", tag: "Energiakogujad", desiredId: "ee3", dialogue: "Soovin Kartuliputrut ja Porgandit!" },
            { name: "Jaanus (1.b)", avatar: "🧒", tag: "Kerge eine", desiredId: "ee2", dialogue: "Palun mulle Hautatud peeti ja lihapalle!" }
          ]
        },
        {
          id: "italy", name: "Itaalia Koolisöökla", flag: "🇮🇹", flagCode: "it",
          vibe: {
            name: "Värvikas & Itaalia",
            primary: "#dc2626",
            secondary: "#f97316",
            accent: "#facc15",
            soft: "#fff1f2"
          },
          foods: [
            { id: "it1", name: "Caprese salat", tag: "Värske", kcal: 60, portion: 100, unit: "g", protein: 4, carbs: 3, fat: 3, category: "veg", emoji: "🥗", price: 1.80 },
            { id: "it2", name: "Aurutatud brokkoli", tag: "Vitamiin C", kcal: 40, portion: 100, unit: "g", protein: 3, carbs: 6, fat: 0.5, category: "veg", emoji: "🥦", price: 1.50 },
            { id: "it3", name: "Täisterapasta", tag: "Energia", kcal: 180, portion: 150, unit: "g", protein: 6, carbs: 34, fat: 2, category: "side", emoji: "🍝", price: 2.70 },
            { id: "it4", name: "Risotto", tag: "Süsivesik", kcal: 160, portion: 150, unit: "g", protein: 4, carbs: 29, fat: 3, category: "side", emoji: "🍚", price: 2.50 },
            { id: "it5", name: "Kalafilee sidruniga", tag: "Kerge valk", kcal: 160, portion: 100, unit: "g", protein: 21, carbs: 2, fat: 8, category: "main", emoji: "🐟", price: 3.60 },
            { id: "it6", name: "Itaalia lihapallid", tag: "Valk", kcal: 200, portion: 100, unit: "g", protein: 16, carbs: 7, fat: 11, category: "main", emoji: "🧆", price: 3.80 }
          ],
          students: [
            { name: "Sofia (3.a)", avatar: "👧", tag: "Pastasõber", desiredId: "it3", dialogue: "Ciao! Soovin kindlasti Täisterapastat ja Caprese salatit!" },
            { name: "Marco (5.b)", avatar: "👦", tag: "Kala-sõber", desiredId: "it5", dialogue: "Tahaksin Kalafileed sidruniga ning Brokkolit." },
            { name: "Giulia (1.c)", avatar: "👧", tag: "Itaalia klassika", desiredId: "it6", dialogue: "Palun mulle Itaalia lihapalle koos risottoga!" },
            { name: "Luca (4.a)", avatar: "🧑", tag: "Kerge valik", desiredId: "it1", dialogue: "Soovin täna alustada värske Caprese salatiga!" },
            { name: "Matteo (2.b)", avatar: "🧒", tag: "Brokkoli fänn", desiredId: "it2", dialogue: "Brokkoli on minu lemmik! Lisa seda taldrikule." }
          ]
        }
      ]
    },
    "asia": {
      name: "Aasia",
      countries: [
        {
          id: "japan", name: "Jaapani Koolisöökla", flag: "🇯🇵", flagCode: "jp",
          vibe: {
            name: "Minimalistlik & puhas",
            primary: "#0f766e",
            secondary: "#14b8a6",
            accent: "#f59e0b",
            soft: "#ecfeff"
          },
          foods: [
            { id: "jp1", name: "Edamame oad", tag: "Kiudained", kcal: 50, portion: 50, unit: "g", protein: 5, carbs: 4, fat: 1, category: "veg", emoji: "🫛", price: 1.50 },
            { id: "jp2", name: "Miso supp & köögiviljad", tag: "Tervislik", kcal: 45, portion: 200, unit: "ml", protein: 3, carbs: 5, fat: 1, category: "veg", emoji: "🍲", price: 1.60 },
            { id: "jp3", name: "Aurutatud riis", tag: "Energia", kcal: 150, portion: 150, unit: "g", protein: 3, carbs: 33, fat: 0.5, category: "side", emoji: "🍚", price: 2.40 },
            { id: "jp4", name: "Riisinuudlid", tag: "Kerge lisand", kcal: 140, portion: 150, unit: "g", protein: 3, carbs: 29, fat: 1, category: "side", emoji: "🍜", price: 2.30 },
            { id: "jp5", name: "Teriyaki kana", tag: "Valk", kcal: 200, portion: 100, unit: "g", protein: 22, carbs: 9, fat: 8, category: "main", emoji: "🍗", price: 3.70 },
            { id: "jp6", name: "Grillitud lõhe", tag: "Omega-3", kcal: 180, portion: 100, unit: "g", protein: 22, carbs: 0, fat: 10, category: "main", emoji: "🐟", price: 3.80 }
          ],
          students: [
            { name: "Kenji (4.a)", avatar: "👦", tag: "Teriyaki fänn", desiredId: "jp5", dialogue: "Konnichiwa! Soovin Teriyaki kana ja aurutatud riisi!" },
            { name: "Yuki (2.c)", avatar: "👧", tag: "Oasõber", desiredId: "jp1", dialogue: "Palun pane mulle Edamame ube ja grillitud lõhet." },
            { name: "Ren (5.b)", avatar: "🧑", tag: "Kalatoidud", desiredId: "jp6", dialogue: "Grillitud lõhe koos riisinuudlitega oleks suurepärane!" },
            { name: "Hana (3.a)", avatar: "👧", tag: "Taimne eine", desiredId: "jp2", dialogue: "Soovin täna Miso suppi ja Edamame ube." },
            { name: "Sora (1.b)", avatar: "🧒", tag: "Riisisõber", desiredId: "jp3", dialogue: "Mulle meeldib aurutatud riis kana ja köögiviljadega!" }
          ]
        }
      ]
    },
    "africa": {
      name: "Aafrika",
      countries: [
        {
          id: "kenya", name: "Keenia Koolisöökla", flag: "🇰🇪", flagCode: "ke",
          vibe: {
            name: "Soojus & värskus",
            primary: "#15803d",
            secondary: "#22c55e",
            accent: "#fbbf24",
            soft: "#f0fdf4"
          },
          foods: [
            { id: "ke1", name: "Sukuma Wiki (kapsas)", tag: "Roheline", kcal: 50, portion: 100, unit: "g", protein: 3, carbs: 6, fat: 2, category: "veg", emoji: "🥬", price: 1.30 },
            { id: "ke2", name: "Porgandi-maisisalat", tag: "Värske", kcal: 60, portion: 100, unit: "g", protein: 2, carbs: 12, fat: 1, category: "veg", emoji: "🌽", price: 1.60 },
            { id: "ke3", name: "Ugali (maisipuder)", tag: "Energia", kcal: 160, portion: 150, unit: "g", protein: 3, carbs: 34, fat: 1, category: "side", emoji: "🫓", price: 2.50 },
            { id: "ke4", name: "Riis kookospiimaga", tag: "Maitsev", kcal: 170, portion: 150, unit: "g", protein: 3, carbs: 31, fat: 4, category: "side", emoji: "🍚", price: 2.70 },
            { id: "ke5", name: "Oahautis", tag: "Taimne valk", kcal: 170, portion: 150, unit: "g", protein: 10, carbs: 24, fat: 3, category: "main", emoji: "🫘", price: 3.00 },
            { id: "ke6", name: "Kanalihakaste", tag: "Valk", kcal: 190, portion: 100, unit: "g", protein: 22, carbs: 5, fat: 9, category: "main", emoji: "🍗", price: 3.40 }
          ],
          students: [
            { name: "Amara (3.b)", avatar: "👧", tag: "Traditsiooniline", desiredId: "ke3", dialogue: "Jambo! Soovin kindlasti Ugalit ja Sukuma Wiki kapsast." },
            { name: "Kip (5.a)", avatar: "👦", tag: "Jooksja", desiredId: "ke6", dialogue: "Tulin trennist! Vajate Kanalihakastet ja riisi." },
            { name: "Zuri (2.c)", avatar: "👧", tag: "Taimetoitlane", desiredId: "ke5", dialogue: "Soovin Oahautist koos Sukuma Wiki rohelise kapsaga!" },
            { name: "Nia (1.a)", avatar: "👧", tag: "Värskus", desiredId: "ke2", dialogue: "Palun mulle Porgandi-maisisalatit ja kookosriisi." },
            { name: "Jabari (4.b)", avatar: "👦", tag: "Suur isu", desiredId: "ke5", dialogue: "Mulle oahautist ja Ugalit, aitäh!" }
          ]
        }
      ]
    },
    "north-america": {
      name: "Põhja-Ameerika",
      countries: [
        {
          id: "usa", name: "USA Koolisöökla", flag: "🇺🇸", flagCode: "us",
          vibe: {
            name: "Energeetiline & kiire",
            primary: "#2563eb",
            secondary: "#3b82f6",
            accent: "#f59e0b",
            soft: "#eff6ff"
          },
          foods: [
            { id: "us1", name: "Õunalõigud & seller", tag: "Vitamiinid", kcal: 40, portion: 100, unit: "g", protein: 1, carbs: 10, fat: 0, category: "veg", emoji: "🍎", price: 1.00 },
            { id: "us2", name: "Roheline salat", tag: "Värske", kcal: 35, portion: 100, unit: "g", protein: 2, carbs: 6, fat: 0, category: "veg", emoji: "🥗", price: 1.20 },
            { id: "us3", name: "Bataadifriikad", tag: "A-vitamiin", kcal: 160, portion: 100, unit: "g", protein: 2, carbs: 25, fat: 5, category: "side", emoji: "🍠", price: 2.60 },
            { id: "us4", name: "Pruun riis", tag: "Täistera", kcal: 140, portion: 150, unit: "g", protein: 4, carbs: 30, fat: 1, category: "side", emoji: "🍚", price: 2.40 },
            { id: "us5", name: "Kalkuniburger", tag: "Lahja valk", kcal: 220, portion: 100, unit: "g", protein: 18, carbs: 22, fat: 7, category: "main", emoji: "🍔", price: 3.80 },
            { id: "us6", name: "Grillitud kanafilee", tag: "Puhas valk", kcal: 180, portion: 100, unit: "g", protein: 30, carbs: 0, fat: 7, category: "main", emoji: "🍗", price: 3.60 }
          ],
          students: [
            { name: "Alex (4.c)", avatar: "👦", tag: "Burgerisõber", desiredId: "us5", dialogue: "Hey! Soovin tervislikku Kalkuniburgerit ja bataadifriikaid!" },
            { name: "Emily (2.b)", avatar: "👧", tag: "Õunafänn", desiredId: "us1", dialogue: "Palun mulle Õunalõike, sellerit ja grillitud kanafileed." },
            { name: "Jayden (5.a)", avatar: "🧑", tag: "Tervislik eine", desiredId: "us6", dialogue: "Soovin grillitud kanafileed rohelise salatiga." },
            { name: "Chloe (3.a)", avatar: "👧", tag: "Kerge söök", desiredId: "us2", dialogue: "Mulle palun Rohelist salatit ja pruuni riisi." },
            { name: "Mason (1.c)", avatar: "🧒", tag: "Magus bataat", desiredId: "us3", dialogue: "Bataadifriikad on super! Lisa neid taldrikule." }
          ]
        }
      ]
    },
    "south-america": {
      name: "Lõuna-Ameerika",
      countries: [
        {
          id: "brazil", name: "Brasiilia Koolisöökla", flag: "🇧🇷", flagCode: "br",
          vibe: {
            name: "Lõbus & soe",
            primary: "#a16207",
            secondary: "#f59e0b",
            accent: "#22c55e",
            soft: "#fffbeb"
          },
          foods: [
            { id: "br1", name: "Aedviljasalat", tag: "Värske", kcal: 45, portion: 100, unit: "g", protein: 2, carbs: 8, fat: 0.5, category: "veg", emoji: "🥗", price: 1.20 },
            { id: "br2", name: "Kuumutatud peet", tag: "Raud", kcal: 50, portion: 100, unit: "g", protein: 2, carbs: 10, fat: 0, category: "veg", emoji: "🫚", price: 1.40 },
            { id: "br3", name: "Mustad oad ja riis", tag: "Kiudained", kcal: 180, portion: 150, unit: "g", protein: 8, carbs: 33, fat: 2, category: "side", emoji: "🍛", price: 2.50 },
            { id: "br4", name: "Maniokipuder", tag: "Kohalik", kcal: 150, portion: 150, unit: "g", protein: 2, carbs: 31, fat: 3, category: "side", emoji: "🥣", price: 2.70 },
            { id: "br5", name: "Grillitud kana", tag: "Valk", kcal: 190, portion: 100, unit: "g", protein: 29, carbs: 0, fat: 9, category: "main", emoji: "🍗", price: 3.50 },
            { id: "br6", name: "Hautatud veiseliha", tag: "Raud & valk", kcal: 210, portion: 100, unit: "g", protein: 23, carbs: 3, fat: 11, category: "main", emoji: "🥩", price: 3.80 }
          ],
          students: [
            { name: "Mateo (3.a)", avatar: "👦", tag: "Oasõber", desiredId: "br3", dialogue: "Olá! Mustad oad riisiga ja grillitud kana on minu lemmikud!" },
            { name: "Isabella (4.b)", avatar: "👧", tag: "Värskus", desiredId: "br1", dialogue: "Soovin taldrikule Aedviljasalatit ja veiseliha." },
            { name: "Lucas (2.a)", avatar: "🧒", tag: "Manioki fänn", desiredId: "br4", dialogue: "Maniokipuder ja grillitud kana, aitäh!" },
            { name: "Sofia (5.c)", avatar: "👧", tag: "Taimne energia", desiredId: "br2", dialogue: "Palun Kuumutatud peeti ja mustasid ube." },
            { name: "Enzo (1.b)", avatar: "👦", tag: "Tugev eine", desiredId: "br6", dialogue: "Hautatud veiseliha koos aedviljasalatiga!" }
          ]
        }
      ]
    },
    "australia": {
      name: "Austraalia",
      countries: [
        {
          id: "australia_co", name: "Austraalia Koolisöökla", flag: "🇦🇺", flagCode: "au",
          vibe: {
            name: "Rannaline & kerge",
            primary: "#0284c7",
            secondary: "#38bdf8",
            accent: "#f59e0b",
            soft: "#f0f9ff"
          },
          foods: [
            { id: "au1", name: "Avokaadosalat", tag: "Head rasvad", kcal: 80, portion: 80, unit: "g", protein: 2, carbs: 5, fat: 6, category: "veg", emoji: "🥑", price: 1.70 },
            { id: "au2", name: "Röstitud kõrvits", tag: "Vitamiinid", kcal: 55, portion: 120, unit: "g", protein: 2, carbs: 11, fat: 1, category: "veg", emoji: "🎃", price: 1.50 },
            { id: "au3", name: "Kinoa-riisi segu", tag: "Täistera", kcal: 150, portion: 150, unit: "g", protein: 5, carbs: 27, fat: 2, category: "side", emoji: "🌾", price: 2.40 },
            { id: "au4", name: "Bataadilõigud", tag: "Aeglane energia", kcal: 140, portion: 120, unit: "g", protein: 2, carbs: 29, fat: 1, category: "side", emoji: "🍠", price: 2.60 },
            { id: "au5", name: "Kalanagitsad ahjus", tag: "Valk", kcal: 180, portion: 100, unit: "g", protein: 15, carbs: 15, fat: 7, category: "main", emoji: "🐟", price: 3.50 },
            { id: "au6", name: "Grillitud lambaliha", tag: "Valk & Raud", kcal: 210, portion: 100, unit: "g", protein: 25, carbs: 0, fat: 12, category: "main", emoji: "🥩", price: 3.90 }
          ],
          students: [
            { name: "Liam (4.b)", avatar: "👦", tag: "Avokaado fänn", desiredId: "au1", dialogue: "G'day! Avokaadosalat ja ahjukala teevad päeva heaks!" },
            { name: "Olivia (2.a)", avatar: "👧", tag: "Kõrvitsasõber", desiredId: "au2", dialogue: "Soovin Röstitud kõrvitsat ja Kinoa-riisi segu." },
            { name: "Noah (5.a)", avatar: "🧑", tag: "Tugev valk", desiredId: "au6", dialogue: "Grillitud lambaliha ja bataadilõigud, palun!" },
            { name: "Ava (3.c)", avatar: "👧", tag: "Kalasõber", desiredId: "au5", dialogue: "Kalanagitsad ja Avokaadosalat on parim valik!" },
            { name: "Ethan (1.b)", avatar: "🧒", tag: "Täistera fänn", desiredId: "au3", dialogue: "Mulle kinoa-riisi segu ja röstitud kõrvitsat!" }
          ]
        }
      ]
    }
  }
};

// OLEKUD
let currentStudentIndex = 0;
let totalStars = 0;
let currentPlate = [];
let selectedCountry = null;
let activeCategory = 'all';
const STUDENT_BUDGET = 7;
const UNLOCK_PROGRESS_KEY = 'sooklarandur-unlocked-countries';

function getAllCountries() {
  return Object.values(gameData.continents).flatMap(continent => continent.countries);
}

const countryOrder = getAllCountries();

function loadUnlockedCountryIds() {
  try {
    const savedIds = JSON.parse(localStorage.getItem(UNLOCK_PROGRESS_KEY) || 'null');
    const unlocked = new Set([countryOrder[0].id]);

    if (!Array.isArray(savedIds)) return unlocked;

    for (let index = 1; index < countryOrder.length; index++) {
      if (!savedIds.includes(countryOrder[index].id)) break;
      unlocked.add(countryOrder[index].id);
    }
    return unlocked;
  } catch {
    return new Set([countryOrder[0].id]);
  }
}

let unlockedCountryIds = loadUnlockedCountryIds();

function getCountryDisplayName(country) {
  return country.name.replace(' Koolisöökla', '');
}

// DOM ELEMENDID
const startScreen = document.getElementById('start-screen');
const mapScreen = document.getElementById('map-screen');
const gameScreen = document.getElementById('game-screen');
const continentModal = document.getElementById('continent-modal');
const ratingModal = document.getElementById('rating-modal');
const budgetModal = document.getElementById('budget-modal');
const quizScreen = document.getElementById('quiz-screen');
const endingScreen = document.getElementById('ending-screen');

document.getElementById('btn-start-game').onclick = () => { startScreen.classList.add('hidden'); mapScreen.classList.remove('hidden'); };
document.getElementById('btn-back-map').onclick = () => { mapScreen.classList.add('hidden'); startScreen.classList.remove('hidden'); };
document.getElementById('btn-back-game').onclick = () => { gameScreen.classList.add('hidden'); mapScreen.classList.remove('hidden'); };
document.getElementById('btn-close-continent').onclick = () => { continentModal.classList.add('hidden'); };
document.getElementById('btn-close-budget').onclick = () => { budgetModal.classList.add('hidden'); };

function openContinentModal(continentId) {
  const data = gameData.continents[continentId];
  if (!data) return;
  document.getElementById('continent-modal-title').textContent = data.name;
  document.getElementById('countries-progress').textContent = `${unlockedCountryIds.size}/${countryOrder.length} riiki avatud`;
  const grid = document.getElementById('countries-grid');
  grid.innerHTML = '';

  data.countries.forEach(country => {
    const countryIndex = countryOrder.findIndex(item => item.id === country.id);
    const isUnlocked = unlockedCountryIds.has(country.id);
    const lockHint = countryIndex === unlockedCountryIds.size
      ? `Lõpeta ${getCountryDisplayName(countryOrder[countryIndex - 1])}, et avada`
      : 'Lukus';
    const card = document.createElement('button');
    card.type = 'button';
    card.disabled = !isUnlocked;
    card.className = `country-option bg-slate-800 p-3.5 rounded-2xl border border-slate-700 ${isUnlocked ? 'hover:border-amber-400 cursor-pointer' : 'cursor-not-allowed'} flex items-center gap-3 transition shadow-md`;
    card.innerHTML = `<img class="country-flag" src="https://flagcdn.com/36x27/${country.flagCode}.png" alt="${country.flag}"><span class="country-option-copy"><span class="font-fun font-bold text-slate-100 text-base">${getCountryDisplayName(country)}</span><span class="text-xs text-slate-400">${country.foods.length} kohalikku toitu</span><span class="country-option-status">${isUnlocked ? 'Avatud' : lockHint}</span></span><span class="country-option-lock" aria-hidden="true">${isUnlocked ? '✓' : '🔒'}</span>`;
    card.onclick = () => {
      if (!unlockedCountryIds.has(country.id)) return;
      continentModal.classList.add('hidden');
      mapScreen.classList.add('hidden');
      startCountryGame(country);
    };
    grid.appendChild(card);
  });
  continentModal.classList.remove('hidden');
}

function applyCountryTheme(country) {
  const palette = country.vibe || {
    primary: '#f97316',
    secondary: '#fb923c',
    accent: '#fbbf24',
    soft: '#fff7ed'
  };

  const gradient = `linear-gradient(135deg, ${palette.primary}, ${palette.secondary})`;

  document.documentElement.style.setProperty('--vibe-primary', palette.primary);
  document.documentElement.style.setProperty('--vibe-secondary', palette.secondary);
  document.documentElement.style.setProperty('--vibe-accent', palette.accent);
  document.documentElement.style.setProperty('--vibe-soft', palette.soft);

  const studentPanel = document.getElementById('student-panel');
  if (studentPanel) {
    studentPanel.style.background = gradient;
  }

  const serveButton = document.getElementById('serve-button');
  if (serveButton) {
    serveButton.style.background = gradient;
  }

  const activeCatButton = document.querySelector('.cat-btn.active');
  if (activeCatButton) {
    activeCatButton.style.background = gradient;
    activeCatButton.style.color = '#ffffff';
  }

  document.getElementById('country-vibe').textContent = country.vibe ? country.vibe.name : 'Koolisööklavibe';
}

function startCountryGame(country) {
  if (!unlockedCountryIds.has(country.id)) return;
  selectedCountry = country;
  currentStudentIndex = 0;
  totalStars = 0;
  document.getElementById('header-country-title').textContent = `(${getCountryDisplayName(country)})`;
  applyCountryTheme(country);
  loadStudent(0);
  gameScreen.classList.remove('hidden');
}

function loadStudent(index) {
  const st = selectedCountry.students[index];
  document.getElementById('student-index').textContent = `Õpilane ${index + 1}/5`;
  document.getElementById('student-name').textContent = st.name;
  document.getElementById('student-avatar').textContent = '🐧';
  document.getElementById('student-tag').textContent = st.tag;
  document.getElementById('student-dialogue').textContent = `"${st.dialogue}"`;
  document.getElementById('stars-display').textContent = `${totalStars}/15`;
  clearPlate();
  renderFoods();
}

function renderFoods() {
  const container = document.getElementById('food-grid');
  container.innerHTML = '';
  if (!selectedCountry) return;

  const filtered = activeCategory === 'all' ? selectedCountry.foods : selectedCountry.foods.filter(f => f.category === activeCategory);
  filtered.forEach(food => {
    const card = document.createElement('div');
    card.className = 'food-card';
    card.innerHTML = `
      <div class="food-card-main">
        <div class="food-card-ident">
          <div class="food-card-emoji">${food.emoji}</div>
          <div>
            <div class="font-bold text-sm text-slate-800 leading-tight">${food.name}</div>
            <div class="text-xs text-emerald-600 font-semibold">${food.tag}</div>
          </div>
        </div>
        <div class="food-card-info">
          <div class="food-card-kcal">${food.kcal} kcal</div>
          <div class="text-xs font-bold text-amber-700">${Number(food.price).toFixed(2)} €</div>
        </div>
      </div>
      <div class="food-card-nutrition">
        <span>Portsjon ${food.portion} ${food.unit}</span>
        <span>V ~${food.protein} g · S ~${food.carbs} g · R ~${food.fat} g</span>
      </div>
    `;
    card.onclick = () => addToPlate(food);
    container.appendChild(card);
  });
}

function showBudgetWarning(totalCost) {
  const overAmount = totalCost - STUDENT_BUDGET;
  const tips = [
    "Vali 1 põhitoit, 1 lisand ja 1 köögivili, mitte kõiki kallimaid valikuid korraga.",
    "Köögiviljad ja lihtsamad lisandid on sageli odavamad ja samas väga tervislikud.",
    `Kuna õpilasel on ${STUDENT_BUDGET.toFixed(2)} eurot, aitab eelarve jälgimine valida tasakaalustatud taldriku.`
  ];

  document.getElementById('budget-modal-text').innerHTML = `Sinu valik maksis <strong>${totalCost.toFixed(2)} €</strong>, mis on <strong>${overAmount.toFixed(2)} €</strong> üle õpilase ${STUDENT_BUDGET.toFixed(2)} eurose eelarve. Tervislik ja taskukohane taldrik sobib siis, kui valid mõistlikult ja jätad alles kõrgeima vajaduse.`;
  document.getElementById('budget-modal-list').innerHTML = tips.map(item => `<li>• ${item}</li>`).join('');
  budgetModal.classList.remove('hidden');
}

function addToPlate(food) {
  const totalCost = currentPlate.reduce((sum, item) => sum + Number(item.price || 0), 0);
  const newTotal = totalCost + Number(food.price || 0);
  if (newTotal > STUDENT_BUDGET) {
    showBudgetWarning(newTotal);
    return;
  }
  if (currentPlate.length >= 4) return;
  currentPlate.push(food);
  updatePlateUI();
}

function clearPlate() {
  currentPlate = [];
  updatePlateUI();
}

function updatePlateUI() {
  const plateItems = document.getElementById('plate-items');
  const emptyMsg = document.getElementById('plate-empty-msg');
  plateItems.innerHTML = '';

  if (currentPlate.length === 0) {
    emptyMsg.style.display = 'block';
  } else {
    emptyMsg.style.display = 'none';
    currentPlate.forEach((item, index) => {
      const el = document.createElement('div');
      el.className = 'plated-food';
      el.title = `${item.name} eemaldamiseks klõpsa`;
      el.innerHTML = `<span class="plated-food-emoji">${item.emoji}</span><span class="plated-food-name">${item.name}</span><span class="plated-food-portion">${item.portion} ${item.unit}</span><span class="plated-food-price">${Number(item.price).toFixed(2)} €</span>`;
      el.onclick = () => { currentPlate.splice(index, 1); updatePlateUI(); };
      plateItems.appendChild(el);
    });
  }

  const totalKcal = currentPlate.reduce((sum, f) => sum + f.kcal, 0);
  const totalCost = currentPlate.reduce((sum, f) => sum + Number(f.price || 0), 0);
  const totalProtein = currentPlate.reduce((sum, f) => sum + f.protein, 0);
  const totalCarbs = currentPlate.reduce((sum, f) => sum + f.carbs, 0);
  const totalFat = currentPlate.reduce((sum, f) => sum + f.fat, 0);
  const formatGrams = amount => `${Number(amount.toFixed(1))} g`;
  document.getElementById('calories-count').textContent = `~${totalKcal} kcal`;
  document.getElementById('protein-count').textContent = formatGrams(totalProtein);
  document.getElementById('carbs-count').textContent = formatGrams(totalCarbs);
  document.getElementById('fat-count').textContent = formatGrams(totalFat);
  document.getElementById('budget-display').textContent = `${totalCost.toFixed(2)} € / ${STUDENT_BUDGET.toFixed(2)} €`;
}

function filterCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`cat-${cat}`).classList.add('active');
  renderFoods();
}

// 2. EINE HINDAMINE
function serveStudent() {
  if (currentPlate.length === 0) {
    alert("Taldrik on tühi! Lisa vähemalt üks toit.");
    return;
  }

  const st = selectedCountry.students[currentStudentIndex];
  const desiredFood = selectedCountry.foods.find(f => f.id === st.desiredId);
  
  let stars = 3;
  let goods = [];
  let bads = [];

  const hasVeg = currentPlate.some(f => f.category === 'veg');
  const hasDesired = currentPlate.some(f => f.id === st.desiredId);
  const totalCost = currentPlate.reduce((sum, food) => sum + Number(food.price || 0), 0);

  if (totalCost > STUDENT_BUDGET) {
    bads.push(`Valitud toit maksis ${totalCost.toFixed(2)} € — õpilasel on ${STUDENT_BUDGET.toFixed(2)} € eelarve.`);
    stars--;
  } else {
    goods.push(`Terve valik jäi ${STUDENT_BUDGET.toFixed(2)} euro piiresse (${totalCost.toFixed(2)} €).`);
  }

  // Soovitud toidu kontroll
  if (hasDesired) {
    goods.push(`Lisasid õpilase soovitud toidu (${desiredFood.name})!`);
  } else {
    bads.push(`Õpilane soovis kindlasti toitu "${desiredFood ? desiredFood.name : 'oma lemmikut'}"!`);
    stars--;
  }

  // Taldrikureegli kontroll
  if (hasVeg) {
    goods.push("Taldrikul on tervislikud köögiviljad!");
  } else {
    bads.push("Puuduvad värsked/kuumtöödeldud köögiviljad!");
    stars--;
  }

  if (currentPlate.length < 2) {
    bads.push("Eine on liiga väike, õpilasest jääb kõht tühjaks.");
    stars--;
  }

  if (stars < 1) stars = 1;
  totalStars += stars;

  const goodHtml = goods.length ? `<strong>✅ Mida hästi tehti:</strong><ul>${goods.map(item => `<li>${item}</li>`).join('')}</ul>` : `<strong>✅ Hea valik:</strong><ul><li>Toidu valik oli suurepärane ja tasakaalustatud.</li></ul>`;
  const badHtml = bads.length ? `<strong>💡 Miks see valik ei toiminud:</strong><ul>${bads.map(item => `<li>${item}</li>`).join('')}</ul>` : `<strong>💡 Õppetund:</strong><ul><li>Valik oli hea ja sobis hästi õpilase vajadustega.</li></ul>`;

  document.getElementById('rating-stars').textContent = "⭐".repeat(stars);
  document.getElementById('rating-good').innerHTML = goodHtml;
  document.getElementById('rating-bad').innerHTML = badHtml;

  ratingModal.classList.remove('hidden');
}

function nextStudentOrQuiz() {
  ratingModal.classList.add('hidden');
  currentStudentIndex++;

  if (currentStudentIndex < selectedCountry.students.length) {
    loadStudent(currentStudentIndex);
  } else {
    gameScreen.classList.add('hidden');
    startQuiz();
  }
}

// 3. TERVISLIKU TOITUMISE VIKTORIIN
const quizData = [
  {
    q: "Mitu protsenti taldrikust peaks taldrikureegli järgi katma köögiviljad ja salat?",
    options: ["10%", "25%", "50%", "75%"],
    correct: 2,
    explain: "Õige vastus on 50%! Taldrikureegli kohaselt moodustavad poole eine mahust värsked või kuumtöödeldud köögiviljad, mis annavad kiudaineid ja vitamiine."
  },
  {
    q: "Mis on parim jook koolilõuna kõrvale janu kustutamiseks?",
    options: ["Magus karastusjook", "Vesi", "Energiajook", "mahl"],
    correct: 1,
    explain: "Õige vastus on Vesi! Vesi kustutab janu ilma liigse suhkru ja lisakaloriteta ning hoiab keha töövõimelisena."
  },
  {
    q: "Miks on oluline süüa täisteratooteid (nt leib, tatar, täisterapasta)?",
    options: ["Need sisaldavad palju aeglaselt imenduvaid süsivesikuid ja kiudaineid", "Need teevad eine ainult pruuniks", "Need ei anna üldse energiat", "Need sisaldavad liiga palju suhkrut"],
    correct: 0,
    explain: "Õige vastus: Aeglaselt imenduvad süsivesikud ja kiudained annavad kehale ja ajule stabiilset energiat pikemaks ajaks."
  },
  {
    q: "Milline toit on parim valik, kui soovid lisada oma dieeti rohkem valku?",
    options: ["Küpsetatud kartul", "Lõhe või kana", "Karastusjook", "Kommišokolaad"],
    correct: 1,
    explain: "Õige vastus on lõhe või kana! Need sisaldavad head kvaliteeti valku, mis aitab luua ja parandada lihaseid."
  },
  {
    q: "Miks ei ole hea iga päev palju magusaid jooke juua?",
    options: ["Need annavad väga palju lisasuhkrut ja kaloreid", "Need hoiavad ära kõhuvalu", "Need annavad alati rohkem vett", "Need aitavad väga hästi treenida"],
    correct: 0,
    explain: "Õige vastus on see, et magusad joogid sisaldavad palju lisasuhkrut ja kaloreid, mis ei ole tervislikud."
  },
  {
    q: "Milline neist on tervislik köögivili?",
    options: ["brokkoli või porgand", "Suhkrustatud küpsis", "cola ja krõpsud", "Jäätis"],
    correct: 0,
    explain: "Õige vastus on porgand või brokkoli! Köögiviljad sisaldavad palju vitamiine, kiudaineid ja vett."
  },
  {
    q: "Miks on oluline süüa erinevaid toidugrupe?",
    options: ["Et keha saaks erinevaid toitaineid", "Et toit oleks alati sama", "Et ei oleks vaja vett juua", "Et ei tekiks kunagi nälga"],
    correct: 0,
    explain: "Õige vastus on see, et erinevad toidud annavad kehale erinevaid vajalikke toitaineid nagu valgud, rasvad, kiudained ja vitamiinid."
  },
  {
    q: "Milline on hea vahepala koolis?",
    options: ["Puuvili või kodune võileib", "energiajook ja kummikommid", "pähklid", "Suhkrurikkad küpsised"],
    correct: 0,
    explain: "Õige vastus on puuvili või kodune võileib! Need on täis energiat ja annab keha paremini toidetud."
  }
];

let currentQuizIdx = 0;
let quizScore = 0;

function startQuiz() {
  currentQuizIdx = 0;
  quizScore = 0;
  const shuffled = [...quizData].sort(() => Math.random() - 0.5);
  quizData.length = 0;
  shuffled.forEach((question) => quizData.push(question));
  quizScreen.classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  const q = quizData[currentQuizIdx];
  document.getElementById('quiz-progress').textContent = `Küsimus ${currentQuizIdx + 1}/${quizData.length}`;
  document.getElementById('quiz-score').textContent = `Punktid: ${quizScore}`;
  document.getElementById('quiz-question').textContent = q.q;

  const optionsContainer = document.getElementById('quiz-options');
  optionsContainer.innerHTML = '';
  document.getElementById('quiz-feedback').classList.add('hidden');
  document.getElementById('btn-next-question').classList.add('hidden');

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt-btn';
    btn.textContent = `${idx + 1}. ${opt}`;
    btn.onclick = () => answerQuestion(idx);
    optionsContainer.appendChild(btn);
  });
}

function answerQuestion(selectedIdx) {
  const q = quizData[currentQuizIdx];
  const btns = document.querySelectorAll('.quiz-opt-btn');
  btns.forEach(b => b.disabled = true);

  const fb = document.getElementById('quiz-feedback');
  const fbTitle = document.getElementById('quiz-feedback-title');
  const fbText = document.getElementById('quiz-feedback-text');

  if (selectedIdx === q.correct) {
    quizScore += 5;
    btns[selectedIdx].classList.add('bg-emerald-900/80', 'border-emerald-500', 'text-emerald-200');
    fbTitle.textContent = "✅ Õige vastus!";
    fbTitle.className = "font-bold text-base mb-1 text-emerald-400";
    fb.className = "p-4 rounded-2xl border border-emerald-500/50 bg-emerald-950/60 text-xs sm:text-sm text-emerald-200";
  } else {
    btns[selectedIdx].classList.add('bg-rose-900/80', 'border-rose-500', 'text-rose-200');
    btns[q.correct].classList.add('bg-emerald-900/80', 'border-emerald-500', 'text-emerald-200');
    fbTitle.textContent = "❌ Vale vastus!";
    fbTitle.className = "font-bold text-base mb-1 text-rose-400";
    fb.className = "p-4 rounded-2xl border border-rose-500/50 bg-rose-950/60 text-xs sm:text-sm text-rose-200";
  }

  fbText.textContent = q.explain;
  fb.classList.remove('hidden');
  document.getElementById('quiz-score').textContent = `Punktid: ${quizScore}`;
  document.getElementById('btn-next-question').classList.remove('hidden');
}

function nextQuestion() {
  currentQuizIdx++;
  if (currentQuizIdx < quizData.length) {
    showQuestion();
  } else {
    quizScreen.classList.add('hidden');
    completeCountry();
    endingScreen.classList.remove('hidden');
  }
}

function completeCountry() {
  const countryIndex = countryOrder.findIndex(country => country.id === selectedCountry.id);
  const nextCountry = countryOrder[countryIndex + 1];
  const endingTitle = document.getElementById('ending-title');
  const endingMessage = document.getElementById('ending-message');
  const continueButton = document.getElementById('btn-continue-country');

  if (nextCountry) {
    unlockedCountryIds.add(nextCountry.id);
    try {
      localStorage.setItem(UNLOCK_PROGRESS_KEY, JSON.stringify(countryOrder.filter(country => unlockedCountryIds.has(country.id)).map(country => country.id)));
    } catch {
      // Keep this session playable when browser storage is unavailable.
    }
    endingTitle.textContent = 'Uus riik avatud!';
    endingMessage.textContent = `Läbisid ${getCountryDisplayName(selectedCountry)} söökla. Nüüd saad avada järgmise riigi: ${getCountryDisplayName(nextCountry)}.`;
    continueButton.textContent = 'Vali järgmine riik ➔';
  } else {
    endingTitle.textContent = 'Kõik riigid läbitud!';
    endingMessage.textContent = 'Oled külastanud kõiki Sööklaränduri koolisööklaid ja läbinud nende ülesanded.';
    continueButton.textContent = 'Vaata riike kaardil ➔';
  }
}

function continueFromEnding() {
  endingScreen.classList.add('hidden');
  mapScreen.classList.remove('hidden');
}

function restartGame() {
  endingScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
}