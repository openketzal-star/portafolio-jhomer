import { Mail, Calendar, ArrowRight, CheckCircle, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTASection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  // Trust indicators
  const trustPoints = [
    'Consultoría inicial sin costo',
    'Metodología ágil y transparente',
    'Resultados medibles desde el primer mes',
    'Soporte técnico continuo'
  ];

  const benefits = [
    { icon: Zap, text: 'Arquitectura escalable desde el día 1' },
    { icon: Star, text: 'Código limpio y documentado' },
    { icon: CheckCircle, text: 'Entrega en tiempo y forma' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: shouldReduceMotion ? 0 : 0.5 },
    },
  };

  return (
    <section 
      ref={ref} 
      className="relative overflow-hidden"
      aria-label="Call to action section for starting a project"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-indigo-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
      
      {/* Animated orbs (decorative) */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0],
              rotate: [0, -180, -360]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          />
        </>
      )}

      <div className="relative container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium mb-6">
            <Zap size={16} className="mr-2" />
            Oportunidad Limitada
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            ¿Listo para transformar tu
            <span className="block bg-gradient-to-r from-amber-300 to-cyan-300 bg-clip-text text-transparent">
              estrategia con IA?
            </span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
            Conversemos sobre cómo la inteligencia artificial puede optimizar tus procesos, 
            reducir costos operativos y generar insights accionables para tomar mejores decisiones.
          </p>

          {/* Trust badges */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {trustPoints.map((point, index) => (
              <motion.div
                key={point}
                variants={itemVariants}
                className="flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/90 text-sm"
              >
                <CheckCircle size={16} className="mr-2 text-green-400" />
                {point}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left column - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Qué incluye cada proyecto</h3>
            
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + (index * 0.1) }}
                className="flex items-start p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 mr-4">
                  <benefit.icon size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{benefit.text}</h4>
                  <p className="text-white/70 text-sm">
                    {index === 0 && 'Diseñamos sistemas que crecen con tu negocio, evitando reescribir código.'}
                    {index === 1 && 'Cada línea de código está documentada y sigue las mejores prácticas de la industria.'}
                    {index === 2 && 'Compromiso con plazos realistas y comunicación constante durante todo el proyecto.'}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Stats mini */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24+</div>
                <div className="text-white/70 text-sm">Clientes Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-white/70 text-sm">Retención Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4.9/5</div>
                <div className="text-white/70 text-sm">Satisfacción</div>
              </div>
            </div>
          </motion.div>

          {/* Right column - CTA Form/Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white to-gray-100 shadow-2xl">
              {/* Card shine effect */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Comienza tu proyecto hoy
              </h3>
              
              <p className="text-gray-600 mb-8">
                Agenda una consultoría gratuita de 30 minutos. Analizaremos tu desafío y 
                te presentaré un plan de acción claro con presupuesto y timeline.
              </p>

              {/* CTA Buttons */}
              <div className="space-y-4 mb-8">
                <motion.a
                  href="/contacto"
                  className="block w-full py-4 px-6 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Schedule a free consultation call"
                >
                  <span className="flex items-center justify-center">
                    <Calendar size={20} className="mr-3" />
                    Agendar Llamada Gratuita
                    <ArrowRight size={20} className="ml-3" />
                  </span>
                </motion.a>

                <motion.a
                  href="mailto:openketzal@gmail.com"
                  className="block w-full py-4 px-6 border-2 border-gray-300 text-gray-800 font-bold rounded-xl text-center hover:bg-gray-50 transition-all duration-300"
                  whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Send an email to discuss project details"
                >
                  <span className="flex items-center justify-center">
                    <Mail size={20} className="mr-3" />
                    Enviar Email Detallado
                  </span>
                </motion.a>
              </div>

              {/* Additional option */}
              <div className="text-center">
                <Link
                  to="/proyectos"
                  className="inline-flex items-center text-primary-700 font-medium hover:text-primary-800 transition-colors"
                  aria-label="Browse all portfolio projects"
                >
                  <span className="mr-2">¿Prefieres ver más proyectos primero?</span>
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Guarantee badge */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-center text-gray-500 text-sm">
                  <CheckCircle size={16} className="mr-2 text-green-500" />
                  <span>Sin compromiso • 100% confidencial • Sin SPAM</span>
                </div>
              </div>
            </div>

            {/* Floating elements (decorative) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 shadow-lg"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg"
            />
          </motion.div>
        </div>

        {/* Final note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-white/60 text-sm">
            📞 <strong>Respuesta en menos de 24 horas</strong> • 🎯 <strong>Presupuesto claro sin sorpresas</strong> • 
            🔄 <strong>Iteraciones basadas en feedback</strong>
          </p>
          <p className="text-white/40 text-xs mt-4">
            Trabajamos con empresas desde startups hasta corporativos. Cada proyecto es único y se adapta a tus necesidades específicas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;