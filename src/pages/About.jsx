import { Award, BookOpen, Code, Globe, Users, Zap, Brain, Smartphone, Target, Rocket } from 'lucide-react';

const About = () => {
  const skills = [
    { 
      category: 'Desarrollo Web & Móvil con IA', 
      items: ['React', 'JavaScript', 'HTML/CSS', 'Node.js', 'APIs de IA', 'Integración OpenAI'], 
      description: 'Creo aplicaciones interactivas que integran inteligencia artificial para automatizar procesos.'
    },
    { 
      category: 'Marketing Digital & Estrategia', 
      items: ['Google Analytics', 'SEO Técnico', 'Estrategia de Contenido', 'Redes Sociales', 'Optimización de Conversión'], 
      description: 'Diseño campañas basadas en datos y métricas para maximizar el impacto digital.'
    },
    { 
      category: 'Herramientas de IA Prácticas', 
      items: ['ChatGPT Avanzado', 'Midjourney', 'GitHub Copilot', 'AutoML', 'Asistentes de Código'], 
      description: 'Domino herramientas que aceleran el desarrollo y mejoran la creatividad en proyectos.'
    },
    { 
      category: 'Gestión de Proyectos Tech', 
      items: ['Metodologías Ágiles', 'Coordinación de Equipos', 'Análisis de KPIs', 'Documentación Técnica', 'Seguimiento de Métricas'], 
      description: 'Organizo proyectos tecnológicos desde la idea hasta la implementación con métricas claras.'
    },
  ];

  const experiences = [
    {
      year: '2024 - Presente',
      role: 'Desarrollador de Aplicaciones con IA',
      description: 'Construyo soluciones tecnológicas inteligentes para MIPES y emprendedores, combinando programación con herramientas de IA para automatizar procesos de marketing y negocio.',
      highlight: '4+ aplicaciones en producción ayudando a pequeños negocios'
    },
    {
      year: '2021 - 2024',
      role: 'Especialista en Marketing Digital',
      description: 'Diseñé e implementé estrategias digitales que generaron más de $500K en ventas para clientes de e-commerce, usando análisis de datos y automatización.',
      highlight: 'Optimización de embudos con incrementos del 35% en conversión'
    },
    {
      year: '2019 - 2021',
      role: 'Coordinador de Proyectos Retail',
      description: 'Gestioné equipos y optimicé procesos operativos, reduciendo tiempos de ejecución en 25% mediante la implementación de herramientas digitales.',
      highlight: 'Introducción de primeras herramientas de automatización'
    },
  ];

  const principles = [
    {
      icon: Brain,
      title: 'IA para Resultados Reales',
      description: 'La inteligencia artificial debe resolver problemas concretos de negocios, no solo ser tecnología de moda.',
    },
    {
      icon: Smartphone,
      title: 'Apps Accesibles para Todos',
      description: 'Creo aplicaciones web y móviles intuitivas que cualquier persona pueda usar, sin necesidad de conocimientos técnicos.',
    },
    {
      icon: Target,
      title: 'Enfoque en MIPES y Personas',
      description: 'Diseño soluciones pensadas en las necesidades reales de pequeños negocios y emprendedores individuales.',
    },
    {
      icon: Rocket,
      title: 'Aprendizaje Acelerado',
      description: 'Documento públicamente mi viaje de aprendizaje para ayudar a otros en su transición hacia la tecnología.',
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section - Rediseñada */}
      <section className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 font-medium mb-6">
          <Code size={16} className="mr-2" />
          De Marketing Digital a Desarrollo con IA
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          Transformo conocimiento de marketing en
          <span className="block bg-gradient-to-r from-primary-600 to-cyan-500 bg-clip-text text-transparent">
            aplicaciones inteligentes
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          Soy <span className="font-bold text-primary-600 dark:text-primary-400">Jhomer</span>, profesional de marketing en transición activa hacia el desarrollo con IA. 
          Combino <span className="font-semibold">4+ años de experiencia en marketing digital</span> con 
          <span className="font-semibold"> habilidades técnicas básicas/intermedias</span> para crear soluciones tecnológicas 
          que realmente funcionan para <span className="font-semibold">MIPES y personas</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="px-5 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="text-2xl font-bold text-primary-700 dark:text-primary-300">4+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Años Marketing</div>
          </div>
          <div className="px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
            <div className="text-2xl font-bold text-primary-700 dark:text-primary-300">8+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Apps con IA</div>
          </div>
          <div className="px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
            <div className="text-2xl font-bold text-primary-700 dark:text-primary-300">50+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Videos Educativos</div>
          </div>
          <div className="px-5 py-3 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
            <div className="text-2xl font-bold text-primary-700 dark:text-primary-300">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Enfocado en MIPES</div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">¿Por qué mi enfoque es único?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="text-center p-6">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 text-blue-600 dark:text-blue-400 mb-4">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Marketing + Tecnología</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Entiendo tanto las necesidades del negocio como las posibilidades técnicas. No solo construyo código, construyo soluciones que venden.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-800/20 text-green-600 dark:text-green-400 mb-4">
                <Smartphone size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Apps para Gente Real</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creo aplicaciones web y móviles intuitivas, pensadas para usuarios sin conocimientos técnicos pero con necesidades reales de negocio.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/20 text-purple-600 dark:text-purple-400 mb-4">
                <Rocket size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Aprendizaje en Acción</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Documento todo mi proceso de aprendizaje técnico, compartiendo éxitos y fracasos para ayudar a otros en el mismo camino.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills - Rediseñada */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Habilidades Combinadas</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Un conjunto único de habilidades donde el marketing digital encuentra el desarrollo con IA
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-700"
            >
              <h3 className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-400">
                {skillGroup.category}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {skillGroup.description}
              </p>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center text-gray-700 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full mr-3"></div>
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mi Viaje Profesional</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            De la gestión de marketing al desarrollo de aplicaciones con IA
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-10 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-6 h-6 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
              
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 to-transparent dark:from-primary-700"></div>
              )}
              
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary-50 to-cyan-50 dark:from-primary-900/20 dark:to-cyan-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-2 md:mb-0">
                    {exp.year}
                  </span>
                  <div className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {exp.highlight}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{exp.role}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Principles - Actualizados */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo Trabajo</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Principios que guían cada proyecto y colaboración
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="text-center p-8 border border-gray-200 dark:border-gray-800 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary-50 to-cyan-50 dark:from-primary-900/20 dark:to-cyan-900/20 text-primary-600 dark:text-primary-400 mb-6">
                <principle.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">{principle.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="text-center py-12 px-4 bg-gradient-to-br from-primary-900 to-indigo-900 rounded-2xl">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            ¿Tienes un problema que la IA podría resolver?
          </h3>
          <p className="text-lg text-white/80 mb-8">
            Conversemos sobre cómo podemos crear una aplicación web o móvil que automatice tus procesos, 
            optimice tu marketing o mejore la experiencia de tus clientes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contacto"
              className="px-8 py-3 bg-white text-primary-900 font-bold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Contáctame Directamente
            </a>
            <a
              href="/proyectos"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
            >
              Ver Proyectos Similares
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;