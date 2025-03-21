const MenuItems = {
  Food: {
    image: "/Food.png",
    items: [
      {
        id: "1",
        name: "Mixed Meat Platter",
        price: "85'000",
        img: "/mixed-meat.jpg",
      },
      {
        id: "2",
        name: "Fried Chicken And French fries",
        price: "25'000",
        img: "",
      },
    ],
  },
  Pizza: {
    items: [
      {
        id: "21",
        name: "Meat Lovers",
        price: "35'000",
        img: "/images/pizza/meat-lovers.jpg",
      },
      {
        id: "22",
        name: "BBQ Chicken",
        price: "35'000",
        img: "/images/pizza/bbq-chicken.jpg",
      },
      {
        id: "23",
        name: "Hawaii Pizza",
        price: "35'000",
        img: "/images/pizza/hawaii.jpg",
      },
    ],
  },
  Dessert: {
    items: [
      {
        id: "1",
        name: "Chocolate Icecream",
        price: "15'000",
        img: "/images/dessert/choco-icecream.jpg",
      },
      {
        id: "2",
        name: "Oreo Icecream",
        price: "15'000",
        img: "/images/dessert/oreo-icecream.jpg",
      },
      {
        id: "3",
        name: "M&M Icecream",
        price: "15'000",
        img: "/images/dessert/mm-icecream.jpg",
      },
      {
        id: "4",
        name: "Marshmellow Icecream",
        price: "15'000",
        img: "/images/dessert/marshmallow-icecream.jpg",
      },
    ],
  },
  Drinks: {
    image: "/drink.png",
    items: [],
  },
  "Coffee & Soft Drinks": [
    {
      id: "1",
      name: "Americano",
      price: "9'000",
      img: "",
    },
    {
      id: "2",
      name: "Cafe Latte",
      price: "9'500",
      img: "",
    },
    {
      id: "3",
      name: "Vanilla Latte",
      price: "10'000",
      img: "",
    },
    {
      id: "4",
      name: "Cafe Mocha",
      price: "10'000",
      img: "",
    },
    {
      id: "5",
      name: "Caramel Latte",
      price: "10'000",
      img: "",
    },
    { id: "6", name: "Green Tea Latte", price: "10'500" },
    { id: "7", name: "Chocolate Milk", price: "8'000" },
    { id: "8", name: "Sprite", price: "6'000" },
    { id: "9", name: "Coke", price: "6'000" },
    { id: "10", name: "Energy drink", price: "6'000" },
  ],
  "Pot tea": [
    {
      id: "7",
      name: "Green Tea",
      price: "15'000",
      img: "",
    },
    {
      id: "8",
      name: "Fruit Tea",
      price: "15'000",
      img: "",
    },
    {
      id: "9",
      name: "Earl Grey",
      price: "15'000",
      img: "",
    },
  ],
  Cocktails: [
    {
      id: "15",
      name: "Espresso Martini",
      price: "25'000",
      img: "",
    },
    {
      id: "16",
      name: "Long Island",
      price: "27'000",
      img: "",
    },
    {
      id: "17",
      name: "Mojito",
      price: "25'000",
      img: "",
    },
    { id: "18", name: "Sex on the Beach", price: "25'000" },
    { id: "19", name: "Strawberry Daiquiri", price: "25'000" },
    { id: "20", name: "Fresh Jungle", price: "24'000" },
  ],
  Beers: [
    {
      id: "10",
      name: "Heineken",
      price: "15'000",
      img: "/images/beers/heineken.jpg",
    },
    {
      id: "11",
      name: "Kaltenberg",
      price: "17'000",
      img: "/images/beers/kaltenberg.jpg",
    },
    {
      id: "12",
      name: "Corona Extra",
      price: "17'000",
      img: "/images/beers/corona.jpg",
    },
    { id: "13", name: "Kirin Ichiban", price: "15'000" },
    { id: "14", name: "Harbin", price: "20'000" },
    { id: "15", name: "Asahi", price: "15'000" },
  ],
  Tequila: [
    {
      id: "14",
      name: "Sierrai tequila",
      price: "22'000",
      bottleprice: "170'000",
      img: "/images/tequila/sierra.jpg",
    },
  ],
  Liqueur: [
    {
      id: "14",
      name: "Bailey's Irish Cream",
      price: "17'000",
      img: "/images/liqueur/baileys.jpg",
    },
    {
      id: "15",
      name: "Jägermeister",
      price: "22'000",
      img: "/images/liqueur/jagermeister.jpg",
    },
  ],
  Whiskey: [
    {
      id: "1",
      name: "Wild Turkey",
      bottleprice: "300'000",
      img: "/images/whiskey/wild-turkey.jpg",
    },
    {
      id: "2",
      name: "Jack Daniels 50ml 0.7L",
      price: "25'000",
      bottleprice: "290'000",
      img: "/images/whiskey/jack-daniels.jpg",
    },
    {
      id: "3",
      name: "Ballantines 0.75L",
      price: "23'000",
      bottleprice: "230'000",
    },
  ],
  Vodka: [
    {
      id: "1",
      name: "Finlandia",
      price: "23'000",
      bottleprice: "200'000",
      img: "/images/vodka/finlandia.jpg",
    },
    {
      id: "2",
      name: "Grey Goose",
      price: "26'000",
      bottleprice: "380'000",
      img: "/images/vodka/grey-goose.jpg",
    },
    { id: "3", name: "Beluga", price: "24'000", bottleprice: "350'000" },
  ],
  Wine: [
    {
      id: "1",
      name: "Domaine de La Baume",
      price: "100'000",
      img: "/images/wine/domaine.jpg",
    },
    {
      id: "2",
      name: "Calvet",
      price: "90'000",
      img: "/images/wine/calvet.jpg",
    },
    {
      id: "3",
      name: "Maison Castel",
      price: "95'000",
      img: "/images/wine/maison-castel.jpg",
    },
    { id: "4", name: "Kindzmarauli", price: "90'000" },
    { id: "5", name: "Lous Eschenauer", price: "90'000" },
    { id: "6", name: "Hardys", price: "90'000" },
  ],
};

export default MenuItems;
