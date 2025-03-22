"use client";
import { useRef } from "react";

const navItems = [
  "Food",
  "Pizza",
  "Dessert",
  "Drinks",
  "Coffee & Soft Drinks",
  "Pot tea",
  "Cocktails",
  "Beers",
  "Tequila",
  "Liqueur",
  "Whiskey",
  "Vodka",
  "Wine",
];

const Navbar = () => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 100;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative z-50 w-full">
      <header className="w-full px-4 py-2 bg-inherit shadow-md fixed top-0 left-0 flex justify-between items-center z-50">
        <h1 className="text-[#04753c] font-bold text-lg sm:text-2xl">
          ZOOLOUNGE
        </h1>
      </header>
      <div className="relative mt-10 flex items-center justify-center w-full px-2 py-2">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide whitespace-nowrap px-2 w-full max-w-4xl"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-white bg-green-600 px-2 py-1 rounded-full shadow-md hover:bg-green-700 transition-all text-sm"
              style={{ scrollSnapAlign: "center" }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
