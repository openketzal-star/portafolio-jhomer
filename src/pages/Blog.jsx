import { Calendar, Clock, Tag, Search, Filter } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  const posts = [
    {
      id: 1,
      title: 'Cómo empecé a aprender IA sin background técnico',
      excerpt: 'Mi ruta de aprendizaje: de management a programación con IA, recursos y estrategias que me funcionaron.',
      date: '2024-03-15',
      readTime: '10 min',
      tags: ['IA', 'Aprendizaje', 'Carrera'],
      featured: true,
      slug: 'aprender-ia-sin-background',
    },
    {
      id: 2,
      title: 'Herramientas de IA para marketing que realmente uso',
      excerpt: 'Un recorrido por las herramientas de IA que integro en mi flujo de trabajo de marketing y creación de contenido.',
      date: '2024-02-28',
      readTime: '8 min',
      tags: ['IA', 'Marketing', 'Herramientas'],
      featured: true,
      slug: 'herramientas-ia-marketing',
    },
    {
      id: 3,
      title: 'UX para aplicaciones de IA: principios básicos',
      excerpt: 'Cómo diseñar interfaces que hagan la IA accesible y comprensible para usuarios no técnicos.',
      date: '2024-02-10',
      readTime: '12 min',
      tags: ['UX', 'IA', 'Diseño'],
      featured: false,
      slug: 'ux-aplicaciones-ia',
    },
    {
      id: 4,
      title: 'De marketing a programación: cómo aprovechar tu experiencia previa',
      excerpt: 'Las habilidades de marketing que me han servido en mi transición hacia el desarrollo con IA.',
      date: '2024-01-25',
      readTime: '7 min',
      tags: ['Carrera', 'Marketing', 'Transición'],
      featured: false,
      slug: 'marketing-a-programacion',
    },
    {
      id: 5,
      title: 'Creación de contenido técnico para YouTube y TikTok',
      excerpt: 'Estrategias para producir videos educativos sobre tecnología que realmente atraigan audiencia.',
      date: '2024-01-12',
      readTime: '9 min',
      tags: ['Contenido', 'YouTube', 'TikTok'],
      featured: false,
      slug: 'contenido-tecnico-videos',
    },
    {
      id: 6,
      title: 'Prototipando con IA: de la idea a un MVP en una semana',
      excerpt: 'Cómo uso herramientas de IA para acelerar la validación de ideas y creación de prototipos funcionales.',
      date: '2023-12-20',
      readTime: '11 min',
      tags: ['IA', 'Prototipado', 'MVP'],
      featured: false,
      slug: 'prototipado-ia-mvp',
    },
  ];

  const allTags = ['all', ...new Set(posts.flatMap(post => post.tags))];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comparto mi aprendizaje sobre programación con IA, marketing digital, UX/UI y crecimiento profesional. 
          Tutoriales, reflexiones y guías prácticas desde la perspectiva de un aprendiz.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar artículos..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tag === 'all' ? (
                <>
                  <Filter size={14} className="mr-2" />
                  Todos
                </>
              ) : (
                <>
                  <Tag size={14} className="mr-2" />
                  {tag}
                </>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Posts */}
      {filteredPosts.filter(post => post.featured).length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6">Artículos Destacados</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredPosts.filter(post => post.featured).map((post) => (
              <article
                key={post.id}
                className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock size={14} className="mr-1" />
                      {post.readTime} lectura
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    <Link to={`/blog/${post.slug}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
                  >
                    Leer artículo →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* All Posts */}
      <section>
        <h2 className="text-2xl font-bold mb-6">
          {selectedTag === 'all' ? 'Todos los artículos' : `Artículos sobre ${selectedTag}`}
          <span className="ml-2 text-gray-500 dark:text-gray-400 text-lg">
            ({filteredPosts.length})
          </span>
        </h2>
        
        {filteredPosts.length > 0 ? (
          <div className="space-y-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="border-b border-gray-200 dark:border-gray-800 pb-8"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="h-48 md:h-40 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar size={14} className="mr-1" />
                        {new Date(post.date).toLocaleDateString('es-ES')}
                      </span>
                      <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      <Link to={`/blog/${post.slug}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
                      >
                        Leer más →
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="mx-auto mb-4 text-gray-400" size={48} />
            <h3 className="text-2xl font-bold mb-2">No se encontraron artículos</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Prueba con otros términos de búsqueda o categorías.
            </p>
            <button
              onClick={() => { setSearch(''); setSelectedTag('all'); }}
              className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Ver todos los artículos
            </button>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-r from-primary-50 to-cyan-50 dark:from-primary-900/10 dark:to-cyan-900/10 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">¿Quieres más contenido como este?</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Suscríbete para recibir los nuevos artículos directamente en tu email. Sin spam, solo contenido útil.
        </p>
        <form className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            placeholder="tu@email.com"
            className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            Suscribirse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Blog;