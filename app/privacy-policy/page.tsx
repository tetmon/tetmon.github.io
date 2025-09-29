import path from "path";
import parse from "@/lib/markdown";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { DINish } from "../fonts";

export default async function faq() {
  const privacyPolicyData = await parse(path.join(process.cwd(), 'app/privacy-policy/index.md'));
  return (
    <main>
      <Navbar />
      <section className="m-auto grid max-w-8xl grid-cols-18 px-5 py-8">
        <div className="col-span-full px-1 md:px-6 lg:px-8">
          <div
            className={`markdown-content leading-8 ${DINish.className}`}
            dangerouslySetInnerHTML={{ __html: privacyPolicyData.contentHtml }}
          />
        </div>
      </section>
      <Footer />
    </main>
  )
}