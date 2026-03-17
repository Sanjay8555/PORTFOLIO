
import React, { useState, useEffect } from 'react';

const ScrollProgress: React.FC = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const windowScroll = window.scrollY;
      const scrolled = (windowScroll / height) * 100;
      setScroll(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[60]">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500" 
        style={{ width: `${scroll}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
