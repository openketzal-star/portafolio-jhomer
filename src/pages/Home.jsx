import { ArrowRight, Code, Video, Search, Globe, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects, categories } from '../data/projects';

const Home = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { label: 'Proyectos con IA', value: 5, suffix: '+' },
    { label: 'Años en Marketing', value: 4, suffix: '+' },
    { label: 'Videos Producidos', value: 50, suffix: '+' },
    { label: 'Herramientas de IA', value: 10, suffix: '+' },
  ];

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
    <div className="space-y-20 md:space-y-28">
      {/* Hero Section */}
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

      {/* Stats */}
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

      {/* Services */}
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

      {/* Projects */}
      <section id="projects" ref={projectsRef} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Proyectos con impacto real</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center">
            Cada aplicación resuelve un problema específico de marketing o negocio mediante IA.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={projectsInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                <div className="text-4xl text-gray-400 dark:text-gray-600">📊</div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {project.featured && (
                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded">
                      Destacado
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-500 rounded-full text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.demoUrl}
                    className="flex-1 text-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors text-sm"
                  >
                    Ver demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 text-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm"
                  >
                    Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
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
    </div>
  );
};

export default Home;