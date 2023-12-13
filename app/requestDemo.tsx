'use client'

import { Work_Sans } from 'next/font/google';
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

const workSans = Work_Sans({
  weight: '400',
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const Demo = ({ showDemo, toggleDemo }: { showDemo: boolean, toggleDemo: (arg: boolean) => void }) => {
  useEffect(() => {
    document.documentElement.dataset.requestDemo = `${showDemo}`;
  }, [showDemo]);

  return (
    createPortal(
      <CSSTransition
        classNames="portal-fade"
        in={showDemo}
        timeout={100}
        unmountOnExit
      >
        <div className='fixed top-0 z-20 grid h-full w-full grid-cols-18 overflow-auto bg-edgeset'>
          <div className='col-span-16 col-start-2 pt-28'>
            <h1 className='text-4xl leading-10 text-white'>
              Discover the power of visualizing your business metrics.
            </h1>
            <p className='py-8 text-white'>
              The team is excited to show you just how much Edgeset is capable of; Submit a request today and we&apos;ll be in touch soon.
            </p>
            <form className='mb-5 flex flex-col gap-6 text-white'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="name" className='text-sm'>Name*</label>
                <input type="text" required id="name" name="name" className='rounded-sm p-2 text-sm' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='text-sm'>Email*</label>
                <input type="email" required id="email" name="email" className='rounded-sm p-2 text-sm' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="role" className='text-sm'>What role best describe you?*</label>
                <select name="role" required className='p-2 text-sm'>
                  <option value="Manager">Manager</option>
                  <option value="Data Scientist">Data Scientist</option>
                  <option value="Sales Executive">Sales Executive</option>
                  <option value="Engineer">Engineer</option>
                  <option value="Data Analyst">Data Analyst</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="company" className='text-sm'>Company</label>
                <input type="text" id="company" name="company" className='rounded-sm p-2 text-sm' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="heard" className='text-sm'>How did you hear about us?</label>
                <input type="text" id="heard" name="heard" className='rounded-sm p-2 text-sm' />
              </div>
              <div className='flex flex-col'>
                <button type="submit" className={`bg-[#0b4559] py-3 font-medium ${workSans.className}`}>Submit</button>
                <a className='cursor-pointer self-center pt-2 text-sm' onClick={() => toggleDemo(false)}>Cancel</a>
              </div>
            </form>
          </div>
        </div>
      </CSSTransition>,
      document.body
    ));
}

export default function RequestDemo({ size, outline, showInput }: { size: 'sm' | 'lg', outline?: boolean, showInput?: boolean }) {
  const [showDemo, toggleDemo] = useState<boolean>(false);
  return (
    <>
      <div className='flex flex-col items-center md:flex-row md:items-baseline'>
        {showInput ?
          <input type="text" placeholder='Enter your email address' className='mx-3 mb-4 rounded-md border border-gray-200 p-4' /> : null}
        <button data-label="request-demo" className={`rounded-3xl bg-slate-900 py-3  ${size === 'sm' ? 'px-4 text-xs' : 'px-5 text-base'} ${size === 'sm' ? 'font-semibold' : 'font-medium'} ${outline ? 'border border-white bg-[#19495a] text-white' : ' text-white'} border hover:border-black hover:bg-white hover:text-black`} onClick={() => {
          toggleDemo(true);
        }}>
          Get demo
        </button>
      </div>
      {typeof window === 'object' ? <Demo showDemo={showDemo} toggleDemo={toggleDemo} /> : null}
    </>
  )
}