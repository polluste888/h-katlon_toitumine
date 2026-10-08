const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

// Algne TAI toiduainete baas (mida laiendatakse reaalsete hindadega)
const baseFoods = [
  { keywords: ['leib', 'rukkileib'], name: "Täisteraleib (viil)", defaultPrice: 0.18, kcal: 70, carbs: 13, protein: 3, fat: 1, group: "grain" },
  { keywords: ['sai'], name: "Tavaline sai (viil)", defaultPrice: 0.12, kcal: 80, carbs: 15, protein: 2, fat: 1, group: "grain" },
  { keywords: ['kaerahelbed'], name: "Kaerahelbed (50g)", defaultPrice: 0.10, kcal: 185, carbs: 32, protein: 7, fat: 3, group: "grain" },
  { keywords: ['banaan'], name: "Banaan (1 tk)", defaultPrice: 0.25, kcal: 105, carbs: 27, protein: 1, fat: 0, group: "veggies" },
  { keywords: ['õun'], name: "Õun (1 tk)", defaultPrice: 0.20, kcal: 52, carbs: 14, protein: 0, fat: 0, group: "veggies" },
  { keywords: ['kana', 'filee'], name: "Kanafilee (150g)", defaultPrice: 1.35, kcal: 165, carbs: 0, protein: 31, fat: 3, group: "protein" },
  { keywords: ['muna'], name: "Muna (1 tk)", defaultPrice: 0.22, kcal: 72, carbs: 0, protein: 6, fat: 5, group: "protein" },
  { keywords: ['šokolaad'], name: "Šokolaad (30g)", defaultPrice: 0.50, kcal: 160, carbs: 18, protein: 2, fat: 9, group: "sweets" },
  { keywords: ['energiajook'], name: "Energiajook (0.33l)", defaultPrice: 1.20, kcal: 150, carbs: 37, protein: 0, fat: 0, group: "sweets" }
];

async function updatePrices() {
  console.log("🔄 Otsin reaalaja poehindu ostukorvid.ee lehelt...");
  
  let database = [];

  for (let food of baseFoods) {
    try {
      // Otsime ostukorvid.ee lehelt märksõna järgi
      const searchUrl = `https://ostukorvid.ee/?s=${encodeURIComponent(food.keywords[0])}`;
      const response = await axios.get(searchUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      });
      
      const $ = cheerio.load(response.data);
      
      // Üritame leida esimest poehinda lehelt
      let priceText = $('.price, .amount, .product-price').first().text().trim();
      let price = parseFloat(priceText.replace(',', '.'));

      if (!isNaN(price) && price > 0) {
        food.price = price;
        console.log(`✅ ${food.name}: Leitud päris hind ${price.toFixed(2)}€`);
      } else {
        food.price = food.defaultPrice;
        console.log(`ℹ️ ${food.name}: Kasutatakse vaikehinda ${food.defaultPrice.toFixed(2)}€`);
      }
    } catch (error) {
      food.price = food.defaultPrice;
      console.log(`⚠️ ${food.name}: Päring ebaõnnestus, kasutatakse vaikehinda ${food.defaultPrice.toFixed(2)}€`);
    }

    database.push({
      id: database.length + 1,
      name: food.name,
      price: food.price,
      kcal: food.kcal,
      carbs: food.carbs,
      protein: food.protein,
      fat: food.fat,
      group: food.group
    });
  }

  // Salvestame andmed foods.json faili
  fs.writeFileSync('foods.json', JSON.stringify(database, null, 2), 'utf-8');
  console.log("\n🎉 Uuendatud andmebaas salvestatud faili 'foods.json'!");
}

updatePrices();