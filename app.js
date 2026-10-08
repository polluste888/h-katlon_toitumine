// Autentsete toitude andmebaas
const gameData = {
  continents: {
    "europe": {
      name: "Euroopa",
      countries: [
        {
          id: "estonia",
          name: "Estonia",
          flag: "🇪🇪",
          clothClass: "flag-estonia",
          foods: [
            { id: "e1", name: "Mulgipuder peekoniga", type: "carbs", price: 4.5, emoji: "🥣" },
            { id: "e2", name: "Kiluvõileib muna ja rukkileivaga", type: "protein", price: 2.5, emoji: "🐟" },
            { id: "e3", name: "Hapukapsa-porgandisalat", type: "veggies", price: 1.8, emoji: "🥗" },
            { id: "e4", name: "Kohuke", type: "sweets", price: 0.8, emoji: "🍫" },
            { id: "e5", name: "Kama keefiriga", type: "carbs", price: 1.5, emoji: "🥛" }
          ]
        },
        {
          id: "italy",
          name: "Itaalia",
          flag: "🇮🇹",
          clothClass: "flag-italy",
          foods: [
            { id: "i1", name: "Pasta Carbonara", type: "carbs", price: 7.5, emoji: "🍝" },
            { id: "i2", name: "Caprese salat (Mozzarella & Tomat)", type: "veggies", price: 4.5, emoji: "🥗" },
            { id: "i3", name: "Prosciutto & Melone", type: "protein", price: 5.0, emoji: "🥓" },
            { id: "i4", name: "Tiramisu", type: "sweets", price: 3.5, emoji: "🍰" },
            { id: "i5", name: "Espresso", type: "sweets", price: 1.5, emoji: "☕" }
          ]
        },
        {
          id: "finland",
          name: "Soome",
          flag: "🇫🇮",
          clothClass: "flag-finland",
          foods: [
            { id: "f1", name: "Lohikeitto (Lõhesupp)", type: "protein", price: 6.5, emoji: "🍲" },
            { id: "f2", name: "Karjala pirukas munavõiga", type: "carbs", price: 2.0, emoji: "🥧" },
            { id: "f3", name: "Pohlamoos ja keedukartul", type: "veggies", price: 1.5, emoji: "🥔" },
            { id: "f4", name: "Korvapuusti (Kaneelisai)", type: "sweets", price: 2.2, emoji: "🥐" }
          ]
        }
      ]
    },
    "asia": {
      name: "Aasia",
      countries: [
        {
          id: "japan",
          name: "Jaapan",
          flag: "🇯🇵",
          clothClass: "flag-japan",
          foods: [
            { id: "j1", name: "Aurutatud riis & Onigiri", type: "carbs", price: 2.0, emoji: "🍙" },
            { id: "j2", name: "Miso supp tofu ja vetikatega", type: "veggies", price: 2.5, emoji: "🥣" },
            { id: "j3", name: "Ramen või Grillitud Lõhe", type: "protein", price: 7.0, emoji: "🍜" },
            { id: "j4", name: "Matcha roheline tee", type: "sweets", price: 2.0, emoji: "🍵" },
            { id: "j5", name: "Mochi magustoit", type: "sweets", price: 2.5, emoji: "🍡" }
          ]
        },
        {
          id: "india",
          name: "India",
          flag: "🇮🇳",
          clothClass: "flag-india",
          foods: [
            { id: "in1", name: "Roti ja Basmati riis", type: "carbs", price: 2.0, emoji: "🫓" },
            { id: "in2", name: "Dal Curry (Läätsesupp)", type: "protein", price: 3.5, emoji: "🍲" },
            { id: "in3", name: "Aloo Gobi (Lillkapsa-kartuliroog)", type: "veggies", price: 3.0, emoji: "🥦" },
            { id: "in4", name: "Mango Lassi jook", type: "sweets", price: 2.5, emoji: "🥤" }
          ]
        }
      ]
    },
    "north-america": {
      name: "Põhja-Ameerika",
      countries: [
        {
          id: "usa",
          name: "USA",
          flag: "🇺🇸",
          clothClass: "flag-usa",
          foods: [
            { id: "u1", name: "BBQ Barbecue ribid", type: "protein", price: 9.0, emoji: "🍖" },
            { id: "u2", name: "Mac & Cheese", type: "carbs", price: 4.0, emoji: "🧀" },
            { id: "u3", name: "Cobb salat (Kapsas, tomat, avokaado)", type: "veggies", price: 4.5, emoji: "🥗" },
            { id: "u4", name: "Õunakook (Apple Pie)", type: "sweets", price: 3.0, emoji: "🥧" }
          ]
        }
      ]
    },
    "south-america": {
      name: "Lõuna-Ameerika",
      countries: [
        {
          id: "brazil",
          name: "Brasiilia",
          flag: "🇧🇷",
          clothClass: "flag-brazil",
          foods: [
            { id: "b1", name: "Feijoada (Mustad oad sealihaga)", type: "protein", price: 6.0, emoji: "🍲" },
            { id: "b2", name: "Pão de Queijo (Juustuleib)", type: "carbs", price: 2.5, emoji: "🥖" },
            { id: "b3", name: "Värsked troopilised puuviljad", type: "veggies", price: 2.0, emoji: "🍌" },
            { id: "b4", name: "Açai kauss", type: "sweets", price: 3.5, emoji: "🍧" }
          ]
        }
      ]
    },
    "africa": {
      name: "Aafrika",
      countries: [
        {
          id: "benin",
          name: "Benin / Lääne-Aafrika",
          flag: "🇧🇯",
          clothClass: "flag-benin",
          foods: [
            { id: "bn1", name: "Jollof riis", type: "carbs", price: 3.0, emoji: "🍚" },
            { id: "bn2", name: "Kala- või maapähkli hoidis (Sauce d'Abo)", type: "protein", price: 4.5, emoji: "🐟" },
            { id: "bn3", name: "Praetud jahubanaanid (Alloco)", type: "veggies", price: 2.0, emoji: "🍌" }
          ]
        }
      ]
    },
    "australia": {
      name: "Austraalia",
      countries: [
        {
          id: "australia",
          name: "Austraalia",
          flag: "🇦🇺",
          clothClass: "flag-australia",
          foods: [
            { id: "a1", name: "Avokaado röstsai Vegemite'iga", type: "carbs", price: 4.0, emoji: "🍞" },
            { id: "a2", name: "Grillitud lambakarree / mereannid", type: "protein", price: 8.0, emoji: "🥩" },
            { id: "a3", name: "Roheline aiasalat", type: "veggies", price: 3.0, emoji: "🥗" },
            { id: "a4", name: "Pavlova koogike", type: "sweets", price: 3.5, emoji: "🍰" }
          ]
        }
      ]
    }
  }
};

// MÄNGU OLEK
let currentPlate = [];
let currentCountry = null;

// DOM ELEMENDID
const startScreen = document.getElementById('start-screen');
const mapScreen = document.getElementById('map-screen');
const gameScreen = document.getElementById('game-screen');
const continentModal = document.getElementById('continent-modal');
const resultModal = document.getElementById('result-modal');

const btnStartGame = document.getElementById('btn-start-game');
const btnBack = document.getElementById('btn-back');
const btnCloseContinent = document.getElementById('btn-close-continent');
const btnEat = document.getElementById('btn-eat');
const btnNextCountry = document.getElementById('btn-next-country');

// START
btnStartGame.addEventListener('click', () => {
  startScreen.classList.add('hidden');
  mapScreen.classList.remove('hidden');
  btnBack.classList.remove('hidden');
});

// NUPP TAGASI
btnBack.addEventListener('click', () => {
  if (!gameScreen.classList.contains('hidden')) {
    gameScreen.classList.add('hidden');
    mapScreen.classList.remove('hidden');
  } else if (!mapScreen.classList.contains('hidden')) {
    mapScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    btnBack.classList.add('hidden');
  }
});

// KONTINENDI VALIMINE
document.querySelectorAll('.continent-zone').forEach(zone => {
  zone.addEventListener('click', () => {
    const continentId = zone.getAttribute('data-continent');
    openContinentModal(continentId);
  });
});

function openContinentModal(continentId) {
  const data = gameData.continents[continentId];
  if (!data) return;

  document.getElementById('continent-modal-title').textContent = data.name;
  const grid = document.getElementById('countries-grid');
  grid.innerHTML = '';

  data.countries.forEach(country => {
    const card = document.createElement('div');
    card.className = 'country-select-card';
    card.innerHTML = `
      <span class="c-flag">${country.flag}</span>
      <div>
        <div class="c-name">${country.name}</div>
        <div class="c-sub">${country.foods.length} traditsioonilist toitu</div>
      </div>
    `;
    card.addEventListener('click', () => {
      continentModal.classList.add('hidden');
      mapScreen.classList.add('hidden');
      startCountryGame(country);
    });
    grid.appendChild(card);
  });

  continentModal.classList.remove('hidden');
}

btnCloseContinent.addEventListener('click', () => {
  continentModal.classList.add('hidden');
});

// RIIKLIK MÄNGUVAADE
function startCountryGame(country) {
  currentCountry = country;
  currentPlate = [];

  document.getElementById('country-flag').textContent = country.flag;
  document.getElementById('country-name').textContent = country.name;

  // Muuda lauakatte laadi
  const cloth = document.getElementById('table-cloth');
  cloth.className = `table-cloth ${country.clothClass}`;

  // Laadi toidumenüü
  const foodList = document.getElementById('food-list');
  foodList.innerHTML = '';

  country.foods.forEach(food => {
    const item = document.createElement('div');
    item.className = 'food-item-pill';
    item.innerHTML = `
      <span class="f-emoji">${food.emoji}</span>
      <div>
        <div class="f-name">${food.name}</div>
        <div class="f-price">${food.price.toFixed(2)} €</div>
      </div>
    `;
    item.addEventListener('click', () => addFoodToPlate(food));
    foodList.appendChild(item);
  });

  updatePlateUI();
  gameScreen.classList.remove('hidden');
}

// LISA TOIT TALDRIKULE
function addFoodToPlate(food) {
  if (currentPlate.length >= 6) return;
  currentPlate.push(food);
  updatePlateUI();
}

// EEMALDA TOIT TALDRIKULT
function removeFoodFromPlate(index) {
  currentPlate.splice(index, 1);
  updatePlateUI();
}

// TALDRIKU JA NÄITAJATE VÄRSKENDAMINE
function updatePlateUI() {
  const slots = document.getElementById('plate-slots');
  slots.innerHTML = '';

  if (currentPlate.length === 0) {
    slots.innerHTML = '<p class="plate-placeholder-text">Vali vasakult toidud ja lisa taldrikule</p>';
    btnEat.classList.remove('active');
    btnEat.disabled = true;
  } else {
    currentPlate.forEach((food, index) => {
      const icon = document.createElement('span');
      icon.className = 'plate-food-icon';
      icon.textContent = food.emoji;
      icon.title = `${food.name} (Klõpsa eemaldamiseks)`;
      icon.addEventListener('click', () => removeFoodFromPlate(index));
      slots.appendChild(icon);
    });
    btnEat.classList.add('active');
    btnEat.disabled = false;
  }

  // Maksumuse arvutus
  const total = currentPlate.reduce((sum, f) => sum + f.price, 0);
  document.getElementById('total-price').textContent = total.toFixed(2);

  // Püramiidi arvutused
  const counts = { carbs: 0, veggies: 0, protein: 0, sweets: 0 };
  currentPlate.forEach(f => {
    if (counts[f.type] !== undefined) counts[f.type]++;
  });

  const totalItems = currentPlate.length || 1;
  const pCarbs = Math.round((counts.carbs / totalItems) * 100);
  const pVeggies = Math.round((counts.veggies / totalItems) * 100);
  const pProtein = Math.round((counts.protein / totalItems) * 100);
  const pSweets = Math.round((counts.sweets / totalItems) * 100);

  document.getElementById('bar-carbs').style.width = pCarbs + '%';
  document.getElementById('bar-veggies').style.width = pVeggies + '%';
  document.getElementById('bar-protein').style.width = pProtein + '%';
  document.getElementById('bar-sweets').style.width = pSweets + '%';

  document.getElementById('score-carbs').textContent = pCarbs + '%';
  document.getElementById('score-veggies').textContent = pVeggies + '%';
  document.getElementById('score-protein').textContent = pProtein + '%';
  document.getElementById('score-sweets').textContent = pSweets + '%';
}

// SÖÖ SÖÖK NUPP
btnEat.addEventListener('click', () => {
  if (currentPlate.length === 0) return;

  const counts = { carbs: 0, veggies: 0, protein: 0, sweets: 0 };
  currentPlate.forEach(f => counts[f.type]++);

  const posList = document.getElementById('positives-list');
  const negList = document.getElementById('negatives-list');
  posList.innerHTML = '';
  negList.innerHTML = '';

  if (counts.veggies > 0) {
    posList.innerHTML += '<li>Taldrikul on tervisele kasulikke puu- ja köögivilju!</li>';
  } else {
    negList.innerHTML += '<li>Lisa rohkem vitamiine: vali köögivilju või salatit!</li>';
  }

  if (counts.protein > 0) {
    posList.innerHTML += '<li>Tubli! Sa said einega vajaliku valgu doosi.</li>';
  } else {
    negList.innerHTML += '<li>Valke on vähe: võiksid lisada liha, kala või kaunvilju.</li>';
  }

  if (counts.sweets > 1) {
    negList.innerHTML += '<li>Taldrikul on liiga palju maiustusi või suhkrut.</li>';
  }

  resultModal.classList.remove('hidden');
});

btnNextCountry.addEventListener('click', () => {
  resultModal.classList.add('hidden');
  gameScreen.classList.add('hidden');
  mapScreen.classList.remove('hidden');
});