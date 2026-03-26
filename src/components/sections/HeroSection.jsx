import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 mb-6">
            <Sparkles className="mr-2" size={16} />
            <span className="font-medium">Transformando estrategias de marketing en soluciones de IA escalables</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-gray-800 dark:text-gray-200">Jhomer</span>
            <span className="block text-primary-600 dark:text-primary-400 mt-2">Estrategia digital → Desarrollo con IA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Profesional de marketing con 4+ años de experiencia, ahora especializado en inteligencia artificial. 
            Construyo aplicaciones que resuelven problemas reales de negocio mediante código y algoritmos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
            >
              <span>Ver proyectos con IA</span>
              <ArrowRight className="ml-2" size={18} />
            </a>
            <Link
              to="/contacto"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <Mail className="mr-2" size={18} />
              <span>Conversar sobre tu idea</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;