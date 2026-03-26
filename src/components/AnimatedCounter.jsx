import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const AnimatedCounter = ({ value, duration = 2, className = '' }) => {
  const [isInView, setIsInView] = useState(false);
  const count = useMotionValue(0);
  const spring = useSpring(count, { damping: 30, stiffness: 100 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      count.set(value);
    } else {
      count.set(0);
    }
  }, [value, isInView, count]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return () => unsubscribe();
  }, [spring]);

  // Intersection observer para activar cuando entra en vista
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById(`counter-${value}`);
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [value]);

  return (
    <motion.span
      id={`counter-${value}`}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {displayValue}
    </motion.span>
  );
};

export default AnimatedCounter;