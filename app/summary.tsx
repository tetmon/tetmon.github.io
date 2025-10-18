import { DINish, Inter } from "./fonts";

export default function Summary() {
  return (
    <section className="bg-neutral-100 py-12">
      <div className="grid px-14 [grid-template-areas:'fq'_'ra'_'ia'_'sf'] gap-12 md:[grid-template-areas:'fq_ra'_'ia_sf'] lg:px-28 xl:[grid-template-areas:'fq_ra_ia_sf'] max-w-[1460px] mx-auto">
        <div className="flex flex-col border-l-[1px] border-gray-400 pl-4 [grid-area:fq] gap-4">
          <h2 className={`text-xl md:text-2xl font-semibold ${DINish.className}`}>Federated Queries</h2>
          <p className={`${DINish.className} min-h-[60px] md:min-h-[110px] text-base md:text-lg font-normal text-gray-600`}>
            Query data from multiple sources without moving the data <span className="font-semibold text-highlight">reducing data transfer and storage costs</span>.
          </p>
          <div>
            <svg className="max-w-[24px] text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>
          </div>
        </div>
        <div className="flex flex-col border-l-[1px] border-gray-400 pl-4 [grid-area:ra] gap-4">
          <h2 className={`text-xl md:text-2xl font-semibold ${DINish.className}`}>Embedded AI</h2>
          <p className={`${DINish.className} min-h-[60px] md:min-h-[110px] text-base md:text-lg font-normal text-gray-600`}>
            Intelligent inference and matching <span className="font-semibold text-highlight">without any setup and without compromising privacy</span>.
          </p>
          <div>
            <svg className="max-w-[24px] text-primary" role="presentation" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/><path d="M16 8V5a2 2 0 0 1 2-2"/><circle cx="16" cy="13" r=".5"/><circle cx="18" cy="3" r=".5"/><circle cx="20" cy="21" r=".5"/><circle cx="20" cy="8" r=".5"/></svg>
          </div>
        </div>
        <div className="flex flex-col border-l-[1px] border-gray-400 pl-4 [grid-area:ia] gap-4">
          <h2 className={`text-xl md:text-2xl font-semibold ${DINish.className}`}>Real-time Access</h2>
          <p className={`${DINish.className} min-h-[60px] md:min-h-[110px] text-base md:text-lg font-normal text-gray-600`}>
            Reduce traditional ETL/ELT pain points and <span className="font-semibold text-highlight">access up-to-date data</span>.
          </p>
          <div>
            <svg className="max-w-[24px] text-primary" role="presentation" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
          </div>
        </div>
        <div className="flex flex-col border-l-[1px] border-gray-400 pl-4 [grid-area:sf] gap-4">
          <h2 className={`text-xl md:text-2xl font-semibold ${DINish.className}`}>Shareable Dashboards</h2>
          <p className={`${DINish.className} min-h-[60px] md:min-h-[110px] text-base md:text-lg font-normal text-gray-600`}>
            <span className="font-semibold text-highlight">Build custom dashboards</span> to optimize your business performance with comprehensive data insights.
          </p>
          <div>
            <svg className="max-w-[24px] text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
          </div>
        </div>
      </div>
    </section>
  )
}