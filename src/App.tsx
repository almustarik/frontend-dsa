import React, { useEffect, useRef } from 'react';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  // Binary search for calculating fontsize to fit the window
  function resizeText() {
    const container = containerRef.current;
    const text = textRef.current;

    if (container && text) {
      const containerWidth = container.offsetWidth;
      let min = 1;
      let max = 2000;

      while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        text.style.fontSize = mid + 'px';

        if (text.offsetWidth <= containerWidth) {
          min = mid + 1;
        } else {
          max = mid - 1;
        }
      }
      text.style.fontSize = max + 'px';
    }
  }

  useEffect(() => {
    resizeText();
    window.addEventListener('resize', resizeText);
    return () => {
      window.removeEventListener('resize', resizeText);
    };
  }, []);

  return (
    <div className="flex items-center w-full h-screen overflow-hidden" ref={containerRef}>
      <span
        className="absolute left-0 mx-auto my-auto font-bold text-center uppercase whitespace-nowrap text-slate-700"
        ref={textRef}
      >
        Fit font size
      </span>
    </div>
  );
};

export default App;
