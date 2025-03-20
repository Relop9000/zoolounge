import MenuItems from "./MenuItems";

const Menu = () => {
  return (
    <div className="relative w-screen h-dvh overflow-x-hidden">
      <div className="absolute left-0 top-0 z-40 size-full">
        <div className="mt-24 px-5 sm:px-10">
          {Object.entries(MenuItems).map(([category, data]) => {
            const items = Array.isArray(data) ? data : data.items;

            if (!items) return null;

            return (
              <div key={category} id={category.toLowerCase()} className="mb-12">
                <div className="flex items-center gap-4 mb-4">
                  {data.image && !Array.isArray(data) && (
                    <img
                      src={data.image}
                      alt={category}
                      className="w-16 h-16 rounded-xl object-cover bg-gray-300"
                    />
                  )}
                  <h2 className="text-2xl font-bold">{category}</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-green-600 shadow-lg rounded-3xl p-4"
                    >
                      {item.img ? (
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-56 rounded-2xl object-cover bg-gray-400"
                        />
                      ) : (
                        <div className="w-full h-56 rounded-2xl bg-gray-300 flex items-center justify-center">
                          <span className="text-gray-600">No Image</span>
                        </div>
                      )}

                      <div className="mt-3 text-center">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <div className="flex justify-center gap-4 mt-2">
                          {item.price && <span>{item.price}₮</span>}
                          {item.bottleprice && (
                            <span>Bottle: {item.bottleprice}₮</span>
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
