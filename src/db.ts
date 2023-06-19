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

export type ProductIngredient = {
  name: string
  quantity: number
}

export interface MenuItem {
  name: string
  description: string
  ingredients?: ProductIngredient[]
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
      ingredients: [
        { name: 'chicken', quantity: 1 },
        { name: 'lettuce', quantity: 1 },
        { name: 'mayonnaise', quantity: 1 },
        { name: 'tomato slices', quantity: 1 },
      ],
      price: 12.99,
      image: '/images/mc-chicken.png',
    },

    {
      name: 'McCrispy',
      description:
        'Odkryj nowy wymiar chrupkości! Burger, w którym znajdziesz kawałek niezwykle soczystej piersi z kurczaka w bajecznie chrupiącej panierce, a także znane i lubiane dodatki – wyrazistego pomidora, świeżą sałatę oraz kremowy sos musztardowo-miodowy. Całość zamknięta w wyjątkowo puszystej bułce. Mmm, skusisz się?',
      ingredients: [
        { name: 'chicken', quantity: 1 },
        { name: 'lettuce', quantity: 1 },
        { name: 'tomato slices', quantity: 1 },
      ],
      price: 14.99,
      image: '/images/mc-crispy.png',
    },
    {
      name: 'McRoyal',
      description:
        'Odkryj klasykę na nowo! W tym burgerze znajdziesz soczystą wołowinę, podwójną porcję topionego sera cheddar, chrupiący bekon, prażoną cebulkę oraz odświeżające pikle. Całość podkreślona aromatycznym sosem Barrel & Bourbon BBQ.',
      ingredients: [
        { name: 'beef', quantity: 1 },
        { name: 'cheese', quantity: 1 },
        { name: 'bacon', quantity: 1 },
        { name: 'onion', quantity: 1 },
        { name: 'pickle slices', quantity: 1 },
      ],
      price: 16.99,
      image: '/images/mc-royal.png',
    },
    {
      name: 'McDouble',
      description:
        'Zawarte w nim dwa plastry wołowiny 100%, ser cheddar, cebula, keczup i musztarda powinny skutecznie przegonić głód!',
      ingredients: [
        { name: 'beef', quantity: 1 },
        { name: 'cheese', quantity: 1 },
        { name: 'onion', quantity: 1 },
        { name: 'ketchup', quantity: 1 },
        { name: 'mustard', quantity: 1 },
      ],
      price: 13.99,
      image: '/images/mc-double.png',
    },
    {
      name: 'Big Mac',
      description:
        'Dwa kotlety wołowe, ser, cebula, sałata, ogórek i sos Big Mac.',
      ingredients: [
        { name: 'beef', quantity: 1 },
        { name: 'cheese', quantity: 1 },
        { name: 'onion', quantity: 1 },
        { name: 'lettuce', quantity: 1 },
        { name: 'pickle slices', quantity: 1 },
      ],
      price: 15.99,
      image: '/images/big-mac.png',
    },
    {
      name: 'Veggieburger',
      description:
        'Zupełna nowość, na którą czekało wiele osób. To pyszny i soczysty burger z kotletem warzywnym (z całymi kawałkami warzyw w środku, m.in. marchewki, groszku czy brokułów), plastrem sera topionego cheddar, dwoma plastrami świeżego pomidora, sałatą i kremowym sosem kanapkowym. A to wszystko w miękkiej i dobrze wypieczonej bułce obsypanej ziarnami sezamu. Pyszna odmiana, nie tylko dla wegetarian!',
      ingredients: [
        { name: 'vegetable patty', quantity: 1 },
        { name: 'cheese', quantity: 1 },
        { name: 'tomato slices', quantity: 1 },
        { name: 'lettuce', quantity: 1 },
      ],
      price: 12.99,
      image: '/images/veggie-burger.png',
    },
    {
      name: 'Cheeseburger',
      description:
        'Gorący hamburger z rozpuszczonym serem, korniszonem, musztardą i keczupem.',
      ingredients: [
        { name: 'beef', quantity: 1 },
        { name: 'cheese', quantity: 1 },
        { name: 'pickle slices', quantity: 1 },
        { name: 'mustard', quantity: 1 },
        { name: 'ketchup', quantity: 1 },
      ],
      price: 10.99,
      image: '/images/chessburger.png',
    },
    {
      name: 'Jalapeno Burger',
      description:
        'Wyobraź sobie klasyczny smak wołowiny, który dopełniają papryczki jalapeño i pyszny pikantny sos. Czy właśnie... zaostrzyliśmy Ci apetyt?',
      ingredients: [
        { name: 'beef', quantity: 1 },
        { name: 'onion', quantity: 1 },
        { name: 'mayonnaise', quantity: 1 },
      ],
      price: 13.99,
      image: '/images/jalapeno-burger.png',
    },
  ],
  [Category.Fries]: [
    {
      name: 'Małe frytki',
      description: 'Cienkie i chrupiące złociste frytki.',
      price: 6.99,
      ingredients: [
        {
          name: 'ketchup',
          quantity: 1,
        },
      ],
      image: '/images/fries.png',
    },
    {
      name: 'Duże frytki',
      description: 'Porcja soczystych, chrupiących frytek.',
      price: 8.99,
      ingredients: [
        {
          name: 'ketchup',
          quantity: 1,
        },
      ],
      image: '/images/fries.png',
    },
    {
      name: 'Kratofelki',
      description:
        'Chrupiące z zewnątrz i mięciutkie w środku kartofelki, Mmm, nie daj się prosić!',
      price: 9.99,
      ingredients: [
        {
          name: 'ketchup',
          quantity: 1,
        },
      ],
      image: '/images/new-fries.png',
    },
  ],
  [Category.Drinks]: [
    {
      name: 'Coca-Cola',
      description: 'Gazowany napój orzeźwiający z colą.',
      price: 4.99,
      image: '/images/cola.png',
    },
    {
      name: 'Sprite',
      description: 'Gazowany napój orzeźwiający o smaku cytrynowym.',
      price: 4.99,
      image: '/images/cola.png',
    },
    {
      name: 'Lemoniada',
      description: 'Schłodzona, orzeźwiająca lemoniada z plasterkami cytryny.',
      price: 5.99,
      image: '/images/lemonade.png',
    },
    {
      name: 'Woda',
      description: 'Woda mineralna niegazowana.',
      price: 3.99,
      image: '/images/water.png',
    },
    {
      name: 'Shake',
      description: 'Lodowy deser',
      price: 7.99,
      image: '/images/shake.png',
    },
    {
      name: 'Sok jabłkowy',
      description: 'Sok jabłkowy z najlepszych jabłek.',
      price: 4.99,
      image: '/images/apple-juice.png',
    },
  ],
  [Category.Desserts]: [
    {
      name: 'McFlurry Oreo',
      description: 'Lodowy deser z kawałkami herbatników Oreo.',
      price: 8.99,
      image: '/images/mcflurry-oreo.png',
    },
    {
      name: 'McFlurry M&M',
      description: 'Lodowy deser z kolorowymi drażetkami M&M.',
      price: 8.99,
      image: '/images/mcflurry-mms.png',
    },
    {
      name: 'McFlurry Lion',
      description: 'Lodowy deser z kawałkami batonika Lion.',
      price: 8.99,
      image: '/images/mcflurry-lion.png',
    },
    {
      name: 'Muffin',
      description: 'Ciepły muffin z czekoladą.',
      price: 5.99,
      image: '/images/muffin.png',
    },
    {
      name: 'Croissant',
      description: 'Ciepły croissant z masłem.',
      price: 5.99,
      image: '/images/croissant.png',
    },
    {
      name: 'Carmel Cookie',
      description:
        'Lubisz słodycz przełamaną nutą słonego smaku? Ciacho słony karmel na pewno przypadnie Ci do gustu. Do kawy lub solo: zawsze smakuje wyśmienicie!',
      price: 7.99,
      image: '/images/cookie-carmel.png',
    },
    {
      name: 'Apple Pie',
      description: 'Ciepłe, chrupiące jabłkowe ciasto z dodatkiem cynamonu.',
      price: 6.99,
      image: '/images/apple-pie.png',
    },
  ],
  [Category.McWraps]: [
    {
      name: 'McWrap Klasyczny',
      description:
        'McWrap Klasyczny to połączenie chrupiącego kurczaka, sałaty lodowej, pomidora, czerwonej cebuli i sosu majonezowego w tortilli pszennym.',
      price: 12.99,
      image: '/images/mcwrap-classic.png',
    },
    {
      name: 'McWrap Bekon DeLuxe',
      description:
        'McWrap Bekon DeLuxe to połączenie chrupiącego kurczaka, bekonu, sałaty lodowej, pomidora, czerwonej cebuli i sosu majonezowego w tortilli pszennym.',
      price: 14.99,
      image: '/images/mcwrap-bacon.png',
    },
    {
      name: 'McWrap Veggie',
      description:
        'McWrap Veggie to połączenie chrupiącego kurczaka, sałaty lodowej, pomidora, czerwonej cebuli i sosu majonezowego w tortilli pszennym.',
      price: 12.99,
      image: '/images/mcwrap-veggie.png',
    },
  ],
  [Category.Chicken]: [
    {
      name: 'McCrispy Tenders',
      description:
        'McCrispy Tenders to chrupiące paluszki z kurczaka. Idealne jako przekąska lub dodatek do dania głównego.',
      price: 12.99,
      image: '/images/mccrispy-tenders.png',
    },
    {
      name: 'McNuggets',
      description:
        'McNuggets to chrupiące kawałki z kurczaka. Idealne jako przekąska lub dodatek do dania głównego.',
      price: 12.99,
      image: '/images/mcnuggets.png',
    },
    {
      name: 'Chikker',
      description:
        'Chikker. Idealne jako przekąska lub dodatek do dania głównego.',
      price: 12.99,
      image: '/images/chikker.png',
    },
  ],
  [Category.McCafe]: [
    {
      name: 'Iced Latte',
      description:
        'Iced Latte to połączenie espresso z mlekiem i lodem. Idealne na letnie dni.',
      price: 9.99,
      image: '/images/iced-latte.png',
    },
    {
      name: 'Iced Caramel Latte',
      description:
        'Iced Caramel Latte to połączenie espresso z mlekiem, karmelem i lodem. Idealne na letnie dni.',
      price: 10.99,
      image: '/images/iced-latte.png',
    },
    {
      name: 'Cappuccino',
      description:
        'Cappuccino to połączenie espresso z mlekiem i mleczną pianką. Idealne na letnie dni.',
      price: 9.99,
      image: '/images/cappuccino.png',
    },
    {
      name: 'Latte',
      description:
        'Latte to połączenie espresso z mlekiem. Idealne na letnie dni.',
      price: 9.99,
      image: '/images/cappuccino.png',
    },
    {
      name: 'Black Coffee',
      description:
        'Black Coffee to połączenie espresso z wodą. Idealne na letnie dni.',
      price: 9.99,
      image: '/images/black-coffe.png',
    },
  ],
  [Category.Salads]: [
    {
      name: 'Salad Chicken',
      description:
        'Chicken Salad to połączenie sałaty lodowej, pomidora, czerwonej cebuli i sosu majonezowego w tortilli pszennym.',
      price: 12.99,
      image: '/images/salad-chicken.png',
    },
    {
      name: 'Salad',
      description:
        'Salad to połączenie sałaty lodowej, pomidora, czerwonej cebuli i sosu majonezowego w tortilli pszennym.',
      price: 10.99,
      image: '/images/salad.png',
    },
  ],
  [Category.Breakfast]: [
    {
      name: 'Chicken Premium',
      description:
        'Chicken Premium to połączenie chrupiącego kurczaka, sałaty lodowej, pomidora, czerwonej cebuli i sosu majonezowego w tortilli pszennym.',
      price: 7.99,
      image: '/images/chicken-premium-breakfast.png',
    },
    {
      name: 'Kajzerka Jajko i Pieczarki',
      description:
        'Kajzerka Jajko i Pieczarki to połączenie jajka i pieczarek w kajzerce.',
      price: 7.99,
      image: '/images/egg-mushrooms-breakfast.png',
    },
    {
      name: 'McMuffin Jajko i Bekon',
      description:
        'McMuffin Jajko i Bekon to połączenie jajka i bekonu w bułce McMuffin.',
      price: 7.99,
      image: '/images/mcmuffin-egg-bacon.png',
    },
    {
      name: 'McMuffin Ser i Bekon',
      description:
        'McMuffin Ser i Bekon to połączenie sera i bekonu w bułce McMuffin.',
      price: 7.99,
      image: '/images/mcmuffin-cheese-bacon.png',
    },
  ],
}

type Ingredient = {
  [key: string]: {
    photo: string
  }
}
export const ingredients: Ingredient = {
  chicken: {
    photo: '/images/chicken.png',
  },
  lettuce: {
    photo: '/images/lettuce.png',
  },
  'tomato slices': {
    photo: '/images/tomato-slices.png',
  },
  beef: {
    photo: '/images/beef.png',
  },
  cheese: {
    photo: '/images/cheese.png',
  },
  bacon: {
    photo: '/images/bacon.png',
  },
  onion: {
    photo: '/images/onion.png',
  },
  'pickle slices': {
    photo: '/images/pickle-slices.png',
  },
  'vegetable patty': {
    photo: '/images/vege.png',
  },
  ketchup: {
    photo: '/images/ketchup.png',
  },
  mustard: {
    photo: '/images/mustard.png',
  },
  mayonnaise: {
    photo: '/images/mayonnaise.png',
  },
}
