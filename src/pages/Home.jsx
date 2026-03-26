import { ArrowRight, Code, Video, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { label: 'Proyectos con IA', value: '5+' },
    { label: 'Años en Marketing', value: '4+' },
    { label: 'Videos Producidos', value: '50+' },
    { label: 'Herramientas de IA', value: '10+' },
  ];

  const services = [
    {
      icon: Code,
      title: 'Desarrollo con IA',
      description: 'Aplicaciones web y móviles potenciadas por IA, usando OpenAI, LangChain y más.',
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    },
    {
      icon: Video,
      title: 'Contenido Educativo',
      description: 'Tutoriales, guías y experiencias sobre programación con IA en YouTube y TikTok.',
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    },
    {
      icon: Search,
      title: 'Estrategia Digital',
      description: 'Marketing, análisis de mercado y estrategias de crecimiento para productos digitales.',
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hola, soy <span className="text-primary-600 dark:text-primary-400">Jhomer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Management & Marketing profesional aprendiendo programación con IA.
            Creo aplicaciones impulsadas por IA y comparto el viaje en YouTube y TikTok.
            Transformo ideas en productos digitales y contenido educativo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/proyectos"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              Ver mis proyectos
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
            >
              Contactarme
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-10 text-center">Lo que hago</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-shadow"
            >
              <div className={`inline-flex p-3 rounded-lg mb-4 ${service.color}`}>
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>
              <Link
                to={service.title.includes('Apps') ? '/proyectos' : service.title.includes('Contenido') ? '/blog' : '/sobre-mi'}
                className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
              >
                Ver más
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Proyectos Destacados</h2>
          <Link
            to="/proyectos"
            className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
          >
            Ver todos →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Proyecto 1 */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Asistente de Marketing con IA</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Herramienta que genera estrategias de contenido y copy usando GPT-4, analizando tendencias.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                  Python
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm">
                  OpenAI
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">
                  Streamlit
                </span>
              </div>
              <Link
                to="/proyectos/asistente-ia"
                className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
              >
                Ver detalles →
              </Link>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-r from-green-500 to-teal-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Curso Interactivo de IA</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Plataforma educativa con ejercicios prácticos de programación con IA, usando notebooks interactivos.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm">
                  Jupyter
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                  FastAPI
                </span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm">
                  React
                </span>
              </div>
              <Link
                to="/proyectos/curso-ia"
                className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
              >
                Ver detalles →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;