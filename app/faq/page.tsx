import path from "path";
import parse from "@/lib/markdown";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { DINish } from "../fonts";

export default async function faq() {
  const faqData = await parse(path.join(process.cwd(), 'app/faq/index.md'));
  return (
    <main>
      <Navbar />
      <section className="m-auto grid max-w-8xl grid-cols-18 px-5 py-8">
        <div className="col-span-full px-1 md:px-6 lg:px-8">
          <div className="flex w-full items-center border-b pb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#215f74" data-name="faq" viewBox="0 -10 100 125" className="h-6 w-6 md:h-7 md:w-7"><path d="M50,2A48,48,0,1,0,98,50,48,48,0,0,0,50,2Zm6,82.5H44v-12H56Zm3.21-27.62A6.35,6.35,0,0,0,56,62.7v.8H44v-.8a18.39,18.39,0,0,1,9.94-16.6A9,9,0,0,0,59,38a9.24,9.24,0,0,0-9-9,9,9,0,0,0-9,9H29A21,21,0,0,1,50,17,21.28,21.28,0,0,1,71,38,20.87,20.87,0,0,1,59.21,56.88Z" /></svg>
            <h2 className={`pl-1 text-xl font-semibold tracking-tight text-edgeset md:text-2xl md:leading-11 ${DINish.className}`}>EdgeSet FAQ</h2>
          </div>
          <div
            className={`markdown-content leading-8 ${DINish.className}`}
            dangerouslySetInnerHTML={{ __html: faqData.contentHtml }}
          />
        </div>
      </section>
      <Footer />
    </main>
  )
}