import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects, categories, categoryColors } from '../../data/projects';
import { ExternalLink, Code, Award, TrendingUp, Calendar, Building } from 'lucide-react';

const ProjectsSection = () => {
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [hoveredProject, setHoveredProject] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  // Filter projects when activeFilter changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
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
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1]
      },
    },
    exit: {
      y: 20,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  // Category badge with gradient
  const CategoryBadge = ({ category, label }) => (
    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r ${categoryColors[category] || 'from-gray-500 to-gray-700'} text-white`}>
      {label}
    </span>
  );

  // Technology pill component
  const TechnologyPill = ({ tech, index }) => (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium shadow-sm"
    >
      {tech}
    </motion.span>
  );

  return (
    <section 
      id="projects" 
      ref={projectsRef} 
      className="container mx-auto px-4 py-20"
      aria-label="Professional portfolio projects"
    >
      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={projectsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 font-medium mb-4">
          <Award size={16} className="mr-2" />
          Portafolio de Impacto
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Proyectos que escalan negocios</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Soluciones técnicas avanzadas con resultados medibles para empresas de alto crecimiento.
          Cada proyecto representa un desafío único resuelto con arquitectura moderna y mejores prácticas.
        </p>
      </motion.div>

      {/* Filter controls */}
      <motion.div
        variants={filterVariants}
        initial="hidden"
        animate={projectsInView ? 'visible' : 'hidden'}
        className="flex flex-wrap justify-center gap-3 mb-12"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
              activeFilter === category.id
                ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/25'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
            whileTap={{ scale: 0.98 }}
            aria-pressed={activeFilter === category.id}
            aria-label={`Show ${category.label} projects (${category.count})`}
            role="tab"
          >
            <span className="flex items-center">
              {category.label}
              <span className={`ml-2 px-1.5 py-0.5 rounded text-xs ${
                activeFilter === category.id 
                  ? 'bg-white/20' 
                  : 'bg-gray-300 dark:bg-gray-700'
              }`}>
                {category.count}
              </span>
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Projects grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onMouseEnter={() => !shouldReduceMotion && setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onFocus={() => !shouldReduceMotion && setHoveredProject(project.id)}
                onBlur={() => setHoveredProject(null)}
                className="relative group"
                aria-label={`Project: ${project.title}`}
              >
                {/* Card container */}
                <div className="relative h-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden transition-all duration-500">
                  
                  {/* Project image/placeholder */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[project.category] || 'from-gray-400 to-gray-600'} opacity-90`} />
                    
                    {/* Animated gradient overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${categoryColors[project.category] || 'from-gray-500 to-gray-700'} opacity-0 group-hover:opacity-30`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 0.3 : 0 }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="flex items-center px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-xs font-bold shadow-lg">
                          <Award size={12} className="mr-1.5" />
                          Destacado
                        </div>
                      </div>
                    )}

                    {/* Year & Client info */}
                    <div className="absolute bottom-4 left-4 z-10 flex items-center gap-4">
                      <div className="flex items-center text-white/90 text-sm">
                        <Calendar size={14} className="mr-1.5" />
                        {project.year}
                      </div>
                      {project.client && (
                        <div className="flex items-center text-white/90 text-sm">
                          <Building size={14} className="mr-1.5" />
                          {project.client}
                        </div>
                      )}
                    </div>

                    {/* Title overlay */}
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <h3 className="text-2xl font-bold text-white text-center leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-6">
                    {/* Category badge */}
                    <div className="mb-4">
                      <CategoryBadge 
                        category={project.category} 
                        label={categories.find(c => c.id === project.category)?.label || project.category}
                      />
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Impact metric */}
                    {project.impact && (
                      <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-100 dark:border-green-800/30">
                        <div className="flex items-start">
                          <TrendingUp size={20} className="text-green-600 dark:text-green-400 mr-3 mt-0.5" />
                          <div>
                            <div className="font-bold text-green-700 dark:text-green-300 mb-1">Impacto Medible</div>
                            <div className="text-green-600 dark:text-green-400 text-sm">{project.impact}</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="mb-8">
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Tecnologías Principales</div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                          <TechnologyPill key={tech} tech={tech} index={index} />
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-3 py-1.5 text-gray-500 dark:text-gray-500 text-xs font-medium">
                            +{project.technologies.length - 4} más
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.demoUrl}
                        className="flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                        whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        aria-label={`View demo of ${project.title}`}
                      >
                        <ExternalLink size={18} className="mr-2" />
                        Ver Demo
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="flex-1 flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                        whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        aria-label={`View source code of ${project.title}`}
                      >
                        <Code size={18} className="mr-2" />
                        Código
                      </motion.a>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${categoryColors[project.category] || 'from-gray-400 to-gray-600'} opacity-10 rounded-full`} />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold mb-2">No hay proyectos en esta categoría</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Intenta con otra categoría o <button onClick={() => setActiveFilter('all')} className="text-primary-600 dark:text-primary-400 font-medium">ver todos los proyectos</button>
          </p>
        </motion.div>
      )}

      {/* Section footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={projectsInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
        className="text-center mt-20 pt-12 border-t border-gray-200 dark:border-gray-800"
      >
        <p className="text-gray-600 dark:text-gray-500 text-lg mb-8">
          ¿Interesado en un proyecto similar para tu empresa?
        </p>
        <motion.a
          href="#contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-black dark:from-white dark:to-gray-200 text-white dark:text-gray-900 font-bold rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Schedule a consultation about custom projects"
        >
          <Calendar size={20} className="mr-3" />
          Agendar Consultoría Personalizada
        </motion.a>
        <p className="text-gray-500 dark:text-gray-600 text-sm mt-6">
          Cada proyecto incluye documentación técnica completa, arquitectura escalable y soporte continuo.
        </p>
      </motion.div>

      {/* Accessibility note */}
      <div className="sr-only" aria-live="polite">
        {filteredProjects.length} projects displayed in {activeFilter === 'all' ? 'all categories' : categories.find(c => c.id === activeFilter)?.label} category.
      </div>
    </section>
  );
};

export default ProjectsSection;