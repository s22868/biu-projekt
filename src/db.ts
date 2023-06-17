export enum Category {
  Hamburger = 'hamburger',
  Fries = 'fries',
  Drinks = 'drinks',
  Desserts = 'desserts',
}

interface Ingredient {
  name: string
  description: string
}

export interface MenuItem {
  name: string
  description: string
  ingredients: string[]
  price: number
}

export type McDonaldsMenu = {
  [key in Category]: MenuItem[]
}

export const menu: McDonaldsMenu = {
  [Category.Hamburger]: [
    {
      name: 'McChicken',
      description:
        'Sałata lodowa, majonez, plasterki pomidora i soczysta panierka z kurczaka.',
      ingredients: [
        'chicken patty',
        'lettuce',
        'mayonnaise',
        'tomato slices',
        'bun',
      ],
      price: 12.99,
    },
    {
      name: 'Cheeseburger',
      description:
        'Gorący hamburger z rozpuszczonym serem, korniszonem, musztardą i keczupem.',
      ingredients: [
        'beef patty',
        'cheese',
        'pickle slices',
        'mustard',
        'ketchup',
        'bun',
      ],
      price: 10.99,
    },
    {
      name: 'Big Mac',
      description:
        'Dwa kotlety wołowe, ser, cebula, sałata, ogórek i sos Big Mac.',
      ingredients: [
        'beef patties',
        'cheese',
        'onion',
        'lettuce',
        'pickle slices',
        'Special Sauce',
        'bun',
      ],
      price: 15.99,
    },
  ],
  [Category.Fries]: [
    {
      name: 'Małe frytki',
      description: 'Cienkie i chrupiące złociste frytki.',
      ingredients: ['potatoes', 'salt', 'vegetable oil'],
      price: 6.99,
    },
    {
      name: 'Duże frytki',
      description: 'Porcja soczystych, chrupiących frytek.',
      ingredients: ['potatoes', 'salt', 'vegetable oil'],
      price: 8.99,
    },
    {
      name: 'Frytki po węgiersku',
      description: 'Frytki z ziemniaków z węgierskimi przyprawami.',
      ingredients: ['potatoes', 'Hungarian spices', 'salt', 'vegetable oil'],
      price: 9.99,
    },
  ],
  [Category.Drinks]: [
    {
      name: 'Coca-Cola',
      description: 'Gazowany napój orzeźwiający z colą.',
      ingredients: [
        'carbonated water',
        'sugar',
        'phosphoric acid',
        'caramel color',
        'natural flavors',
        'caffeine',
      ],
      price: 4.99,
    },
    {
      name: 'Sprite',
      description: 'Gazowany napój orzeźwiający o smaku cytrynowym.',
      ingredients: [
        'carbonated water',
        'high fructose corn syrup',
        'citric acid',
        'natural flavors',
        'sodium citrate',
      ],
      price: 4.99,
    },
    {
      name: 'Lemoniada',
      description: 'Schłodzona, orzeźwiająca lemoniada z plasterkami cytryny.',
      ingredients: ['lemon juice', 'water', 'sugar', 'lemon slices', 'ice'],
      price: 5.99,
    },
  ],
  [Category.Desserts]: [
    {
      name: 'Sundae karmelowe',
      description: 'Lodowy deser z karmelowym sosem i bitą śmietaną.',
      ingredients: ['vanilla ice cream', 'caramel sauce', 'whipped cream'],
      price: 7.99,
    },
    {
      name: 'McFlurry Oreo',
      description: 'Lodowy deser z kawałkami herbatników Oreo.',
      ingredients: ['vanilla ice cream', 'Oreo cookies'],
      price: 8.99,
    },
    {
      name: 'Apple Pie',
      description: 'Ciepłe, chrupiące jabłkowe ciasto z dodatkiem cynamonu.',
      ingredients: ['apples', 'sugar', 'cinnamon', 'pastry crust'],
      price: 6.99,
    },
  ],
}
export const ingredients: { [key: string]: Ingredient } = {
  bun: {
    name: 'Bun',
    description: 'A soft and fluffy bread roll.',
  },
  'beef patty': {
    name: 'Beef Patty',
    description: 'A grilled beef patty.',
  },
  'chicken patty': {
    name: 'Chicken Patty',
    description: 'A breaded and fried chicken patty.',
  },
  cheese: {
    name: 'Cheese',
    description: 'A slice of cheese.',
  },
  lettuce: {
    name: 'Lettuce',
    description: 'Crisp and fresh lettuce leaves.',
  },
  mayonnaise: {
    name: 'Mayonnaise',
    description: 'A creamy condiment made with eggs and oil.',
  },
  'tomato slices': {
    name: 'Tomato Slices',
    description: 'Slices of ripe tomatoes.',
  },
  'pickle slices': {
    name: 'Pickle Slices',
    description: 'Thin slices of pickles.',
  },
  mustard: {
    name: 'Mustard',
    description: 'A tangy and yellow condiment.',
  },
  ketchup: {
    name: 'Ketchup',
    description: 'A sweet and tangy tomato-based sauce.',
  },
  onion: {
    name: 'Onion',
    description: 'Thinly sliced onions.',
  },
  'Special Sauce': {
    name: 'Special Sauce',
    description: 'A signature sauce with a blend of flavors.',
  },
  potatoes: {
    name: 'Potatoes',
    description: 'Fresh potatoes.',
  },
  salt: {
    name: 'Salt',
    description: 'A common seasoning.',
  },
  'vegetable oil': {
    name: 'Vegetable Oil',
    description: 'An oil used for frying.',
  },
  'Hungarian spices': {
    name: 'Hungarian Spices',
    description: 'A blend of spices for a Hungarian flavor.',
  },
  'carbonated water': {
    name: 'Carbonated Water',
    description: 'Water infused with carbon dioxide gas.',
  },
  sugar: {
    name: 'Sugar',
    description: 'A sweetening ingredient.',
  },
  'phosphoric acid': {
    name: 'Phosphoric Acid',
    description: 'An acidulant used in carbonated beverages.',
  },
  'caramel color': {
    name: 'Caramel Color',
    description: 'A food coloring agent.',
  },
  'natural flavors': {
    name: 'Natural Flavors',
    description: 'Naturally derived flavors.',
  },
  caffeine: {
    name: 'Caffeine',
    description: 'A natural stimulant found in beverages.',
  },
  'high fructose corn syrup': {
    name: 'High Fructose Corn Syrup',
    description: 'A sweetener derived from corn.',
  },
  'citric acid': {
    name: 'Citric Acid',
    description: 'A natural acid found in citrus fruits.',
  },
  'sodium citrate': {
    name: 'Sodium Citrate',
    description: 'A salt used as a flavoring agent.',
  },
  'lemon juice': {
    name: 'Lemon Juice',
    description: 'Freshly squeezed juice from lemons.',
  },
  water: {
    name: 'Water',
    description: 'Pure and clear water.',
  },
  'lemon slices': {
    name: 'Lemon Slices',
    description: 'Thin slices of fresh lemons.',
  },
  ice: {
    name: 'Ice',
    description: 'Frozen water used for chilling beverages.',
  },
  'vanilla ice cream': {
    name: 'Vanilla Ice Cream',
    description: 'Creamy and sweet vanilla-flavored ice cream.',
  },
  'caramel sauce': {
    name: 'Caramel Sauce',
    description: 'A rich and sweet sauce made with caramelized sugar.',
  },
  'whipped cream': {
    name: 'Whipped Cream',
    description: 'Light and fluffy whipped dairy cream.',
  },
  'Oreo cookies': {
    name: 'Oreo Cookies',
    description: 'Chocolate sandwich cookies with a creamy filling.',
  },
  apples: {
    name: 'Apples',
    description: 'Fresh and crisp apples.',
  },
  cinnamon: {
    name: 'Cinnamon',
    description: 'A warm and aromatic spice.',
  },
  'pastry crust': {
    name: 'Pastry Crust',
    description: 'A flaky and buttery pastry crust.',
  },
}
