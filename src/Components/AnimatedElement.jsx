import React, { useEffect, useRef, useState } from 'react';

const AnimatedElement = ({ children }) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`opacity-0  duration-500 ${
        isVisible ? 'opacity-100 animate-fade-up animate-once antialiased' : ''
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
