'use client'

import { createContext, useContext, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

const ActiveContext = createContext(0);

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


const Features = ({ features, title, dir }: { features: Array<IFeature>, title: string, dir: string }) => {
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
  const item = features[activeIndex];

  return (
    <ActiveContext.Provider value={activeIndex}>
      <div className='col-span-full md:grid md:grid-cols-18'>
        <div className='md:col-start-2 md:col-end-10 md:max-w-xl md:py-20 lg:col-start-5'>
          <h2 className='mb-4 flex pl-4 text-2xl font-medium text-edgeset md:pl-0 md:text-3xl lg:mb-12 lg:text-4xl'>
            {title}
          </h2>
          <div ref={pillsRef} className='scrollbar-hide mb-4 ml-2 flex overflow-x-auto md:hidden'>
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
          <div className='scrollbar-hide mb-6 flex snap-x snap-mandatory overflow-x-auto pb-6 md:hidden' onScroll={debouncedScroll}
            ref={scrollRef}>
            {
              features.map((item) => (
                <div key={item.title} className='snap-start pl-4'>
                  <div className='flex min-w-[300px] flex-col overflow-hidden rounded-md bg-white'>
                    <div className='py-6 pl-5 pr-3'>
                      <h2 className='text-2xl font-medium text-edgeset'>{item.title}.</h2>
                      <span className='text-base text-gray-700' dangerouslySetInnerHTML={{ __html: item.description }}></span>
                    </div>
                    <div className='ml-5 h-48 w-full rounded-sm bg-gray-300'>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="hidden md:flex">
            <CSSTransition key={activeIndex} timeout={200} classNames="card" appear in={true} unmountOnExit>
              <div className="mb-4 min-h-[200px]">
                <h2 className='mb-3 text-2xl font-medium text-edgeset md:text-2xl lg:text-3xl'>{item.title}.</h2>
                <span className='text-base text-gray-700 md:text-base lg:text-lg' dangerouslySetInnerHTML={{ __html: item.description }}></span>
              </div>
            </CSSTransition>
          </div>
          <div ref={pillsRef} className='scrollbar-hide mb-4 ml-2 hidden flex-wrap gap-2 overflow-x-auto md:ml-0 md:flex lg:overflow-x-visible'>
            {
              features.map((item, index) => (
                <div key={item.title} className={`min-w-fit ${index !== 0 ? 'mr-0' : 'lg:pl-0'}`} onClick={() => {
                  setActiveIndex(index);
                }}>
                  <button className={`rounded-xl border p-[5px] text-xs font-medium uppercase tracking-tighter lg:text-sm
              ${index === activeIndex ? 'bg-slate-900  text-white' : 'border-slate-400 text-gray-500'} hover:bg-slate-900 hover:text-white`}>
                    {item.pill ?? item.title}
                  </button>
                </div>))
            }
          </div>
        </div>
        <Snapshots dir={dir} />
      </div>
    </ActiveContext.Provider>
  );
}

export const Snapshots = ({ dir }: { dir: string }) => {
  const activeIndex = useContext(ActiveContext);

  return (
    <CSSTransition key={activeIndex} timeout={200} classNames="snapshot" appear in={true} unmountOnExit>
      <div className={`col-start-12 col-end-16 mt-20 hidden h-80 w-full min-w-[300px] rounded-sm bg-red-100 md:flex ${activeIndex === 0 ? 'bg-slate-200' : ''}`}>
      </div>
    </CSSTransition>
  )
}


export default Features;