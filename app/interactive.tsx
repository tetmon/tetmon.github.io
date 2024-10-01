'use client';

import React, { ReactElement, useEffect, useRef, useState } from "react";
import { DINish } from "./fonts";

export default function Interactive() {
  const interactiveRef = useRef(null);

  useEffect(() => {
    let containerObserver = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          console.log('interactive enter')
          if (interactiveRef.current) {
            // @ts-ignore
            interactiveRef.current.querySelector('video').play();
          }
        } else {
          console.log('interactive exit')
        }
      });
    }, {
      threshold: 0.5
    });

    if (interactiveRef.current) {
      containerObserver.observe(interactiveRef.current)
    }
  }, []);

  return (
    // <section id="container" className="z-[1]" ref={interactiveRef}>
    //   <div className="container mx-auto pb-20 pt-0" >
    //     <div className="grid grid-cols-16">
    //       <div className="relative col-start-3 col-end-[-1] flex justify-between">
    //         <div className="flex flex-col">
    //           <div className="flex w-full justify-start">
    //             <svg className="max-w-[40px] text-primary" fill="currentColor" viewBox="0 -2 32 28">
    //               <path d="M10 14v8h-4v-8h4zM16 6v16h-4v-16h4zM32 24v2h-32v-24h2v22h30zM22 10v12h-4v-12h4zM28 4v18h-4v-18h4z"></path>
    //             </svg>
    //             <h2 className={`text-4xl font-bold text-primary ${DINish.className} pl-4`}>Interactive analytics</h2>
    //           </div>
    //           <p className={`${DINish.className} max-w-xl pt-5 text-xl`}>
    //             Quickly slice and dice your data to uncover key business insights.
    //           </p>
    //           <p className={`${DINish.className} max-w-xl pt-5 text-xl`}>
    //             EdgeSet supports a variety of visualizations, offering flexibility in how data can be displayed.
    //           </p>
    //         </div>
    //         <div className="relative">
    //           <video src="/assets/area_zoom.mp4" loop muted playsInline className="h-[400px] w-[600px] object-cover" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section id="container" className="z-[1]" ref={interactiveRef}>
      <div className="grid grid-cols-12 py-8 max-w-[1490px] mx-auto pb-16">
        <div className="col-start-2 col-span-10 grid [grid-template-columns:subgrid]">
          <div className="flex w-full justify-start col-span-full py-5">
            <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 -2 32 28">
              <path d="M10 14v8h-4v-8h4zM16 6v16h-4v-16h4zM32 24v2h-32v-24h2v22h30zM22 10v12h-4v-12h4zM28 4v18h-4v-18h4z"></path>
            </svg>
            <h2 className={`text-2xl font-bold text-primary ${DINish.className} pl-2 xl:text-3xl`}>Interactive analytics</h2>
          </div>
          <div className="col-span-full xl:flex xl:flex-row-reverse xl:justify-between">
            <div className="relative max-w-[700px] xl:max-w-[578px]">
              <video src="/assets/area_zoom.mp4" loop muted playsInline className="object-cover aspect-video" />
            </div>
            <div className="xl:max-w-lg">
              <p className={`${DINish.className} pt-5 text-lg`}>Quickly slice and dice your data to uncover key business insights.</p>
              <p className={`${DINish.className} pt-5 text-lg`}>EdgeSet supports a variety of visualizations, offering flexibility in how data can be displayed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
