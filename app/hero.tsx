"use client";

import Navbar from "@/components/navbar";
import { useRef } from "react";

const Hero = () => {
  const networkRef = useRef<HTMLDivElement>(null);

  return (
    <div className=" bg-zinc-50">
      <Navbar />
      <div className="m-auto flex max-w-7xl py-14">
        {/* <div className="flex w-[400px] flex-col px-4">
          <h1 className="py-6 text-5xl font-extrabold leading-[1.2]">
            Data plumbing, before AI can happen.
          </h1>
          <p className="leading-6">
            Introducing Edgeset, data integration platform that joins up disparate cloud and on-premise data sources to a single access point, within minutes.
          </p>
        </div> */}
        <div className="relative flex-1 px-4">
          <div className="relative z-10" ref={networkRef}>
            <svg width="1060" height="717" viewBox="0 0 1060 717" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="1060" height="717" />
              <path d="M366.5 235.6C392.513 235.6 413.6 227.72 413.6 218C413.6 208.28 392.513 200.4 366.5 200.4C340.487 200.4 319.4 208.28 319.4 218C319.4 227.72 340.487 235.6 366.5 235.6Z" fill="#EC9355" />
              <path d="M413.6 218H319.4V306H413.6V218Z" fill="#EC9355" />
              <path d="M366.5 323.6C392.513 323.6 413.6 315.72 413.6 306C413.6 296.28 392.513 288.4 366.5 288.4C340.487 288.4 319.4 296.28 319.4 306C319.4 315.72 340.487 323.6 366.5 323.6Z" fill="#EC9355" />
              <path d="M366.5 323.6C392.513 323.6 413.6 315.72 413.6 306C413.6 296.28 392.513 288.4 366.5 288.4C340.487 288.4 319.4 296.28 319.4 306C319.4 315.72 340.487 323.6 366.5 323.6Z" fill="#EC9355" />
              <path d="M366.5 235.6C392.513 235.6 413.6 227.72 413.6 218C413.6 208.28 392.513 200.4 366.5 200.4C340.487 200.4 319.4 208.28 319.4 218C319.4 227.72 340.487 235.6 366.5 235.6Z" fill="#EC9355" stroke="white" />
              <path d="M366.5 323.6C392.513 323.6 413.6 315.72 413.6 306C413.6 296.28 392.513 288.4 366.5 288.4C340.487 288.4 319.4 296.28 319.4 306C319.4 315.72 340.487 323.6 366.5 323.6Z" stroke="white" />
              <path d="M319.4 218V306" stroke="white" />
              <path d="M413.6 218V306" stroke="white" />
              <path d="M511 120L603.486 70.2538L697.069 118.844L604.218 173.25L511 120Z" fill="#275DF1" stroke="#E1E1E1" strokeOpacity="0.501961" />
              <path d="M510.571 119.902L511.767 140.152L606.774 190.982L604.594 172.502L510.571 119.902Z" fill="#275DF1" stroke="#E1E1E1" strokeOpacity="0.501961" />
              <path d="M604.594 172.502L607.274 190.977L696.734 135.857L696.569 118.858L604.594 172.502Z" fill="#275DF1" stroke="#E1E1E1" strokeOpacity="0.501961" />
              {/* <text x="604" y="60" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle">AI</text> */}
              <text x="0" y="0" letterSpacing={2} fontFamily="system-ui" fontSize="28" fontWeight={800} fill="transparent" textAnchor="middle" transform="matrix(0.866, -0.5, 1.5, 0.866, 620, 128)" stroke="#ddd" strokeWidth={1.5}>AI</text>
              <path d="M827.499 179.832L770.49 269.409L829.847 301.792L852.798 283.025L875.748 264.258L827.499 179.832Z" fill="#B5179E" stroke="#DDDDDD" />
              <path d="M828.307 180.822L828.852 300.516L828.307 180.822Z" fill="#B5179E" />
              <path d="M828.307 180.822L828.852 300.516" stroke="#DDDDDD" />
              <path d="M516.902 282.422L512.5 250L579.105 207.668L666.204 217.846L685.891 278.505L688.269 310.192L624.025 356.437L538.966 342.903L516.902 282.422Z" fill="#008D92" />
              <path d="M513.5 249.5L516.902 282.422L538.966 342.903M513.5 249.5L579.105 207.668L666.204 217.846L685.891 278.505M513.5 249.5L536.499 310.028L513.5 249.5ZM685.891 278.505L688.269 310.192L624.025 356.437L538.966 342.903M685.891 278.505L621.618 324.354L536.499 310.028M538.966 342.903L536.499 310.028L538.966 342.903Z" fill="#008D92" />
              <path d="M513.5 249.5L516.902 282.422L538.966 342.903M513.5 249.5L579.105 207.668L666.204 217.846L685.891 278.505M513.5 249.5L536.499 310.028M538.966 342.903L624.025 356.437L688.269 310.192L685.891 278.505M538.966 342.903L536.499 310.028M685.891 278.505L621.618 324.354L536.499 310.028" stroke="#DDDDDD" strokeWidth="0.794393" />
              <path d="M623.659 356.862L621.222 324.384L623.659 356.862Z" fill="#008D92" />
              <path d="M623.659 356.862L621.222 324.384" stroke="#DDDDDD" strokeWidth="0.794393" />
              <path d="M507.11 477.32L503.077 431.802L564.232 387.636L624.849 427.808L628.606 468.815L564.232 522.5L507.11 477.32Z" fill="#F72585" stroke="#DDDDDD" />
              <path d="M504.147 431.29L564.718 475.084L625.521 428.377" fill="#F72585" />
              <path d="M504.147 431.29L564.718 475.084L625.521 428.377" stroke="#DDDDDD" />
              <path d="M564.193 474.563L564.193 522L564.193 474.563Z" fill="#F72585" />
              <path d="M564.193 474.563L564.193 522" stroke="#DDDDDD" />
              <path d="M547 159L498 187L557 221" stroke="#333333" strokeWidth="2" />
              <path id="ai-input" d="M557 221L498 187L547 159" fill="none" stroke="transparent" />
              <path d="M668.5 230L720 195.5L791 238.5" stroke="#333333" strokeWidth="2" />
              <path id="semi-input" d="M791 238.5L720 195.5L668.5 230" fill="none" stroke="transparent" />
              <path d="M655 332.5L691 355L608 416.5" stroke="#333333" strokeWidth="2" />
              <path id="doc-input" d="M608 416.5L691 355L655 332.5" fill="none" stroke="transparent" />
              <path id="db-input" d="M393.5 319.5L478 383.5L537.5 341.5" stroke="#333333" strokeWidth="2" />
              <path d="M413 296L481 347L528.5 315.5" stroke="#333333" strokeWidth="2" />
              <path id="db-filter" d="M528.5 315.5L481 347L413 296" fill="none" stroke="transparent" />
              <defs>
                <filter id="coolShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feOffset result="offOut" in="SourceAlpha" dx="5" dy="5" />
                  <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
                  <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                </filter>
              </defs>
              <circle id="data-point" r="5" fill="#EC9355">
                <animateMotion dur="2s" repeatCount="indefinite">
                  <mpath href="#db-input" />
                </animateMotion>
              </circle>
              <circle r="5" fill="#008D92">
                <animateMotion dur="2s" repeatCount="indefinite">
                  <mpath href="#db-filter" />
                </animateMotion>
              </circle>
              <circle r="5" fill="#008D92">
                <animateMotion dur="2s" repeatCount="indefinite">
                  <mpath href="#ai-input" />
                </animateMotion>
              </circle>
              <circle r="5" fill="#B5179E">
                <animateMotion dur="2s" repeatCount="indefinite">
                  <mpath href="#semi-input" />
                </animateMotion>
              </circle>
              <circle r="5" fill="#F72585">
                <animateMotion dur="2s" repeatCount="indefinite">
                  <mpath href="#doc-input" />
                </animateMotion>
              </circle>
            </svg>
          </div>

          <div className="iso-grid-container">
            <div className="iso-grid"></div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Hero;