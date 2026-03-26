import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare, Calendar, Zap, Target, Users } from 'lucide-react';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID"); // Reemplazar con ID real
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    projectType: '',
    message: '',
  });

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Directo',
      value: 'openketzal@gmail.com',
      link: 'mailto:openketzal@gmail.com',
      description: 'Perfecto para propuestas detalladas o documentos'
    },
    {
      icon: Phone,
      title: 'WhatsApp / Teléfono',
      value: '+51 916 387 978',
      link: 'https://wa.me/51916387978',
      description: 'Respuesta rápida para consultas inmediatas'
    },
    {
      icon: MapPin,
      title: 'Ubicación Base',
      value: 'Lima, Perú (Remoto Global)',
      link: 'https://maps.google.com/?q=Lima,Peru',
      description: 'Trabajo con clientes de todo el mundo'
    },
  ];

  const projectTypes = [
    { value: 'web-app', label: 'Aplicación Web con IA' },
    { value: 'mobile-app', label: 'App Móvil Inteligente' },
    { value: 'marketing-automation', label: 'Automatización de Marketing' },
    { value: 'ai-chatbot', label: 'Chatbot/Asistente con IA' },
    { value: 'data-analysis', label: 'Análisis de Datos con IA' },
    { value: 'other', label: 'Otro tipo de proyecto' },
  ];

  const businessTypes = [
    { value: 'mype', label: 'MYPE / Pequeño Negocio' },
    { value: 'freelancer', label: 'Freelancer / Profesional Independiente' },
    { value: 'startup', label: 'Startup en Crecimiento' },
    { value: 'enterprise', label: 'Empresa Establecida' },
    { value: 'non-profit', label: 'Organización sin Fines de Lucro' },
    { value: 'personal', label: 'Proyecto Personal' },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (state.succeeded) {
    return (
      <div className="max-w-2xl mx-auto text-center py-20">
        <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-600 dark:text-green-400 mb-8">
          <CheckCircle size={48} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">¡Mensaje enviado con éxito!</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Gracias por contactarme. Revisaré tu propuesta cuidadosamente y te responderé en menos de 24 horas.
        </p>
        <p className="text-gray-500 dark:text-gray-500 mb-10">
          Mientras tanto, puedes explorar <a href="/proyectos" className="text-primary-600 dark:text-primary-400 font-medium">mis proyectos</a> o 
          revisar <a href="/sobre-mi" className="text-primary-600 dark:text-primary-400 font-medium">mi enfoque de trabajo</a>.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/"
            className="px-8 py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors"
          >
            Volver al Inicio
          </a>
          <a
            href="/proyectos"
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Ver Más Proyectos
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-20">
      {/* Hero Header */}
      <section className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 font-medium mb-6">
          <MessageSquare size={16} className="mr-2" />
          Conversemos sobre tu proyecto con IA
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          ¿Listo para transformar tu negocio con
          <span className="block bg-gradient-to-r from-primary-600 to-cyan-500 bg-clip-text text-transparent">
            inteligencia artificial?
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Especializado en crear <span className="font-semibold">aplicaciones web y móviles con IA</span> para 
          <span className="font-semibold"> MIPES y emprendedores</span>. Combino conocimiento de marketing digital 
          con desarrollo técnico para entregar soluciones que realmente funcionan en el mundo real.
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-700 dark:text-primary-300">24-48h</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Respuesta promedio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-700 dark:text-primary-300">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Enfoque en MIPES</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-700 dark:text-primary-300">8+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Proyectos con IA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-700 dark:text-primary-300">4.9/5</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Satisfacción clientes</div>
          </div>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Information & Value Prop */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Información Directa</h2>
            <div className="space-y-6">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-700"
                >
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary-50 to-cyan-50 dark:from-primary-900/20 dark:to-cyan-900/20 text-primary-600 dark:text-primary-400 mr-4">
                      <method.icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{method.title}</h3>
                      <p className="text-gray-800 dark:text-gray-200 font-medium">{method.value}</p>
                      <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">{method.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Value Proposition Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black dark:from-gray-800 dark:to-gray-900 text-white">
            <div className="inline-flex p-3 rounded-xl bg-white/10 mb-4">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Especializado en MIPES</h3>
            <p className="text-white/80 mb-4">
              Entiendo los desafíos únicos de pequeños negocios y emprendedores. Creo soluciones accesibles, escalables y con ROI rápido.
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2"></div>
                Apps web/móviles desde $500 - $3000
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2"></div>
                Asesoría inicial sin costo
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2"></div>
                Soporte técnico continuo incluido
              </li>
            </ul>
          </div>

          {/* Availability */}
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <h3 className="font-bold text-lg">Disponibilidad Actual</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              <span className="font-medium">1-2 proyectos nuevos por mes</span> para asegurar calidad y atención personalizada.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-500">
              <span className="font-medium">Próxima disponibilidad:</span> Abril 2024
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-2">Cuéntame sobre tu proyecto</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Completa este formulario y me pondré en contacto para una consultoría gratuita de 30 minutos.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="¿Cómo te llamas?"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Tipo de proyecto *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {projectTypes.map((type) => (
                    <label
                      key={type.value}
                      className={`relative cursor-pointer ${formData.projectType === type.value ? 'ring-2 ring-primary-500' : ''}`}
                    >
                      <input
                        type="radio"
                        name="projectType"
                        value={type.value}
                        checked={formData.projectType === type.value}
                        onChange={handleChange}
                        required
                        className="sr-only"
                      />
                      <div className={`p-4 rounded-xl border ${formData.projectType === type.value ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' : 'border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'}`}>
                        <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{type.label}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Business Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Tu tipo de negocio / situación *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {businessTypes.map((type) => (
                    <label
                      key={type.value}
                      className={`relative cursor-pointer ${formData.businessType === type.value ? 'ring-2 ring-primary-500' : ''}`}
                    >
                      <input
                        type="radio"
                        name="businessType"
                        value={type.value}
                        checked={formData.businessType === type.value}
                        onChange={handleChange}
                        required
                        className="sr-only"
                      />
                      <div className={`p-4 rounded-xl border ${formData.businessType === type.value ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' : 'border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'}`}>
                        <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{type.label}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Describe tu proyecto, desafío o idea *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Ejemplo: 'Necesito una aplicación web que automatice el seguimiento de clientes usando IA...'"
                />
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                  Mientras más detalles, mejor podré entender cómo ayudarte.
                </p>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* Submit */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                      <span className="font-medium">¿Qué pasa después?</span>
                    </p>
                    <ol className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>1. Te respondo en 24-48 horas para coordinar una llamada</li>
                      <li>2. Analizamos tu proyecto en una consultoría gratuita de 30min</li>
                      <li>3. Recibes una propuesta detallada con timeline y presupuesto</li>
                    </ol>
                  </div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {state.submitting ? 'Enviando...' : 'Enviar Propuesta'}
                    <Send className="inline ml-2" size={20} />
                  </button>
                </div>
              </div>
              <ValidationError errors={state.errors} />
            </form>
          </div>

          {/* Alternative Contact Methods */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-bold mb-6">¿Prefieres contactarme directamente?</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <a
                href="https://wa.me/51916387978"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 border border-gray-300 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-green-500 dark:hover:border-green-500 group"
              >
                <div className="p-4 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2">WhatsApp Rápido</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                  Para consultas inmediatas o proyectos urgentes
                </p>
              </a>
              
              <a
                href="https://calendly.com/jhomer-ia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 border border-gray-300 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-500 group"
              >
                <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  <Calendar size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2">Agendar Llamada</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                  Reserva 30 minutos para discutir tu proyecto en profundidad
                </p>
              </a>
              
              <a
                href="mailto:openketzal@gmail.com?subject=Propuesta%20de%20Proyecto%20IA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 border border-gray-300 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-purple-500 dark:hover:border-purple-500 group"
              >
                <div className="p-4 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2">Email Formal</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                  Para propuestas detalladas, documentos o RFPs
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Updated */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Preguntas frecuentes de MIPES</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Respuestas a las dudas más comunes de pequeños negocios y emprendedores
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="inline-flex p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
              <Zap size={20} />
            </div>
            <h3 className="font-bold text-lg mb-3">¿Cuánto cuesta una aplicación con IA?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Los proyectos varían entre $500 - $3000 USD dependiendo de la complejidad. Trabajo con presupuestos ajustados para MIPES y ofrezco planes de pago flexibles.
            </p>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="inline-flex p-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
              <Target size={20} />
            </div>
            <h3 className="font-bold text-lg mb-3">¿Necesito conocimientos técnicos?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              ¡Para nada! Diseño aplicaciones intuitivas para usuarios sin experiencia técnica. Además, ofrezco capacitación básica y documentación clara.
            </p>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="inline-flex p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-4">
              <Users size={20} />
            </div>
            <h3 className="font-bold text-lg mb-3">¿Ofreces soporte después del desarrollo?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sí, incluyo 30 días de soporte técnico gratuito. Luego ofrezco planes de mantenimiento mensuales accesibles para MIPES.
            </p>
          </div>
          
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="inline-flex p-3 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 mb-4">
              <MessageSquare size={20} />
            </div>
            <h3 className="font-bold text-lg mb-3">¿Qué tipos de IA utilizas?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Trabajo principalmente con APIs de OpenAI (GPT), herramientas de automatización, análisis predictivo y chatbots inteligentes adaptados a necesidades específicas de negocios.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-16 px-4 bg-gradient-to-br from-primary-900 to-indigo-900 rounded-2xl">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            ¿Aún tienes dudas sobre cómo la IA puede ayudar a tu negocio?
          </h3>
          <p className="text-lg text-white/80 mb-10">
            Agenda una consultoría gratuita de 30 minutos. Sin compromiso, sin presión de ventas.
            Solo una conversación honesta sobre tus desafíos y cómo la tecnología puede resolverlos.
          </p>
          <a
            href="https://calendly.com/jhomer-ia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 bg-white text-primary-900 font-bold rounded-xl hover:bg-gray-100 transition-colors text-lg"
          >
            <Calendar size={22} className="mr-3" />
            Agendar Consultoría Gratuita
          </a>
          <p className="text-white/60 text-sm mt-8">
            Disponible para llamadas de Lunes a Viernes, 9:00 AM - 6:00 PM (GMT-5)
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;