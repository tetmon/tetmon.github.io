import { DINish } from '@/app/fonts';
import { useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";


const Menu = ({ showMenu }: { showMenu?: boolean }) => {
  return (typeof window !== 'undefined' ?
    createPortal(
      <CSSTransition
        classNames="portal-fade"
        in={showMenu}
        timeout={100}
        unmountOnExit
      >
        <div className='fixed top-[50px] z-10 h-full w-full backdrop-blur-lg bg-[#215f74a8]' style={{ color: "#215f74" }}>
          <nav>
            <ul className="flex flex-col pt-5 max-w-[80%] mx-auto">
              <a href="/blog"><li className={`${DINish.className} border-b border-[#15485a] py-5 text-lg font-semibold text-white`}>Blog</li></a>
              <a href="/about"><li className={`${DINish.className} border-b border-[#15485a] py-5 text-lg font-semibold text-white`}>About</li></a>
            </ul>
          </nav>
        </div>
      </CSSTransition>,
      document.body
    ) : null);
}


const MenuButton = () => {
  const [showMenu, toggleMenu] = useState(false);
  return (
    <>
      <button aria-label="burger" className='rounded-sm px-2 py-1 text-lg md:hidden text-white' onClick={() => toggleMenu(!showMenu)}>
        {!showMenu ? <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 8.5C2 7.94772 2.44772 7.5 3 7.5H21C21.5523 7.5 22 7.94772 22 8.5C22 9.05228 21.5523 9.5 21 9.5H3C2.44772 9.5 2 9.05228 2 8.5Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M2 15.5C2 14.9477 2.44772 14.5 3 14.5H21C21.5523 14.5 22 14.9477 22 15.5C22 16.0523 21.5523 16.5 21 16.5H3C2.44772 16.5 2 16.0523 2 15.5Z" fill="currentColor"></path></svg> :
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>}
      </button>
      {typeof window === 'object' ? <Menu showMenu={showMenu} /> : null}
    </>
  )
}

const Navbar = () => {
  return (
    <header className={`z-30 grid grid-cols-12 2xl:px-24 h-18 fixed top-0 left-0 right-0`}>
      <div className='header-mask pointer-events-none absolute inset-0'></div>
      <div className='z-[1] col-end-[-2] col-start-2 flex items-center justify-between'>
        <a href="/" className='grow text-white'>
          <svg role="img" className='w-24 h-16' aria-label="Tetmon logo" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="m23 0-6.64 3.91 9.31 5.48-15.47 9.1v4.11l6 3.46v-3.7l16.1-9.43 6.57 3.95-.08 14.63 6.16-3.71.12-14.74zm22 39.57v-7.67l-9.47 5.18.1-17.95-3.47-2.13-6 3.37 3.17 1.9-.15 18.65-6.76 3.61-12.54-7.53v7.19l12.6 7.67zm-45-.79 6.69 3.76.08-10.81 15.63 8.84 3.56-2v-6.97l-3.21 1.86-16.21-9.22.13-7.66 12.7-7.25-6.29-3.48-12.83 7.27z" fillRule="evenodd"></path><path d="m75 19.45v17.37h-4.76v-17.37h-6.64v-4.45h18.07v4.43z"></path><path d="m85.49 36.82v-21.82h16.41v4.27h-11.68v4.42h10.28v4.31h-10.28v4.58h11.84v4.26z"></path><path d="m116.37 19.45v17.37h-4.79v-17.37h-6.64v-4.45h18.06v4.43z"></path><path d="m143.9 36.82v-14.23l-6.14 9.31h-.12l-6.08-9.22v14.14h-4.73v-21.82h5.17l5.73 9.22 5.73-9.22h5.17v21.8z"></path><path d="m175.34 30.3a11.13 11.13 0 0 1 -6.09 6 12.57 12.57 0 0 1 -9.29 0 11.4 11.4 0 0 1 -3.66-2.4 10.61 10.61 0 0 1 -2.4-3.55 11.2 11.2 0 0 1 -.9-4.35v-.07a11 11 0 0 1 .87-4.37 11.32 11.32 0 0 1 2.46-3.56 11.2 11.2 0 0 1 3.67-2.46 11.91 11.91 0 0 1 4.66-.89 11.77 11.77 0 0 1 8.3 3.28 10.76 10.76 0 0 1 2.4 3.56 11.17 11.17 0 0 1 .86 4.37v.06a11.05 11.05 0 0 1 -.88 4.38zm-4.14-4.38a7.27 7.27 0 0 0 -.48-2.64 6.56 6.56 0 0 0 -1.37-2.18 6.44 6.44 0 0 0 -2.11-1.48 6.24 6.24 0 0 0 -2.64-.55 6.59 6.59 0 0 0 -2.67.53 6.14 6.14 0 0 0 -2.05 1.46 7 7 0 0 0 -1.34 2.17 7.18 7.18 0 0 0 -.48 2.63v.06a7.29 7.29 0 0 0 .48 2.65 6.57 6.57 0 0 0 3.46 3.66 6.39 6.39 0 0 0 2.66.55 6.64 6.64 0 0 0 2.65-.53 6 6 0 0 0 2.07-1.47 6.83 6.83 0 0 0 1.34-2.16 7.18 7.18 0 0 0 .48-2.62z"></path><path d="m195.92 36.82-10.56-13.82v13.82h-4.73v-21.82h4.42l10.22 13.43v-13.43h4.73v21.8z"></path></g></svg>
        </a>
        <nav className='hidden gap-8 md:flex'>
          <a href="/blog" className={`${DINish.className} rounded-xl border border-transparent px-2 py-1 font-semibold text-base text-white hover:border-gray-600`}>Blog</a>
          <a href="/about" className={`${DINish.className} rounded-xl border border-transparent px-2 py-1 font-semibold text-base text-white hover:border-gray-600`}>About</a>
        </nav>
        <div className='flex gap-2'>
          <MenuButton />
        </div>
      </div>
    </header>
  )
}

export default Navbar;