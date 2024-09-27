"use client";

// @ts-ignore
import riveWASMResource from '@rive-app/canvas/rive.wasm';
import Rive, { useRive, Layout, Fit, Alignment, RuntimeLoader } from "@rive-app/react-canvas";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { DINish } from './fonts';
import { createPortal } from 'react-dom';
import Modal from '@/components/modal';
import { CSSTransition } from 'react-transition-group';

RuntimeLoader.setWasmUrl(riveWASMResource);

const Hero = () => {
  const [artboard, setArtboard] = useState('Artboard_sm');
  const [stateMachine, setStateMachine] = useState('hero_sme');
  const containerRef = useRef<HTMLDivElement>(null);
  const [showPortal, togglePortal] = useState(false);

  useLayoutEffect(() => {
    const initialStateMachine = window.innerWidth >= 1024 ? 'hero_sme' : 'hero_sm_sme';
    setStateMachine(initialStateMachine);
  }, [])

  useEffect(() => {
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      if (width >= 1024) {
        console.log('update')
        setArtboard('Artboard')
        setStateMachine('hero_sme')
      } else {
        setArtboard('Artboard_sm')
        setStateMachine('hero_sm_sme')
      }
    })
    if (containerRef.current) {
      ro.observe(containerRef.current)
    }
  }, []);

  console.log('stateMachine', stateMachine)

  return (
    <section className="grid grid-cols-12 gap-8 pt-8 md:pt-16 md:gap-12 relative" ref={containerRef}>
      <h1 className={`text-4xl font-bold col-start-2 col-span-8 ${DINish.className} leading-[40px] xs:col-span-10 xs:col-start-2 md:text-5xl md:leading-[56px] md:text-center`}>Finally, business metrics at your fingertips</h1>
      <p className={`leading-6 text-lg xl:text-xl col-start-2 col-span-10 ${DINish.className} xs:col-span-10 xs:col-start-2 md:col-span-8 md:col-start-3 md:text-center max-w-xl mx-auto leading-relaxed`}>
        Introducing Edgeset, a data virtualization platform that joins up disparate cloud and on-premise data sources to a single access point, within minutes.
      </p>
      {stateMachine === 'hero_sm_sme' ? <div className="col-start-1 col-span-10 h-64 xs:col-start-2">
        <Rive
          src="hero_sm.riv"
          artboard="Artboard_sm"
          stateMachines={["hero_sm_sme"]}
          layout={new Layout({ fit: Fit.Contain, alignment: Alignment.TopCenter })}
          onPlay={() => console.log('play')}
        />
      </div> : null}
      {stateMachine === 'hero_sme' ? <div className="col-start-2 col-span-10 h-96 my-24 mb-36">
        <Rive
          src="hero_sm.riv"
          artboard="Artboard"
          stateMachines={["hero_sme"]}
          layout={new Layout({ fit: Fit.Contain, alignment: Alignment.TopCenter })}
          onPlay={() => console.log('play')}
        />
      </div> : null}
      <div className="col-start-2 col-span-10 flex flex-wrap gap-2 pb-6 mb-10 max-w-md mx-auto lg:hidden">
        <div className="flex gap-1 border border-primary p-1 rounded-lg">
          <svg className='w-6 h-6' viewBox="0 0 293 314" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M146.5 171L0.5 86.5L146.5 0L292.5 86.5L146.5 171Z" fill="#457A8B" />
            <path fillRule="evenodd" clipRule="evenodd" d="M140.126 41L70.9863 80.9177L160.868 132.811L230.007 92.893L140.126 41ZM98.6421 80.9177L105.556 84.9095L126.298 72.9342L119.384 68.9424L98.6421 80.9177ZM115.927 90.8972L157.411 66.9465L164.325 70.9383L122.841 94.8889L115.927 90.8972ZM133.212 100.877L140.126 104.868L181.61 80.9177L174.696 76.926L133.212 100.877Z" fill="white" />
            <path d="M293 224.5L147.5 313.5V172.5L293 88.5V224.5Z" fill="#215F74" />
            <path d="M146 313.5V172.5L0 88V225.5L146 313.5Z" fill="#215F74" />
          </svg>
          <div className={`${DINish.className} text-sm`}>
            Spreadsheets and CSVs
          </div>
        </div>
        <div className="flex gap-1 border border-primary p-1 rounded-lg">
          <svg className='w-6 h-6' viewBox="0 0 293 314" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M146.5 171L0.5 86.5L146.5 0L292.5 86.5L146.5 171Z" fill="#457A8B" />
            <path d="M293 224.5L147.5 313.5V172.5L293 88.5V224.5Z" fill="#215F74" />
            <path d="M146 313.5V172.5L0 88V225.5L146 313.5Z" fill="#215F74" />
            <path fillRule="evenodd" clipRule="evenodd" d="M120.584 70.8434C121.929 70.9199 123.19 70.6324 124.078 70.1199L124.09 70.1269L156.517 51.4052C159.192 49.8609 163.601 49.8609 166.276 51.4052L217.877 81.197C220.552 82.7413 220.548 85.2896 217.877 86.8316L147.44 127.498C144.766 129.043 140.356 129.043 137.681 127.498L75.8797 91.8173C73.2009 90.2707 73.2009 87.7293 75.8797 86.1827L104.495 69.6615L120.584 70.8434Z" fill="white" />
          </svg>
          <div className={`${DINish.className} text-sm`}>
            Cloud Storage
          </div>
        </div>
        <div className="flex gap-1 border border-primary p-1 rounded-lg">
          <svg className='w-6 h-6' viewBox="0 0 293 314" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M146.5 171L0.5 86.5L146.5 0L292.5 86.5L146.5 171Z" fill="#457A8B" />
            <path d="M293 224.5L147.5 313.5V172.5L293 88.5V224.5Z" fill="#215F74" />
            <path d="M146 313.5V172.5L0 88V225.5L146 313.5Z" fill="#215F74" />
            <path d="M145.466 44.1279L73.6791 85.5738C71.6837 86.7259 71.6899 88.6736 73.6791 89.8222L90.2478 99.3881C92.2433 100.54 95.6168 100.537 97.6061 99.3881L169.399 57.9386C171.394 56.7866 171.388 54.8388 169.399 53.6903L152.83 44.1244C150.835 42.9723 147.461 42.9759 145.472 44.1244L145.466 44.1279ZM123.379 72.8213L91.1652 91.42C90.0926 92.0393 88.5586 92.0393 87.486 91.42C86.4135 90.8008 86.4135 89.9151 87.486 89.2959L119.7 70.6972C120.773 70.0779 122.307 70.0779 123.379 70.6972C124.452 71.3164 124.452 72.2021 123.379 72.8213ZM135.345 66.4453C134.117 67.1545 131.972 67.1545 130.743 66.4453C129.515 65.7361 129.515 64.4976 130.743 63.7883C131.972 63.0791 134.117 63.0791 135.345 63.7883C136.574 64.4976 136.574 65.7361 135.345 66.4453ZM144.549 61.1314C143.321 61.8406 141.176 61.8406 139.947 61.1314C138.719 60.4222 138.719 59.1836 139.947 58.4744C141.176 57.7652 143.321 57.7652 144.549 58.4744C145.778 59.1836 145.778 60.4222 144.549 61.1314ZM153.753 55.8175C152.525 56.5267 150.38 56.5267 149.151 55.8175C147.923 55.1083 147.923 53.8697 149.151 53.1605C150.38 52.4513 152.525 52.4513 153.753 53.1605C154.982 53.8697 154.982 55.1083 153.753 55.8175Z" fill="white" />
            <path d="M173.077 60.0696L101.29 101.515C99.295 102.668 99.3012 104.615 101.29 105.764L117.859 115.33C119.855 116.482 123.228 116.478 125.217 115.33L197.01 73.8803C199.005 72.7282 198.999 70.7805 197.01 69.632L180.441 60.066C178.446 58.914 175.072 58.9175 173.083 60.066L173.077 60.0696ZM150.99 88.763L118.776 107.362C117.704 107.981 116.17 107.981 115.097 107.362C114.025 106.742 114.025 105.857 115.097 105.238L147.311 86.6388C148.384 86.0196 149.918 86.0196 150.99 86.6388C152.063 87.2581 152.063 88.1437 150.99 88.763ZM162.957 82.387C161.728 83.0962 159.583 83.0962 158.355 82.387C157.126 81.6777 157.126 80.4392 158.355 79.73C159.583 79.0208 161.728 79.0208 162.957 79.73C164.185 80.4392 164.185 81.6777 162.957 82.387ZM172.161 77.073C170.932 77.7822 168.787 77.7822 167.559 77.073C166.33 76.3638 166.33 75.1253 167.559 74.4161C168.787 73.7069 170.932 73.7069 172.161 74.4161C173.389 75.1253 173.389 76.3638 172.161 77.073ZM181.365 71.7591C180.136 72.4683 177.991 72.4683 176.763 71.7591C175.534 71.0499 175.534 69.8114 176.763 69.1022C177.991 68.3929 180.136 68.3929 181.365 69.1022C182.593 69.8114 182.593 71.0499 181.365 71.7591Z" fill="white" />
            <path d="M200.692 76.0117L128.906 117.458C126.91 118.61 126.916 120.557 128.906 121.706L145.474 131.272C147.47 132.424 150.843 132.42 152.833 131.272L224.625 89.8224C226.621 88.6704 226.615 86.7226 224.625 85.5741L208.057 76.0082C206.061 74.8561 202.688 74.8597 200.698 76.0082L200.692 76.0117ZM178.606 104.705L146.392 123.304C145.319 123.923 143.785 123.923 142.713 123.304C141.64 122.685 141.64 121.799 142.713 121.18L174.927 102.581C175.999 101.962 177.533 101.962 178.606 102.581C179.678 103.2 179.678 104.086 178.606 104.705ZM190.572 98.3291C189.344 99.0383 187.198 99.0383 185.97 98.3291C184.742 97.6199 184.742 96.3813 185.97 95.6721C187.198 94.9629 189.344 94.9629 190.572 95.6721C191.8 96.3813 191.8 97.6199 190.572 98.3291ZM199.776 93.0152C198.548 93.7244 196.402 93.7244 195.174 93.0152C193.946 92.306 193.946 91.0674 195.174 90.3582C196.402 89.649 198.548 89.649 199.776 90.3582C201.004 91.0674 201.004 92.306 199.776 93.0152ZM208.98 87.7013C207.752 88.4105 205.606 88.4105 204.378 87.7013C203.15 86.992 203.15 85.7535 204.378 85.0443C205.606 84.3351 207.752 84.3351 208.98 85.0443C210.208 85.7535 210.208 86.992 208.98 87.7013Z" fill="white" />
          </svg>
          <div className={`${DINish.className} text-sm`}>
            Cloud and on-premise Databases
          </div>
        </div>
        <div className="flex gap-1 border border-primary p-1 rounded-md">
          <svg className='w-6 h-6' viewBox="0 0 293 314" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M146.5 171L0.5 86.5L146.5 0L292.5 86.5L146.5 171Z" fill="#457A8B" />
            <path d="M293 224.5L147.5 313.5V172.5L293 88.5V224.5Z" fill="#215F74" />
            <path d="M146 313.5V172.5L0 88V225.5L146 313.5Z" fill="#215F74" />
            <path d="M176.605 65.4093L215.704 87.9832L218.768 89.7521L193.348 104.429L166 88.8212L146.737 99.9428L170.043 113.398L173.927 115.641L149.807 129.567L137.508 122.465L107.645 105.224" fill="white" />
            <path d="M108.563 105.754L93.7854 114.286L102.258 62.2993L192.301 57.4078L177.523 65.9395" fill="white" />
          </svg>
          <div className={`${DINish.className} text-sm`}>
            Data warehouses
          </div>
        </div>
        <div className="flex gap-1 border border-primary  p-1 rounded-md">
          <svg className='w-6 h-6' viewBox="0 0 293 314" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M146.5 171L0.5 86.5L146.5 0L292.5 86.5L146.5 171Z" fill="#457A8B" />
            <path d="M293 224.5L147.5 313.5V172.5L293 88.5V224.5Z" fill="#215F74" />
            <path d="M146 313.5V172.5L0 88V225.5L146 313.5Z" fill="#215F74" />
            <path d="M179.212 63.7555L171.254 60.2285L168.549 51.9234L147.584 49.7535L140.947 58.3399L130.681 59.5123L119.52 54.8444L103.561 61.9559L108.108 70.2572L103.332 75.3031L88.7602 76.8328L83.351 86.8392L96.9205 90.8126L99.7939 97.3328L91.0438 104.402L104.183 113.77L116.267 110.276C116.267 110.276 129.297 113.723 128.376 114.255C127.458 114.785 130.17 122.746 130.17 122.746L149.147 125.183L156.554 115.261L167.279 114.714L178.881 120.349L195.469 113.246L190.305 105.301L195.23 100.685L210.561 98.1875L213.987 87.7461L200.835 83.7011L197.807 78.4049L207.035 70.2469L194.848 60.3692L179.212 63.7555ZM169.731 98.7311C158.267 105.35 140.14 105.606 129.231 99.3083C118.318 93.0075 118.763 82.5417 130.227 75.9232C141.667 69.3183 159.809 69.0528 170.722 75.3536C181.631 81.6517 181.171 92.1262 169.731 98.7311Z" fill="white" />
          </svg>

          <div className={`${DINish.className} text-sm`}>
            IOT data and APIs
          </div>
        </div>
        <div className="flex gap-1 bg-white p-1 rounded-md border border-primary">
          <svg className='w-6 h-6' viewBox="0 0 293 314" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M146.5 171L0.5 86.5L146.5 0L292.5 86.5L146.5 171Z" fill="#457A8B" />
            <path d="M110.136 61.75C99.2262 68.0489 93.0968 76.5922 93.0974 85.5C93.0974 94.4081 99.2266 102.951 110.136 109.25C121.046 115.549 135.844 119.088 151.272 119.087C166.702 119.087 181.499 115.549 192.409 109.25C203.318 102.951 209.448 94.4078 209.447 85.5C209.447 76.5919 203.318 68.0487 192.409 61.75C181.499 55.4513 166.701 51.9123 151.272 51.9127C135.843 51.9127 121.046 55.4513 110.136 61.75ZM157.649 63.7733L166.789 95.4403C167.101 96.5226 166.575 97.6306 165.348 98.4682C165.229 98.5473 165.109 98.6219 164.984 98.6939C163.772 99.3946 162.128 99.7874 160.414 99.7865L132.989 99.7865C130.694 99.775 128.582 99.0611 127.44 97.9116C126.299 96.7616 126.299 95.3488 127.441 94.1993C128.583 93.0498 130.695 92.3358 132.989 92.3239L152.782 92.3227L144.896 65.0031C144.516 63.6879 145.379 62.3554 147.162 61.5078C148.945 60.66 151.376 60.4254 153.538 60.8929C155.702 61.3603 157.269 62.458 157.649 63.7733Z" fill="white" />
            <path d="M293 224.5L147.5 313.5V172.5L293 88.5V224.5Z" fill="#215F74" />
            <path d="M146 313.5V172.5L0 88V225.5L146 313.5Z" fill="#215F74" />
          </svg>
          <div className={`${DINish.className} text-sm `}>
            Dashboards, Analytics and Reports
          </div>
        </div>
        <div className="flex gap-1 border border-primary p-1 rounded-md">
          <svg className='w-6 h-6' viewBox="0 0 293 314" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M146.5 171L0.5 86.5L146.5 0L292.5 86.5L146.5 171Z" fill="#457A8B" />
            <path d="M110.136 61.75C99.2262 68.0489 93.0968 76.5922 93.0974 85.5C93.0974 94.4081 99.2266 102.951 110.136 109.25C121.046 115.549 135.844 119.088 151.272 119.087C166.702 119.087 181.499 115.549 192.409 109.25C203.318 102.951 209.448 94.4078 209.447 85.5C209.447 76.5919 203.318 68.0487 192.409 61.75C181.499 55.4513 166.701 51.9123 151.272 51.9127C135.843 51.9127 121.046 55.4513 110.136 61.75ZM157.649 63.7733L166.789 95.4403C167.101 96.5226 166.575 97.6306 165.348 98.4682C165.229 98.5473 165.109 98.6219 164.984 98.6939C163.772 99.3946 162.128 99.7874 160.414 99.7865L132.989 99.7865C130.694 99.775 128.582 99.0611 127.44 97.9116C126.299 96.7616 126.299 95.3488 127.441 94.1993C128.583 93.0498 130.695 92.3358 132.989 92.3239L152.782 92.3227L144.896 65.0031C144.516 63.6879 145.379 62.3554 147.162 61.5078C148.945 60.66 151.376 60.4254 153.538 60.8929C155.702 61.3603 157.269 62.458 157.649 63.7733Z" fill="white" />
            <path d="M293 224.5L147.5 313.5V172.5L293 88.5V224.5Z" fill="#215F74" />
            <path d="M146 313.5V172.5L0 88V225.5L146 313.5Z" fill="#215F74" />
          </svg>
          <div className={`${DINish.className} text-sm`}>
            Data Virtualization and Integration
          </div>
        </div>
      </div>
      {
        typeof window !== 'undefined' ? createPortal(
          <CSSTransition
            classNames="portal-fade"
            in={showPortal}
            timeout={100}
            unmountOnExit
          >
            <Modal onClose={() => togglePortal(false)} />
          </CSSTransition>,
          document.body
        ) : null
      }
      <div className="hidden absolute -bottom-1 right-[55vw] h-9 w-screen skew-x-[45deg] bg-primary lg:right-[70vw] lg:block lg:h-8" aria-hidden="true"></div>
    </section >
  )
}


export default Hero;