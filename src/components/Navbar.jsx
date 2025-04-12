"use client";
import Link from "next/link";
import { useRef } from "react";

const navItems = [
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

const Navbar = () => {
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
    <div className="z-50 w-full fixed bg-green-950 overflow-x-hidden">
      <header className="w-full px-4 py-2 top-0 left-0 flex justify-between items-center z-50">
        <div>
          <div className="text-[#04753c] font-bold text-lg sm:text-lg flex justify-between">
            <Link href="/">
              <div className="p-1 w-full">ZOOLOUNGE</div>
            </Link>
            <div className="p-1 w-full hidden sm:hidden">MENU</div>
          </div>
        </div>
        <div className="relative items-center justify-center w-full px-1 py-1 flex">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide whitespace-nowrap px-2 w-full max-w-4xl"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-white bg-emerald-800 px-2 py-1 rounded-full shadow-md hover:bg-green-700 transition-all text-sm"
                style={{ scrollSnapAlign: "center" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
