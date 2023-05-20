import { AiOutlineClose } from 'react-icons/ai';
import React from 'react'
interface MenuItemsProps{
  active: boolean;
  showMenu: () => void;
}
export const MenuItems = ({active,showMenu}: MenuItemsProps) => {
  return (
    <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
        <AiOutlineClose onClick={showMenu} className='cursor-pointer'/>
            <li><a >Home</a></li>
            <li><a >About</a></li>
            <li><a >Contact</a></li>
    </ul>
  )
}
