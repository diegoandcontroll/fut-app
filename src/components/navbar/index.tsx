import { useAppContext } from "@/context/Appcontext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import SmoothScrollAnchor from "../smoothAnchor";
import { MenuItems } from "./menuItems";


export const Navbar = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [active, setActive] = useState<{ isActive: boolean }>({
    isActive: false,
  });
  const { state } = useAppContext();
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
      <nav>
        <div className="absolute right-6 md:hidden top-6 scale-150">
          <FiMenu
            onClick={handleShowMenu}
            className="scale-150 cursor-pointer"
          />
        </div>

        <ul className="hidden md:flex gap-8 p-6">
          <li className="cursor-pointer ">
            <Link href="/">Home</Link>
          </li>
          {!state.apiKey && !state.isLogged ? (
            ""
          ) : (
            <>
              {currentPath !== "/statics" ? (
                <li className="cursor-pointer">
                  <Link href="/statics">Statics</Link>
                </li>
              ) : (
                <li className="cursor-pointer">
                  <SmoothScrollAnchor targetId="statics">
                    Statics
                  </SmoothScrollAnchor>
                </li>
              )}
              {currentPath === "/statics" && (
                <li className="cursor-pointer">
                  <SmoothScrollAnchor targetId="graphs">
                    Graphs
                  </SmoothScrollAnchor>
                </li>
              )}
            </>
          )}
        </ul>

        <MenuItems showMenu={handleShowMenu} active={active.isActive} />
      </nav>
    </div>
  );
};
