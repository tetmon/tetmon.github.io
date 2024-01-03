'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react'

export default function RequestDemo({ size, outline, showInput }: { size: 'sm' | 'lg', outline?: boolean, showInput?: boolean }) {
  const [email, setEmail] = useState<string>('');
  const router = useRouter();
  return (
    <>
      <div className='z-10 flex flex-col items-center md:flex-row md:items-baseline'>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (email) {
            router.push(`/get-demo?email=${email}`);
          } else {
            router.push('/get-demo');
          }
          return false;
        }}>
          {showInput ? <input type="email" required onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email address' className='mb-4 mr-3 rounded-md border border-gray-200 p-4' /> : null}
          <button type="submit" data-label="request-demo" className={`rounded-3xl bg-slate-900 py-3  ${size === 'sm' ? 'px-4 text-xs' : 'px-5 text-base'} ${size === 'sm' ? 'font-semibold' : 'font-medium'} ${outline ? 'border border-white bg-[#19495a] text-white' : ' text-white'} border hover:border-black hover:bg-white hover:text-black`}>
            Get demo
          </button>
        </form>
      </div>
    </>
  )
}