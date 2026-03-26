import { ArrowRight, Code, Video, Search, Globe, Cpu, Cloud, BarChart, Zap } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const ServicesSection = () => {
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const shouldReduceMotion = useReducedMotion();
  const [hoveredCard, setHoveredCard] = useState(null);

  // Premium services for senior developer/consultant
  const services = [
    {
      icon: Cpu,
      title: 'Arquitectura de Sistemas con IA',
      description: 'Diseño e implementación de arquitecturas escalables integrando modelos de IA, APIs vectoriales, y pipelines de ML para aplicaciones empresariales.',
      features: ['Microservicios con IA', 'APIs vectoriales', 'Pipelines de ML', 'Escalabilidad automática'],
      gradient: 'from-blue-500 to-cyan-400',
      delay: 0
    },
    {
      icon: Code,
      title: 'Desarrollo Full-Stack Avanzado',
      description: 'Aplicaciones web y móviles de alto rendimiento con React, Next.js, Node.js, y bases de datos modernas, optimizadas para SEO y UX.',
      features: ['Next.js 14+', 'TypeScript estricto', 'Bases de datos vectoriales', 'Testing automatizado'],
      gradient: 'from-purple-500 to-pink-400',
      delay: 0.1
    },
    {
      icon: BarChart,
      title: 'Estrategia Data-Driven',
      description: 'Análisis de datos, dashboards interactivos y estrategias basadas en métricas para optimizar productos digitales y maximizar ROI.',
      features: ['Analytics avanzado', 'Dashboards en tiempo real', 'Optimización conversión', 'Predicción de tendencias'],
      gradient: 'from-green-500 to-emerald-400',
      delay: 0.2
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud Engineering',
      description: 'Infraestructura en la nube, CI/CD automatizado, contenedores, y monitorización para deployments confiables y escalables.',
      features: ['AWS/Azure/GCP', 'Kubernetes & Docker', 'CI/CD pipelines', 'Monitorización 24/7'],
      gradient: 'from-orange-500 to-amber-400',
      delay: 0.3
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1] // Custom ease for premium feel
      },
    },
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1, 
      rotate: shouldReduceMotion ? 0 : 5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section 
      ref={servicesRef} 
      className="container mx-auto px-4 py-16"
      aria-label="Professional services offered"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 font-medium mb-4">
          Soluciones Integrales
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">De la estrategia a la implementación técnica</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Servicios premium que combinan expertise técnico profundo con visión estratégica de negocio, 
          entregando resultados medibles y escalables.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={servicesInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={itemVariants}
            custom={index}
            onMouseEnter={() => !shouldReduceMotion && setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            onFocus={() => !shouldReduceMotion && setHoveredCard(index)}
            onBlur={() => setHoveredCard(null)}
            className="relative group"
            role="article"
            aria-label={`Service: ${service.title}`}
          >
            {/* Card container with enhanced styling */}
            <div className="relative h-full p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden transition-all duration-500">
              
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Glow effect on hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Animated icon */}
                <motion.div
                  variants={iconVariants}
                  animate={hoveredCard === index ? 'hover' : 'rest'}
                  className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-lg mb-6"
                >
                  <service.icon 
                    size={32} 
                    className={`bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}
                    aria-hidden="true"
                  />
                </motion.div>

                {/* Title with gradient text */}
                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-8" aria-label="Key features">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: service.delay + (idx * 0.05) }}
                      className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.gradient} mr-3`} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA with animated arrow */}
                <motion.a
                  href="#projects"
                  className="inline-flex items-center font-medium text-gray-800 dark:text-gray-200 group/cta"
                  aria-label={`View case studies for ${service.title}`}
                  whileHover={{ x: shouldReduceMotion ? 0 : 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="mr-2">Ver casos de éxito</span>
                  <motion.span
                    animate={{ x: hoveredCard === index ? 5 : 0 }}
                    transition={{ duration: 0.3, repeat: hoveredCard === index ? Infinity : 0, repeatType: 'reverse' }}
                  >
                    <ArrowRight size={18} aria-hidden="true" />
                  </motion.span>
                </motion.a>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 overflow-hidden`}>
                <div className={`absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full`} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Section footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={servicesInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
      >
        <p className="text-gray-500 dark:text-gray-500 text-sm">
          Cada servicio incluye consultoría estratégica, implementación técnica, y soporte continuo.
          <span className="block mt-2 font-medium">💡 ¿Necesitas una solución personalizada? <a href="#contact" className="text-primary-600 dark:text-primary-400 underline">Hablemos</a></span>
        </p>
      </motion.div>
    </section>
  );
};

export default ServicesSection;