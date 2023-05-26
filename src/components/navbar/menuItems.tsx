import { useAppContext } from '@/context/Appcontext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';
import SmoothScrollAnchor from '../smoothAnchor';
interface MenuItemsProps{
  active: boolean;
  showMenu: () => void;
}
export const MenuItems = ({active,showMenu}: MenuItemsProps) => {
  const router = useRouter();
  const currentPath = router.pathname;
  const {state} = useAppContext();
  return (
    <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
        <AiOutlineClose onClick={showMenu} className='cursor-pointer'/>
            <li><Link href="/">Home</Link></li>
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
  )
}
