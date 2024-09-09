'use client'

import { useRef, useState } from "react";
import { DINish, Inter } from "./fonts";

const lines = [
  "EdgeSet enables organizations to have a single point of access for all their data.",
  "Easily compare and analyze data between different data sources.",
  "Create meaningful dashboards and generate reports to aid in making impactful decisions."
];

export default function Platform() {
  const [activeTab, setActiveTab] = useState('source');
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);


  const handleTabClick = (index: number) => {
    setCurrentIndex(index);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * sliderRef.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center p-10 pb-5">
          <div className="flex">
            {/* <svg width="24" height="44" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.9315 1L51 15.8352V40.1483L25.9315 54.2967L1 40.011V15.5604L25.9315 1Z" fill="#215F74" />
              <path d="M25.9315 30.2582L1.41096 15.8352L1 15.5604M25.9315 30.2582L51 15.8352M25.9315 30.2582V54.2967M51 15.8352L25.9315 1L1 15.5604M51 15.8352V40.1484L25.9315 54.2967M1 15.5604V40.011L25.9315 54.2967" stroke="#FFFFFF" />
            </svg> */}
            <h2 className={`text-4xl font-bold text-zinc-100 ${DINish.className} ml-8`}>Platform</h2>
          </div>
          <div className={`${DINish.className} pt-2 text-xl text-zinc-100`}>Leverage your data without disrupting your existing workflows.</div>
        </div>
        <div className="flex w-full flex-col items-center md:flex">
          <div className="flex w-full flex-col items-center pt-6">
            <div className={`mb-6 flex flex-row gap-7 ${DINish.className}`}>
              <button className={`rounded-2xl px-4 py-2 text-lg  text-zinc-100 ${DINish.className} ${currentIndex === 0 ? 'selected' : 'border border-[#ffffff38] bg-[#155970]'}`} onClick={() => handleTabClick(0)}>Single point of source</button>
              <button className={`focus-visible:outline-neutral-white bg-neutral-n11 rounded-2xl px-4 py-2 text-lg leading-none tracking-wide text-zinc-100 transition-colors  ${currentIndex === 1 ? 'selected' : 'border border-[#ffffff38] bg-[#155970]'}`} onClick={() => handleTabClick(1)}>Compare and analyse</button>
              <button className={`focus-visible:outline-neutral-white hover:text-neutral-n3 rounded-2xl px-4 py-2 text-lg leading-none tracking-wide text-zinc-100 transition-colors ${currentIndex === 2 ? 'selected' : 'border border-[#ffffff38] bg-[#155970]'}`} onClick={() => handleTabClick(2)}>Dashboard and reports</button>
            </div>
          </div>
          <div
            ref={sliderRef}
            className="flex min-w-[800px] snap-x snap-mandatory overflow-x-auto"
            style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth', scrollbarWidth: 'none' }}
          >
            <div className="mr-24 flex h-[600px] w-full shrink-0 snap-center justify-center rounded-lg p-8">
              <div className={`text-3xl ${DINish.className} py-8 pl-16 pr-3 text-center leading-relaxed text-zinc-100`}>{lines[0]}</div>
              <img style={{ height: 460, width: 785 }} width={785} height={500} src="dash_complete.png" alt="single point of source" className="rounded-md" />
            </div>
            <div className="mr-24 flex h-[600px] w-full shrink-0 snap-center justify-center rounded-lg p-8">
              <div className={`text-3xl ${DINish.className} p-8 text-center leading-relaxed text-zinc-100`}>{lines[1]}</div>
              <img height={500} width={785} style={{ height: 500, width: 785 }} src="compare.png" alt="single point of source" className="rounded-md" />
            </div>
            <div className="mr-24 flex h-[600px] w-full shrink-0 snap-center justify-center rounded-lg p-8">
              <div className={`text-3xl ${DINish.className} p-8 text-center leading-relaxed text-zinc-100`}>{lines[2]}</div>
              <img height={500} width={785} style={{ height: 500, width: 785 }} src="dashboard.png" alt="single point of source" className="rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}