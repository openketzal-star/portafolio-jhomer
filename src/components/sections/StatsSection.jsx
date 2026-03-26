import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { label: 'Proyectos con IA', value: 5, suffix: '+' },
    { label: 'Años en Marketing', value: 4, suffix: '+' },
    { label: 'Videos Producidos', value: 50, suffix: '+' },
    { label: 'Herramientas de IA', value: 10, suffix: '+' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section ref={ref} className="container mx-auto px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="text-center p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
          >
            <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {stat.value}{stat.suffix}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default StatsSection;