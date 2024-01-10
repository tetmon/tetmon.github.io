'use client'

import NextImage from "next/image";
import { ReactElement, ReactSVGElement, createContext, useContext, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

const ActiveContext = createContext(0);

interface IFeature {
  title: string;
  description: string;
  file: string;
  pill?: string;
  hasPadding?: boolean;
  mobilePadding?: boolean;
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


const Features = ({ features, title, icon, dir }: { features: Array<IFeature>, title: string, icon: ReactElement, dir: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pillsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);
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
    const scrollContainer = e.target;
    if (!(scrollContainer instanceof HTMLElement)) return;
    const childElements = Array.from(scrollContainer.childNodes);
    childElements.forEach(async (child, index) => {
      if (!(child instanceof HTMLElement)) return;
      const left = child.getBoundingClientRect().left;
      if (left <= 4) {
        scrollToPill(index);
        return;
      } else if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollToPill(childElements.length - 1);
        return;
      }
    });
  }

  const debouncedScroll = debounce(handleScroll, 100);
  const item = features[activeIndex];

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const intersecting = entry.isIntersecting
        if (intersecting) {
          features.forEach((_f, index) => {
            let im = new Image();
            im.src = features[index].file;
          });
        }
      })
    })
    
    featureRef.current && observer.observe(featureRef.current);
  }, [])

  return (
    <ActiveContext.Provider value={activeIndex}>
      <div className='col-span-full md:grid md:grid-cols-18' ref={featureRef}>
        <div className='md:col-start-2 md:col-end-10 md:max-w-xl md:py-20 xl:col-start-5'>
          <div className="mb-4 flex lg:mb-12">
            {icon}
            <h2 className='flex pt-[5px] text-2xl font-medium text-edgeset md:pl-0 md:text-3xl lg:text-4xl'>
              {title}
            </h2>
          </div>
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
                <div key={item.title} className='max-w-sm snap-start pl-4'>
                  <div className='flex min-w-[300px] max-w-[100vw] flex-col overflow-hidden rounded-md bg-white'>
                    <div className='py-6 pl-5 pr-3'>
                      <h2 className='text-2xl font-medium text-edgeset'>{item.title}.</h2>
                      <span className='text-base text-gray-700' dangerouslySetInnerHTML={{ __html: item.description }}></span>
                    </div>
                    <div className={`box-content flex w-full items-center justify-center rounded-sm bg-edgeset p-4 ${item.hasPadding && !item.mobilePadding ? 'pl-11' : 'p-0'} ${item.mobilePadding ? 'py-4 pl-16' : ''}`}>
                      <NextImage src={item.file} className="h-64 max-w-fit object-contain" alt="hey" width={500} height={300} />
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
          <div ref={pillsRef} className='scrollbar-hide mb-4 ml-2 hidden flex-wrap gap-2 overflow-x-auto md:ml-0 md:flex lg:gap-4 lg:overflow-x-visible'>
            {
              features.map((item, index) => (
                <div key={item.title} className={`min-w-fit ${index !== 0 ? 'mr-0' : 'lg:pl-0'}`} onClick={() => {
                  setActiveIndex(index);
                }}>
                  <button className={`rounded-xl border p-[5px] px-3 text-xs font-medium uppercase lg:text-sm
              ${index === activeIndex ? 'bg-slate-900  text-white' : 'border-slate-400 bg-white text-slate-800'} hover:bg-slate-900 hover:text-white`}>
                    {item.pill ?? item.title}
                  </button>
                </div>))
            }
          </div>
        </div>
        <Snapshots dir={dir} feature={features[activeIndex]} />
      </div>
    </ActiveContext.Provider>
  );
}

export const Snapshots = ({ dir, feature }: { dir: string, feature: IFeature }) => {
  const activeIndex = useContext(ActiveContext);
  const { file, hasPadding } = feature;
  return (
    <CSSTransition key={activeIndex} timeout={200} classNames="snapshot" appear in={true} unmountOnExit>
      <div className={`col-end-16 mt-20 hidden h-80 w-full min-w-[400px] overflow-hidden rounded-md bg-edgeset md:col-start-11 lg:col-start-12 ${hasPadding ? 'pl-12 pt-12' : 'justify-center'} md:flex ${activeIndex === 0 ? 'bg-edgeset' : ''}`}>
        <NextImage src={file} className="relative top-[2px] max-w-fit object-contain" alt="hey" width={500} height={300} />
      </div>
    </CSSTransition>
  )
}


export default Features;