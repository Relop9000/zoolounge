"use client";
import { useState } from "react";
import MenuItems from "./MenuItems";
import {
  ChevronDown,
  Coffee,
  UtensilsCrossed,
  Wine,
  IceCream,
  Pizza,
  Salad,
  Beer,
  Martini,
  Sparkles,
} from "lucide-react";

// Group categories
const categoryGroups = {
  "Special Menu": {
    icon: Sparkles,
    subcategories: ["Bottle Set", "Special Days"],
  },
  Foods: {
    icon: UtensilsCrossed,
    subcategories: [
      "Salad",
      "Pasta",
      "Pizza",
      "Steak",
      "Other Foods",
      "Dessert",
    ],
  },
  Drinks: {
    icon: Coffee,
    subcategories: [
      "Coffee",
      "Smoothie",
      "Soft Drinks",
      "Pot tea",
      "Shake",
      "Juice",
      "Cocktails",
      "Beers",
      "Tequila",
      "Gin",
      "Liquor",
      "Rum",
      "Whiskey",
      "Vodka",
      "Wine",
    ],
  },
};

const categoryIcons = {
  Salad: Salad,
  Pasta: UtensilsCrossed,
  Pizza: Pizza,
  Steak: UtensilsCrossed,
  "Other Foods": UtensilsCrossed,
  Dessert: IceCream,
  Coffee: Coffee,
  Smoothie: Coffee,
  "Soft Drinks": Coffee,
  "Pot tea": Coffee,
  Shake: Coffee,
  Juice: Coffee,
  Cocktails: Martini,
  Beers: Beer,
  Tequila: Wine,
  Gin: Wine,
  Liquor: Wine,
  Rum: Wine,
  Whiskey: Wine,
  Vodka: Wine,
  Wine: Wine,
  "Bottle Set": Wine,
  "Special Days": Sparkles,
};

const Menu = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Ad configuration - add image URL here to show the ad
  const adImage = "/images/Event/Birthday.jpg"; // Add image URL like "/images/special-event.jpg" to show ad

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
    setSelectedCategory(null);
    setIsMenuOpen(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsMenuOpen(false);

    setTimeout(() => {
      document.getElementById(category.toLowerCase())?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleBackToGroup = () => {
    setSelectedCategory(null);
  };

  const handleBackToHome = () => {
    setSelectedGroup(null);
    setSelectedCategory(null);
  };

  const getItemsForCategory = (category) => {
    const data = MenuItems[category];
    if (Array.isArray(data)) return data;
    return data?.items || [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm shadow-lg z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={handleBackToHome}
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-500 hover:opacity-80 transition-opacity cursor-pointer"
            >
              ZooLounge
            </button>

            {/* Desktop Menu */}
            {selectedGroup && (
              <div className="hidden md:flex gap-2 overflow-x-auto max-w-3xl">
                {categoryGroups[selectedGroup].subcategories.map((category) => {
                  const Icon = categoryIcons[category] || UtensilsCrossed;
                  const items = getItemsForCategory(category);
                  if (items.length === 0) return null;

                  return (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                        selectedCategory === category
                          ? "bg-amber-500 text-white shadow-lg"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      <Icon size={18} />
                      <span>{category}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Mobile Menu Button */}
            {selectedGroup && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 rounded-lg"
              >
                <span>Menu</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            )}
          </div>

          {/* Mobile Dropdown */}
          {isMenuOpen && selectedGroup && (
            <div className="md:hidden pb-4 space-y-2 max-h-96 overflow-y-auto">
              {categoryGroups[selectedGroup].subcategories.map((category) => {
                const Icon = categoryIcons[category] || UtensilsCrossed;
                const items = getItemsForCategory(category);
                if (items.length === 0) return null;

                return (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      selectedCategory === category
                        ? "bg-amber-500 text-white"
                        : "bg-slate-800 text-slate-300"
                    }`}
                  >
                    <Icon size={18} />
                    <span>{category}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* Content */}
      <div className="pt-20 px-4 sm:px-6 max-w-7xl mx-auto pb-12">
        {/* Special Event Ad Banner */}
        {adImage && (
          <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
            <img
              src={adImage}
              alt="Special Event"
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>
        )}

        {/* Back Button */}
        {(selectedGroup || selectedCategory) && (
          <button
            onClick={selectedCategory ? handleBackToGroup : handleBackToHome}
            className="mb-6 flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 hover:bg-slate-700 rounded-lg transition-all"
          >
            <ChevronDown size={18} className="rotate-90" />
            <span>Back</span>
          </button>
        )}

        {!selectedGroup ? (
          // Main Menu - Show 3 groups
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center">
            <div className="text-6xl mb-6">🍽️</div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Welcome to ZooLounge
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Choose a menu category
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
              {Object.entries(categoryGroups).map(([groupName, groupData]) => {
                const GroupIcon = groupData.icon;
                return (
                  <button
                    key={groupName}
                    onClick={() => handleGroupSelect(groupName)}
                    className="flex flex-col items-center gap-4 p-8 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-all hover:scale-105 border-2 border-slate-700 hover:border-amber-500"
                  >
                    <GroupIcon size={48} className="text-green-400" />
                    <span className="text-white font-bold text-xl">
                      {groupName}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : !selectedCategory ? (
          // Category Selection within group
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center">
            <div className="text-5xl mb-6">
              {selectedGroup === "Special Menu" && "✨"}
              {selectedGroup === "Foods" && "🍽️"}
              {selectedGroup === "Drinks" && "🍹"}
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              {selectedGroup}
            </h2>
            <p className="text-slate-400 text-lg mb-8">Select a category</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl">
              {categoryGroups[selectedGroup].subcategories.map((category) => {
                const Icon = categoryIcons[category] || UtensilsCrossed;
                const items = getItemsForCategory(category);
                if (items.length === 0) return null;

                return (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className="flex flex-col items-center gap-3 p-6 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-all hover:scale-105"
                  >
                    <Icon size={32} className="text-green-400" />
                    <span className="text-white font-medium text-sm">
                      {category}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          // Show items for selected category
          <div id={selectedCategory.toLowerCase()} className="scroll-mt-20">
            <div className="flex items-center gap-4 mb-8">
              {categoryIcons[selectedCategory] && (
                <div className="p-3 bg-amber-500/20 rounded-xl">
                  {(() => {
                    const Icon = categoryIcons[selectedCategory];
                    return <Icon size={32} className="text-green-400" />;
                  })()}
                </div>
              )}
              <h2 className="text-4xl font-bold text-white">
                {selectedCategory}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getItemsForCategory(selectedCategory).map((item) => (
                <div
                  key={item.id}
                  className="group bg-slate-800/50 backdrop-blur rounded-xl overflow-hidden hover:shadow-xl hover:shadow-amber-500/20 transition-all hover:scale-105"
                >
                  {item.img && item.img.trim() && (
                    <div className="relative w-full h-48 overflow-hidden bg-slate-700">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {item.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.price && (
                        <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-lg font-semibold">
                          {item.price}₮
                        </span>
                      )}
                      {item.bottleprice && (
                        <span className="px-3 py-1 bg-amber-500/10 text-amber-300 rounded-lg text-sm">
                          Bottle: {item.bottleprice}₮
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
