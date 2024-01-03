'use client'

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Work_Sans } from "next/font/google";
import { useSearchParams, useRouter } from 'next/navigation'
import Script from 'next/script'


const workSans = Work_Sans({
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});


export default function GetDemo(props: any) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || undefined;
  return (
    <main>
      <Navbar />
      <div className='z-20 m-auto grid h-full w-full max-w-8xl grid-cols-18'>
        <div className='col-span-16 col-start-2 grid grid-cols-12 py-12'>
          <div className="col-span-12 col-start-1 max-w-2xl md:col-span-6">
            <h1 className='text-4xl font-medium leading-11'>
              Discover the power of visualizing your business metrics.
            </h1>
            <p className='py-8'>
              The team is excited to show you just how much Edgeset is capable of. Submit a request today and we&apos;ll be in touch soon.
            </p>
            <form className='my-5 flex max-w-lg flex-col gap-6' action="https://formspree.io/f/xaygrrpy" onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              if (form instanceof HTMLFormElement) {
                fetch(form.action, {
                  method: 'POST',
                  body: new FormData(form),
                  headers: {
                    'Accept': 'application/json'
                  }
                }).then((response) => {
                  if (response.ok) {
                    form.reset();
                    router.push('/demo-confirmation');
                  }
                }).catch(error => {
                  console.log('Oops! There was a problem submitting your form', error);
                });
              }
              return false;
            }}>
              <div className='flex flex-col gap-2'>
                <label htmlFor="name" className='text-sm'>Name*</label>
                <input type="text" required id="name" name="name" className='rounded-sm border p-2 text-sm' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='text-sm'>Email*</label>
                <input type="email" defaultValue={email} required id="email" name="email" className='rounded-sm border p-2 text-sm' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="role" className='text-sm'>What role best describe you?*</label>
                <select name="role" required className='border p-2 text-sm'>
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
                <input type="text" id="company" name="company" className='rounded-sm border p-2 text-sm' />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="heard" className='text-sm'>How did you hear about us?</label>
                <input type="text" id="heard" name="heard" className='rounded-sm border p-2 text-sm' />
              </div>
              <div className='flex flex-col'>
                <button type="submit" className={`bg-[#0b4559] py-3 font-medium text-white ${workSans.className}`}>Submit</button>
              </div>
            </form>
          </div>
          <div className="col-span-6">
            <div data-url="https://calendly.com/edgeset-demo/30-minute-edgeset-demo-europe-timezone" className="calendly-inline-widget h-[700px] min-w-[320px]"></div>
          </div>
        </div>
      </div>
      <Footer />
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
    </main>
  )
}