export type Category = "burgers" | "bowls" | "combos"

export type MenuItem = {
  id: string
  name: string
  category: Category
  description: string
  price: number
  kcal: number
  protein: number
  carbs: number
  fat: number
  tags: string[]
  highlight?: string
}

// Valores nutricionais ilustrativos para este conceito de site.
export const MENU: MenuItem[] = [
  {
    id: "whopper-fit",
    name: "Whopper FIT Grill",
    category: "burgers",
    description:
      "Duas carnes 100% bovinas grelhadas no fogo, pão integral, alface, tomate, cebola roxa e molho de iogurte com ervas.",
    price: 34.9,
    kcal: 520,
    protein: 42,
    carbs: 38,
    fat: 18,
    tags: ["Pão integral", "Grelhado"],
    highlight: "Mais pedido",
  },
  {
    id: "stacker-protein",
    name: "Stacker Protein",
    category: "burgers",
    description:
      "Três carnes grelhadas, queijo light e picles servidos no wrap de alface crocante. Zero pão, proteína no talo.",
    price: 36.9,
    kcal: 480,
    protein: 51,
    carbs: 9,
    fat: 26,
    tags: ["Low carb", "Sem pão"],
    highlight: "Mais proteína",
  },
  {
    id: "chicken-fit",
    name: "Chicken FIT Grelhado",
    category: "burgers",
    description:
      "Peito de frango grelhado, pão de fermentação natural, rúcula, tomate e maionese de abacate.",
    price: 29.9,
    kcal: 430,
    protein: 38,
    carbs: 41,
    fat: 11,
    tags: ["Frango", "Leve"],
  },
  {
    id: "plant-fit",
    name: "Plant FIT",
    category: "burgers",
    description:
      "Carne vegetal grelhada no fogo, pão integral, folhas, tomate e molho de tahine. Proteína 100% plant-based.",
    price: 31.9,
    kcal: 460,
    protein: 27,
    carbs: 44,
    fat: 17,
    tags: ["Vegano", "Plant-based"],
  },
  {
    id: "bowl-power",
    name: "Bowl Grill Power",
    category: "bowls",
    description:
      "Carne grelhada fatiada, arroz integral, feijão, vinagrete, folhas e farofa de sementes.",
    price: 37.9,
    kcal: 560,
    protein: 45,
    carbs: 52,
    fat: 16,
    tags: ["Pré-treino", "Completo"],
  },
  {
    id: "bowl-low-carb",
    name: "Bowl Low Carb",
    category: "bowls",
    description:
      "Frango grelhado, mix de folhas, abacate, pepino, tomate-cereja e molho cítrico.",
    price: 33.9,
    kcal: 390,
    protein: 40,
    carbs: 12,
    fat: 19,
    tags: ["Low carb", "Cutting"],
  },
  {
    id: "combo-pos-treino",
    name: "Combo Pós-Treino",
    category: "combos",
    description:
      "Whopper FIT Grill + salada da casa + chá gelado zero. Recuperação completa em uma bandeja.",
    price: 42.9,
    kcal: 590,
    protein: 44,
    carbs: 49,
    fat: 19,
    tags: ["Recuperação", "Zero açúcar"],
    highlight: "-20% com check-in",
  },
  {
    id: "combo-cutting",
    name: "Combo Cutting",
    category: "combos",
    description:
      "Stacker Protein + salada da casa + café gelado sem açúcar. Saciedade alta, carbo baixo.",
    price: 44.9,
    kcal: 520,
    protein: 52,
    carbs: 14,
    fat: 27,
    tags: ["Low carb", "Cutting"],
  },
]

// Referências por refeição usadas nas barras de macro.
export const MEAL_TARGET = { protein: 60, carbs: 80, fat: 35 }

export function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}
