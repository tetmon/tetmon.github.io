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
          interactiveRef.current.querySelector('video').play();
        } else {
          console.log('interactive exit')
        }
      });
    }, {
      threshold: 0.5
    });

    containerObserver.observe(interactiveRef.current)
  }, []);

  return (
    <section id="container" className="z-[1]" ref={interactiveRef}>
      <div className="container mx-auto pb-20 pt-0" >
        <div className="grid grid-cols-16">
          <div className="relative col-start-3 col-end-[-1] flex justify-between">
            <div className="flex flex-col">
              <div className="flex w-full justify-start">
                <svg className="max-w-[40px] text-primary" fill="currentColor" viewBox="0 -2 32 28">
                  <path d="M10 14v8h-4v-8h4zM16 6v16h-4v-16h4zM32 24v2h-32v-24h2v22h30zM22 10v12h-4v-12h4zM28 4v18h-4v-18h4z"></path>
                </svg>
                <h2 className={`text-4xl font-bold text-primary ${DINish.className} pl-4`}>Interactive analytics</h2>
              </div>
              <p className={`${DINish.className} max-w-xl pt-5 text-xl`}>
                Quickly slice and dice your data to uncover key business insights.
              </p>
              <p className={`${DINish.className} max-w-xl pt-5 text-xl`}>
                Edgeset supports a variety of visualizations, offering flexibility in how data can be displayed.
              </p>
            </div>
            <div className="relative">
              <video src="/assets/area_zoom.mp4" loop muted playsInline className="h-[400px] w-[600px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
