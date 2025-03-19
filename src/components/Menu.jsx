import MenuItems from "./MenuItems";
const Menu = () => {
  return (
    <div className="relative w-screen h-dvh overflow-x-hidden">
      <div className="absolute left-0 top-0 z-40 size-full">
        <div className="mt-24 px-5 sm:px-10">
          {Object.entries(MenuItems).map(([category, items]) => (
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
