/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MenuItems } from "./menuItems";

export const Navbar = () => {
  const [active, setActive] = useState<{ isActive: boolean }>({
    isActive: false,
  });

  const handleShowMenu = () => {
    setActive((prevActive) => ({
      ...prevActive,
      isActive: !prevActive.isActive,
    }));
  };
  return (
    <div className="fixed lg:w-full text-white flex lg:justify-between p-4 items-center gap-64 lg:gap-8 max-h-20 z-10">
      <div className="font-bold text-center uppercase">
        <h1 className="block">
          Striker <span className="block">[Metrics]</span>
        </h1>
      </div>
      {/* <div className={`absolute left-28 pb-12 max-h-10 shadow-2xl`}>
      <img src={`/icon.png`} width='70' height='70' />
    </div> */}

      <nav>
        <div className="absolute right-6 md:hidden top-6 scale-150">
          <FiMenu
            onClick={handleShowMenu}
            className="scale-150 cursor-pointer"
          />
        </div>

        <ul className="hidden md:flex gap-8 p-6">
          <li className="cursor-pointer hover:border-b-2">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:border-b-2 ">
            <Link href="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:border-b-2">
            <Link href="/contact">Statics</Link>
          </li>
        </ul>

        <MenuItems showMenu={handleShowMenu} active={active.isActive} />
      </nav>
    </div>
  );
};
