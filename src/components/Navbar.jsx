"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const navItems = ["Food", "Drinks", "Soft drinks", "Dessert"];

const Navbar = () => {
  // const [isNavVisible, setIsNavVisible] = useState(true);
  // const navContainerRef = useRef(null);
  // const lastScrollY = useRef(0); // Use ref instead of state to avoid unnecessary renders

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     if (currentScrollY > lastScrollY.current) {
  //       setIsNavVisible(false); // Hide navbar on scroll down
  //     } else {
  //       setIsNavVisible(true); // Show navbar on scroll up
  //     }

  //     lastScrollY.current = currentScrollY; // Update last scroll position
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (navContainerRef.current) {
  //     gsap.to(navContainerRef.current, {
  //       y: isNavVisible ? 0 : -100,
  //       opacity: isNavVisible ? 1 : 0,
  //       duration: 0.3,
  //       ease: "power2.out",
  //     });
  //   }
  // }, [isNavVisible]);

  return (
    <div
      // ref={navContainerRef}
      className="relative inset-x-0 top-4 z-50 h-16 border-none transition-all sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <h1 className="text-[#636949] font-bold">ZOOLOUNGE</h1>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-hover-btn"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
