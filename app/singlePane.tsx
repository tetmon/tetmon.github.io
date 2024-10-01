"use client"

import { useEffect, useRef } from "react";

const SinglePane = () => {

  const dotsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    function restartAnimation() {
      dotsRef.current.forEach(dot => {
        if (dot) {
          dot.style.animation = 'none';
          dot.offsetHeight; // Trigger reflow
          dot.style.animation = '';
        }
      });
    }

    const intervalId = setInterval(restartAnimation, 2500);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // 

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="relative flex w-11/12 max-w-6xl justify-between">
        <div className="absolute inset-y-0 left-[calc(30%+20px)] top-[33px] h-[calc(100%_-_64px)] w-0.5 bg-edgeset"></div>
        <div className="absolute inset-y-0 right-[calc(30%+20px)] top-[55px]  h-[calc(100%_-_108px)] w-0.5 bg-edgeset"></div>
        <div className="absolute inset-x-[calc(30%+22px)] top-1/2 z-10 h-0.5 bg-edgeset"></div>

        <div className="flex w-[30%] flex-col justify-around">

          <div className="relative m-2.5 rounded border border-gray-300 bg-white p-2.5 text-left">
            CSV
            <div ref={el => dotsRef.current.push(el)} className="absolute -right-2.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 animate-moveDot rounded-full bg-edgeset"></div>
            <div className="absolute -right-8 top-1/2 h-0.5 w-8 bg-edgeset"></div>
          </div>
          <div className="relative m-2.5 rounded border border-gray-300 bg-white p-2.5 text-left">
            Data Warehouse
            <div ref={el => dotsRef.current.push(el)} className="absolute -right-2.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 animate-moveDot rounded-full bg-edgeset"></div>
            <div className="absolute -right-8 top-1/2 h-0.5 w-8 bg-edgeset"></div>
          </div>
          <div className="relative m-2.5 rounded border border-gray-300 bg-white p-2.5 text-left">
            Cloud and On-Premise Databases
            <div ref={el => dotsRef.current.push(el)} className="absolute -right-2.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 animate-moveDot rounded-full bg-edgeset"></div>
            <div className="absolute -right-8 top-1/2 h-0.5 w-8 bg-edgeset"></div>
          </div>
          <div className="relative m-2.5 rounded border border-gray-300 bg-white p-2.5 text-left">
            IoT Data
            <div ref={el => dotsRef.current.push(el)} className="absolute -right-2.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 animate-moveDot rounded-full bg-edgeset"></div>
            <div className="absolute -right-8 top-1/2 h-0.5 w-8 bg-edgeset"></div>
          </div>
          <div className="relative m-2.5 rounded border border-gray-300 bg-white p-2.5 text-left">
            Spreadsheets
            <div ref={el => dotsRef.current.push(el)} className="absolute -right-2.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 animate-moveDot rounded-full bg-edgeset"></div>
            <div className="absolute -right-8 top-1/2 h-0.5 w-8 bg-edgeset"></div>
          </div>
        </div>

        <div className="z-20 flex w-[30%] flex-col items-center justify-center">
          <div className="flex h-36 w-36 items-center justify-center bg-[#215f74] text-lg font-bold text-white">
            <svg viewBox="0 0 557 517" stroke="#ffffff" strokeWidth={4} className="inline h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#ffffff"><path d="M214.115 161.038 187.228 18.295C184.939 6.16 173.16-1.888 161.026.402L18.282 27.288C6.15 29.578-1.9 41.358.39 53.468L27.276 196.21c2.29 12.133 14.07 20.183 26.179 17.893l142.744-26.887c12.133-2.29 20.183-14.069 17.893-26.202l.023.023ZM218.058 324.06c-2.29-12.11-14.069-20.183-26.203-17.894l-75.68 14.258c-12.133 2.29-20.183 14.069-17.893 26.179l14.258 75.68c2.29 12.133 14.069 20.183 26.179 17.893l75.68-14.258c12.133-2.29 20.183-14.069 17.893-26.179l-14.258-75.679h.024ZM556.611 465.741l-24.243-128.698c-2.29-12.134-14.069-20.183-26.179-17.893l-128.698 24.243c-12.134 2.289-20.183 14.069-17.894 26.178L383.84 498.27c2.29 12.133 14.069 20.183 26.179 17.893l128.698-24.243c12.134-2.29 20.183-14.069 17.894-26.203v.024ZM407.777 179.191l19.829 137.244 30.876-5.784-19.617-135.945c36.141-12.912 58.779-50.682 51.484-89.513-8.096-42.986-49.878-71.525-92.864-63.428-33.284 6.255-57.811 32.764-63.476 64.349l-115.975 2.809 5.925 31.207 110.805-2.668c2.502 11.024 7.224 21.033 13.644 29.625L215.791 293.868c.897.543 1.724 1.109 2.621 1.652 8.38 5.783 14.234 14.376 16.288 24.267l137.007-151.691c10.835 6.445 23.157 10.34 36.07 11.095Z"></path></g></svg>
            <div className="pl-2">EdgeSet</div>
          </div>
        </div>

        <div className="flex w-[30%] flex-col justify-around">
          <div className="relative m-2.5 rounded border border-gray-300 bg-white p-2.5 text-right">
            Dashboards
            <div ref={el => dotsRef.current.push(el)} className="absolute -left-2.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 animate-moveRightDot rounded-full bg-edgeset opacity-0"></div>
            <div className="absolute -left-8 top-1/2 h-0.5 w-8 bg-edgeset"></div>
          </div>
          <div className="relative m-2.5 rounded border border-gray-300 bg-white p-2.5 text-right">
            Analysis
            <div ref={el => dotsRef.current.push(el)} className="absolute -left-2.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 animate-moveRightDot rounded-full bg-edgeset opacity-0"></div>
            <div className="absolute -left-8 top-1/2 h-0.5 w-8 bg-edgeset"></div>
          </div>
          <div className="relative m-2.5 rounded border border-gray-300 bg-white p-2.5 text-right">
            Reports
            <div ref={el => dotsRef.current.push(el)} className="absolute -left-2.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 animate-moveRightDot rounded-full bg-edgeset opacity-0"></div>
            <div className="absolute -left-8 top-1/2 h-0.5 w-8 bg-edgeset"></div>
          </div>
        </div>

        <div ref={el => dotsRef.current.push(el)} className="absolute left-[30%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 animate-moveLeftToMiddle rounded-full bg-edgeset opacity-0"></div>
        <div ref={el => dotsRef.current.push(el)} className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-y-1/2 animate-moveMiddleToRight rounded-full bg-edgeset opacity-0"></div>
      </div>
    </div>
  )
}

export default SinglePane;