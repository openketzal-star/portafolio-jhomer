import { ArrowRight, Code, Video, Search, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesSection = () => {
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Code,
      title: 'Desarrollo con IA',
      description: 'Aplicaciones web y móviles potenciadas por IA, usando OpenAI, LangChain y más.',
    },
    {
      icon: Video,
      title: 'Contenido Educativo',
      description: 'Tutoriales, guías y experiencias sobre programación con IA en YouTube y TikTok.',
    },
    {
      icon: Search,
      title: 'Estrategia Digital',
      description: 'Marketing, análisis de mercado y estrategias de crecimiento para productos digitales.',
    },
    {
      icon: Globe,
      title: 'Consultoría Tecnológica',
      description: 'Asesoramiento en adopción de IA, transformación digital y optimización de procesos.',
    },
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
    <section ref={servicesRef} className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios que unen marketing y tecnología</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Soluciones prácticas donde la estrategia de negocio se encuentra con la inteligencia artificial.
        </p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={servicesInView ? 'visible' : 'hidden'}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={itemVariants}
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-md transition-shadow"
          >
            <div className="inline-flex p-3 rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
              <service.icon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {service.description}
            </p>
            <a
              href="#projects"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm"
            >
              Ver casos de uso
              <ArrowRight className="ml-1" size={16} />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;