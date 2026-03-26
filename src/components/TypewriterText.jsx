import { useState, useEffect } from 'react';

const TypewriterText = ({ text, speed = 50, delay = 0, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isStarted || currentIndex >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isStarted, speed, text]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;