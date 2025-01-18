import React from 'react';
import { useInView } from "react-intersection-observer";

const AnimatedElement = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3,    
  });
  return (
    <div ref={ref} className={`${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {children}
    </div>
  );
};


export default AnimatedElement;
