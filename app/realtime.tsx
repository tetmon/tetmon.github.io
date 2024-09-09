'use client';

import React, { ReactElement, useEffect, useRef, useState } from "react";
import { DINish } from "./fonts";

const DataFlowDiagram = () => {
  const topLineRef = useRef(null);
  const diagramRef = useRef(null);
  const lastFlowRef = useRef(null);
  const firstLineRef = useRef(null);
  const firstBoxRef = useRef(null);
  const secondLineRef = useRef(null);
  const thirdLineRef = useRef(null);

  useEffect(() => {


    let containerObserver = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          console.log('realtime enter')
          // const diagramRect = diagramRef.current.getBoundingClientRect();
          // const lastHorizontalLineRect = lastFlowRef.current.querySelector('.absolute').getBoundingClientRect();



          // const verticalLineHeight = lastHorizontalLineRect.top - diagramRect.top + lastHorizontalLineRect.height / 2// - 200;
          // Add transition style to verticalLineRef
          // verticalLineRef.current.style.transition = 'height 0.3s ease-in-out';
          const verticalLineHeight = '212';
          topLineRef.current.style.transition = 'height 0.5s ease-in';

          // console.log(verticalLineHeight);

          // Set initial height to 0
          // verticalLineRef.current.style.height = '0px';
          // topLineRef.current.style.height = `${verticalLineHeight}px`;
          setTimeout(() => {
            topLineRef.current.style.height = `${verticalLineHeight}px`;
            firstLineRef.current.classList.add('animate-[extend-line_1s_forwards_0.5s]');
            firstBoxRef.current.classList.add('animate-[fade-in_0.5s_forwards_1s]');
            secondLineRef.current.classList.add('animate-[extend-line_0.5s_forwards_1.5s]');
            thirdLineRef.current.classList.add('animate-[fade-in_0.5s_forwards_2s]');
          }, 110);

        } else {
          console.log('realtime exit')
        }
      });
    }, {
      threshold: 1
    });

    containerObserver.observe(diagramRef.current)
  }, []);

  return (
    <div className={`relative flex flex-col gap-5 pb-20 ${DINish.className}`} ref={diagramRef}>
      <div className="relative">
        <div className="w-[120px] rounded p-2">

          <svg className="w-32" viewBox="0 0 404 336" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M311.5 108L219 54.5L311.5 1L403 56L311.5 108Z" fill="#215F74" fillOpacity="0.83" stroke="white" strokeOpacity="0.9" />
            <path d="M219 143.5V54.5L311 107L311.5 195.5L219 143.5Z" fill="#215F74" stroke="white" strokeOpacity="0.9" />
            <path d="M311 107L311.5 195.5L402 140V56.5L311 107Z" fill="#215F74" stroke="white" strokeOpacity="0.9" />
            <path d="M204.5 176L112 122.5L204.5 69L296 124L204.5 176Z" fill="#215F74" fillOpacity="0.83" stroke="white" strokeOpacity="0.9" />
            <path d="M112 211.5V122.5L204 175L204.5 263.5L112 211.5Z" fill="#215F74" stroke="white" strokeOpacity="0.9" />
            <path d="M204 175L204.5 263.5L295 208V124.5L204 175Z" fill="#215F74" stroke="white" strokeOpacity="0.9" />
            <path d="M93.5 247L1 193.5L93.5 140L185 195L93.5 247Z" fill="#215F74" fillOpacity="0.83" stroke="white" strokeOpacity="0.9" />
            <path d="M1 282.5V193.5L93 246L93.5 334.5L1 282.5Z" fill="#215F74" stroke="white" strokeOpacity="0.9" />
            <path d="M93 246L93.5 334.5L184 279V195.5L93 246Z" fill="#215F74" stroke="white" strokeOpacity="0.9" />
          </svg>

        </div>
        <div className="absolute left-[70px] top-[90px] z-10 h-0 w-[2px] bg-primary" ref={topLineRef}></div>
      </div>
      {/* <div className="absolute left-[70px] top-[200px] w-[2px] bg-primary transition-all" id="vertical-line" ref={verticalLineRef}></div> */}
      <div className="relative ml-[100px] flex items-center">
        <div className="absolute left-[-30px] top-1/2 h-[2px] w-[30px] translate-y-[-50%] bg-borderLight">
        </div>
        <div className="flex items-center">
          <div className="w-[100px] rounded border border-dashed border-borderLight bg-[#f3f7f9] p-2 text-center text-xs">Daily ETL Process</div>
          <div className="h-[2px] w-[30px] bg-borderLight"></div>
        </div>
        <div className="flex items-center">
          <div className="w-[100px] rounded border border-dashed border-borderLight bg-[#f3f7f9] p-2 text-center text-xs">Pre-aggregated Summary Table</div>
          <div className="h-[2px] w-[30px] bg-borderLight"></div>
        </div>
        <div className="flex items-center">
          <div className="w-[100px] rounded border border-dashed border-borderLight bg-[#f3f7f9] p-2 text-center text-xs">Query</div>
          <div className="h-[2px] w-[30px] bg-borderLight"></div>
        </div>
        <div className="flex items-center">
          <div className="w-[100px] rounded border border-dashed border-borderLight bg-[#f3f7f9] p-2 text-center text-xs">Report</div>
        </div>
      </div>
      <div className="relative ml-[100px] flex items-center">
        <div className="absolute left-[-30px] top-1/2 h-[2px] w-[30px] translate-y-[-50%] bg-borderLight">
        </div>
        <div className="flex items-center">
          <div className="w-[120px] rounded border border-dashed border-borderLight bg-[#f3f7f9] p-2 text-center text-xs">Extract raw data for ELT</div>
          <div className="h-[2px] w-[30px] bg-borderLight"></div>
        </div>
        <div className="flex items-center">
          <div className="w-auto rounded border border-dashed border-borderLight bg-[#f3f7f9] p-2 text-center text-xs">Load into Warehouse</div>
          <div className="h-[2px] w-[30px] bg-borderLight"></div>
        </div>
        <div className="flex items-center">
          <div className="w-[80px] rounded border border-dashed border-borderLight bg-[#f3f7f9] p-2 text-center text-xs">Transform</div>
          <div className="h-[2px] w-[30px] bg-borderLight"></div>
        </div>
        <div className="flex items-center">
          <div className="w-[80px] rounded border border-dashed border-borderLight bg-[#f3f7f9] p-2 text-center text-xs">Query</div>
          <div className="h-[2px] w-[30px] bg-borderLight"></div>
        </div>
        <div className="flex items-center">
          <div className="w-[80px] rounded border border-dashed border-borderLight bg-[#f3f7f9] p-2 text-center text-xs">Report</div>
        </div>
      </div>
      <div className="relative ml-[100px] flex items-center" ref={lastFlowRef}>
        <div ref={firstLineRef} className="absolute left-[-30px] top-1/2 h-[2px] w-0 translate-y-[-50%] bg-primary"></div>
        <div className="flex items-center opacity-0" ref={firstBoxRef}>
          <div className="w-[120px] rounded border border-primary bg-[#ddf6ff] p-2 text-center text-sm text-primary">Query</div>
          <div className="h-[2px] w-0  bg-primary" ref={secondLineRef}></div>
        </div>
        <div className="flex items-center opacity-0" ref={thirdLineRef}>
          <div className="w-[120px] rounded border border-primary bg-[#ddf6ff] p-2 text-center text-sm text-primary">Report</div>
        </div>
      </div>
    </div>
  );
};

export default function RealTime() {
  return (
    <section id="container" className="z-[1]">
      <div className="container mx-auto pb-40 pt-0" >
        <div className="grid grid-cols-16">
          <div className="relative col-start-3 col-end-[-1] flex justify-between">
            <div className="flex flex-col">
              <div className="flex w-full justify-start">
                <svg className="max-w-[44px] text-primary" aria-labelledby="svg-inline--fa-title-Gauge Max Icon" data-prefix="fasl" data-icon="gauge-max" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title id="svg-inline--fa-title-Gauge Max Icon">Gauge Max Icon</title><path fill="currentColor" d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm24 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM224 352a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-32 0c0-35.3 28.7-64 64-64c17.5 0 33.4 7 44.9 18.4l106.9-64.1 13.7-8.2L438 261.5l-13.7 8.2L317.4 333.8c1.7 5.8 2.6 11.9 2.6 18.2c0 35.3-28.7 64-64 64s-64-28.7-64-64zM392 144a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM96 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72-88a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z"></path></svg>
                <h2 className={`text-4xl font-bold text-primary ${DINish.className} pl-4`}>Real-time Access</h2>
              </div>
              <p className={`${DINish.className} max-w-xl pt-5 text-xl`}>
                Unlike traditional ETL/ELT systems, Edgeset processes data on-demand, querying source systems directly for the most up-to-date information.
              </p>
              <p className={`${DINish.className} max-w-xl pt-5 text-xl`}>
                This simplifies the architecture, saving man-hours and reducing the time to generate reports, thereby improving efficiency.
              </p>
            </div>
            <div className="relative">
              <DataFlowDiagram />
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
