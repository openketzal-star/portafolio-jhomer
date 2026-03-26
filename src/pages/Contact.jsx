import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID"); // Reemplazar con ID real
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'jhomer@example.com',
      link: 'mailto:jhomer@example.com',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+51 123 456 789',
      link: 'tel:+51123456789',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Lima, Perú',
      link: 'https://maps.google.com/?q=Lima,Peru',
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (state.succeeded) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <CheckCircle className="mx-auto mb-6 text-green-500" size={64} />
        <h1 className="text-4xl font-bold mb-4">¡Mensaje enviado!</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Gracias por contactarme. Te responderé lo antes posible.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
        >
          Volver al inicio
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          ¿Interesado en colaboraciones de IA y marketing? ¿Quieres discutir una idea o proyecto?
          Estoy aquí para conversar sobre tecnología, contenido y estrategia.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="md:col-span-1 space-y-6">
          <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start p-4 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-shadow group"
            >
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                <method.icon size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{method.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{method.value}</p>
              </div>
            </a>
          ))}

          {/* Availability */}
          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-xl">
            <h3 className="font-bold text-lg mb-2">Disponibilidad</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Disponible para nuevos proyectos
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Tiempo de respuesta: 24-48 horas
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Tu nombre"
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="tu@email.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Asunto *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="¿En qué puedo ayudarte?"
              />
              <ValidationError prefix="Subject" field="subject" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mensaje *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                placeholder="Describe tu proyecto, idea o consulta..."
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Los campos marcados con * son obligatorios
              </p>
              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Enviando...' : 'Enviar mensaje'}
                <Send className="ml-2" size={20} />
              </button>
            </div>
            <ValidationError errors={state.errors} />
          </form>

          {/* Alternative Contact */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold mb-4">¿Prefieres otro método?</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://calendly.com/jhomer"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
              >
                Agendar una llamada
              </a>
              <a
                href="https://wa.me/51916387978"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-green-600 text-green-600 dark:text-green-400 dark:border-green-400 font-semibold rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="https://linkedin.com/in/jhomer"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Preguntas frecuentes</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2">¿Cuál es tu tiempo de respuesta?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Normalmente respondo en 24-48 horas. Para consultas urgentes, considera usar WhatsApp.
            </p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2">¿Trabajas con clientes internacionales?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sí, trabajo con clientes de todo el mundo. Las reuniones se coordinan según zonas horarias.
            </p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-2">¿Ofreces consultoría de IA para marketing?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sí, asesoro en la integración de herramientas de IA en estrategias de marketing y contenido.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;