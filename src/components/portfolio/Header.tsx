import * as React from "react";

export const Header = () => {
  return (
    <header className="bg-[rgba(26,11,46,1)] shadow-[0px_6px_22px_-3px_rgba(0,0,0,0.1)] z-10 flex w-full flex-col text-xl text-white font-semibold whitespace-nowrap text-center tracking-[0.4px] justify-center px-[70px] py-[49px] max-md:max-w-full max-md:px-5">
      <nav className="flex w-[507px] max-w-full items-stretch gap-5 flex-wrap justify-between">
        <button className="hover:text-purple-400 transition-colors">
          Home
        </button>
        <button className="hover:text-purple-400 transition-colors">
          About
        </button>
        <button className="hover:text-purple-400 transition-colors">Lab</button>
      </nav>
    </header>
  );
};
