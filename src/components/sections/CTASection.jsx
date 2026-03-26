import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-8 md:p-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para llevar tu proyecto al siguiente nivel?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Colaboremos para crear algo extraordinario con la potencia de la IA y el diseño moderno.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contacto"
            className="inline-flex items-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            <Mail className="mr-2" size={20} />
            Iniciar Conversación
          </Link>
          <a
            href="#projects"
            className="inline-flex items-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Explorar más proyectos
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;