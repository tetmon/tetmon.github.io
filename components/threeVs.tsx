'use client';
import { useEffect, useState, useRef, FC } from 'react';
import Link from 'next/link'
import Navbar from "@/components/navbar-tp";
import { DINish, VT323 } from '../app/fonts';

// Add debounce utility at the top level
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;

  const debounced = (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };

  // Add cancel method to the debounced function
  debounced.cancel = () => {
    clearTimeout(timeout);
  };

  return debounced;
};

const hasCardParent = (element: HTMLElement | null): boolean => {
  if (!element) return false;
  if (element.dataset.card) return true;
  return hasCardParent(element.parentElement);
};

const Keyboard: FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(true);

  // Reset hasLoaded after initial animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(false);
    }, 2000); // Adjust timing based on your animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="flex flex-col items-center gap-1 w-fit"
      title='Keyboard Navigation Support'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top button */}
      <div className={`w-6 h-6 bg-none border border-whiteLight2 rounded-sm flex items-center justify-center ${isHovered || hasLoaded ? 'animate-keyboard-up' : ''}`}>
        <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[6px] border-b-whiteLight2" />
      </div>

      {/* Middle row */}
      <div className="flex gap-1">
        {/* Left button */}
        <div className="w-6 h-6 border border-whiteLight2 rounded-sm flex items-center justify-center">
          <div className="w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-r-[6px] border-r-whiteLight2" />
        </div>

        {/* Down button */}
        <div className={`w-6 h-6 border border-whiteLight2 rounded-sm flex items-center justify-center ${isHovered || hasLoaded ? 'animate-keyboard-down' : ''}`}>
          <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[6px] border-b-whiteLight2 rotate-180" />
        </div>

        {/* Right button */}
        <div className="w-6 h-6 border border-whiteLight2 rounded-sm flex items-center justify-center">
          <div className="w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-r-[6px] border-r-whiteLight2 rotate-180" />
        </div>
      </div>
    </div>
  );
}

const Manual: FC = () => {
  const [showClickLines, setShowClickLines] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowClickLines(true);
      setTimeout(() => setShowClickLines(false), 1000); // Hide lines after 1 second
    }, 2000); // Trigger every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-8 h-10" onAnimationEnd={() => setShowClickLines(true)}>
      {showClickLines && (
        <svg className="absolute w-16 h-16 -left-4 -top-3" viewBox="0 0 100 100">
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <line
              key={i}
              x1={50 + 30 * Math.cos(angle * Math.PI / 180)}
              y1={50 + 30 * Math.sin(angle * Math.PI / 180)}
              x2={(50 + 40 * Math.cos(angle * Math.PI / 180))}
              y2={(50 + 40 * Math.sin(angle * Math.PI / 180))}
              stroke="rgb(255, 255, 255, 0.5)"
              strokeDasharray="40"
              strokeWidth="2"
              className='animate-click-line'
            />
          ))}
        </svg>
      )}
      <svg
        fill="rgb(255, 255, 255, 0.5)"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        className={showClickLines ? 'animate-cursor-click w-full h-full' : 'w-full h-full'}
        strokeWidth={0.5}
      >
        <path d="M83.3,43.9c0-0.4-0.2-2.4-2-4.4c-1.9-2.2-4.9-3.4-8.8-3.7c-0.4-0.6-0.9-1.2-1.7-1.8c-2.2-1.7-5.6-2.6-10-2.7  c-0.4-0.5-1.1-1.1-1.9-1.7c-2-1.4-4.5-2.2-7.6-2.5V19c0-0.8,0.1-4.2-2.2-6.6c-1-1.1-2.9-2.4-6.1-2.4c-3.3,0-5.2,1.3-6.3,2.4  c-2.1,2.3-2.1,5.3-2.1,6v28.6c-1.9-2-4-4.2-5.2-5c-2.5-1.9-7.2-0.9-9.9,1.1c-2.6,1.9-3.5,4.8-2.5,7.6c1.8,5,6.3,10,7.4,11.2  c1,1.9,5.5,10.2,9.5,13.2c2.1,1.6,3.7,8.2,4.1,12.4l0.2,2.2h37.8v-9.9c0.5-1.4,1.7-4.4,3-5.8c3.1-3.1,4.1-10.9,4.1-13.3V44  L83.3,43.9z M78.4,60.5c0,2.9-1.2,8.4-2.7,9.9c-2.6,2.6-4.2,7.6-4.3,8.1l-0.1,0.3v5.8H42.7c-0.2-1.1-0.4-2.5-0.8-4  c-1.2-4.8-2.8-7.9-4.9-9.5c-2.9-2.2-7-9.3-8.3-11.9l-0.2-0.3l-0.2-0.3c0-0.1-4.9-5.1-6.6-9.7c-0.2-0.6-0.2-1.1,0.5-1.8  c1.3-1.2,3.8-1.5,4.4-1.3c1.5,1.2,6.1,6.1,8.7,9l4.3,4.8V18.3l0-0.1l0-0.1c0-0.4,0.1-1.7,0.8-2.4c0.5-0.6,1.4-0.9,2.7-0.9  c1.1,0,1.9,0.3,2.5,0.8c0.8,0.9,0.9,2.5,0.9,3.1l0,10.7h0v15.2h4.9V32c4.5,0.5,5.8,2.4,6,2.7l0.2,0.5v9.4h4.9v-8.3  c4.2,0.4,5.8,1.7,6.2,2.3v9.5h4.9v-7.3c4.3,0.6,5,2.9,5.1,3.4V60.5z" />
      </svg>
    </div>
  );
};


const Streaming: FC = () => {
  return (
    <div className="relative w-10 h-8">
      <svg viewBox="10 14 80 80" className='w-full h-full'>
        {/* Horizontal dashed lines */}
        <line
          x1="0"
          y1="20"
          x2="100"
          y2="20"
          stroke="rgb(255, 255, 255, 0.5)"
          strokeWidth="3"
          strokeDasharray="10,5"
          className='animate-stream-right'
        />
        <line
          x1="0"
          y1="40"
          x2="100"
          y2="40"
          stroke="rgb(255, 255, 255, 0.5)"
          strokeWidth="3"
          strokeDasharray="10,5"
          className='animate-stream-left'
        />
        <line
          x1="0"
          y1="60"
          x2="100"
          y2="60"
          stroke="rgb(255, 255, 255, 0.5)"
          strokeWidth="3"
          strokeDasharray="10,5"
          className='animate-stream-right'
        />
        <line
          x1="0"
          y1="80"
          x2="100"
          y2="80"
          stroke="rgb(255, 255, 255, 0.5)"
          strokeWidth="3"
          strokeDasharray="10,5"
          className='animate-stream-left'
        />
      </svg>
    </div>
  );
};

const OnDemand: FC<{ sm?: boolean }> = ({ sm }) => {
  return (
    <div className="relative w-10 h-10">
      <svg viewBox={"-20 -20 130 130"} fill="none" className='w-full h-full'>
        <polygon points="78.3,38.3 58.2,38.3 75.3,2.5 41.3,2.5 21.7,54.3 38,54.3 22.2,97.5"
          stroke="rgb(255, 255, 255, 0.5)"
          strokeWidth="4"
          fill="none" />

        <line x1="0" y1="0" x2="10" y2="0" stroke="rgb(255, 255, 255, 0.5)" strokeWidth="4">
          <animateMotion
            path="M78.3,38.3 L58.2,38.3 L75.3,2.5 L41.3,2.5 L21.7,54.3 L38,54.3 L22.2,97.5 Z"
            dur="2s"
            repeatCount="indefinite"
            rotate="auto"
          />
        </line>
      </svg>
    </div>
  );
};

const OnBatch: FC = () => {
  return (
    <div className='relative w-8 h-10 lg:h-10 overflow-x-hidden'>
      <svg viewBox="0 0 100 100" fill="none" className='w-full h-full'>
        {/* Static box */}
        <rect
          x="10"
          y="35"
          width="25"
          height="25"
          stroke="rgb(255, 255, 255, 0.5)"
          strokeWidth="4"
          fill="none"
        >
          <animate
            attributeName="x"
            values="10;10;-50"
            dur="2s"
            repeatCount="indefinite"
            begin="2s"
          />
        </rect>

        {/* Sliding box */}
        <rect
          x="110"
          y="35"
          width="25"
          height="25"
          stroke="rgb(255, 255, 255, 0.5)"
          strokeWidth="4"
          fill="none"
        >
          <animate
            attributeName="x"
            values="110;45;-20"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>

        {/* Third sliding box */}
        <rect
          x="170"
          y="35"
          width="25"
          height="25"
          stroke="rgb(255, 255, 255, 0.5)"
          strokeWidth="4"
          fill="none"
        >
          <animate
            attributeName="x"
            values="170;80;10"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  )
}

const DynamicAreaChart: FC<{
  areaPath: string,  // Format: "M0,100 L100,0 L100,100 Z"
  linePath: string,  // Format: "M0,100 L100,0"
  width: number,
  height: number,
  strokeWidth?: number
}> = ({ areaPath, linePath, width, height, strokeWidth = 2 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ width: '100%', height: '100%' }}
    >
      <defs>
        <linearGradient id="gradient-area" x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="0%"
            stopColor="rgb(255, 255, 255, 0.8)"
            stopOpacity="0.5"
          />
          <stop
            offset="100%"
            stopColor="rgb(255, 255, 255, 0.8)"
            stopOpacity="0.02"
          />
        </linearGradient>

        {/* Arrow marker definition */}
        <marker
          id="arrowhead"
          markerWidth="12"
          markerHeight="12"
          refX="8"
          refY="5"
          orient="auto"
          fill="rgba(255, 255, 255, 0.3)"
        >
          <polygon points="0 0, 12 5, 0 12" />
        </marker>
      </defs>

      {/* X-axis (horizontal dotted line with arrow) */}
      <line
        x1="0"
        y1={height - 1}
        x2={width}
        y2={height - 1}
        stroke="rgba(255, 255, 255, 0.8)"
        strokeWidth="1"
        strokeDasharray="7,7"
        markerEnd="url(#arrowhead)"
      />

      {/* Y-axis (vertical dotted line with arrow) */}
      <line
        x1="0"
        y1={height}
        x2="0"
        y2="0"
        stroke="rgba(255, 255, 255, 0.8)"
        strokeWidth="1"
        strokeDasharray="7,7"
        markerEnd="url(#arrowhead)"
      />

      {/* Area path with stroke */}
      <path
        fill="url(#gradient-area)"
        fillOpacity="1"
        d={areaPath}
      />

      {/* M0,88.88888888888889 L100,-11.111111111111114 */}
      {/* M0,100 L0,88.88888888888889 L100,-11.111111111111114 L100,100 Z */}

      {/* Line on top with stronger stroke */}
      <path
        fill="none"
        stroke="rgba(255, 255, 255, 0.5)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        d={linePath}
      />
    </svg>
  );
};

const User: FC = () => {
  return (
    <div className='relative w-8 h-8 top-2'>
      <svg className='w-full h-full' version="1.1" x="0px" y="0px" viewBox="0 0 42 42" strokeWidth={1.5} fill='none' stroke='rgb(255, 255, 255, 0.5)'><g display="none"><g display="inline"><g><path d="M16,1c3.926,0,7.12,3.194,7.12,7.12s-3.194,7.12-7.12,7.12s-7.12-3.194-7.12-7.12S12.074,1,16,1 M16,0     c-4.484,0-8.12,3.635-8.12,8.12s3.635,8.12,8.12,8.12s8.12-3.635,8.12-8.12S20.484,0,16,0L16,0z" /></g><g><path d="M16,19.001c6.102,0,11.216,5.295,11.803,11.999H4.197C4.784,24.296,9.898,19.001,16,19.001 M16,18.001     C8.98,18.001,3.284,24.244,3.144,32h25.713C28.716,24.244,23.02,18.001,16,18.001L16,18.001z" /></g></g></g><g><path d="M7.88,8.12c0,4.484,3.635,8.12,8.12,8.12s8.12-3.635,8.12-8.12S20.484,0,16,0S7.88,3.635,7.88,8.12z M23.62,8.12   c0,4.201-3.418,7.62-7.62,7.62c-4.201,0-7.62-3.418-7.62-7.62c0-4.201,3.418-7.62,7.62-7.62C20.201,0.5,23.62,3.918,23.62,8.12z" /><path d="M28.856,32C28.716,24.244,23.02,18.001,16,18.001S3.284,24.244,3.144,32H28.856z M16,18.501   c6.526,0,11.967,5.786,12.339,12.999H3.661C4.033,24.287,9.474,18.501,16,18.501z" /></g></svg>
    </div>
  )
}

const SingleSource: FC = () => {
  return (
    <div className='relative w-8 h-8'>
      <svg width="17" height="17" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2}>
        <path d="M44.2058 5.56882C40.7207 2.5235 33.1614 -0.000610352 23.4926 -0.000610352C13.8238 -0.000610352 6.26447 2.5235 2.77941 5.56882C1.41776 6.7587 0.669434 8.03643 0.669434 9.26715C0.669434 13.6561 10.0415 18.5411 23.4928 18.5411C36.944 18.5411 46.3161 13.6561 46.3161 9.26715C46.3161 8.03016 45.5756 6.7587 44.2058 5.56882Z" stroke="rgb(255, 255, 255, 0.5)" />
        <path d="M0.677979 44.8371V55.0216C0.677979 59.4106 10.0501 64.2956 23.493 64.2956C36.9387 64.2956 46.308 59.4106 46.308 55.0216V44.8371C42.4339 48.9184 33.8942 51.6278 23.493 51.6278C13.0918 51.6278 4.54895 48.9184 0.677979 44.8371ZM4.53588 55.6083C3.68485 55.6083 2.98784 54.7952 2.98784 53.8094C2.98784 52.8204 3.68754 52.0011 4.53588 52.0011C5.38691 52.0011 6.09202 52.8142 6.09202 53.8094C6.09202 54.8046 5.39231 55.6083 4.53588 55.6083Z" stroke="rgb(255, 255, 255, 0.5)" />
        <path d="M46.308 29.5762C42.4339 33.6669 33.8942 36.3826 23.493 36.3826C13.0918 36.3826 4.54895 33.6732 0.677979 29.5762V39.7607C0.677979 44.1497 10.0501 49.0347 23.493 49.0347C36.9387 49.0347 46.308 44.1497 46.308 39.7607V29.5762ZM4.53581 40.3764C3.68478 40.3764 2.98777 39.5632 2.98777 38.5774C2.98777 37.5885 3.68748 36.7785 4.53581 36.7785C5.38685 36.7785 6.09195 37.5916 6.09195 38.5774C6.09195 39.5664 5.39224 40.3764 4.53581 40.3764Z" stroke="rgb(255, 255, 255, 0.5)" />
        <path d="M46.308 14.3468C42.4339 18.4375 33.8942 21.1469 23.493 21.1469C13.0918 21.1469 4.54895 18.4375 0.677979 14.3468V24.5064C0.677979 28.8954 10.0501 33.7804 23.493 33.7804C36.9387 33.7804 46.308 28.8954 46.308 24.5064V14.3468ZM4.53581 25.1558C3.68478 25.1558 2.98777 24.3427 2.98777 23.3475C2.98777 22.3523 3.68748 21.5486 4.53581 21.5486C5.38685 21.5486 6.09195 22.3617 6.09195 23.3475C6.09195 24.3364 5.39224 25.1558 4.53581 25.1558Z" stroke="rgb(255, 255, 255, 0.5)" />
      </svg>
    </div>
  )
}

const MultiSource: FC = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 90 78" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2}>
      <path d="M43.5813 5.56943C40.0962 2.52411 32.5369 0 22.8681 0C13.1993 0 5.63995 2.52411 2.1549 5.56943C0.79325 6.75931 0.0449219 8.03704 0.0449219 9.26776C0.0449219 13.6567 9.41701 18.5417 22.8682 18.5417C36.3195 18.5417 45.6916 13.6567 45.6916 9.26776C45.6916 8.03078 44.951 6.75931 43.5813 5.56943Z" stroke="rgb(255, 255, 255, 0.5)" />
      <path d="M0.0539551 44.8377V55.0222C0.0539551 59.4112 9.42604 64.2962 22.869 64.2962C36.3147 64.2962 45.684 59.4112 45.684 55.0222V44.8377C41.8098 48.919 33.2702 51.6284 22.869 51.6284C12.4678 51.6284 3.92493 48.919 0.0539551 44.8377ZM3.91186 55.609C3.06082 55.609 2.36381 54.7958 2.36381 53.81C2.36381 52.8211 3.06352 52.0017 3.91186 52.0017C4.76289 52.0017 5.46799 52.8148 5.46799 53.81C5.46799 54.8052 4.76829 55.609 3.91186 55.609Z" stroke="rgb(255, 255, 255, 0.5)" />
      <path d="M45.684 29.5767C41.8098 33.6674 33.2702 36.3831 22.869 36.3831C12.4678 36.3831 3.92493 33.6738 0.0539551 29.5767V39.7613C0.0539551 44.1502 9.42604 49.0352 22.869 49.0352C36.3147 49.0352 45.684 44.1502 45.684 39.7613V29.5767ZM3.91179 40.3769C3.06076 40.3769 2.36374 39.5638 2.36374 38.578C2.36374 37.589 3.06345 36.779 3.91179 36.779C4.76282 36.779 5.46792 37.5921 5.46792 38.578C5.46792 39.5669 4.76822 40.3769 3.91179 40.3769Z" stroke="rgb(255, 255, 255, 0.5)" />
      <path d="M45.684 14.3475C41.8098 18.4382 33.2702 21.1476 22.869 21.1476C12.4678 21.1476 3.92493 18.4382 0.0539551 14.3475V24.5072C0.0539551 28.8961 9.42604 33.7811 22.869 33.7811C36.3147 33.7811 45.684 28.8961 45.684 24.5072V14.3475ZM3.91179 25.1566C3.06076 25.1566 2.36374 24.3434 2.36374 23.3482C2.36374 22.353 3.06345 21.5493 3.91179 21.5493C4.76282 21.5493 5.46792 22.3624 5.46792 23.3482C5.46792 24.3372 4.76822 25.1566 3.91179 25.1566Z" stroke="rgb(255, 255, 255, 0.5)" />
      <path d="M87.2056 18.5688C83.7204 15.5235 76.1612 12.9994 66.4924 12.9994C56.8236 12.9994 49.2642 15.5235 45.7792 18.5688C44.4175 19.7587 43.6692 21.0364 43.6692 22.2671C43.6692 26.6561 53.0413 31.5411 66.4925 31.5411C79.9437 31.5411 89.3158 26.6561 89.3158 22.2671C89.3158 21.0302 88.5753 19.7587 87.2056 18.5688Z" stroke="rgb(255, 255, 255, 0.5)" />
      <path d="M43.6777 57.8371V68.0216C43.6777 72.4106 53.0498 77.2956 66.4928 77.2956C79.9385 77.2956 89.3078 72.4106 89.3078 68.0216V57.8371C85.4336 61.9184 76.894 64.6278 66.4928 64.6278C56.0915 64.6278 47.5487 61.9184 43.6777 57.8371ZM47.5356 68.6083C46.6846 68.6083 45.9876 67.7952 45.9876 66.8094C45.9876 65.8204 46.6873 65.0011 47.5356 65.0011C48.3867 65.0011 49.0918 65.8142 49.0918 66.8094C49.0918 67.8046 48.3921 68.6083 47.5356 68.6083Z" stroke="rgb(255, 255, 255, 0.5)" />
      <path d="M89.3078 42.5762C85.4336 46.6669 76.894 49.3826 66.4928 49.3826C56.0915 49.3826 47.5487 46.6732 43.6777 42.5762V52.7607C43.6777 57.1497 53.0498 62.0347 66.4928 62.0347C79.9385 62.0347 89.3078 57.1497 89.3078 52.7607V42.5762ZM47.5356 53.3764C46.6845 53.3764 45.9875 52.5632 45.9875 51.5774C45.9875 50.5885 46.6872 49.7785 47.5356 49.7785C48.3866 49.7785 49.0917 50.5916 49.0917 51.5774C49.0917 52.5664 48.392 53.3764 47.5356 53.3764Z" stroke="rgb(255, 255, 255, 0.5)" />
      <path d="M89.3078 27.3468C85.4336 31.4375 76.894 34.1469 66.4928 34.1469C56.0915 34.1469 47.5487 31.4375 43.6777 27.3468V37.5064C43.6777 41.8954 53.0498 46.7804 66.4928 46.7804C79.9385 46.7804 89.3078 41.8954 89.3078 37.5064V27.3468ZM47.5356 38.1558C46.6845 38.1558 45.9875 37.3427 45.9875 36.3475C45.9875 35.3523 46.6872 34.5486 47.5356 34.5486C48.3866 34.5486 49.0917 35.3617 49.0917 36.3475C49.0917 37.3364 48.392 38.1558 47.5356 38.1558Z" stroke="rgb(255, 255, 255, 0.5)" />
    </svg>
  )
}

const MixedSource: FC = () => {
  return (
    <div className='flex items-center gap-2'>
      <SingleSource />
      <div className='relative w-8 h-8'>
        <svg width="12" height="13" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.849854 4.13727H9.39704C10.339 4.13727 11.1801 3.72704 11.7444 3.08661C10.5672 1.63417 8.71952 0.697296 6.64053 0.697296C4.09488 0.697296 1.89482 2.10083 0.849854 4.13727Z" stroke="rgb(255, 255, 255, 0.5)" strokeWidth={0.5} />
          <path d="M8.6727 5.09286H0.461881C0.293743 5.63868 0.201904 6.21544 0.201904 6.81283C0.201904 7.41027 0.293743 7.98707 0.461881 8.53284H8.6727C9.65862 8.53284 10.4836 7.76841 10.4836 6.81283C10.4836 5.8573 9.67877 5.09286 8.6727 5.09286Z" stroke="rgb(255, 255, 255, 0.5)" strokeWidth={0.5} />
          <path d="M11.7664 10.5125C11.2056 9.88642 10.3713 9.48837 9.43724 9.48837H0.849854C1.89482 11.5249 4.09488 12.9284 6.64048 12.9284C8.73231 12.9284 10.5903 11.9802 11.7664 10.5125Z" stroke="rgb(255, 255, 255, 0.5)" strokeWidth={0.5} />
          <path d="M0.461881 5.09286C0.293698 5.63868 0.201904 6.21544 0.201904 6.81283C0.201904 7.41027 0.293698 7.98707 0.461881 8.53284H5.83569C5.97654 8.01684 6.05699 7.44352 6.05699 6.81283C6.05699 6.18219 5.97654 5.60886 5.83569 5.09286H0.461881Z" stroke="rgb(255, 255, 255, 0.2)" strokeWidth={0.5} />
          <path d="M3.40106 1.5191C2.31449 2.13066 1.40907 3.04796 0.845703 4.13733H5.59421C5.1113 3.08619 4.34673 2.20712 3.40106 1.5191Z" stroke="rgb(255, 255, 255, 0.2)" strokeWidth={0.5} />
          <path d="M3.60226 12.2022C4.52779 11.495 5.27226 10.5586 5.73506 9.48837H0.845703C1.44932 10.6351 2.41514 11.5906 3.60226 12.2022Z" stroke="rgb(255, 255, 255, 0.2)" strokeWidth={0.5} />
        </svg>
      </div>
    </div>
  )
}

const MixedFormat: FC = () => {
  return (
    <div className='flex items-center gap-4'>
      <div className='relative w-8 h-8'>
        <svg width="29" height="50" viewBox="0 26 152 232" fill="none" stroke="rgb(255, 255, 255, 0.5)" strokeWidth={2} xmlns="http://www.w3.org/2000/svg">
          <path d="M132.104 170.643H36.189V173.643H132.104V170.643Z" fill="rgb(255, 255, 255, 0.5)" />
          <path d="M132.104 154.234H36.189V157.234H132.104V154.234Z" fill="rgb(255, 255, 255, 0.5)" />
          <path d="M159.444 35.007C159.444 34.998 159.441 34.989 159.441 34.98C159.437 34.962 159.434 34.944 159.43 34.926C159.412 34.568 159.279 34.214 159.005 33.94L131.505 6.44C131.027 5.962 130.317 5.895 129.75 6.197H10.324C9.49497 6.197 8.82397 6.868 8.82397 7.697V202.802C8.82397 203.63 9.49497 204.302 10.324 204.302H157.968C158.796 204.302 159.468 203.63 159.468 202.802V35.252C159.468 35.168 159.457 35.087 159.444 35.007ZM131.958 11.135L154.575 33.752H131.958V11.135ZM156.468 201.303H11.824V9.197H128.958V35.253C128.958 36.082 129.63 36.753 130.458 36.753H156.468V201.303Z" fill="rgb(255, 255, 255, 0.5)" />
          <path d="M135.128 77.1406V107H127.95L117.389 88.4199V107H110.19V77.1406H117.389L127.95 95.7207V77.1406H135.128Z" fill="rgb(255, 255, 255, 0.5)" />
          <path d="M106.458 91.4756V92.6855C106.458 94.9688 106.137 97.0195 105.494 98.8379C104.865 100.643 103.97 102.188 102.808 103.473C101.646 104.744 100.271 105.722 98.6855 106.405C97.0996 107.075 95.3496 107.41 93.4355 107.41C91.5078 107.41 89.7441 107.075 88.1445 106.405C86.5586 105.722 85.1777 104.744 84.002 103.473C82.8398 102.188 81.9375 100.643 81.2949 98.8379C80.666 97.0195 80.3516 94.9688 80.3516 92.6855V91.4756C80.3516 89.1924 80.666 87.1416 81.2949 85.3232C81.9375 83.5049 82.833 81.96 83.9814 80.6885C85.1436 79.4033 86.5176 78.4258 88.1035 77.7559C89.7031 77.0723 91.4668 76.7305 93.3945 76.7305C95.3086 76.7305 97.0586 77.0723 98.6445 77.7559C100.244 78.4258 101.625 79.4033 102.787 80.6885C103.949 81.96 104.852 83.5049 105.494 85.3232C106.137 87.1416 106.458 89.1924 106.458 91.4756ZM99.1572 92.6855V91.4346C99.1572 89.958 99.0273 88.6592 98.7676 87.5381C98.5215 86.4033 98.1523 85.4531 97.6602 84.6875C97.168 83.9219 96.5596 83.3477 95.835 82.9648C95.124 82.5684 94.3105 82.3701 93.3945 82.3701C92.4375 82.3701 91.6035 82.5684 90.8926 82.9648C90.1816 83.3477 89.5869 83.9219 89.1084 84.6875C88.6299 85.4531 88.2676 86.4033 88.0215 87.5381C87.7891 88.6592 87.6729 89.958 87.6729 91.4346V92.6855C87.6729 94.1484 87.7891 95.4473 88.0215 96.582C88.2676 97.7031 88.6299 98.6533 89.1084 99.4326C89.6006 100.212 90.2021 100.8 90.9131 101.196C91.6377 101.593 92.4785 101.791 93.4355 101.791C94.3516 101.791 95.165 101.593 95.876 101.196C96.5869 100.8 97.1816 100.212 97.6602 99.4326C98.1523 98.6533 98.5215 97.7031 98.7676 96.582C99.0273 95.4473 99.1572 94.1484 99.1572 92.6855Z" fill="rgb(255, 255, 255, 0.5)" />
          <path d="M70.2822 99.0635C70.2822 98.5986 70.2139 98.1816 70.0771 97.8125C69.9404 97.4297 69.6875 97.0742 69.3184 96.7461C68.9492 96.418 68.416 96.0898 67.7188 95.7617C67.0352 95.4199 66.1328 95.0645 65.0117 94.6953C63.6992 94.2578 62.4346 93.7656 61.2178 93.2188C60.001 92.6582 58.9141 92.0088 57.957 91.2705C57 90.5186 56.2412 89.6436 55.6807 88.6455C55.1201 87.6338 54.8398 86.458 54.8398 85.1182C54.8398 83.833 55.127 82.6777 55.7012 81.6523C56.2754 80.6133 57.0752 79.7314 58.1006 79.0068C59.1396 78.2686 60.3564 77.708 61.751 77.3252C63.1455 76.9287 64.6699 76.7305 66.3242 76.7305C68.5117 76.7305 70.4395 77.1133 72.1074 77.8789C73.7891 78.6309 75.1016 79.7041 76.0449 81.0986C77.002 82.4795 77.4805 84.1133 77.4805 86H70.3232C70.3232 85.248 70.166 84.585 69.8516 84.0107C69.5508 83.4365 69.0928 82.9854 68.4775 82.6572C67.8623 82.3291 67.0898 82.165 66.1602 82.165C65.2578 82.165 64.499 82.3018 63.8838 82.5752C63.2686 82.8486 62.8037 83.2178 62.4893 83.6826C62.1748 84.1338 62.0176 84.6328 62.0176 85.1797C62.0176 85.6309 62.1406 86.041 62.3867 86.4102C62.6465 86.7656 63.0088 87.1006 63.4736 87.415C63.9521 87.7295 64.5264 88.0303 65.1963 88.3174C65.8799 88.6045 66.6455 88.8848 67.4932 89.1582C69.0791 89.6641 70.4873 90.2314 71.7178 90.8604C72.9619 91.4756 74.0078 92.1797 74.8555 92.9727C75.7168 93.752 76.3662 94.6406 76.8037 95.6387C77.2549 96.6367 77.4805 97.7646 77.4805 99.0225C77.4805 100.362 77.2207 101.552 76.7012 102.591C76.1816 103.63 75.4365 104.512 74.4658 105.236C73.4951 105.947 72.333 106.487 70.9795 106.856C69.626 107.226 68.1152 107.41 66.4473 107.41C64.916 107.41 63.4053 107.219 61.915 106.836C60.4385 106.439 59.0986 105.838 57.8955 105.031C56.6924 104.211 55.7285 103.165 55.0039 101.894C54.293 100.608 53.9375 99.084 53.9375 97.3203H61.1562C61.1562 98.1953 61.2725 98.9336 61.5049 99.5352C61.7373 100.137 62.0791 100.622 62.5303 100.991C62.9814 101.347 63.5352 101.606 64.1914 101.771C64.8477 101.921 65.5996 101.996 66.4473 101.996C67.3633 101.996 68.1016 101.866 68.6621 101.606C69.2227 101.333 69.6328 100.978 69.8926 100.54C70.1523 100.089 70.2822 99.5967 70.2822 99.0635Z" fill="rgb(255, 255, 255, 0.5)" />
          <path d="M43.1504 97.6279V77.1406H50.3281V97.6279C50.3281 99.624 49.8701 101.354 48.9541 102.816C48.0518 104.279 46.8213 105.414 45.2627 106.221C43.7178 107.014 41.9814 107.41 40.0537 107.41C38.0576 107.41 36.2803 107.075 34.7217 106.405C33.1768 105.735 31.96 104.703 31.0713 103.309C30.1963 101.914 29.7588 100.137 29.7588 97.9766H36.9775C36.9775 98.9883 37.0938 99.7812 37.3262 100.355C37.5586 100.916 37.9004 101.312 38.3516 101.545C38.8164 101.764 39.3838 101.873 40.0537 101.873C40.71 101.873 41.2637 101.709 41.7148 101.381C42.1797 101.039 42.5352 100.554 42.7812 99.9248C43.0273 99.2822 43.1504 98.5166 43.1504 97.6279Z" fill="rgb(255, 255, 255, 0.5)" />
        </svg>
      </div>
      <div className='relative w-8 h-8'>
        <svg width="30" height="60" viewBox="0 130 160 60" fill="none" stroke="rgb(255, 255, 255, 0.5)" strokeWidth={2} xmlns="http://www.w3.org/2000/svg">
          <path d="M124.104 164.643H28.189V167.643H124.104V164.643Z" fill="rgb(255, 255, 255, 0.5)" />
          <path d="M124.104 148.234H28.189V151.234H124.104V148.234Z" fill="rgb(255, 255, 255, 0.5)" />
          <path d="M151.444 29.007C151.444 28.998 151.441 28.989 151.441 28.98C151.437 28.962 151.434 28.944 151.43 28.926C151.412 28.568 151.279 28.214 151.005 27.94L123.505 0.439996C123.027 -0.0380037 122.317 -0.105004 121.75 0.196996H2.32397C1.49497 0.196996 0.823975 0.867996 0.823975 1.697V196.802C0.823975 197.63 1.49497 198.302 2.32397 198.302H149.968C150.796 198.302 151.468 197.63 151.468 196.802V29.252C151.468 29.168 151.457 29.087 151.444 29.007ZM123.958 5.135L146.575 27.752H123.958V5.135ZM148.468 195.303H3.82397V3.197H120.958V29.253C120.958 30.082 121.63 30.753 122.458 30.753H148.468V195.303Z" fill="rgb(255, 255, 255, 0.5)" />
          <path d="M52.8729 100.423L49.4139 93.506C47.9959 90.841 47.0889 88.856 46.0119 86.645H45.8989C45.1049 88.856 44.1409 90.841 42.9509 93.506L39.7749 100.423H29.9089L40.9659 81.088L30.3049 62.207H40.2279L43.5729 69.181C44.7079 71.506 45.5569 73.377 46.4649 75.532H46.5789C47.4859 73.094 48.2229 71.393 49.1859 69.181L52.4179 62.207H62.2839L51.5109 80.861L62.8509 100.423H52.8729Z" fill="rgb(255, 255, 255, 0.5)" />
          <path d="M68.0669 62.207H76.7429V93.166H91.9379V100.424H68.0669V62.207Z" fill="rgb(255, 255, 255, 0.5)" />
          <path d="M97.8888 91.521C100.214 92.712 103.786 93.903 107.472 93.903C111.441 93.903 113.539 92.258 113.539 89.763C113.539 87.382 111.725 86.021 107.132 84.377C100.781 82.166 96.6418 78.65 96.6418 73.093C96.6418 66.572 102.085 61.582 111.101 61.582C115.411 61.582 118.585 62.489 120.854 63.51L118.926 70.484C117.395 69.747 114.673 68.67 110.931 68.67C107.189 68.67 105.374 70.371 105.374 72.356C105.374 74.794 107.528 75.872 112.462 77.743C119.209 80.238 122.384 83.753 122.384 89.14C122.384 95.547 117.451 100.991 106.961 100.991C102.596 100.991 98.2858 99.857 96.1318 98.666L97.8888 91.521Z" fill="rgb(255, 255, 255, 0.5)" />
        </svg>

      </div>
    </div>
  )
}

const Minutes: FC = () => {
  return (
    <div className='relative w-14 h-9'>
      {/* <DynamicAreaChart data={[40, 400]} width={100} height={100} strokeWidth={2} /> */}
      <DynamicAreaChart
        areaPath="M0,100 L0,100 L100,80 L100,100 Z"
        linePath="M0,100 L100,80"
        width={120}
        height={100}
      />
    </div>
  )
}

const Hours: FC = () => {
  return (
    <div className='relative w-14 h-9'>
      <DynamicAreaChart
        areaPath="M0,100 L0,100 L100,70 L100,100 Z"
        linePath="M0,100 L100,70"
        width={120}
        height={100}
      />
    </div>
  )
}

const Exclaimation: FC = () => (
  <svg width="13px" height="13px" viewBox="0 -2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=''>
    <path fillRule="evenodd" clipRule="evenodd" d="M13.7525 2.11124C12.9926 0.729683 11.0075 0.729688 10.2476 2.11124L0.938894 19.0362C0.205794 20.3691 1.17012 22 2.69133 22H21.3088C22.83 22 23.7943 20.3691 23.0612 19.0362L13.7525 2.11124ZM12.0001 3.07507L21.3088 20L2.69133 20L12.0001 3.07507ZM12.0001 8.00004C12.5523 8.00004 13.0001 8.44775 13.0001 9.00004V14C13.0001 14.5523 12.5523 15 12.0001 15C11.4478 15 11.0001 14.5523 11.0001 14V9.00004C11.0001 8.44775 11.4478 8.00004 12.0001 8.00004ZM13.2501 17.75C13.2501 18.4404 12.6904 19 12.0001 19C11.3097 19 10.7501 18.4404 10.7501 17.75C10.7501 17.0597 11.3097 16.5 12.0001 16.5C12.6904 16.5 13.2501 17.0597 13.2501 17.75Z" fill="rgba(255, 255, 255, 0.8)" />
  </svg>
)

const Months: FC = () => {
  return (
    <div className='relative w-14 h-9'>
      <DynamicAreaChart
        areaPath="M0,100 L0,100 L100,5 L100,100 Z"
        linePath="M0,100 L100,5"
        width={125}
        height={100}
      />
    </div>
  )
}

// Colors for each dataset
const colors = [
  { fill: "rgba(26, 107, 38, 0.56)", stroke: "rgb(151, 216, 161)" },
  { fill: "rgba(30, 106, 165, 0.4)", stroke: "rgb(144, 206, 255)" },
  { fill: "rgba(123, 159, 230, 0.2)", stroke: "rgb(202, 187, 255)" },
  { fill: "rgba(237, 109, 133, 0.2)", stroke: "rgb(255, 146, 167)" },
  { fill: "rgba(75, 192, 192, 0.3)", stroke: "rgb(75, 192, 192)" },
];

const centerX = 150;
const centerY = 150;
const radius = 150;

// Generate shape paths for each dataset
const generateShapePath = (data: typeof datasets[0]) => {
  const points = data.map((d, i) => {
    const angle = (Math.PI * 2 * i) / data.length;
    return {
      x: centerX + radius * Math.cos(angle - Math.PI / 2) * d.value,
      y: centerY + radius * Math.sin(angle - Math.PI / 2) * d.value,
    };
  });

  return points.map((p, i) => (
    i === 0 ? `M ${p.x},${p.y}` : `L ${p.x},${p.y}`
  )).join(' ') + ' Z';
};

const clamp = (size: number, minSize: number, maxSize: number) => {
  return Math.min(Math.max(size, minSize), maxSize);
};

const RadarChart: FC<{ activeSection: number, datasets: Array<Array<{ axis: string, value: number }>>, currentDataset: number, inline?: boolean, viewBox?: string, hoveredCard?: 'VARIETY' | 'VELOCITY' | 'VOLUME' | null }> = ({ activeSection, datasets, currentDataset, inline, viewBox, hoveredCard }) => {
  const [hoveredAxis, setHoveredAxis] = useState<string | null>(null);
  // Add new state to track hovered legend item
  const [hoveredLegend, setHoveredLegend] = useState<number | null>(null);
  const [vb, setViewBox] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const minSize = 190;
      const maxSize = window.innerWidth < 1280 ? 350 : 300;
      const minHeight = 600; // Minimum height threshold
      const maxHeight = 1000; // Maximum height threshold

      // Calculate size based on window height
      const maxH = Math.max(window.innerHeight, minHeight);
      const size = Math.round(
        maxSize - ((maxH - minHeight) / (maxHeight - minHeight)) * (maxSize - minSize)
      );

      // Center the viewBox
      const offset = 150 - (size / 2);
      setViewBox(`${offset} 0 ${clamp(size, minSize, maxSize)} ${clamp(size, minSize, maxSize)}`);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    (viewBox || vb) ?
      <>
        <svg
          width="300"
          height="300"
          viewBox={viewBox || vb}
          className="pointer-events-none w-[200px] h-[170px] animate-fade-in"
          focusable="false"
          aria-hidden="true"
        >
          {/* Background circles only */}
          {[0.25, 0.5, 0.75, 1].map((level) => (
            <circle
              key={level}
              cx={centerX}
              cy={centerY}
              r={radius * level}
              fill="none"
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="1"
            />
          ))}

          {/* Add this inside the main SVG, before the paths */}
          <defs>
            <pattern
              id={`diagonalHatch-${activeSection}-${inline ? 'inline' : ''}`}
              patternUnits="userSpaceOnUse"
              width="4"
              height="4"
              patternTransform="rotate(45 2 2)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="4"
                stroke="rgba(75, 192, 192, 0.5)"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          {/* Dataset path */}

          {activeSection !== 0 && (
            <path
              key={currentDataset}
              d={generateShapePath(datasets[currentDataset])}
              fill={`url(#diagonalHatch-${activeSection}-${inline ? 'inline' : ''})`}
              stroke={colors[currentDataset].stroke}
              strokeWidth="2"
              className="transition-all duration-500 pointer-events-none z-0"
            />
          )}
          {activeSection === 0 && (
            // Show all paths in intro section
            datasets.map((dataset, index) => (
              <path
                key={index}
                d={generateShapePath(dataset)}
                fill={index === datasets.length - 1 ? colors[index].fill : colors[index].fill}
                stroke={colors[index].stroke}
                strokeWidth={hoveredLegend === index ? 1 : index === datasets.length - 1 ? 1 : 0.5}
                opacity={hoveredLegend === index ? 1 : hoveredLegend !== null ? 0 : (index === datasets.length - 1 ? 1 : 0.8)}
                strokeDasharray={index === datasets.length - 1 ? "none" : "3 3"}
                className="transition-all duration-300"
              />
            ))
          )}

          {/* Axis lines */}
          {datasets[0].map((d, i) => {
            const angle = (Math.PI * 2 * i) / datasets[0].length;
            const x2 = centerX + radius * Math.cos(angle - Math.PI / 2);
            const y2 = centerY + radius * Math.sin(angle - Math.PI / 2);

            // Calculate label position with dynamic offset
            let labelOffset = 23;
            if (d.axis === 'VARIETY') labelOffset = 45;
            if (d.axis === 'VELOCITY') labelOffset = 45;

            const labelX = centerX + (radius + labelOffset) * Math.cos(angle - Math.PI / 2);
            const labelY = centerY + (radius + labelOffset) * Math.sin(angle - Math.PI / 2);

            return (
              <g key={i} focusable="false" aria-hidden="true">
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={x2}
                  y2={y2}
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="1"
                />

                <text
                  x={labelX}
                  y={labelY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily={DINish.style.fontFamily}
                  fontWeight="bold"
                  fontSize={"14"}
                  fill="rgb(255, 255, 255, 0.8)"
                  className={`${hoveredAxis === d.axis || hoveredCard === d.axis || activeSection === 0
                    ? i === 0 ? 'animate-scale-in-6y2' : 'animate-scale-in-6y'
                    : i === 0 ? 'animate-scale-out-6y2' : 'animate-scale-out-6y'
                    }`}
                >
                  {d.axis}
                </text>

                {/* Scale labels */}
                {(hoveredAxis === d.axis || hoveredCard === d.axis || activeSection === 0) && [0.25, 0.5, 0.75, 1].map((level, idx) => {
                  // Calculate offset based on axis position
                  const labelOffset = 10; // Add a 15px offset
                  const labelAngle = angle - Math.PI / 2;
                  const labelX = centerX + ((radius * level) + labelOffset) * Math.cos(labelAngle);
                  const labelY = centerY + ((radius * level) + labelOffset) * Math.sin(labelAngle);

                  return (
                    <g key={`label-${level}`} focusable="false" aria-hidden="true">
                      <text
                        x={labelX}
                        y={labelY}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="rgba(255, 255, 255, 0.7)"
                        fontSize="10"
                        fontWeight="bold"
                        fontFamily={DINish.style.fontFamily}
                        className={`opacity-0 ${idx === 0 ? 'animate-scale-in-1' :
                          idx === 1 ? 'animate-scale-in-2' :
                            idx === 2 ? 'animate-scale-in-3' :
                              idx === 3 ? 'animate-scale-in-4' :
                                'animate-scale-in-5'
                          }`}
                      >
                        {getLabelsForAxis(d.axis)[idx]}
                      </text>
                    </g>
                  );
                })}

                {/* Make only the interactive line have pointer events */}
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={x2}
                  y2={y2}
                  stroke="transparent"
                  strokeWidth="40"
                  className="cursor-pointer pointer-events-auto"
                  onMouseEnter={() => setHoveredAxis(d.axis)}
                  onMouseLeave={() => setHoveredAxis(null)}
                />
              </g>
            );
          })}
        </svg>

        {/* Legends */}
        {activeSection === 0 && (
          <div className="absolute bottom-[-180px] left-1/2 transform -translate-x-1/2 flex gap-4 items-center text-xs whitespace-nowrap w-96 justify-center flex-wrap pointer-events-auto">
            {menuItems.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-2 cursor-pointer"
                onMouseEnter={() => setHoveredLegend(index)}
                onMouseLeave={() => setHoveredLegend(null)}
              >
                <div
                  className="w-3 h-[10px] transition-all duration-300 rounded-sm"
                  style={{
                    backgroundColor: colors[index].stroke,
                    opacity: hoveredLegend === null || hoveredLegend === index ? 1 : 0.4
                  }}
                />
                <span className={` ${hoveredLegend === index ? 'text-white' : 'text-white/80'} ${DINish.className} transition-all duration-300`}

                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        )}
      </>
      : <></>
  )
}


const volumeScaleLabels = ['Gigabytes', 'Terabytes', 'Petabytes', 'Exabytes'];
const velocityScaleLabels = ['Manual', 'Batch', 'On Demand', 'Streaming'];
const varietyScaleLabels = ['Single Source', 'Multi Source', 'Mixed Source', 'Mixed Format'];


const getLabelsForAxis = (axis: string) => {
  switch (axis) {
    case 'VOLUME':
      return volumeScaleLabels;
    case 'VELOCITY':
      return velocityScaleLabels;
    case 'VARIETY':
      return varietyScaleLabels;
    default:
      return [];
  }
};

// Multiple datasets with different values for each V
const datasets: Array<Array<{ axis: string, value: number }>> = [
  [
    { axis: "VOLUME", value: 0.1 },
    { axis: "VARIETY", value: 0.24 },
    { axis: "VELOCITY", value: 0.24 },
  ],
  [
    { axis: "Volume", value: 0.25 },
    { axis: "Variety", value: 0.25 },
    { axis: "Velocity", value: 1 },
  ],
  [
    { axis: "Volume", value: 0.5 },
    { axis: "Variety", value: 0.65 },
    { axis: "Velocity", value: 0.5 },
  ],
  [
    { axis: "Volume", value: 1 },
    { axis: "Variety", value: 0.75 },
    { axis: "Velocity", value: 0.65 },
  ],
  [
    { axis: "Volume", value: 0.75 },
    { axis: "Variety", value: 1 },
    { axis: "Velocity", value: 0.75 },
  ],
];

// Add menu items array
const menuItems = [
  "Spreadsheets",
  "Databases",
  "Data Warehouses",
  "Data Lakes",
  "EdgeSet"
];

// Add this array near your other constants (datasets, menuItems, etc.)
const sections = [
  {
    title: "",
    text: "",
    color: "#215f74", // Dark background for intro
    isIntro: true // Special flag for intro section
  },
  {
    title: "Spreadsheets",
    text: "Traditional spreadsheets handle small volumes of structured data with basic data types and manual updates.",
    color: "#1a6b26",
    volumeOffset: 10,
    volumeText: "MEGABYTES",
    velocityTypes: ["ad hoc"],
    varietyTypes: ["user"],
    rowStart: [10, -50],
    notes: [
      "Data must fit in memory (RAM)",
      "Data is updated manually",
      "Data is generally input directly by users",
      "Portable format, easily used and shared"
    ],
    negatives: [1, 1, 0],
    setUpTime: "MINUTES"
  },
  {
    title: "Databases",
    text: "Databases introduce better data management with increased velocity through real-time transactions.",
    color: "#1e6aa5",
    volumeOffset: 7,
    volumeText: "GIGABYTES",
    velocityTypes: ["streaming", "on demand", "batch", "ad hoc"],
    varietyTypes: ["single source"],
    rowStart: [10, -50],
    notes: [
      "Indexes should fit in memory",
      "Data transactions measured in milliseconds",
      "Needs strict input schema",
      "Works directly with operational data"
    ],
    negatives: [1, 0, 1],
    setUpTime: "HOURS"
  },
  {
    title: "Data Warehouses",
    text: "Data warehouse is a centralized repository for structured data. It uses an ETL process to clean and organize data, supporting business intelligence and reporting tasks.",
    color: "#7160ae",
    volumeOffset: 5,
    volumeText: "TERABYTES",
    velocityTypes: ["batch", "ad hoc"],
    varietyTypes: ["multi source"],
    rowStart: [10, -50],
    notes: [
      "Must fit on disk(s)",
      "Updated in batches, usually nightly",
      "Only supports structured sources",
      "Involves extensive ETL processes"
    ],
    negatives: [0, 1, 1, 1],
    setUpTime: "MONTHS"
  },
  {
    title: "Data Lakes",
    text: "Data lake is a storage system that holds massive amounts of raw data in its native format, supporting flexible analytics and querying without pre-defined schemas.",
    color: "#94496f",
    volumeOffset: 1,
    volumeText: "EXABYTES",
    velocityTypes: ["on demand*", "batch", "ad hoc"],
    varietyTypes: ["mixed source"],
    rowStart: [10, -50],
    notes: [
      "Spans across many machines",
      "Updated in micro-batches",
      "Structured and semi-structured in homogeneous storage",
      "Slower integration and governance processes"
    ],
    negatives: [0, 0, 0, 1],
    disclaimer: "partial support for on-demand data processing",
    setUpTime: "MONTHS"
  },
  {
    title: "EdgeSet",
    text: "EdgeSet is a data integration platform that reduces ETL/ELT processes and enables real-time analytics across diverse, large-scale data sources without moving the data.",
    color: "#215f74", // Or use the actual hex color if you prefer,
    volumeOffset: 3,
    volumeText: "PETABYTES",
    velocityTypes: ["on demand", "batch", "ad hoc"],
    varietyTypes: ["mixed format"],
    rowStart: [10, -50],
    notes: [
      "Data is joined on a single machine",
      "Queries are always up-to-date",
      "Supports sources in different native formats",
      "Built on distributed query engine"
    ],
    setUpTime: "HOURS"
  }
];

export default function ThreeVs(props: any) {
  const [currentDataset, setCurrentDataset] = useState(0);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState(0);
  // Add new state at the component level
  const [hoveredCard, setHoveredCard] = useState<'VARIETY' | 'VELOCITY' | 'VOLUME' | null>(null);

  // Add this near your other state declarations at the top of the component

  // Add new state for tracking scroll
  const scrollingRef = useRef(false);
  let scrollTimeout: NodeJS.Timeout;
  // Modify the scroll handler in useEffect
  useEffect(() => {
    const handleScroll = () => {
      scrollingRef.current = true;
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        scrollingRef.current = false;
      }, 100);

      if (!rootRef.current || !(rootRef.current instanceof HTMLElement)) return;
      const scrollTop = rootRef.current.scrollTop;
      const sectionHeight = rootRef.current.clientHeight;
      const currentSection = Math.round(scrollTop / sectionHeight);

      setCurrentDataset(Math.max(0, Math.min(currentSection - 1, sections.length - 1)));
      setActiveSection(Math.min(currentSection, sections.length - 1));
    };

    const container = rootRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    rootRef.current?.focus();

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const documentMove = (e: any) => {
    if (!hasCardParent(e.target)) {
      console.log('setting hovered card to null', e.target, e.relatedTarget, e.currentTarget)
      setHoveredCard(null);
      document.body.removeEventListener('mousemove', documentMove);
    }
  }

  useEffect(() => {
    document.body.removeEventListener('mousemove', documentMove);
    if (hoveredCard) {
      document.body.addEventListener('mousemove', documentMove)
    }
  }, [hoveredCard])


  // Create debounced handlers
  const debouncedSetHoveredCard = debounce((value: 'VARIETY' | 'VELOCITY' | 'VOLUME' | null) => {
    setHoveredCard(value);
  }, 300);


  return (
    <>
      <main className="relative h-screen overflow-hidden">
        <Navbar />

        {/* Sidebar menu - only show when not on intro section */}
        {activeSection !== 0 && (
          <div className="fixed left-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <div className="space-y-4">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className={`cursor-pointer group flex items-center gap-3 ${DINish.className} group`}
                  onClick={() => {
                    rootRef.current?.scrollTo({
                      top: (index + 1) * window.innerHeight,
                      behavior: 'smooth'
                    });
                  }}
                >
                  <div style={{ backgroundColor: activeSection - 1 === index ? 'rgba(255,255,255,0.5)' : '' }} className={`w-0.5 h-8 transition-all duration-300 bg-[rgba(255,255,255,0.2)] group-hover:bg-[rgba(255,255,255,0.5)]`} />
                  <span className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="h-screen overflow-y-scroll xl:snap-y xl:snap-mandatory outline-none" tabIndex={0} ref={rootRef}>
          {sections.map((section, index) => (
            <div
              key={index}
              className='h-screen snap-start pt-6 md:pt-24 md:gap-x-12 grid grid-cols-12 2xl:px-24 relative min-h-[667px]'
              style={{ backgroundColor: section.color }}
            >
              {section.isIntro ? (
                <>
                  <Navbar showMenu={true} />
                  <div className="col-span-10 col-start-2 h-full">
                    <Link href="/blog" className='flex items-center pt-12 md:pt-2 col-start-1 col-span-full text-whiteLight3'>
                      <svg viewBox="0 0 24 24" width={17} height={17} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 9H16.5C18.9853 9 21 11.0147 21 13.5C21 15.9853 18.9853 18 16.5 18H12M3 9L7 5M3 9L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <span className='px-2'>Back to posts</span>
                    </Link>
                    <div className="flex pt-11">
                      <div className='flex flex-col'>
                        <h1 className={`${DINish.className} text-3xl leading-10 md:text-4xl md:!leading-[50px] xl:text-5xl text-left text-white xl:!leading-[64px] font-semibold max-w-3xl 2xl:max-w-4xl h-sm:text-2xl`}>
                          The Three V&apos;s of Big Data - How EdgeSet is transforming data processing
                        </h1>
                        <div className="flex flex-row gap-x-1 pt-10">
                          <img src="/about/christopher.jpg" className="w-12 h-12 rounded-full mr-2 border-2 border-whiteLight3" />
                          <div className="flex flex-col">
                            <span className={`text-whiteLight3 font-semibold ${DINish.className}`}>Chris Forno</span>
                            <span className={`text-whiteLight3 ${DINish.className}`}>5 min. read  |  December 10, 2024</span>
                          </div>
                        </div>
                      </div>
                      <div className="pl-10 hidden lg:max-xl:block relative top-7 right-4">
                        <RadarChart activeSection={activeSection} datasets={datasets} currentDataset={currentDataset} inline={true} viewBox="0 0 220 220" hoveredCard={hoveredCard} />
                      </div>
                    </div>

                    <div className={`pt-16 text-whiteLight3 text-left text-lg leading-8 xl:leading-relaxed ${DINish.className} max-w-3xl h-sm:text-base h-sm:leading-7 h-sm:pt-12 xl:text-base 2xl:text-lg`}>
                      This visual guide compares EdgeSet to traditional data processing systems like spreadsheets, databases, data warehouses, and data lakes in the context of the three V&apos;s of Big Data:

                      <div className='text-lg h-sm:text-base pt-2 xl:hidden'>
                        <span className="text-whiteLight3 font-semibold">Variety</span> - the variety of data types, <span className="text-whiteLight3 font-semibold">Velocity</span> - the speed at which data is processed, and <span className="text-whiteLight3 font-semibold">Volume</span> - the amount of data stored and analyzed.
                      </div>

                      <ul className="list-none pt-6 text-base hidden xl:block 2xl:text-lg">
                        <li className='pb-4'><span className="text-whiteLight3 font-semibold">Variety</span>: This encompasses diverse data types: structured databases, unstructured text and media, semi-structured formats like JSON from multiple sources and platforms.</li>
                        <li className='pb-4'><span className="text-whiteLight3 font-semibold">Velocity</span>:  The speed at which data is generated, collected, and processed. In today&apos;s digital world, data is being created and updated in real-time, requiring systems that can capture, analyze, and respond to information quickly.</li>
                        <li><span className="text-whiteLight3 font-semibold">Volume</span>: The massive amount of data generated every second from various sources. To give some context, the volume of global data exploded exponentially, growing from 2 exabytes in 2010 to 149 zettabytes in 2024 due to internet, mobile, social media, IoT, and cloud computing technologies.</li>
                      </ul>
                    </div>
                    {activeSection === 0 && (
                      <button
                        onClick={() => {
                          rootRef.current?.scrollTo({
                            top: window.innerHeight,
                            behavior: 'smooth'
                          });
                        }}
                        className="hidden xl:block animate-bounce absolute w-16 bottom-0 left-[calc(50%-30px)] transform -translate-x-1/2 cursor-pointer z-10"
                      >
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="0.6"
                        >
                          <path d="M10 9l10 6 10-7" />
                        </svg>
                      </button>
                    )}
                  </div>
                  <div className="absolute bottom-3 right-3 hidden xl:flex items-center gap-x-4">
                    <div className={`text-whiteLight3 text-base ${DINish.className} flex items-end gap-x-2`}>
                      {/* add info icon */}
                      <svg className='relative left-1' x="0px" y="0px" viewBox="0 0 100 125" width={20} height={20}><g transform="translate(0,-952.36218)"><path d="M 50 5 C 25.07 5 5 25.06998 5 50 C 5 74.93 25.07 95 50 95 C 74.93 95 95 74.93 95 50 C 95 25.06998 74.93 5 50 5 z M 55.267578 20 C 57.020227 20 58.488503 20.608669 59.675781 21.824219 C 60.891328 23.039769 61.5 24.508032 61.5 26.232422 C 61.5 27.956802 60.891328 29.427028 59.675781 30.642578 C 58.460235 31.858128 56.991959 32.466797 55.267578 32.466797 C 53.571467 32.466797 52.113984 31.858128 50.898438 30.642578 C 49.68289 29.427028 49.076172 27.956802 49.076172 26.232422 C 49.076172 24.508032 49.670144 23.039769 50.857422 21.824219 C 52.072969 20.608669 53.543198 20 55.267578 20 z M 57.896484 39.505859 L 57.896484 40 C 57.846992 40.007215 57.797538 40.01238 57.748047 40.019531 L 49.203125 69.654297 C 48.72256 71.378697 48.482422 72.509775 48.482422 73.046875 C 48.482422 73.357775 48.608864 73.652847 48.863281 73.935547 C 49.117698 74.189947 49.387237 74.318359 49.669922 74.318359 C 50.150487 74.318359 51.014191 74.370534 52.599609 73.615234 C 54.070567 72.724034 57.287441 70.7421 59.068359 68 L 62.5 70 C 58.231454 77.4347 50.305649 80 45.5 80 C 43.662546 80 40.213801 79.490356 39.111328 78.472656 C 38.037124 77.426756 37.5 76.112297 37.5 74.529297 C 37.5 73.483397 37.740138 72.156222 38.220703 70.544922 L 44.115234 50.275391 C 44.680604 48.324791 44.962891 47.854674 44.962891 46.865234 C 44.962891 46.243334 44.695305 45.691507 44.158203 45.210938 C 43.621101 44.730368 42.885986 44.490234 41.953125 44.490234 C 41.529097 44.490234 41.01942 44.472 40.425781 44.5 L 41 42 C 46.591367 41.23838 52.164256 40.826421 57.748047 40.019531 L 57.896484 39.505859 z " transform="translate(0,952.36218)" fill="#ffffffb8" fillOpacity="1" strokeWidth="0" /></g></svg>
                      <div>Supports Keyboard Navigation</div>
                    </div>
                    <Keyboard />
                  </div>
                </>
              ) : (
                <div className={`col-start-2 col-span-10 flex flex-col`}>
                  <div className="flex flex-col md:col-start-2 md:col-span-6 col-start-1 col-span-full">
                    <h2 className={`${DINish.className} text-2xl font-bold mb-4 text-white col-start-2`}>
                      {section.title}
                    </h2>
                    <p className={`${DINish.className} text-white text-base lg:text-lg leading-normal 3xl:text-xl 3xl:leading-normal max-w-3xl`}>
                      {section.text}
                    </p>
                  </div>

                  <div className="col-start-1 col-span-full flex flex-1 justify-center items-center xl:hidden">
                    <RadarChart activeSection={activeSection} datasets={datasets} currentDataset={currentDataset} inline={true} hoveredCard={hoveredCard} />
                  </div>

                  <div className={`flex w-full overflow-x-auto gap-x-4 basis-64 xl:grid xl:grid-cols-2 xl:gap-y-2 xl:flex-1 xl:pt-16 xl:max-w-3xl 3xl:gap-x-10 `} data-card='root'>
                    <div
                      className={`flex-none w-[70%] min-w-[260px] max-w-[280px] h-[65%] max-h-[240px] xl:max-w-[320px] xl:max-h-[205px] xl:min-w-[320px] 3xl:max-w-[350px] 3xl:w-[95%] 3xl:max-h-[215px] border border-whiteLight2 bg-whiteLight_0_6 hover:bg-whiteLight_1_5 transition-all duration-300`}
                      onMouseEnter={() => {
                        debouncedSetHoveredCard.cancel()
                        setHoveredCard('VARIETY')
                      }}
                      onMouseLeave={() => {
                        !scrollingRef.current && debouncedSetHoveredCard(null)
                      }}
                      data-card='variety'
                    >
                      <div className='flex flex-col items-center h-full relative'>
                        <div className={`flex flex-1 w-full h-full items-start ${section.varietyTypes?.length === 1 ? 'justify-center items-center' : 'gap-4'}`}>
                          {section.varietyTypes?.includes('user') && (
                            <div className='flex flex-col w-fit items-center justify-center'>
                              <User />
                              <div className={`${VT323.className} text-white text-lg font-semibold pt-3`}>SINGLE SOURCE</div>
                            </div>
                          )}
                          {section.varietyTypes?.includes('single source') && (
                            <div className='flex flex-col w-fit items-center justify-center'>
                              <SingleSource />
                              <div className={`${VT323.className} text-white text-lg font-semibold pt-3`}>SINGLE SOURCE</div>
                            </div>
                          )}
                          {section.varietyTypes?.includes('multi source') && (
                            <div className='flex flex-col w-fit items-center'>
                              <MultiSource />
                              <div className={`${VT323.className} text-white text-lg font-semibold pt-1`}>MULTI SOURCE</div>
                            </div>
                          )}
                          {section.varietyTypes?.includes('mixed source') && (
                            <div className='flex flex-col w-fit items-center'>
                              <MixedSource />
                              <div className={`${VT323.className} text-white text-lg font-semibold pt-4`}>MIXED SOURCE</div>
                            </div>
                          )}
                          {section.varietyTypes?.includes('mixed format') && (
                            <div className='flex flex-row gap-8'>
                              <div className='flex flex-col w-fit items-center'>
                                <MixedSource />
                                <div className={`${VT323.className} text-white text-base lg:text-lg font-semibold pt-4`}>MIXED SOURCE</div>
                              </div>
                              <div className='flex flex-col w-fit items-center'>
                                <MixedFormat />
                                <div className={`${VT323.className} text-white text-base lg:text-lg font-semibold pt-4`}>MIXED FORMAT</div>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className={`flex flex-col items-center pt-2 absolute bottom-[-60px] xl:bottom-[-70px] ${section.title === 'Data Lakes' ? 'bottom-[-80px] xl:bottom-[-94px]' : ''}`}>
                          <div className={`${DINish.className} text-whiteLight3 text-sm font-semibold pt-2`}>VARIETY</div>
                          <div className="flex items-baseline pt-2">
                            {section.negatives?.[2] === 1 && (
                              <span className={`${section.title !== 'Data Lakes' ? 'pr-1' : ''}`}>
                                <Exclaimation />
                              </span>
                            )}
                            <div className={`text-whiteLight3 text-sm xl:text-base ${DINish.className} text-center`}>{section.notes?.[2]}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`flex-none w-[70%] min-w-[260px] max-w-[280px] h-[65%] max-h-[240px] xl:max-w-[320px] xl:max-h-[205px] xl:min-w-[320px] 3xl:max-w-[350px] 3xl:w-[95%] 3xl:max-h-[215px] border border-whiteLight2 bg-whiteLight_0_6 hover:bg-whiteLight_1_5 transition-all duration-300`} data-card='velocity'>
                      <div className="flex flex-col items-center h-full relative" onMouseEnter={() => {
                        debouncedSetHoveredCard.cancel()
                        setHoveredCard('VELOCITY')
                      }} onMouseLeave={() => {
                        !scrollingRef.current && debouncedSetHoveredCard(null)
                      }}>
                        <div className={`flex flex-1 w-full items-start ${section.velocityTypes?.length === 1 ? 'justify-center items-center' : 'grid grid-cols-2 items-center justify-items-center'}`}>
                          {section.velocityTypes?.includes('streaming') && (
                            <div className='flex flex-col w-fit justify-center items-center mt-2'>
                              <Streaming />
                              <div className={`${VT323.className} text-white text-base lg:text-lg font-semibold`}>STREAMING</div>
                            </div>
                          )}
                          {section.velocityTypes?.includes('on demand') && (
                            <div className={`flex flex-col w-fit justify-center items-center`}>
                              <OnDemand />
                              <div className={`${VT323.className} text-white text-base lg:text-lg font-semibold`}>ON DEMAND</div>
                            </div>
                          )}
                          {section.velocityTypes?.includes('on demand*') && (
                            <div className='flex flex-col w-fit justify-center items-center'>
                              <OnDemand />
                              <div className={`${VT323.className} text-white text-base lg:text-lg font-semibold`}>ON DEMAND<sup>*</sup></div>
                            </div>
                          )}
                          {section.velocityTypes?.includes('ad hoc') && (
                            <div className="flex flex-col w-fit">
                              <Manual />
                              <div className={`${VT323.className} text-white ${section.title === 'Spreadsheets' || section.title === 'Data Warehouses' ? 'text-lg' : 'text-base lg:text-lg'} font-semibold`}>MANUAL</div>
                            </div>
                          )}
                          {section.velocityTypes?.includes('batch') && (
                            <div className='flex flex-col w-fit'>
                              <OnBatch />
                              <div className={`${VT323.className} text-white text-base lg:text-lg font-semibold`}>BATCH</div>
                            </div>
                          )}
                        </div>
                        <div className={`flex flex-col items-center pt-2 absolute bottom-[-60px] xl:bottom-[-70px] ${section.title === 'Data Lakes' ? 'bottom-[-80px] xl:bottom-[-98px]' : ''}`}>
                          <div className={`${DINish.className} text-whiteLight3 text-sm font-semibold pt-2`}>VELOCITY</div>
                          <div className="flex items-baseline pt-2">
                            {section.negatives?.[1] === 1 && (
                              <span className='pr-1'>
                                <Exclaimation />
                              </span>
                            )}
                            <div className={`text-whiteLight3 text-sm xl:text-base relative ${DINish.className}`}>{section.notes?.[1]}</div>
                          </div>
                          {section.disclaimer && (
                            <div className={`text-[rgba(255,255,255,0.65)] text-[10px] xl:text-sm pt-1 xl:pt-2 relative ${DINish.className}`}><sup>*</sup>{section.disclaimer}</div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className={`flex-none w-[70%] min-w-[260px] max-w-[280px] h-[65%] max-h-[240px] xl:max-w-[320px] xl:max-h-[205px] xl:min-w-[320px] 3xl:max-w-[350px] 3xl:w-[95%] 3xl:max-h-[215px] border border-whiteLight2 bg-whiteLight_0_6 hover:bg-whiteLight_1_5 transition-all duration-300`} data-card='volume'>
                      <div className="flex flex-col items-center h-full relative" onMouseEnter={() => {
                        debouncedSetHoveredCard.cancel()
                        setHoveredCard('VOLUME')
                      }} onMouseLeave={() => {
                        !scrollingRef.current && debouncedSetHoveredCard(null)
                      }}>
                        <div className={`${VT323.className} z-10 text-lg font-semibold px-2 absolute top-[10px] text-white border border-[rgba(255,255,255,0.5)]`}
                          style={{
                            backgroundColor: section.color
                          }}
                        >{section.volumeText}</div>
                        <div className="w-full flex-1 h-full">
                          <div className="relative w-full h-full border border-[rgba(255,255,255,0.5)]">
                            <div
                              className="grid grid-cols-20 grid-rows-15 gap-0.5 absolute inset-0.5"
                              style={{
                                gridTemplateColumns: 'repeat(20, 1fr)',
                                gridTemplateRows: 'repeat(15, 1fr)'
                              }}
                            >
                              {Array.from({ length: 15 }).map((_, rowIndex) =>
                                Array.from({ length: 20 }).map((_, colIndex) => (
                                  <div
                                    key={`${rowIndex}-${colIndex}`}
                                    className={`border ${rowIndex <= (section.volumeOffset ?? 0)
                                      ? 'border-[rgba(255,255,255,0.2)] bg-transparent'
                                      : 'border-[rgba(255,255,255,0.5)] bg-[rgba(255,255,255,0.2)]'
                                      }
                                  `}
                                  />
                                ))
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center pt-2 absolute bottom-[-60px] xl:bottom-[-70px]">
                          <div className={`${DINish.className} text-whiteLight3 text-sm font-semibold pt-2`}>VOLUME</div>
                          <div className="flex items-baseline pt-2">
                            <span className='pr-1'>
                              {section.negatives?.[0] === 1 && (
                                <Exclaimation />
                              )}
                            </span>
                            <div className={`text-whiteLight3 text-sm xl:text-base ${DINish.className}`}>{section.notes?.[0]}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`flex-none w-[70%] min-w-[260px] max-w-[280px] h-[65%] max-h-[240px] xl:max-w-[320px] xl:max-h-[205px] xl:min-w-[320px] 3xl:max-w-[350px] 3xl:w-[95%] 3xl:max-h-[215px] border border-dashed border-spacing-5 border-whiteLight2`} data-card='setup'>
                      <div className='flex flex-col items-center h-full relative'>
                        {/* <div className={`${VT323.className} text-white text-lg font-semibold pb-2 invisible`}>{section.volumeText}</div> */}
                        <div className={`flex flex-1 w-full items-start ${section.varietyTypes?.length === 1 ? 'justify-center items-center' : 'gap-4'}`}>
                          <div className='flex flex-col w-fit items-center justify-center'>
                            {section.setUpTime === 'MINUTES' && <Minutes />}
                            {section.setUpTime === 'HOURS' && <Hours />}
                            {section.setUpTime === 'MONTHS' && <Months />}
                            <div className={`${VT323.className} text-white text-lg font-semibold pt-2`}>{section.setUpTime}</div>
                          </div>
                        </div>
                        <div className={`flex flex-col items-center pt-2 absolute bottom-[-60px] xl:bottom-[-70px] ${section.title === 'Data Lakes' ? 'bottom-[-80px] xl:bottom-[-95px]' : ''}`}>
                          <div className={`${DINish.className} text-whiteLight3 text-sm font-semibold pt-4`}>SETUP TIME</div>
                          <div className={`flex pt-2 items-baseline text-whiteLight3 text-sm xl:text-base relative ${DINish.className} ${section.title === 'Data Lakes' ? 'max-w-[80%] mx-auto break-all text-center' : ''}`}>
                            {
                              section.negatives?.[3] === 1 && (
                                <span className={`${section.title !== 'Data Lakes' ? 'pr-1' : ''}`}>
                                  <Exclaimation />
                                </span>
                              )
                            }
                            <span>{section.notes?.[3] ?? 'Time required to set up the system.'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='hidden xl:block col-span-6 fixed top-60 right-[10%] x-1440:right-[17%] w-fit px-8 pointer-events-none'>
          <div className='flex justify-end items-start'>
            <RadarChart activeSection={activeSection} datasets={datasets} currentDataset={currentDataset} hoveredCard={hoveredCard} />
          </div>
        </div>
      </main >
    </>
  );
}
