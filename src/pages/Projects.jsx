import { ExternalLink, Filter } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Portafolio Personal',
      description: 'Sitio web personal para mostrar proyectos y habilidades. Diseño moderno y responsive.',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'React Router'],
      category: 'web',
      demoUrl: 'https://portafolio-jhomer.vercel.app',
      githubUrl: 'https://github.com/jhomer/portafolio',
      featured: true,
    },
    {
      id: 2,
      title: 'App de Gestión de Proyectos',
      description: 'Aplicación web completa para gestión de proyectos con equipo en tiempo real.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      category: 'web',
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Sistema de Recomendación',
      description: 'Algoritmo de recomendación basado en machine learning para contenido personalizado.',
      technologies: ['Python', 'Scikit-learn', 'FastAPI', 'React'],
      category: 'ai',
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'App Móvil de Fitness',
      description: 'Aplicación móvil para seguimiento de rutinas de ejercicio y nutrición.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      category: 'mobile',
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Dashboard Analytics',
      description: 'Panel de control para visualización de datos y métricas empresariales.',
      technologies: ['Vue.js', 'D3.js', 'Express.js', 'PostgreSQL'],
      category: 'web',
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Chatbot Inteligente',
      description: 'Chatbot conversacional para atención al cliente usando NLP.',
      technologies: ['Python', 'TensorFlow', 'Dialogflow', 'React'],
      category: 'ai',
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Móvil' },
    { id: 'ai', label: 'IA/ML' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Mis Proyectos</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Una colección de mis trabajos más recientes y destacados. Cada proyecto representa un desafío único y una solución innovadora.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              filter === cat.id
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <Filter size={16} className="inline mr-2" />
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all ${
              project.featured ? 'md:col-span-2 lg:col-span-2' : ''
            }`}
          >
            {/* Project Image */}
            <div className={`h-48 ${
              project.category === 'web' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
              project.category === 'mobile' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
              'bg-gradient-to-r from-purple-500 to-pink-500'
            }`}></div>

            {/* Project Content */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {project.featured && (
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-medium">
                    Destacado
                  </span>
                )}
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {project.description}
              </p>

              {/* Actions */}
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
                    >
                      Demo
                      <ExternalLink className="ml-1" size={16} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 dark:text-gray-400 font-medium hover:underline"
                    >
                      Código
                      <span className="ml-1">🐙</span>
                    </a>
                  )}
                </div>
                <button className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
                  Ver detalles →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 dark:text-gray-600 mb-4">
            <Filter size={48} className="mx-auto" />
          </div>
          <h3 className="text-2xl font-bold mb-2">No hay proyectos en esta categoría</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Prueba con otra categoría o vuelve pronto para ver nuevos proyectos.
          </p>
          <button
            onClick={() => setFilter('all')}
            className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Ver todos los proyectos
          </button>
        </div>
      )}

      {/* CTA */}
      <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-2xl font-bold mb-4">¿Tienes un proyecto en mente?</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Me encanta colaborar en proyectos desafiantes. Si tienes una idea o necesitas ayuda con un desarrollo, hablemos.
        </p>
        <a
          href="/contacto"
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
        >
          Contactarme para colaborar
          <ExternalLink className="ml-2" size={20} />
        </a>
      </div>
    </div>
  );
};

export default Projects;