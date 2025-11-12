"use client";

import { useRef } from "react";

const navItems = [
  "All",
  "Food",
  "Salad",
  "Pasta",
  "Pizza",
  "Cream Soup",
  "Dessert",
  "Drinks",
  "Coffee",
  "Soft Drinks",
  "Pot tea",
  "Cocktails",
  "Beers",
  "Tequila",
  "Gin",
  "Liquor",
  "Rum",
  "Whiskey",
  "Vodka",
  "Wine",
];

const Navbar = ({ onSelectCategory }) => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 50;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative items-center justify-center w-full px-1 py-1 flex bg-green-950 top-0 left-0 z-50">
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide whitespace-nowrap px-2 w-full max-w-4xl"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => onSelectCategory(item)}
            className="text-white bg-emerald-800 px-3 py-1 rounded-full shadow-md hover:bg-green-700 transition-all text-sm"
            style={{ scrollSnapAlign: "center" }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
