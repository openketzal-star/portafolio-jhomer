import { Award, BookOpen, Code, Globe, Users, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Express.js', 'FastAPI', 'MongoDB'] },
    { category: 'Mobile', items: ['React Native', 'Flutter', 'iOS/Android'] },
    { category: 'Herramientas', items: ['Git', 'Docker', 'AWS', 'Figma', 'Vercel'] },
  ];

  const experiences = [
    {
      year: '2023 - Presente',
      role: 'Desarrollador Full Stack Freelance',
      description: 'Desarrollo de aplicaciones web y móviles para clientes internacionales.',
    },
    {
      year: '2021 - 2023',
      role: 'Creador de Contenido Tech',
      description: 'Creación de tutoriales y contenido educativo sobre programación y tecnología.',
    },
    {
      year: '2019 - 2021',
      role: 'Ingeniero de Software Junior',
      description: 'Desarrollo de sistemas empresariales y APIs para startup de fintech.',
    },
  ];

  const principles = [
    {
      icon: Code,
      title: 'Código Limpio',
      description: 'Priorizo la legibilidad y mantenibilidad del código sobre la inteligencia.',
    },
    {
      icon: Users,
      title: 'Colaboración',
      description: 'Creo que los mejores productos nacen de equipos diversos que trabajan juntos.',
    },
    {
      icon: BookOpen,
      title: 'Aprendizaje Continuo',
      description: 'La tecnología evoluciona rápido, y yo evoluciono con ella.',
    },
    {
      icon: Zap,
      title: 'Impacto',
      description: 'Busco crear soluciones que realmente mejoren la vida de las personas.',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre mí</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Soy un desarrollador apasionado por crear soluciones digitales que combinan tecnología elegante, 
          diseño intuitivo y impacto real. Cuando no estoy codificando, estoy compartiendo lo que aprendo 
          o explorando nuevas oportunidades.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl">
          <Globe className="mx-auto mb-4 text-blue-600 dark:text-blue-400" size={32} />
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">3+</div>
          <div className="text-gray-600 dark:text-gray-400">Años de experiencia</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
          <Award className="mx-auto mb-4 text-green-600 dark:text-green-400" size={32} />
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">50+</div>
          <div className="text-gray-600 dark:text-gray-400">Proyectos completados</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
          <Users className="mx-auto mb-4 text-purple-600 dark:text-purple-400" size={32} />
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">20+</div>
          <div className="text-gray-600 dark:text-gray-400">Clientes satisfechos</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl">
          <BookOpen className="mx-auto mb-4 text-orange-600 dark:text-orange-400" size={32} />
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">100+</div>
          <div className="text-gray-600 dark:text-gray-400">Artículos/tutoriales</div>
        </div>
      </div>

      {/* Skills */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Habilidades y Tecnologías</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="border border-gray-200 dark:border-gray-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-4 text-primary-600 dark:text-primary-400">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Experiencia Profesional</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-primary-500"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
              <div className="mb-2">
                <span className="inline-block px-4 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                  {exp.year}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
              <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Mis Principios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="text-center p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mb-4">
                <principle.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Note */}
      <section className="text-center py-12 bg-gradient-to-r from-primary-50 to-cyan-50 dark:from-primary-900/10 dark:to-cyan-900/10 rounded-2xl">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">Más allá del código</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Creo que la tecnología es más que líneas de código: es una herramienta para empoderar, 
            conectar y mejorar vidas. Cuando no estoy trabajando, probablemente esté aprendiendo algo nuevo, 
            haciendo senderismo o tomando demasiado café mientras planeo mi próximo proyecto.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Siempre abierto a conversaciones interesantes, colaboraciones y nuevas oportunidades.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;