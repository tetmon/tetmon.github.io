import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function DemoConfirmation() {
  return (
    <main>
      <Navbar />
      <div className='z-20 m-auto grid h-full w-full max-w-8xl grid-cols-18'>
        <div className='col-span-16 col-start-2 min-h-screen grid-cols-12 py-12'>
          <h1 className='text-4xl font-medium leading-11'>Thank you for your interest!</h1>
          <p className='py-8'>
            We&apos;ll get back to you shortly. In the meantime, feel free to directly schedule a meeting with Tetmon's CEO, Yinghan Hu.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}