'use client'

import { useRef, useState } from "react";

interface IFeature {
  pill?: string;
  title: string;
  description: string;
}

function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};


const Features = ({ features }: { features: Array<IFeature> }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pillsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  let isScrollEnabled = useRef<boolean>(true);

  function scrollToPill(index: number) {
    const el = pillsRef.current;
    if (!(el instanceof HTMLElement)) {
      return;
    }
    const activeEl = el.childNodes[index];
    if (!(activeEl instanceof HTMLElement)) {
      return;
    }

    const rect = activeEl.getBoundingClientRect();
    const isVisible = rect.right < el.offsetWidth && rect.left > 0;
    if (!isVisible) {
      el.scrollTo({
        left: activeEl.offsetLeft - activeEl.offsetWidth / 2,
        behavior: 'smooth',
      });
    }
    setActiveIndex(index);
  }

  const handleScroll = (e: Event) => {
    if (!isScrollEnabled.current) {
      isScrollEnabled.current = true;
      return;
    }
    if (!(e.target instanceof HTMLElement)) return;
    const childElements = Array.from(e.target.childNodes);
    childElements.forEach(async (child, index) => {
      if (!(child instanceof HTMLElement)) return;
      const left = child.getBoundingClientRect().left;
      if (left <= 4) {
        scrollToPill(index);
        return;
      }
    });
  }

  const debouncedScroll = debounce(handleScroll, 100);

  return (
    <>
      <div ref={pillsRef} className='scrollbar-hide mb-4 ml-2 flex overflow-x-auto'>
        {
          features.map((item, index) => (
            <div key={item.title} className='min-w-fit pl-2'>
              <button className={`rounded-xl border p-[5px] text-xs font-medium uppercase tracking-tighter 
              ${index === activeIndex ? 'bg-slate-900  text-white' : 'border-slate-400 text-gray-500'}`}
                onClick={() => {
                  setActiveIndex(index);
                  if (!(scrollRef.current instanceof HTMLElement)) return;
                  const childElements = Array.from(scrollRef.current.childNodes);
                  const activeEl = childElements[index];
                  if (!(activeEl instanceof HTMLElement)) return;
                  isScrollEnabled.current = false;
                  scrollRef.current.scrollTo({
                    left: activeEl.offsetLeft,
                    behavior: 'smooth',
                  });
                }}>
                {item.pill ?? item.title}
              </button>
            </div>))
        }
      </div>
      <div className='scrollbar-hide mb-6 flex snap-x snap-mandatory overflow-x-auto pb-6' onScroll={debouncedScroll}
        ref={scrollRef}>
        {
          features.map((item) => (
            <div key={item.title} className='snap-start pl-4'>
              <div className='flex min-w-[300px] flex-col overflow-hidden rounded-md bg-white'>
                <div className='py-6 pl-5 pr-3'>
                  <h2 className='text-lg font-medium text-edgeset'>{item.title}.</h2>
                  <span className='text-base text-gray-700' dangerouslySetInnerHTML={{ __html: item.description }}></span>
                </div>
                <div className='ml-5 h-48 w-full rounded-sm bg-gray-300'>
                </div>
              </div>
            </div>
          ))
        }
      </div >
    </>
  )
}

export default Features;