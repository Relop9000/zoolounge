import MenuItems from "./MenuItems";

const Menu = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden bg-[url('/Jungle-bg.jpg')] bg-cover bg-center text-blue-100">
      <div className="absolute left-0 top-0 z-40 w-full">
        <div className="mt-20 px-4 sm:px-6">
          {Object.entries(MenuItems).map(([category, data], index, arr) => {
            const items = Array.isArray(data) ? data : data.items;
            if (!items) return null;

            return (
              <div
                key={category}
                id={category.toLowerCase()}
                className="mb-10 scroll-mt-24"
              >
                {index !== 0 && (
                  <div className="h-1 bg-gradient-to-r from-blue-400/30 via-white/10 to-blue-400/30 rounded-full my-8" />
                )}
                <div className="flex items-center gap-3 mb-4">
                  {data.image && !Array.isArray(data) && (
                    <img
                      src={data.image}
                      alt={category}
                      className="w-12 h-12 rounded-lg object-cover bg-inherit"
                    />
                  )}
                  <h2 className="text-2xl font-bold ">{category}</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="group relative bg-inherit rounded-xl overflow-hidden transition-transform transform active:scale-95"
                    >
                      {item.img && item.img.trim() && (
                        <div className="relative w-full h-32 sm:h-40 overflow-hidden hidden">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-t-xl transition-all duration-300 group-hover:opacity-90"
                          />
                        </div>
                      )}
                      <div className="p-2 text-center underline underline-offset-4 text-white rounded-b-xl ">
                        <h3 className="text-lg font-medium ">{item.name}</h3>
                        <div className="flex justify-center gap-2 mt-1 text-base ">
                          {item.price && (
                            <span className="bg-white/15 px-2 py-1 rounded-md">
                              {item.price}₮
                            </span>
                          )}
                          {item.bottleprice && (
                            <span className="bg-white/20 px-2 py-1 rounded-md">
                              Bottle: {item.bottleprice}₮
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
