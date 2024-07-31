import { useCallback, useEffect, useRef, useState } from "react";

type TimerID = number | ReturnType<typeof setTimeout>;

interface SuccessiveProps {
  strings: string[];
  currentIndex: number;
  onIndexChange: (updateFn: (prevIndex: number) => number) => void;
}

const Successive = ({ strings, currentIndex, onIndexChange }: SuccessiveProps) => {
  const [fade, setFade] = useState(true);
  const intervalRef = useRef<TimerID | null>(null);
  const timeoutRef = useRef<TimerID | null>(null);

  const startInterval = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setFade(false);
      timeoutRef.current = setTimeout(() => {
        onIndexChange((prevIndex) => (prevIndex + 1) % strings.length);
        setFade(true);
      }, 1000);
    }, 3000);
  }, [onIndexChange, strings.length]);

  useEffect(() => {
    startInterval();
    return () => clearAllTimers();
  }, [strings, currentIndex, startInterval]);

  const clearAllTimers = () => {
    if (intervalRef.current !== null) clearInterval(intervalRef.current);
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
  };

  return (
    <div className="p-5 text-center">
      <div
        className={`mb-5 min-h-[100px] text-2xl transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'
          }`}
      >
        {strings[currentIndex]}
      </div>
    </div>
  );
};

export default Successive;