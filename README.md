# Portafolio Jhomer - Moderno y Animado

Un portafolio profesional con diseño avanzado, animaciones fluidas y efectos interactivos, construido con React, Tailwind CSS y Framer Motion.

## 🚀 Características Mejoradas

### 🎨 **Diseño & UI/UX**
- **Diseño visual moderno** con gradientes animados, sombras y bordes redondeados.
- **Sistema de color** extendido (primary, secondary, accent) con soporte para modo oscuro/claro.
- **Tipografía mejorada** con Inter, Poppins y JetBrains Mono.
- **Efectos de vidrio** (glassmorphism) en navegación y tarjetas.
- **Responsive design** optimizado para móviles, tablets y escritorio.

### ✨ **Efectos & Animaciones**
- **Fondo de partículas interactivas** en la sección Hero (usando tsparticles).
- **Texto mecanográfico** (typewriter) en títulos y descripciones.
- **Contadores animados** para estadísticas (conteo progresivo).
- **Animaciones al hacer scroll** con react-intersection-observer y Framer Motion.
- **Efectos de hover** en tarjetas (levitación, inclinación 3D, sombras).
- **Transiciones suaves** entre páginas y elementos.
- **Barra de progreso de scroll** en la parte superior.

### 🧩 **Componentes Avanzados**
- **Navegación inteligente** con indicador de ruta activa y animación spring.
- **Header dinámico** que cambia al hacer scroll (blur, sombra).
- **Botón de "volver arriba"** que aparece automáticamente.
- **Menú móvil** con animaciones de apertura/cierre.
- **Tarjetas de servicios** con gradientes e iconos animados.
- **Grid de proyectos** con efectos de tilt y overlays.

### 🛠 **Tecnologías Utilizadas**
- **React 19** + **React Router DOM**
- **Tailwind CSS** con configuración extendida (keyframes, animations)
- **Framer Motion** para animaciones avanzadas
- **React Intersection Observer** para animaciones al scroll
- **TSParticles** para fondos de partículas
- **Lucide React** para iconos
- **Vite** como bundler rápido

## 🏗️ Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── ParticlesBackground.jsx
│   ├── TypewriterText.jsx
│   └── AnimatedCounter.jsx
├── layouts/             # Layouts (MainLayout)
├── pages/              # Páginas (Home, Projects, About, etc.)
├── index.css           # Estilos globales y utilidades
└── App.jsx             # Configuración de rutas
```

## 🚀 Cómo Ejecutar

1. **Instalar dependencias** (si aún no lo has hecho):
   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

3. **Construir para producción**:
   ```bash
   npm run build
   ```

4. **Previsualizar build**:
   ```bash
   npm run preview
   ```

## 🎨 Personalización

- **Colores**: Edita `tailwind.config.js` en la sección `colors`.
- **Fuentes**: Cambia las fuentes en `tailwind.config.js` y en `index.html`.
- **Contenido**: Modifica los textos en `src/pages/Home.jsx` y otros componentes.
- **Animaciones**: Ajusta keyframes y duraciones en `tailwind.config.js`.

## 📱 Compatibilidad

- ✅ Navegadores modernos (Chrome, Firefox, Safari, Edge)
- ✅ Soporte completo para modo oscuro/claro
- ✅ Responsive en todos los dispositivos
- ✅ Optimizado para performance (LCP, CLS, FID)

## 📄 Licencia

Este proyecto es de uso personal. Puedes modificarlo y adaptarlo a tus necesidades.

---

**Creado con ❤️ por Jhomer** - Management & Marketing profesional aprendiendo programación con IA.
