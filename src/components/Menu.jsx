const menuItems = {
  Food: [
    { id: "1", name: "Mixed Meat Platter", price: "70'000" },
    { id: "2", name: "Fried Chicken And French fries", price: "20'000" },
  ],
  Pizza: [
    { id: "21", name: "Meat Lovers", price: "35'000" },
    { id: "22", name: "BBQ Chicken", price: "35'000" },
    { id: "23", name: "Hawaii Pizza", price: "35'000" },
  ],
  Coffee: [
    { id: "1", name: "Americano", price: "9'000" },
    { id: "2", name: "Cafe Latte", price: "9'500" },
    { id: "3", name: "Vanilla Latte", price: "10'000" },
    { id: "4", name: "Cafe Mocha", price: "10'000" },
    { id: "5", name: "Caramel Latte", price: "10'000" },
    { id: "6", name: "Green Tea Latte", price: "10'500" },
  ],
  "Pot tea": [
    { id: "7", name: "Green Tea", price: "15'000" },
    { id: "8", name: "Fruit Tea", price: "15'000" },
    { id: "9", name: "Earl Grey", price: "7'500" },
  ],
  Cocktails: [
    { id: "15", name: "Espresso Martini", price: "25'000" },
    { id: "16", name: "Long Island", price: "27'000" },
    { id: "17", name: "Mojito", price: "25'000" },
    { id: "18", name: "Sex on the Beach", price: "25'000" },
    { id: "19", name: "Strawberry Daiquiri", price: "25'000" },
    { id: "20", name: "Fresh Jungle", price: "24'000" },
  ],
  Beers: [
    { id: "10", name: "Heineken", price: "15'000" },
    { id: "11", name: "Kaltenberg", price: "17'000" },
    { id: "12", name: "Corona Extra", price: "17'000" },
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
    },
  ],
  Liqueur: [
    {
      id: "14",
      name: "Bailey's irish cream",
      price: "17'000",
      bottleprice: "",
    },
    {
      id: "15",
      name: "Jagermiester",
      price: "22'000",
      bottleprice: "",
    },
  ],
  Whiskey: [
    { id: "1", name: "Wild Turkey", bottleprice: "300'000" },
    {
      id: "2",
      name: "Jack Daniels 50ml 0.7L",
      price: "25'000",
      bottleprice: "290'000",
    },
    {
      id: "3",
      name: "Ballantines 0.75L",
      price: "23'000",
      bottleprice: "230'000",
    },
  ],
  Vodka: [
    { id: "1", name: "Finlandia", price: "23'000", bottleprice: "200'000" },
    { id: "2", name: "Grey goose", price: "26'000", bottleprice: "380'000" },
    { id: "3", name: "Beluga", price: "24'000", bottleprice: "350'000" },
  ],
  Wine: [
    { id: "1", name: "Domaine de La baume", price: "115'000" },
    { id: "2", name: "Calvet", price: "105'000" },
    { id: "3", name: "Maison Castel", price: "105'000" },
    { id: "4", name: "Kindzmarauli", price: "105'000" },
    { id: "5", name: "Lous Eschenauer", price: "105'000" },
    { id: "6", name: "Hardys", price: "105'000" },
  ],
};

const Menu = () => {
  return (
    <div className="relative w-screen h-dvh overflow-x-hidden">
      <div className="absolute left-0 top-0 z-40 size-full">
        <div className="mt-24 px-5 sm:px-10">
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} id={category.toLowerCase()} className="mb-8">
              <h2 className="text-xl font-bold mb-2">{category}</h2>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-3 border-b py-2 gap-4"
                >
                  <h3 className="col-span-1">{item.name}</h3>
                  <span className="text-right min-w-[80px]">
                    {item.price ? `${item.price}₮` : ""}
                  </span>
                  <span className="text-right min-w-[100px]">
                    {item.bottleprice ? `${item.bottleprice}₮` : ""}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
