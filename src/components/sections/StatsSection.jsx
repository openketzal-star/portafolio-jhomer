import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Code, Users, Rocket } from 'lucide-react';

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const shouldReduceMotion = useReducedMotion();
  
  // Senior developer statistics
  const stats = [
    { 
      icon: Code, 
      label: 'Proyectos de IA en Producción', 
      targetValue: 12, 
      suffix: '+',
      description: 'Aplicaciones escalables en producción'
    },
    { 
      icon: TrendingUp, 
      label: 'Años de Experiencia Técnica', 
      targetValue: 6, 
      suffix: '+',
      description: 'Full-stack development & arquitectura'
    },
    { 
      icon: Users, 
      label: 'Clientes Satisfechos', 
      targetValue: 24, 
      suffix: '+',
      description: 'Empresas y startups'
    },
    { 
      icon: Rocket, 
      label: 'Tecnologías Dominadas', 
      targetValue: 18, 
      suffix: '+',
      description: 'Frameworks modernos y herramientas'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: 'easeOut' 
      },
    },
  };

  // Component for animated counter
  const AnimatedCounter = ({ targetValue, suffix, icon: Icon }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
      if (!inView || shouldReduceMotion) {
        setCount(targetValue);
        return;
      }

      const duration = 2000; // 2 seconds total
      const steps = 60; // frames
      const increment = targetValue / steps;
      let currentStep = 0;
      let currentCount = 0;

      const updateCount = () => {
        currentStep++;
        currentCount = Math.min(currentCount + increment, targetValue);
        setCount(Math.floor(currentCount));

        if (currentStep < steps) {
          animationRef.current = requestAnimationFrame(updateCount);
        } else {
          setCount(targetValue); // Ensure exact target
        }
      };

      // Start animation after a small delay for better visual effect
      const startDelay = setTimeout(() => {
        animationRef.current = requestAnimationFrame(updateCount);
      }, 300);

      return () => {
        clearTimeout(startDelay);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }, [inView, targetValue, shouldReduceMotion]);

    return (
      <div className="flex flex-col items-center">
        <div className="inline-flex p-3 rounded-xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mb-4">
          <Icon size={24} aria-hidden="true" />
        </div>
        <div 
          className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2"
          role="status"
          aria-live="polite"
          aria-label={`${count}${suffix}`}
          ref={countRef}
        >
          {count}{suffix}
        </div>
      </div>
    );
  };

  return (
    <section 
      ref={ref} 
      className="container mx-auto px-4 py-16"
      aria-label="Statistics about professional experience"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Impacto medible en cada proyecto</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Métricas que reflejan experiencia técnica real y resultados comprobables para clientes.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="relative p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300 overflow-hidden group"
            aria-label={`${stat.label}: ${stat.targetValue}${stat.suffix}, ${stat.description}`}
          >
            {/* Subtle background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/10 to-transparent dark:from-primary-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <AnimatedCounter 
                targetValue={stat.targetValue} 
                suffix={stat.suffix}
                icon={stat.icon}
              />
              
              <h3 className="text-xl font-bold mb-2 mt-4">{stat.label}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.description}
              </p>
              
              {/* Progress indicator (decorative) */}
              <div className="mt-6 h-1 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: '100%' } : {}}
                  transition={{ 
                    duration: shouldReduceMotion ? 0 : 1.5, 
                    delay: 0.3,
                    ease: 'easeOut' 
                  }}
                  className="h-full bg-gradient-to-r from-primary-500 to-primary-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Accessibility note for screen readers */}
      <div className="sr-only" aria-live="polite">
        Statistics animation complete. Displaying professional metrics including projects in production, years of technical experience, satisfied clients, and mastered technologies.
      </div>
    </section>
  );
};

export default StatsSection;