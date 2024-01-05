import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Script from 'next/script';

export default function DemoConfirmation() {
  return (
    <main>
      <Navbar />
      <div className='z-20 m-auto grid h-full w-full max-w-8xl grid-cols-18'>
        <div className='col-span-16 col-start-2 min-h-screen grid-cols-12 py-12'>
          <h1 className='text-4xl font-medium leading-11'>Thank you for your interest!</h1>
          <p className='py-8'>
            We&apos;ll get back to you shortly. In the meantime, feel free to directly schedule a meeting with Tetmon&apos;s CEO, Yinghan Hu.
          </p>
          <div>
            <div data-url="https://calendly.com/edgeset-demo/30-minute-edgeset-demo-europe-timezone" className="calendly-inline-widget h-[700px] min-w-[320px]"></div>
          </div>
        </div>
      </div>
      <Footer />
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
    </main>
  )
}