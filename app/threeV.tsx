"use client"

import RadarChart from "@/components/radar";
import Successive from "@/components/successive"
import { useState } from "react";

const colors = [
  { f: '#bff9d6', s: '#167940' },
  { f: '#ffd7e5a3', s: '#d790a9' },
  { f: '#ffecc375', s: '#a78e5975' },
  { f: '#e7cbf357', s: '#b77cd1c4' },
  { f: '#abd8e7f5', s: '#6ea5b796' },
];

const list = [
  'With Edgeset, you could connect and join petabytes of data on a single machine.',
  'Edgeset supports variety of structured and semi-structured data sources. Custom connectors for your data sources could be built on request.',
  'Edgeset is fast. It eliminates ETL and pushes query down to the sources enabling parallel processing reducing the data transfer over the network.',
];

const ThreeV = () => {
  const [categoryIndex, setCategoryIndex] = useState<undefined | number>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex items-start">
      <div className="flex max-w-2xl flex-col py-5">
        <Successive
          strings={list}
          currentIndex={currentIndex}
          onIndexChange={setCurrentIndex}
        />
        <div className="mt-4 flex justify-center gap-2">
          {list.map((_, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`rounded bg-blue-500 px-4 py-2 text-base text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${currentIndex === index ? 'bg-blue-700' : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="min-w-[500px]">
        <RadarChart currentIndex={currentIndex} visibleCategory={categoryIndex} />
      </div>
      <div className="py-5">
        {
          ['spreadsheet', 'database', 'data warehouse', 'data lake', 'Edgeset'].map((axis, index) => (
            <div key={index} className="flex items-center p-1" onMouseEnter={() => setCategoryIndex(index)} onMouseLeave={() => setCategoryIndex(undefined)}>
              <div className="h-4 w-4" style={{ backgroundColor: colors[index].f }}></div>
              <div className={`px-2 ${index === 4 ? 'opacity-100' : 'opacity-70'}`}>{axis}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ThreeV;