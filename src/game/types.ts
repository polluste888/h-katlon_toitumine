export type Page = "home" | "game" | "guide"
export type GamePhase = "intro" | "playing" | "feedback" | "detector" | "finished"
export type FoodCategory = "köögivili" | "teravili" | "valk" | "piimatoode" | "puuvili" | "muu"

export type FoodIconName = "broccoli" | "carrot" | "rice" | "bread" | "fish" | "beans" | "yogurt" | "apple" | "berries" | "energy" | "cake" | "fries" | "soda" | "candy"

export type Food = {
  id: string
  name: string
  category: FoodCategory
  price: number
  color: string
  icon: FoodIconName
  recommended: boolean
  benefit: string
  caution?: string
}

export type PenguinData = {
  name: string
  color: string
  accessory: "scarf" | "glasses" | "cap" | "bow" | "headphones" | "bag"
  focus: string
  request: string
  wanted: FoodCategory[]
  note: string
  budget: number
  availableFoodIds: string[]
}
