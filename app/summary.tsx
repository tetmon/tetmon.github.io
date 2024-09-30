import { DINish, Inter } from "./fonts";

export default function Summary() {
  return (
    <section className="bg-neutral-200 py-12">
      <div className="grid px-14 [grid-template-areas:'fq'_'ra'_'ia'_'sf'] gap-12 md:[grid-template-areas:'fq_ra'_'ia_sf'] lg:px-28 xl:[grid-template-areas:'fq_ra_ia_sf'] max-w-[1460px] mx-auto">
        <div className="flex flex-col border-l-[1px] border-gray-400 pl-4 [grid-area:fq] gap-4">
          <h2 className={`text-2xl font-semibold ${DINish.className}`}>Federated queries</h2>
          <p className={`${DINish.className} min-h-[110px] text-lg font-normal text-gray-600`}>
            Query data from multiple sources without moving the data <span className="font-semibold text-highlight">reducing data transfer and storage costs</span>.
          </p>
          <div>
            <svg className="max-w-[24px] text-primary" strokeWidth={4} stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 120"><path d="M48.03 2.297a.6.416 0 0 0-.415.121L2.213 33.896a.6.416 0 0 0 .002.59l9.746 6.756-9.607 6.662a.5.5 0 0 0 0 .823l9.011 6.248-9.011 6.25a.5.5 0 0 0 0 .82l45.4 31.476a.5.5 0 0 0 .57 0l45.4-31.476a.5.5 0 0 0 0-.82l-9.011-6.25 9.012-6.248a.5.5 0 0 0 0-.823l-9.61-6.662 9.748-6.758a.6.416 0 0 0 0-.588L48.463 2.42a.6.416 0 0 0-.434-.123zm.007 1.006 44.55 30.888-9.507 6.592a.5.5 0 0 0-.111.059l-34.93 24.22-34.93-24.22a.5.5 0 0 0-.115-.059l-9.506-6.592 44.55-30.888zM12.824 41.86l34.93 24.221a.5.5 0 0 0 .57 0l34.93-24.22 9.307 6.452-44.522 30.872L3.518 48.314l9.306-6.453zm-.582 13.723 35.512 24.621a.5.5 0 0 0 .332.086.5.5 0 0 0 .049-.006.5.5 0 0 0 .19-.08l35.51-24.621 8.728 6.05-44.524 30.868L3.516 61.635l8.726-6.051z" /></svg>
          </div>
        </div>
        <div className="flex flex-col border-l-[1px] border-gray-400 pl-4 [grid-area:ra] gap-4">
          <h2 className={`text-2xl font-semibold ${DINish.className}`}>Real-time access</h2>
          <p className={`${DINish.className} min-h-[110px] text-lg font-normal text-gray-600`}>
            Reduce traditional ETL/ELT processes and <span className="font-semibold text-highlight">access up-to-date data</span>.
          </p>
          <div>
            <svg className="max-w-[24px] text-primary" aria-labelledby="svg-inline--fa-title-Gauge Max Icon" data-prefix="fasl" data-icon="gauge-max" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title id="svg-inline--fa-title-Gauge Max Icon">Gauge Max Icon</title><path fill="currentColor" d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm24 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM224 352a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-32 0c0-35.3 28.7-64 64-64c17.5 0 33.4 7 44.9 18.4l106.9-64.1 13.7-8.2L438 261.5l-13.7 8.2L317.4 333.8c1.7 5.8 2.6 11.9 2.6 18.2c0 35.3-28.7 64-64 64s-64-28.7-64-64zM392 144a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM96 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72-88a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z"></path></svg>
          </div>
        </div>
        <div className="flex flex-col border-l-[1px] border-gray-400 pl-4 [grid-area:ia] gap-4">
          <h2 className={`text-2xl font-semibold ${DINish.className}`}>Interactive analytics</h2>
          <p className={`${DINish.className} min-h-[110px] text-lg font-normal text-gray-600 `}>
            <span className="font-semibold text-highlight">Slice and dice data</span> to gather key business insights with built-in visualizations.
          </p>
          <div>
            <svg className="max-w-[24px] text-primary" fill="currentColor" viewBox="0 -2 32 28">
              <path d="M10 14v8h-4v-8h4zM16 6v16h-4v-16h4zM32 24v2h-32v-24h2v22h30zM22 10v12h-4v-12h4zM28 4v18h-4v-18h4z"></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col border-l-[1px] border-gray-400 pl-4 [grid-area:sf] gap-4">
          <h2 className={`text-2xl font-semibold ${DINish.className}`}>Security-focused</h2>
          <p className={`${DINish.className} min-h-[100px] text-lg font-normal text-gray-600`}>
            Designed with hardened security from the ground up ensuring <span className="font-semibold text-highlight">data sovereignty is preserved</span>.
          </p>
          <div>
            <svg width="26" height="26" viewBox="0 -24 76 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-[22px] text-primary">
              <path d="M69 14.7273L37.7919 8L7 14.7273V49.2045C11.1074 68.7112 18.7145 75.157 37.7919 82C56.3936 75.8815 63.3594 68.8663 69 49.2045V14.7273Z" fill="none" stroke="currentColor" strokeWidth={6} />
              <path d="M54.6921 32.0196L32.9111 53.8046C32.6806 54.0351 32.3056 54.0351 32.0713 53.8046L21.1803 42.9096C20.6295 42.3588 21.4654 41.519 22.0201 42.0698L32.4931 52.5428L43.1746 41.8613L53.8561 31.1798C54.4069 30.629 55.2468 31.4688 54.6921 32.0196Z" fill="currentColor" stroke="currentColor" strokeWidth={4} />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}