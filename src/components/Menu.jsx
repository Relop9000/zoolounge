const menuItems = {
  Food: [
    { id: "21", name: "Meat Lovers", price: "35'0'" },
    { id: "22", name: "BBQ Chicken", price: "35'0" },
    { id: "23", name: "Hawaii Pizza", price: "35'0" },
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
    { id: "9", name: "Earl Grey", price: "15'000" },
  ],
  Cocktails: [
    { id: "15", name: "Espresso Martini", price: "25000" },
    { id: "16", name: "Long Island", price: "27000" },
    { id: "17", name: "Mojito", price: "25000" },
    { id: "18", name: "Sex on the Beach", price: "25000" },
    { id: "19", name: "Tom Collins", price: "25000" },
    { id: "20", name: "Kamikaze", price: "24000" },
  ],
  Beers: [
    { id: "10", name: "Heineken", price: "15000" },
    { id: "11", name: "Kaltenberg", price: "17000" },
    { id: "12", name: "Corona Extra", price: "17000" },
    { id: "13", name: "Kirin Ichiban", price: "15000" },
    { id: "14", name: "Harbin", price: "20.0k" },
    { id: "15", name: "Asahi", price: "15.0k" },
  ],
  Tequila: [
    {
      id: "14",
      name: "Sierrai tequila",
      price: "22.0k",
      bottleprice: "170.0k",
    },
  ],
  Liqueur: [
    { id: "14", name: "Sierrai tequila", price: "22.0k", bottleprice: "" },
    { id: "15", name: "Sierrai tequila", price: "22.0k", bottleprice: "" },
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
                  className="flex justify-between border-b py-2"
                >
                  <h3>{item.name}</h3>
                  <span>{item.price}₮</span>
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
