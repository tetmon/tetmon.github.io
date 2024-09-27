'use client'

import { useEffect, useRef, useState } from "react";
import { DINish } from "./fonts";

const lines = [
  { title: "Single source of truth", description: "EdgeSet enables organizations to have a single point of access for all their data.", image: "single.png" },
  { title: "Compare and analyse", description: "Easily compare and analyze data between different data sources.", image: "compare.png" },
  { title: "Dashboard and reports", description: "Create meaningful dashboards and generate reports to aid in making impactful decisions.", image: "dash.png" }
];

export default function Platform() {
  // const [activeTab, setActiveTab] = useState('source');
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isVisible, setIsVisible] = useState(true);
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

  // useEffect(() => {
  //   if (sliderRef.current) {
  //     const containerObserver = new IntersectionObserver((entries) => {
  //       entries.map((entry) => {
  //         console.log(entry)
  //         if (entry.isIntersecting) {
  //           console.log('platform-enter');
  //           document.dispatchEvent(new Event('platform-enter'));
  //         } else {
  //           console.log('platform-exit');
  //           document.dispatchEvent(new Event('platform-exit'));
  //         }
  //       });
  //     }, {
  //       // threshold: 1.0,
  //       // rootMargin: '-50px'
  //     });
  //     containerObserver.observe(sliderRef.current);
  //   }
  // }, []);

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
              <img className="pt-4" src={line.image} alt={line.title} />
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
          <div className="mr-24 flex w-full shrink-0 snap-center justify-center items-center rounded-lg flex-col overflow-hidden">
            <div className={`text-xl ${DINish.className} p-8 pb-14 text-center leading-relaxed text-zinc-100`}>{lines[0].description}</div>
            <img width={900} height={625} style={{ height: 625, width: 900 }} src="single.png" alt="single source of truth" className="rounded-md" />
          </div>
          <div className="mr-24 flex w-full shrink-0 snap-center justify-center items-center rounded-lg flex-col overflow-hidden">
            <div className={`text-xl ${DINish.className} p-8 pb-14 text-center leading-relaxed text-zinc-100`}>{lines[1].description}</div>
            <img width={900} height={625} style={{ height: 625, width: 900 }} src="compare.png" alt="single source of truth" className="rounded-md" />
          </div>
          <div className="mr-24 flex w-full shrink-0 snap-center justify-center items-center rounded-lg flex-col overflow-hidden">
            <div className={`text-xl ${DINish.className} p-8 pb-14 text-center leading-relaxed text-zinc-100`}>{lines[2].description}</div>
            <img width={900} height={625} style={{ height: 625, width: 900 }} src="dash.png" alt="single source of truth" className="rounded-md" />
          </div>
        </div>
      </div>
    </section >
  );
}


/**
 * 
 * <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center p-10 pb-5">
          <div className="flex">
            {/* <svg width="24" height="44" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.9315 1L51 15.8352V40.1483L25.9315 54.2967L1 40.011V15.5604L25.9315 1Z" fill="#215F74" />
              <path d="M25.9315 30.2582L1.41096 15.8352L1 15.5604M25.9315 30.2582L51 15.8352M25.9315 30.2582V54.2967M51 15.8352L25.9315 1L1 15.5604M51 15.8352V40.1484L25.9315 54.2967M1 15.5604V40.011L25.9315 54.2967" stroke="#FFFFFF" />
            </svg>
            <h2 className={`text-4xl font-bold text-zinc-100 ${DINish.className} ml-8`}>Platform</h2>
          </div>
          <div className={`${DINish.className} pt-2 text-xl text-zinc-100`}>Leverage your data without disrupting your existing workflows.</div>
        </div>
        {/* 
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
              <img width={785} height={500} src="single.png" alt="single source of truth" className="rounded-md" />
            </div>
            <div className="mr-24 flex h-[600px] w-full shrink-0 snap-center justify-center rounded-lg p-8">
              <div className={`text-3xl ${DINish.className} p-8 text-center leading-relaxed text-zinc-100`}>{lines[1]}</div>
              <img height={500} width={785} style={{ height: 500, width: 785 }} src="compare.png" alt="single source of truth" className="rounded-md" />
            </div>
            <div className="mr-24 flex h-[600px] w-full shrink-0 snap-center justify-center rounded-lg p-8">
              <div className={`text-3xl ${DINish.className} p-8 text-center leading-relaxed text-zinc-100`}>{lines[2]}</div>
              <img height={500} width={785} style={{ height: 500, width: 785 }} src="dash.png" alt="single source of truth" className="rounded-md" />
            </div>
          </div>
        </div>
      </div>
 */