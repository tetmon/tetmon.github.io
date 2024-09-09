'use client'

import Modal from '@/components/modal';
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

export default function RequestDemo({ size, outline, showVideo }: { size: 'sm' | 'lg', outline?: boolean, showVideo?: boolean }) {
  const router = useRouter();
  const [showPortal, togglePortal] = useState(false);
  return (
    <>
      <div className='z-10 flex flex-col items-center md:flex-row md:items-baseline'>
        <form onSubmit={(e) => {
          e.preventDefault();
          router.push('get-demo');
          return false;
        }}>
          {/* <button type="submit" data-label="request-demo" className={`rounded-3xl bg-slate-900 py-3  ${size === 'sm' ? 'px-4 text-xs' : 'px-5 text-base'} ${size === 'sm' ? 'font-semibold' : 'font-medium'} ${outline ? 'border border-white bg-[#19495a] text-white' : ' text-white'} border hover:border-black hover:bg-white hover:text-black`}>
            Get a Demo
          </button> */}
          {showVideo ? <button onClick={(e) => {
            e.preventDefault();
            togglePortal(true);
          }} data-label="request-demo" className={`rounded-3xl bg-white py-3 ${size === 'sm' ? 'px-4 text-xs' : 'px-5 text-base'} ${size === 'sm' ? 'font-semibold' : 'font-medium'} ml-3 border border-edgeset text-edgeset hover:border-black hover:bg-white hover:text-black`}>
            Watch Video
          </button> : null}
          {
            typeof window !== 'undefined' ? createPortal(
              <CSSTransition
                classNames="portal-fade"
                in={showPortal}
                timeout={100}
                unmountOnExit
              >
                <Modal onClose={() => togglePortal(false)} />
              </CSSTransition>,
              document.body
            ) : null
          }
        </form>
      </div>
    </>
  )
}