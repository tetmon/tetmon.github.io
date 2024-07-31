"use client";

import Navbar from "@/components/navbar";
import { useEffect, useRef } from "react";

// function calculate3DPosition(x: number, y: number, z: number, gridUnit: number) {
//   const cosX = Math.cos(50 * Math.PI / 180);
//   const sinX = Math.sin(50 * Math.PI / 180);
//   const cos45 = Math.cos(Math.PI / 4);
//   const sin45 = Math.sin(Math.PI / 4);

//   // Adjust for 50-degree X rotation and 45-degree Z rotation
//   const x2D = (x * cos45 - z * cos45) * gridUnit;
//   const y2D = (y * cosX - z * sinX - x * sin45) * gridUnit;

//   return { x: x2D, y: y2D };
// }

const Hero = () => {

  // const GRID_UNIT = 90;
  const networkRef = useRef<HTMLDivElement>(null);
  const linesContainer = useRef<SVGSVGElement>(null);

  useEffect(() => {

    // const positions = {
    //   db: { x: 1.7, y: 7.5, z: 0 },
    //   ai: { x: 4, y: 4, z: 0 },
    //   edgeset: { x: 5, y: 4.4, z: 0 },
    //   docs: { x: 5.6, y: 4.8, z: 0 },
    //   semi: { x: 9, y: 3.1, z: 0 },
    // };

    // // console.log(networkRef.current.childNodes);
    // networkRef.current.childNodes.forEach((child) => {
    //   if (!child.id) return;
    //   const { x, y, z } = positions[child.id];
    //   const pos = calculate3DPosition(x, y, z, GRID_UNIT);
    //   // console.log(pos);
    //   // child.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    //   child.setAttribute('transform', `translate(${pos.x}, ${pos.y})`);
    //   // console.log(child);
    //   // child.style.transform = `translate(${positions[child.id].x}px, ${positions[child.id].y}px)`;
    // });

    // function connectShapes(shape1Id, shape2Id) {
    //   const shape1 = positions[shape1Id];
    //   const shape2 = positions[shape2Id];

    //   const pos1 = calculate3DPosition(shape1.x, shape1.y, shape1.z, GRID_UNIT);
    //   const pos2 = calculate3DPosition(shape2.x, shape2.y, shape2.z, GRID_UNIT);

    //   console.log(pos1, pos2);

    //   const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    //   line.setAttribute('x1', pos1.x);
    //   line.setAttribute('y1', pos1.y);
    //   line.setAttribute('x2', pos2.x);
    //   line.setAttribute('y2', pos2.y);
    //   line.setAttribute('stroke', 'black');
    //   linesContainer.current.appendChild(line);
    // }

    // connectShapes('db', 'edgeset');

  }, []);

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
              <path d="M511 120L603.486 70.2538L697.069 118.844L604.218 173.25L511 120Z" fill="#275DF1" stroke="#E1E1E1" stroke-opacity="0.501961" />
              <path d="M510.571 119.902L511.767 140.152L606.774 190.982L604.594 172.502L510.571 119.902Z" fill="#275DF1" stroke="#E1E1E1" stroke-opacity="0.501961" />
              <path d="M604.594 172.502L607.274 190.977L696.734 135.857L696.569 118.858L604.594 172.502Z" fill="#275DF1" stroke="#E1E1E1" stroke-opacity="0.501961" />
              {/* <text x="604" y="60" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle">AI</text> */}
              <text x="0" y="0" letterSpacing={2} fontFamily="system-ui" font-size="28" fontWeight={800} fill="transparent" textAnchor="middle" transform="matrix(0.866, -0.5, 1.5, 0.866, 620, 128)" stroke="#ddd" strokeWidth={1.5}>AI</text>
              <path d="M827.499 179.832L770.49 269.409L829.847 301.792L852.798 283.025L875.748 264.258L827.499 179.832Z" fill="#B5179E" stroke="#DDDDDD" />
              <path d="M828.307 180.822L828.852 300.516L828.307 180.822Z" fill="#B5179E" />
              <path d="M828.307 180.822L828.852 300.516" stroke="#DDDDDD" />
              <path d="M516.902 282.422L512.5 250L579.105 207.668L666.204 217.846L685.891 278.505L688.269 310.192L624.025 356.437L538.966 342.903L516.902 282.422Z" fill="#008D92" />
              <path d="M513.5 249.5L516.902 282.422L538.966 342.903M513.5 249.5L579.105 207.668L666.204 217.846L685.891 278.505M513.5 249.5L536.499 310.028L513.5 249.5ZM685.891 278.505L688.269 310.192L624.025 356.437L538.966 342.903M685.891 278.505L621.618 324.354L536.499 310.028M538.966 342.903L536.499 310.028L538.966 342.903Z" fill="#008D92" />
              <path d="M513.5 249.5L516.902 282.422L538.966 342.903M513.5 249.5L579.105 207.668L666.204 217.846L685.891 278.505M513.5 249.5L536.499 310.028M538.966 342.903L624.025 356.437L688.269 310.192L685.891 278.505M538.966 342.903L536.499 310.028M685.891 278.505L621.618 324.354L536.499 310.028" stroke="#DDDDDD" stroke-width="0.794393" />
              <path d="M623.659 356.862L621.222 324.384L623.659 356.862Z" fill="#008D92" />
              <path d="M623.659 356.862L621.222 324.384" stroke="#DDDDDD" stroke-width="0.794393" />
              <path d="M507.11 477.32L503.077 431.802L564.232 387.636L624.849 427.808L628.606 468.815L564.232 522.5L507.11 477.32Z" fill="#F72585" stroke="#DDDDDD" />
              <path d="M504.147 431.29L564.718 475.084L625.521 428.377" fill="#F72585" />
              <path d="M504.147 431.29L564.718 475.084L625.521 428.377" stroke="#DDDDDD" />
              <path d="M564.193 474.563L564.193 522L564.193 474.563Z" fill="#F72585" />
              <path d="M564.193 474.563L564.193 522" stroke="#DDDDDD" />
              <path d="M547 159L498 187L557 221" stroke="#333333" stroke-width="2" />
              <path id="ai-input" d="M557 221L498 187L547 159" fill="none" stroke="transparent" />
              <path d="M668.5 230L720 195.5L791 238.5" stroke="#333333" stroke-width="2" />
              <path id="semi-input" d="M791 238.5L720 195.5L668.5 230" fill="none" stroke="transparent" />
              <path d="M655 332.5L691 355L608 416.5" stroke="#333333" stroke-width="2" />
              <path id="doc-input" d="M608 416.5L691 355L655 332.5" fill="none" stroke="transparent" />
              <path id="db-input" d="M393.5 319.5L478 383.5L537.5 341.5" stroke="#333333" stroke-width="2" />
              <path d="M413 296L481 347L528.5 315.5" stroke="#333333" stroke-width="2" />
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
            {/* <svg viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(100, 330)" id="db" width="157" height="176" viewBox="0 30 157 176" fill="none">
                <path d="M78.5 61.6C104.513 61.6 125.6 53.7202 125.6 44C125.6 34.2798 104.513 26.4 78.5 26.4C52.4874 26.4 31.4 34.2798 31.4 44C31.4 53.7202 52.4874 61.6 78.5 61.6Z" fill="#EC9355" />
                <path d="M125.6 44H31.4V132H125.6V44Z" fill="#EC9355" />
                <path d="M78.5 149.6C104.513 149.6 125.6 141.72 125.6 132C125.6 122.28 104.513 114.4 78.5 114.4C52.4874 114.4 31.4 122.28 31.4 132C31.4 141.72 52.4874 149.6 78.5 149.6Z" fill="#EC9355" />
                <path d="M78.5 149.6C104.513 149.6 125.6 141.72 125.6 132C125.6 122.28 104.513 114.4 78.5 114.4C52.4874 114.4 31.4 122.28 31.4 132C31.4 141.72 52.4874 149.6 78.5 149.6Z" fill="#EC9355" />
                <path d="M78.5 61.6C104.513 61.6 125.6 53.7202 125.6 44C125.6 34.2798 104.513 26.4 78.5 26.4C52.4874 26.4 31.4 34.2798 31.4 44C31.4 53.7202 52.4874 61.6 78.5 61.6Z" fill="#EC9355" stroke="white" />
                <path d="M78.5 149.6C104.513 149.6 125.6 141.72 125.6 132C125.6 122.28 104.513 114.4 78.5 114.4C52.4874 114.4 31.4 122.28 31.4 132C31.4 141.72 52.4874 149.6 78.5 149.6Z" stroke="white" />
                <path d="M31.4 44V132" stroke="white" />
                <path d="M125.6 44V132" stroke="white" />
              </g>

              <g transform="translate(290, 150)" id="ai" width="303" height="203" viewBox="0 0 303 203" fill="none">
                <path d="M58 110L150.486 60.2538L244.069 108.844L151.218 163.25L58 110Z" fill="#275DF1" stroke="#E1E1E1" strokeOpacity="0.501961" />
                <path d="M57.5707 109.902L58.7672 130.152L153.774 180.982L151.594 162.502L57.5707 109.902Z" fill="#275DF1" stroke="#E1E1E1" strokeOpacity="0.501961" />
                <path d="M151.594 162.502L154.274 180.977L243.734 125.857L243.569 108.858L151.594 162.502Z" fill="#275DF1" stroke="#E1E1E1" strokeOpacity="0.501961" />
              </g>

              <g transform="translate(340, 340)" id="edgeset" width="185" height="211" viewBox="0 0 185 211" fill="none">
                <path d="M7.9022 107.422L3.5 75L70.1048 32.6684L157.204 42.8456L176.891 103.505L179.269 135.192L115.025 181.437L29.9659 167.903L7.9022 107.422Z" fill="#008D92" />
                <path d="M4.49999 74.5L7.9022 107.422L29.9659 167.903M4.49999 74.5L70.1048 32.6684L157.204 42.8456L176.891 103.505M4.49999 74.5L27.4993 135.028ZM176.891 103.505L179.269 135.192L115.025 181.437L29.9659 167.903M176.891 103.505L112.618 149.354L27.4993 135.028M29.9659 167.903L27.4993 135.028Z" fill="#008D92" />
                <path d="M4.49999 74.5L7.9022 107.422L29.9659 167.903M4.49999 74.5L70.1048 32.6684L157.204 42.8456L176.891 103.505M4.49999 74.5L27.4993 135.028M29.9659 167.903L115.025 181.437L179.269 135.192L176.891 103.505M29.9659 167.903L27.4993 135.028M176.891 103.505L112.618 149.354L27.4993 135.028" stroke="#DDDDDD" strokeWidth="0.794393" />
                <path d="M114.659 181.862L112.222 149.384Z" fill="#008D92" />
                <path d="M114.659 181.862L112.222 149.384" stroke="#DDDDDD" strokeWidth="0.794393" />
              </g>

              <g transform="translate(362, 560)" id="docs" width="140" height="149" viewBox="0 0 140 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.11 97.3197L6.07748 51.8019L67.2324 7.63584L127.849 47.8076L131.606 88.8148L67.2324 142.5L10.11 97.3197Z" fill="#F72585" stroke="#DDDDDD" />
                <path d="M7.14705 51.2903L67.7176 95.0837L128.521 48.3773" fill="#F72585" />
                <path d="M7.14705 51.2903L67.7176 95.0837L128.521 48.3773" stroke="#DDDDDD" />
                <path d="M67.1926 94.5635L67.1926 142Z" fill="#F72585" />
                <path d="M67.1926 94.5635L67.1926 142" stroke="#DDDDDD" />
              </g>

              <g transform="translate(610, 320)" id="semi" width="139" height="125" viewBox="0 0 139 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M67.499 2.83187L10.4896 92.4091L69.8474 124.792L92.7978 106.025L115.748 87.2579L67.499 2.83187Z" fill="#B5179E" stroke="#DDDDDD" />
                <path d="M68.3074 3.82233L68.852 123.516Z" fill="#B5179E" />
                <path d="M68.3074 3.82233L68.852 123.516" stroke="#DDDDDD" />
              </g>

              <g transform="translate(219, 470)" width="141" height="54" viewBox="0 0 141 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L69 52L139.5 5.5" stroke="#333333" stroke-width="2" />
              </g>
            </svg> */}
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


/*
background: hsla(212, 38%, 50%, 1);
background: linear-gradient(180deg, hsla(212, 38%, 50%, 1) 5%, hsla(200, 41%, 51%, 1) 29%, hsla(184, 42%, 48%, 1) 57%, hsla(180, 38%, 53%, 1) 90%);
background: -moz-linear-gradient(180deg, hsla(212, 38%, 50%, 1) 5%, hsla(200, 41%, 51%, 1) 29%, hsla(184, 42%, 48%, 1) 57%, hsla(180, 38%, 53%, 1) 90%);
background: -webkit-linear-gradient(180deg, hsla(212, 38%, 50%, 1) 5%, hsla(200, 41%, 51%, 1) 29%, hsla(184, 42%, 48%, 1) 57%, hsla(180, 38%, 53%, 1) 90%);
filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#4E7CAF", endColorstr="#4E93B5", GradientType=1 );


https://coolors.co/palette/0081a7-00afb9-fdfcdc-fed9b7-f07167
https://coolors.co/palette/119da4-0c7489-13505b-040404-d7d9ce
https://coolors.co/palette/03045e-0077b6-00b4d8-90e0ef-caf0f8
https://unstructured.io/product
https://www.singlestore.com/
https://coolors.co/palettes/popular/#215f74
https://colordesigner.io/gradient-generator
https://mercury.com/
https://coolors.co/gradient-maker/4e7caf-4e93b5-4e93b5-47a7ae-5ab5b5?position=7,34,35,58,89&opacity=100,100,100,100,100&type=linear&rotation=180
https://dgraph.io/
https://www.ketch.com/
*/