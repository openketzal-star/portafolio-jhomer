import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section 
      className="min-h-[90vh] flex items-center justify-center pt-20"
      aria-label="Hero section introducing Jhomer"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 mb-6"
            role="note"
            aria-label="Tagline: Transforming marketing strategies into scalable AI solutions"
          >
            <Sparkles className="mr-2" size={16} aria-hidden="true" />
            <span className="font-medium">Transformando estrategias de marketing en soluciones de IA escalables</span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
            aria-label="Jhomer, Digital Strategy to AI Development"
          >
            <span className="block text-gray-800 dark:text-gray-200">Jhomer</span>
            <span className="block text-primary-600 dark:text-primary-400 mt-2">Estrategia digital → Desarrollo con IA</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
            aria-label="Professional background and mission"
          >
            Profesional de marketing con 4+ años de experiencia, ahora especializado en inteligencia artificial. 
            Construyo aplicaciones que resuelven problemas reales de negocio mediante código y algoritmos.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
            role="group"
            aria-label="Call to action buttons"
          >
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="View AI projects, opens projects section"
            >
              <span>Ver proyectos con IA</span>
              <ArrowRight className="ml-2" size={18} aria-hidden="true" />
            </a>
            <Link
              to="/contacto"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="Start conversation about your idea, opens contact page"
            >
              <Mail className="mr-2" size={18} aria-hidden="true" />
              <span>Conversar sobre tu idea</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;