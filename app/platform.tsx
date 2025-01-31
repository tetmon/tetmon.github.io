'use client'

import { useRef, useState } from "react";
import { DINish } from "./fonts";

const lines = [
  { title: "Single source of truth", description: "EdgeSet enables organizations to have a single point of access for all their data.", image: "single.webp", width: 1575, height: 1056 },
  { title: "Compare and analyse", description: "Easily compare and analyze data between different data sources.", image: "compare.webp", width: 1559, height: 1083 },
  { title: "Dashboard and reports", description: "Create meaningful dashboards and generate reports to aid in making impactful decisions.", image: "dash.webp", width: 1519, height: 953 }
];

export default function Platform() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handleTabClick = (index: number) => {
    setCurrentIndex(index);
    if (sliderRef.current) {
      // @ts-ignore   
      sliderRef.current.scrollTo({
        // @ts-ignore
        left: index * sliderRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative bg-primary py-10 px-8" ref={containerRef}>
      <div className="flex flex-col items-center justify-center">
        <h2 className={`text-4xl font-bold text-zinc-100 ${DINish.className} text-white`}>Platform</h2>
        <p className={`text-lg text-zinc-100 text-center ${DINish.className} text-white`}>Leverage your data without disrupting your existing workflows.</p>
      </div>
      <div className="flex flex-col gap-20 py-10 pt-20 lg:hidden">
        {
          lines.map((line, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h3 className={`text-2xl font-bold ${DINish.className} text-white`}>{line.title}</h3>
              <p className={`text-lg text-zinc-100 ${DINish.className}`}>{line.description}</p>
              <img className="pt-4" src={line.image} alt={line.title} width={line.width} height={line.height} />
            </div>
          ))
        }
      </div>
      <div className="hidden lg:flex lg:flex-col lg:py-8">
        <div className="flex w-full flex-col items-center pt-6">
          <div className={`mb-6 flex flex-row gap-7 ${DINish.className}`}>
            <button className={`rounded-2xl px-4 py-2 text-lg  text-zinc-200 ${DINish.className} ${currentIndex === 0 ? 'selected' : 'border border-[#ffffff38] bg-[#155970]'}`} onClick={() => handleTabClick(0)}>Single source of truth</button>
            <button className={`focus-visible:outline-neutral-white bg-neutral-n11 rounded-2xl px-4 py-2 text-lg leading-none tracking-wide text-zinc-200 transition-colors  ${currentIndex === 1 ? 'selected' : 'border border-[#ffffff38] bg-[#155970]'}`} onClick={() => handleTabClick(1)}>Compare and analyse</button>
            <button className={`focus-visible:outline-neutral-white hover:text-neutral-n3 rounded-2xl px-4 py-2 text-lg leading-none tracking-wide text-zinc-200 transition-colors ${currentIndex === 2 ? 'selected' : 'border border-[#ffffff38] bg-[#155970]'}`} onClick={() => handleTabClick(2)}>Dashboard and reports</button>
          </div>
        </div>
        <div
          ref={sliderRef}
          className="flex min-w-[800px] snap-x snap-mandatory overflow-x-auto"
          style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth', scrollbarWidth: 'none' }}
        >
          {
            lines.map((line, index) => (
              <div key={index} className="mr-24 flex w-full shrink-0 snap-center justify-center items-center rounded-lg flex-col overflow-hidden">
                <div className={`text-xl ${DINish.className} p-8 pb-14 text-center leading-relaxed text-zinc-100`}>{line.description}</div>
                <img width={900} height={625} style={{ height: 625, width: 900 }} src={line.image} alt={line.title} className="rounded-md" />
              </div>
            ))
          }
        </div>
      </div>
    </section >
  );
}
