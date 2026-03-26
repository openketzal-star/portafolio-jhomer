import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Home, Mail, ChevronUp, Sparkles, Target, Code, Rocket, Github, Youtube, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '#inicio', label: 'Inicio', icon: Home },
    { path: '#soluciones', label: 'Soluciones', icon: Target },
    { path: '#servicios', label: 'Servicios', icon: Code },
    { path: '#proyectos', label: 'Proyectos', icon: Rocket },
    { path: '#contacto', label: 'Contacto', icon: Mail },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/openketzal-star', label: 'GitHub', color: 'hover:bg-gray-800/20' },
    { icon: Youtube, href: 'https://youtube.com/@jhomer', label: 'YouTube', color: 'hover:bg-red-500/20' },
    { icon: Linkedin, href: 'https://linkedin.com/in/jhomer', label: 'LinkedIn', color: 'hover:bg-blue-700/20' },
    { icon: Mail, href: 'mailto:openketzal@gmail.com', label: 'Email', color: 'hover:bg-green-600/20' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20);
      setShowScrollTop(offset > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (hash) => {
    if (hash === '#inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.querySelector(hash);
    if (element) {
      const offset = 80; // Ajuste para el header fijo
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementTop - offset, behavior: 'smooth' });
    }
    
    // Cerrar menú móvil si está abierto
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, path) => {
    e.preventDefault();
    if (path.startsWith('#')) {
      scrollToSection(path);
    } else {
      // Para rutas normales (por si acaso)
      window.location.href = path;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors overflow-hidden">
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 transform origin-left scale-x-0 transition-transform duration-300"
           style={{ transform: `scaleX(${window.scrollY / (document.body.scrollHeight - window.innerHeight)})` }} />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-lg'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur group-hover:blur-md transition-all duration-300" />
                <div className="relative w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                  <Sparkles className="text-primary-600 dark:text-primary-400" size={20} />
                </div>
              </div>
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                Jhomer<span className="text-accent-500">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => {
                const isActive = location.hash === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-primary-600 to-accent-600 shadow-lg'
                        : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon size={16} />
                      <span>{item.label}</span>
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 -z-10"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-white transition-all duration-300 ${social.color} group`}
                  aria-label={social.label}
                >
                  <social.icon size={20} className="transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-30 md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const isActive = location.hash === item.path;
                  return (
                    <button
                      key={item.path}
                      onClick={(e) => {
                        handleNavClick(e, item.path);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                        isActive
                          ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <item.icon size={20} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
                <div className="flex justify-center space-x-4 pt-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full text-gray-600 dark:text-gray-300 hover:text-white transition-colors ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative border-t border-gray-200 dark:border-gray-800 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 pt-12 pb-8">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-center lg:text-left">
              <Link to="/" className="inline-flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 flex items-center justify-center">
                  <Sparkles className="text-white" size={20} />
                </div>
                <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  Jhomer<span className="text-accent-500">.</span>
                </span>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 max-w-md">
                Management & Marketing profesional aprendiendo programación con IA.
                Transformo ideas en productos digitales y contenido educativo.
              </p>
              <div className="mt-6 flex justify-center lg:justify-start space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-white transition-colors ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 lg:w-1/2">
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Navegación</h4>
                <ul className="space-y-3">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <button
                        onClick={(e) => handleNavClick(e, item.path)}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center space-x-2"
                      >
                        <item.icon size={16} />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Legal</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      Política de Privacidad
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      Términos de Servicio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Jhomer. Todos los derechos reservados.</p>
            <p className="mt-2">
              Hecho con <span className="text-yellow-500">⚡</span>, React, Tailwind CSS, Framer Motion y un montón de café.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-2xl hover:shadow-3xl transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainLayout;