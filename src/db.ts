export enum Category {
  Hamburger = 'hamburger',
  Fries = 'fries',
  Drinks = 'drinks',
  Desserts = 'desserts',
  McWraps = 'mcwraps',
  Chicken = 'chicken',
  McCafe = 'mccafe',
  Salads = 'salads',
  Breakfast = 'breakfast',
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
  image: string
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
      ingredients: ['chicken', 'lettuce', 'mayonnaise', 'tomato slices', 'bun'],
      price: 12.99,
      image: '/images/mc-chicken.png',
    },
    {
      name: 'McCrispy',
      description:
        'Odkryj nowy wymiar chrupkości! Burger, w którym znajdziesz kawałek niezwykle soczystej piersi z kurczaka w bajecznie chrupiącej panierce, a także znane i lubiane dodatki – wyrazistego pomidora, świeżą sałatę oraz kremowy sos musztardowo-miodowy. Całość zamknięta w wyjątkowo puszystej bułce. Mmm, skusisz się?',
      ingredients: [
        'chicken',
        'lettuce',
        'tomato slices',
        'honey mustard sauce',
        'bun',
      ],
      price: 14.99,
      image: '/images/mc-crispy.png',
    },
    {
      name: 'McRoyal',
      description:
        'Odkryj klasykę na nowo! W tym burgerze znajdziesz soczystą wołowinę, podwójną porcję topionego sera cheddar, chrupiący bekon, prażoną cebulkę oraz odświeżające pikle. Całość podkreślona aromatycznym sosem Barrel & Bourbon BBQ.',
      ingredients: [
        'beef',
        'cheese',
        'bacon',
        'onion',
        'pickle slices',
        'BBQ sauce',
        'bun',
      ],
      price: 16.99,
      image: '/images/mc-royal.png',
    },
    {
      name: 'McDouble',
      description:
        'Zawarte w nim dwa plastry wołowiny 100%, ser cheddar, cebula, keczup i musztarda powinny skutecznie przegonić głód!',
      ingredients: ['beef', 'cheese', 'onion', 'ketchup', 'mustard', 'bun'],
      price: 13.99,
      image: '/images/mc-double.png',
    },
    {
      name: 'Big Mac',
      description:
        'Dwa kotlety wołowe, ser, cebula, sałata, ogórek i sos Big Mac.',
      ingredients: [
        'beef',
        'cheese',
        'onion',
        'lettuce',
        'pickle slices',
        'Special Sauce',
        'bun',
      ],
      price: 15.99,
      image: '/images/big-mac.png',
    },
    {
      name: 'Veggieburger',
      description:
        'Zupełna nowość, na którą czekało wiele osób. To pyszny i soczysty burger z kotletem warzywnym (z całymi kawałkami warzyw w środku, m.in. marchewki, groszku czy brokułów), plastrem sera topionego cheddar, dwoma plastrami świeżego pomidora, sałatą i kremowym sosem kanapkowym. A to wszystko w miękkiej i dobrze wypieczonej bułce obsypanej ziarnami sezamu. Pyszna odmiana, nie tylko dla wegetarian!',
      ingredients: [
        'vegetable patty',
        'cheese',
        'tomato slices',
        'lettuce',
        'bun',
      ],
      price: 12.99,
      image: '/images/veggie-burger.png',
    },
    {
      name: 'Cheeseburger',
      description:
        'Gorący hamburger z rozpuszczonym serem, korniszonem, musztardą i keczupem.',
      ingredients: [
        'beef',
        'cheese',
        'pickle slices',
        'mustard',
        'ketchup',
        'bun',
      ],
      price: 10.99,
      image: '/images/chessburger.png',
    },
    {
      name: 'Jalapeno Burger',
      description:
        'Wyobraź sobie klasyczny smak wołowiny, który dopełniają papryczki jalapeño i pyszny pikantny sos. Czy właśnie... zaostrzyliśmy Ci apetyt?',
      ingredients: ['beef', 'jalapeno peppers', 'onion', 'bun', 'mayonnaise'],
      price: 13.99,
      image: '/images/jalapeno-burger.png',
    },
  ],
  [Category.Fries]: [
    {
      name: 'Małe frytki',
      description: 'Cienkie i chrupiące złociste frytki.',
      ingredients: ['potatoes', 'salt', 'vegetable oil'],
      price: 6.99,
      image: '/images/fries.png',
    },
    {
      name: 'Duże frytki',
      description: 'Porcja soczystych, chrupiących frytek.',
      ingredients: ['potatoes', 'salt', 'vegetable oil'],
      price: 8.99,
      image: '/images/fries.png',
    },
    {
      name: 'Kratofelki',
      description:
        'Chrupiące z zewnątrz i mięciutkie w środku kartofelki, Mmm, nie daj się prosić!',
      ingredients: ['potatoes', 'Hungarian spices', 'salt', 'vegetable oil'],
      price: 9.99,
      image: '/images/new-fries.png',
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
      image: '/images/cola.png',
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
      image: '/images/cola.png',
    },
    {
      name: 'Lemoniada',
      description: 'Schłodzona, orzeźwiająca lemoniada z plasterkami cytryny.',
      ingredients: ['lemon juice', 'water', 'sugar', 'lemon slices', 'ice'],
      price: 5.99,
      image: '/images/lemonade.png',
    },
    {
      name: 'Woda',
      description: 'Woda mineralna niegazowana.',
      ingredients: ['water'],
      price: 3.99,
      image: '/images/water.png',
    },
    {
      name: 'Shake',
      description: 'Lodowy deser',
      ingredients: ['vanilla ice cream', 'milk', 'whipped cream'],
      price: 7.99,
      image: '/images/shake.png',
    },
    {
      name: 'Sok jabłkowy',
      description: 'Sok jabłkowy z najlepszych jabłek.',
      ingredients: ['apple juice'],
      price: 4.99,
      image: '/images/apple-juice.png',
    },
  ],
  [Category.Desserts]: [
    {
      name: 'McFlurry Oreo',
      description: 'Lodowy deser z kawałkami herbatników Oreo.',
      ingredients: ['vanilla ice cream', 'Oreo cookies'],
      price: 8.99,
      image: '/images/mcflurry-oreo.png',
    },
    {
      name: 'McFlurry M&M',
      description: 'Lodowy deser z kolorowymi drażetkami M&M.',
      ingredients: ['vanilla ice cream', 'M&M candies'],
      price: 8.99,
      image: '/images/mcflurry-mms.png',
    },
    {
      name: 'McFlurry Lion',
      description: 'Lodowy deser z kawałkami batonika Lion.',
      ingredients: ['vanilla ice cream', 'Lion bar'],
      price: 8.99,
      image: '/images/mcflurry-lion.png',
    },
    {
      name: 'Muffin',
      description: 'Ciepły muffin z czekoladą.',
      ingredients: ['flour', 'sugar', 'chocolate chips', 'butter', 'eggs'],
      price: 5.99,
      image: '/images/muffin.png',
    },
    {
      name: 'Croissant',
      description: 'Ciepły croissant z masłem.',
      ingredients: ['flour', 'sugar', 'butter', 'eggs'],
      price: 5.99,
      image: '/images/croissant.png',
    },
    {
      name: 'Carmel Cookie',
      description:
        'Lubisz słodycz przełamaną nutą słonego smaku? Ciacho słony karmel na pewno przypadnie Ci do gustu. Do kawy lub solo: zawsze smakuje wyśmienicie!',
      ingredients: ['vanilla ice cream', 'caramel sauce', 'whipped cream'],
      price: 7.99,
      image: '/images/cookie-carmel.png',
    },
    {
      name: 'Apple Pie',
      description: 'Ciepłe, chrupiące jabłkowe ciasto z dodatkiem cynamonu.',
      ingredients: ['apples', 'sugar', 'cinnamon', 'pastry crust'],
      price: 6.99,
      image: '/images/apple-pie.png',
    },
  ],
  [Category.McWraps]: [
    {
      name: 'McWrap Klasyczny',
      description:
        'McWrap Klasyczny to połączenie chrupiącego kurczaka, sałaty lodowej, pomidora, czerwonej cebuli i sosu majonezowego w tortilli pszennym.',
      ingredients: [
        'tortilla',
        'chicken',
        'lettuce',
        'tomato',
        'red onion',
        'mayonnaise',
      ],
      price: 12.99,
      image: '/images/mcwrap-classic.png',
    },
    {
      name: 'McWrap Bekon DeLuxe',
      description:
        'McWrap Bekon DeLuxe to połączenie chrupiącego kurczaka, bekonu, sałaty lodowej, pomidora, czerwonej cebuli i sosu majonezowego w tortilli pszennym.',
      ingredients: [
        'tortilla',
        'chicken',
        'bacon',
        'lettuce',
        'tomato',
        'red onion',
        'mayonnaise',
      ],
      price: 14.99,
      image: '/images/mcwrap-bacon.png',
    },
    {
      name: 'McWrap Veggie',
      description:
        'McWrap Veggie to połączenie chrupiącego kurczaka, sałaty lodowej, pomidora, czerwonej cebuli i sosu majonezowego w tortilli pszennym.',
      ingredients: ['tortilla', 'lettuce', 'tomato', 'red onion', 'mayonnaise'],
      price: 12.99,
      image: '/images/mcwrap-veggie.png',
    },
  ],
  [Category.Chicken]: [
    {
      name: 'McCrispy Tenders',
      description:
        'McCrispy Tenders to chrupiące paluszki z kurczaka. Idealne jako przekąska lub dodatek do dania głównego.',
      ingredients: ['chicken', 'flour', 'eggs', 'breadcrumbs'],
      price: 12.99,
      image: '/images/mccrispy-tenders.png',
    },
    {
      name: 'McNuggets',
      description:
        'McNuggets to chrupiące kawałki z kurczaka. Idealne jako przekąska lub dodatek do dania głównego.',
      ingredients: ['chicken', 'flour', 'eggs', 'breadcrumbs'],
      price: 12.99,
      image: '/images/mcnuggets.png',
    },
    {
      name: 'Chikker',
      description:
        'Chikker. Idealne jako przekąska lub dodatek do dania głównego.',
      ingredients: ['chicken', 'flour', 'eggs', 'breadcrumbs'],
      price: 12.99,
      image: '/images/chikker.png',
    },
  ],
  [Category.McCafe]: [
    {
      name: 'Iced Latte',
      description:
        'Iced Latte to połączenie espresso z mlekiem i lodem. Idealne na letnie dni.',
      ingredients: ['espresso', 'milk', 'ice'],
      price: 9.99,
      image: '/images/iced-latte.png',
    },
    {
      name: 'Iced Caramel Latte',
      description:
        'Iced Caramel Latte to połączenie espresso z mlekiem, karmelem i lodem. Idealne na letnie dni.',
      ingredients: ['espresso', 'milk', 'caramel', 'ice'],
      price: 10.99,
      image: '/images/iced-latte.png',
    },
    {
      name: 'Cappuccino',
      description:
        'Cappuccino to połączenie espresso z mlekiem i mleczną pianką. Idealne na letnie dni.',
      ingredients: ['espresso', 'milk', 'milk foam'],
      price: 9.99,
      image: '/images/cappuccino.png',
    },
    {
      name: 'Latte',
      description:
        'Latte to połączenie espresso z mlekiem. Idealne na letnie dni.',
      ingredients: ['espresso', 'milk'],
      price: 9.99,
      image: '/images/cappuccino.png',
    },
    {
      name: 'Black Coffee',
      description:
        'Black Coffee to połączenie espresso z wodą. Idealne na letnie dni.',
      ingredients: ['espresso', 'water'],
      price: 9.99,
      image: '/images/black-coffe.png',
    },
  ],
  [Category.Salads]: [
    {
      name: 'Salad Chicken',
      description:
        'Chicken Salad to połączenie sałaty lodowej, pomidora, czerwonej cebuli i sosu majonezowego w tortilli pszennym.',
      ingredients: ['chicken', 'lettuce', 'tomato', 'red onion', 'mayonnaise'],
      price: 12.99,
      image: '/images/salad-chicken.png',
    },
    {
      name: 'Salad',
      description:
        'Salad to połączenie sałaty lodowej, pomidora, czerwonej cebuli i sosu majonezowego w tortilli pszennym.',
      ingredients: ['lettuce', 'tomato', 'red onion', 'mayonnaise'],
      price: 10.99,
      image: '/images/salad.png',
    },
  ],
  [Category.Breakfast]: [
    {
      name: 'Chicken Premium',
      description:
        'Chicken Premium to połączenie chrupiącego kurczaka, sałaty lodowej, pomidora, czerwonej cebuli i sosu majonezowego w tortilli pszennym.',
      ingredients: ['chicken', 'lettuce', 'tomato', 'red onion', 'mayonnaise'],
      price: 7.99,
      image: '/images/chicken-premium-breakfast.png',
    },
    {
      name: 'Kajzerka Jajko i Pieczarki',
      description:
        'Kajzerka Jajko i Pieczarki to połączenie jajka i pieczarek w kajzerce.',
      ingredients: ['egg', 'mushrooms', 'bread'],
      price: 7.99,
      image: '/images/egg-mushrooms-breakfast.png',
    },
    {
      name: 'McMuffin Jajko i Bekon',
      description:
        'McMuffin Jajko i Bekon to połączenie jajka i bekonu w bułce McMuffin.',
      ingredients: ['egg', 'bacon', 'bread'],
      price: 7.99,
      image: '/images/mcmuffin-egg-bacon.png',
    },
    {
      name: 'McMuffin Ser i Bekon',
      description:
        'McMuffin Ser i Bekon to połączenie sera i bekonu w bułce McMuffin.',
      ingredients: ['cheese', 'bacon', 'bread'],
      price: 7.99,
      image: '/images/mcmuffin-cheese-bacon.png',
    },
  ],
}
export const ingredients: { [key: string]: Ingredient } = {
  bun: {
    name: 'Bun',
    description: 'A soft and fluffy bread roll.',
  },
  beef: {
    name: 'Beef',
    description: 'A grilled beef.',
  },
  chicken: {
    name: 'Chicken',
    description: 'A breaded and fried chicken.',
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
