'use client'

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";


const Menu = ({ showMenu }: { showMenu: boolean }) => {
  useEffect(() => {
    document.documentElement.dataset.showMenu = `${showMenu}`;
  }, [showMenu]);

  return (
    createPortal(
      <CSSTransition
        classNames="portal-fade"
        in={showMenu}
        timeout={100}
        unmountOnExit
      >
        <div className='fixed top-[50px] h-full w-full backdrop-blur-lg'>
          <nav>
            <ul className="flex flex-col px-5">
              <a href="/case-studies"><li className='border-b border-[#e7eaee] py-5 text-base font-medium text-gray-700'>Case Studies</li></a>
              <a href="/careers"><li className='border-b border-[#e7eaee] py-5 text-base font-medium text-gray-700'>Careers</li></a>
              <a href="/about"><li className='border-b border-[#e7eaee] py-5 text-base font-medium text-gray-700'>About</li></a>
            </ul>
          </nav>
        </div>
      </CSSTransition>,
      document.body
    ));
}


const MenuButton = () => {
  const [showMenu, toggleMenu] = useState(false);
  return (
    <>
      <button data-label="burger" className='rounded-sm px-2 py-1 text-lg' onClick={() => toggleMenu(!showMenu)}>
        {!showMenu ? <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 8.5C2 7.94772 2.44772 7.5 3 7.5H21C21.5523 7.5 22 7.94772 22 8.5C22 9.05228 21.5523 9.5 21 9.5H3C2.44772 9.5 2 9.05228 2 8.5Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M2 15.5C2 14.9477 2.44772 14.5 3 14.5H21C21.5523 14.5 22 14.9477 22 15.5C22 16.0523 21.5523 16.5 21 16.5H3C2.44772 16.5 2 16.0523 2 15.5Z" fill="currentColor"></path></svg> :
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>}
      </button>
      {typeof window === 'object' ? <Menu showMenu={showMenu} /> : null}
    </>
  )
}

export default MenuButton;