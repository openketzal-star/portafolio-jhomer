import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight, Mail, Calendar, Code, Brain, Smartphone, Target, Rocket,
  Zap, CheckCircle, Users, TrendingUp, ExternalLink, Sparkles
} from 'lucide-react';

// Importar componentes existentes (ajustaremos algunos)
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProjectsSection from '../components/sections/ProjectsSection';

const LandingPage = () => {
  const shouldReduceMotion = useReducedMotion();
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Datos para la sección de Problema/Solución
  const problemSolutions = [
    {
      problem: 'Los pequeños negocios pierden horas en tareas repetitivas',
      solution: 'Automatizo procesos con aplicaciones de IA que ahorran 10+ horas semanales',
      icon: Zap
    },
    {
      problem: 'El marketing manual es ineficiente y difícil de medir',
      solution: 'Construyo dashboards inteligentes que optimizan campañas en tiempo real',
      icon: TrendingUp
    },
    {
      problem: 'Las herramientas empresariales son muy caras para MIPES',
      solution: 'Desarrollo soluciones personalizadas a una fracción del costo',
      icon: Target
    },
    {
      problem: 'La tecnología parece compleja y alejada',
      solution: 'Creo interfaces intuitivas que cualquier persona puede usar sin entrenamiento',
      icon: Smartphone
    },
  ];

  // Proceso de trabajo
  const processSteps = [
    {
      step: 1,
      title: 'Consulta Gratuita',
      description: 'Analizamos tu desafío específico en una llamada de 30 minutos sin compromiso.',
      icon: Calendar
    },
    {
      step: 2,
      title: 'Propuesta Clara',
      description: 'Recibes un plan detallado con timeline, presupuesto y entregables definidos.',
      icon: CheckCircle
    },
    {
      step: 3,
      title: 'Desarrollo Iterativo',
      description: 'Construimos la aplicación en sprints, con feedback constante en cada etapa.',
      icon: Code
    },
    {
      step: 4,
      title: 'Lanzamiento & Soporte',
      description: 'Implementamos la solución y ofrecemos soporte técnico continuo.',
      icon: Rocket
    },
  ];

  // Habilidades clave condensadas
  const coreSkills = [
    { skill: 'Desarrollo de Apps con IA', level: 'Intermedio' },
    { skill: 'Estrategia de Marketing Digital', level: 'Avanzado' },
    { skill: 'Automatización de Procesos', level: 'Intermedio' },
    { skill: 'Análisis de Datos', level: 'Intermedio' },
    { skill: 'Diseño UX para No-Técnicos', level: 'Intermedio' },
    { skill: 'Gestión de Proyectos Ágiles', level: 'Avanzado' },
  ];

  // Experiencia condensada
  const condensedExperience = [
    {
      period: '2024 - Presente',
      role: 'Desarrollador de Aplicaciones con IA',
      highlight: '4+ apps en producción para MIPES'
    },
    {
      period: '2021 - 2024',
      role: 'Especialista en Marketing Digital',
      highlight: '+$500K generados en ventas para clientes'
    },
    {
      period: '2019 - 2021',
      role: 'Coordinador de Proyectos',
      highlight: '25% reducción en tiempos de ejecución'
    },
  ];

  return (
    <div className="space-y-20 md:space-y-32">
      {/* Hero Section */}
      <section id="inicio">
        <HeroSection />
      </section>

      {/* Problema & Solución */}
      <section id="soluciones" className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-50 to-cyan-50 dark:from-primary-900/30 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 font-medium mb-6">
            <Target size={16} className="mr-2" />
            Enfocado en Resultados Reales
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Resuelvo problemas concretos de
            <span className="block bg-gradient-to-r from-primary-600 to-cyan-500 bg-clip-text text-transparent">
              pequeños negocios con IA
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            No construyo tecnología por tecnología. Creo soluciones prácticas que 
            generan ahorro de tiempo, aumento de ventas y mejor experiencia para tus clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problemSolutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 h-full hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary-50 to-cyan-50 dark:from-primary-900/20 dark:to-cyan-900/20 text-primary-600 dark:text-primary-400 mr-4">
                    <item.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-500 mb-1">PROBLEMA</div>
                    <h3 className="font-bold text-gray-800 dark:text-gray-200">{item.problem}</h3>
                  </div>
                </div>
                
                <div className="pl-16">
                  <div className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">SOLUCIÓN</div>
                  <p className="text-gray-700 dark:text-gray-300">{item.solution}</p>
                </div>

                {/* Connector line (decorative) */}
                <div className="absolute left-8 top-24 bottom-8 w-0.5 bg-gradient-to-b from-primary-300 to-transparent dark:from-primary-700 hidden md:block" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios">
        <ServicesSection />
      </section>

      {/* Proyectos */}
      <section id="proyectos">
        <ProjectsSection />
      </section>

      {/* Sobre mí condensado */}
      <section id="sobre-mi" className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Columna izquierda: Perfil */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 font-medium mb-6">
                <Sparkles size={16} className="mr-2" />
                Mi Journey Único
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Marketing digital +
                <span className="block text-primary-600 dark:text-primary-400">
                  Desarrollo con IA
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Combino <span className="font-semibold">4+ años de experiencia en marketing digital</span> con 
                <span className="font-semibold"> habilidades técnicas en desarrollo de aplicaciones con IA</span>.
                Este mix único me permite entender tanto las necesidades del negocio como las posibilidades tecnológicas.
              </p>

              {/* Habilidades clave */}
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">Habilidades Combinadas</h3>
                <div className="grid grid-cols-2 gap-4">
                  {coreSkills.map((skill, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                      <span className="font-medium text-gray-800 dark:text-gray-200">{skill.skill}</span>
                      <span className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Columna derecha: Experiencia y Principios */}
            <div>
              {/* Experiencia condensada */}
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-6">Experiencia Relevante</h3>
                <div className="space-y-6">
                  {condensedExperience.map((exp, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-cyan-50 dark:from-primary-900/20 dark:to-cyan-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold mr-4">
                        {exp.period.split(' ')[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{exp.role}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{exp.highlight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Principios de trabajo */}
              <div>
                <h3 className="text-xl font-bold mb-6">Cómo Trabajo</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Resultados sobre Tecnología</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        La IA es solo el medio, no el fin. Me enfoco en métricas de negocio reales.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users size={20} className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Accesibilidad para MIPES</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Precios justos, documentación clara y soporte continuo para pequeños negocios.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Rocket size={20} className="text-purple-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Aprendizaje en Público</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Documento mi proceso para ayudar a otros en su transición hacia la tecnología.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section id="proceso" className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proceso claro y
            <span className="block bg-gradient-to-r from-primary-600 to-cyan-500 bg-clip-text text-transparent">
              sin sorpresas
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Cada proyecto sigue una metodología probada que garantiza transparencia, calidad y resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 text-center h-full">
                {/* Número del paso */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-cyan-500 text-white font-bold text-2xl mb-6">
                  {step.step}
                </div>
                
                {/* Icono */}
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary-50 to-cyan-50 dark:from-primary-900/20 dark:to-cyan-900/20 text-primary-600 dark:text-primary-400 mb-4">
                  <step.icon size={28} />
                </div>
                
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>

              {/* Flecha conectora (excepto último) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-300 to-cyan-300 dark:from-primary-700 dark:to-cyan-700" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contacto Simplificado */}
      <section id="contacto" ref={contactRef} className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-primary-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Columna izquierda: Información */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Conversemos sobre
                <span className="block text-cyan-300">
                  tu proyecto con IA
                </span>
              </h2>
              
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                ¿Tienes un proceso que podría automatizarse? ¿Una idea para una aplicación que podría escalar tu negocio?
                Agendemos una llamada de 30 minutos sin costo para explorar posibilidades.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail size={24} className="text-cyan-300 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Directo</h4>
                    <a href="mailto:openketzal@gmail.com" className="text-white/90 hover:text-white">
                      openketzal@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar size={24} className="text-cyan-300 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Agenda una Llamada</h4>
                    <a 
                      href="https://calendly.com/jhomer-ia" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/90 hover:text-white underline"
                    >
                      Calendly.com/jhomer-ia
                    </a>
                    <p className="text-white/70 text-sm mt-1">30 minutos • Sin compromiso • Sin presión de ventas</p>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/20">
                  <h4 className="font-bold text-lg mb-4">¿Por qué trabajar conmigo?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle size={18} className="text-green-400 mr-3" />
                      <span className="text-white/90">Especializado en MIPES y emprendedores</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={18} className="text-green-400 mr-3" />
                      <span className="text-white/90">Precios justos y transparentes</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle size={18} className="text-green-400 mr-3" />
                      <span className="text-white/90">Soporte técnico continuo incluido</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Columna derecha: Formulario simplificado */}
            <div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Cuéntame sobre tu proyecto</h3>
                
                <form 
                  action="https://formspree.io/f/YOUR_FORM_ID" 
                  method="POST"
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="¿Cómo te llamas?"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-white/90 mb-2">
                      Tipo de negocio *
                    </label>
                    <select
                      id="business"
                      name="business"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="" className="bg-gray-900">Selecciona una opción</option>
                      <option value="mype" className="bg-gray-900">MYPE / Pequeño Negocio</option>
                      <option value="freelancer" className="bg-gray-900">Freelancer / Profesional Independiente</option>
                      <option value="startup" className="bg-gray-900">Startup en Crecimiento</option>
                      <option value="other" className="bg-gray-900">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                      Describe brevemente tu proyecto o desafío *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      placeholder="Ejemplo: 'Necesito una aplicación web que automatice el seguimiento de mis clientes...'"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center">
                      <Mail size={20} className="mr-3" />
                      Enviar Propuesta
                    </span>
                  </button>

                  <p className="text-white/60 text-sm text-center">
                    Te responderé en menos de 24 horas. Sin spam, sin compromiso.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
          ¿Listo para transformar tu negocio con inteligencia artificial?
        </p>
        <a
          href="#contacto"
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300"
        >
          <ArrowRight className="mr-2" size={20} />
          Iniciar Conversación
        </a>
      </div>
    </div>
  );
};

export default LandingPage;