import { ArrowRight, Code, Video, Search, Sparkles, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParticlesBackground from '../components/ParticlesBackground';
import TypewriterText from '../components/TypewriterText';
import AnimatedCounter from '../components/AnimatedCounter';

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
      color: 'from-blue-500 to-cyan-400',
      iconColor: 'text-blue-500',
    },
    {
      icon: Video,
      title: 'Contenido Educativo',
      description: 'Tutoriales, guías y experiencias sobre programación con IA en YouTube y TikTok.',
      color: 'from-purple-500 to-pink-400',
      iconColor: 'text-purple-500',
    },
    {
      icon: Search,
      title: 'Estrategia Digital',
      description: 'Marketing, análisis de mercado y estrategias de crecimiento para productos digitales.',
      color: 'from-green-500 to-emerald-400',
      iconColor: 'text-green-500',
    },
    {
      icon: Globe,
      title: 'Consultoría Tecnológica',
      description: 'Asesoramiento en adopción de IA, transformación digital y optimización de procesos.',
      color: 'from-orange-500 to-yellow-400',
      iconColor: 'text-orange-500',
    },
  ];

  const featuredProjects = [
    {
      title: 'Asistente de Marketing con IA',
      description: 'Herramienta que genera estrategias de contenido y copy usando GPT-4, analizando tendencias.',
      tags: ['Python', 'OpenAI', 'Streamlit', 'FastAPI'],
      gradient: 'from-blue-500 to-purple-600',
      link: '/proyectos/asistente-ia',
    },
    {
      title: 'Curso Interactivo de IA',
      description: 'Plataforma educativa con ejercicios prácticos de programación con IA, usando notebooks interactivos.',
      tags: ['Jupyter', 'React', 'FastAPI', 'Tailwind'],
      gradient: 'from-green-500 to-teal-600',
      link: '/proyectos/curso-ia',
    },
    {
      title: 'Dashboard de Analytics',
      description: 'Panel de control en tiempo real para métricas de marketing, con visualizaciones avanzadas.',
      tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      gradient: 'from-rose-500 to-pink-600',
      link: '/proyectos/dashboard',
    },
    {
      title: 'Chatbot Multilenguaje',
      description: 'Asistente conversacional capaz de entender múltiples idiomas y contextos empresariales.',
      tags: ['Python', 'Transformers', 'WebSockets', 'Docker'],
      gradient: 'from-amber-500 to-orange-600',
      link: '/proyectos/chatbot',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <ParticlesBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-secondary-50/30 dark:from-gray-900/50 dark:via-gray-900 dark:to-gray-900/50" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 mb-6 animate-pulse-slow">
              <Sparkles className="mr-2" size={16} />
              <span className="font-medium">Transformando ideas en realidades digitales</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="block">Hola, soy </span>
              <span className="text-gradient bg-gradient-to-r from-primary-600 to-accent-600">
                <TypewriterText text="Jhomer" speed={100} delay={500} />
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              <TypewriterText
                text="Management & Marketing profesional aprendiendo programación con IA."
                speed={30}
                delay={1200}
              />
              <br />
              <span className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
                Creo aplicaciones impulsadas por IA y comparto el viaje en YouTube y TikTok.
              </span>
            </p>
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <Link
                to="/proyectos"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Explorar Proyectos</span>
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={22} />
              </Link>
              <Link
                to="/contacto"
                className="group inline-flex items-center px-8 py-4 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-bold rounded-2xl hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:shadow-xl transition-all duration-300"
              >
                <Zap className="mr-3 group-hover:rotate-12 transition-transform" size={20} />
                <span>Colaborar Juntos</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={ref} className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover-lift shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient bg-gradient-to-r from-primary-600 to-secondary-600 mb-3">
                <AnimatedCounter value={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-medium text-lg">{stat.label}</div>
              <div className="mt-4 h-1 w-12 mx-auto bg-gradient-to-r from-primary-500 to-transparent rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services */}
      <section ref={servicesRef} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lo que <span className="text-gradient">ofrezco</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Servicios especializados que combinan tecnología de vanguardia con estrategias de crecimiento probadas.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={servicesInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group p-8 rounded-3xl border-2 border-gray-200 dark:border-gray-800 hover:border-transparent bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-gradient-to-br hover:from-white hover:to-primary-50 dark:hover:from-gray-800 dark:hover:to-primary-900/20"
            >
              <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-r ${service.color} shadow-lg`}>
                <service.icon className={`${service.iconColor} text-white`} size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link
                to="/proyectos"
                className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold group-hover:underline"
              >
                Explorar casos
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section ref={projectsRef} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex justify-between items-center mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Proyectos <span className="text-gradient">Destacados</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Una selección de mis trabajos más innovadores y desafiantes.
            </p>
          </div>
          <Link
            to="/proyectos"
            className="hidden md:inline-flex items-center px-6 py-3 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-bold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:scale-105 transition-all duration-300"
          >
            Ver todos
            <ArrowRight className="ml-3" size={20} />
          </Link>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={projectsInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-500 hover-tilt"
            >
              <div className={`h-56 ${project.gradient} bg-gradient-to-r relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                </div>
              </div>
              <div className="p-8 bg-white dark:bg-gray-900">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={project.link}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-bold group-hover:underline"
                >
                  Ver detalles
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={18} />
                </Link>
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-sm flex items-center justify-center">
                  <Zap className="text-white" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-12 md:hidden">
          <Link
            to="/proyectos"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Ver todos los proyectos
            <ArrowRight className="ml-3" size={22} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-4xl overflow-hidden bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 p-12 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para llevar tu proyecto al siguiente nivel?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Colaboremos para crear algo extraordinario con la potencia de la IA y el diseño moderno.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contacto"
                className="inline-flex items-center px-10 py-5 bg-white text-primary-700 font-bold rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <Sparkles className="mr-3" size={22} />
                Iniciar Conversación
              </Link>
              <Link
                to="/proyectos"
                className="inline-flex items-center px-10 py-5 border-2 border-white text-white font-bold rounded-2xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                Explorar Proyectos
              </Link>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-32 -translate-y-32 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full translate-x-48 translate-y-48 blur-3xl" />
        </motion.div>
      </section>
    </div>
  );
};

export default Home;