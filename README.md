# Sitio Web Profesional - Electricista Independiente

Sitio web moderno, responsive y optimizado para un electricista independiente. Creado con ReactJS, Vite, JavaScript y Tailwind CSS, preparado para presentar como proyecto de portfolio en GitHub.

## 🚀 Características

- **Diseño Moderno y Profesional**: Interfaz limpia con excelente jerarquía visual
- **Totalmente Responsive**: Adaptado a móviles, tablets y escritorio
- **Accesible**: HTML semántico, navegación por teclado, ARIA labels, contraste adecuado
- **SEO Optimizado**: Meta tags, Open Graph, estructura semántica
- **Rendimiento**: Carga optimizada, animaciones con respeto a `prefers-reduced-motion`
- **Configuración Centralizada**: Todos los datos editables desde un solo archivo
- **Funcional**: Enlaces de WhatsApp, navegación suave, formulario con validación

## 🛠️ Tecnologías

- [React](https://react.dev/) - Biblioteca de UI
- [Vite](https://vitejs.dev/) - Build tool y dev server
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Lenguaje de programación
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [React Icons](https://react-icons.github.io/react-icons/) - Iconos

## 📋 Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## 🔧 Instalación

1. Clona el repositorio:
```bash
git clone <URL-DEL-REPOSITORIO>
cd SitioWebMercadoDaniel
```

2. Instala las dependencias:
```bash
npm install
```

## 💻 Comandos Disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo en `http://localhost:5173` |
| `npm run build` | Genera la versión de producción en la carpeta `dist/` |
| `npm run preview` | Previsualiza la build de producción localmente |
| `npm run lint` | Ejecuta ESLint para revisar el código |

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React reutilizables
│   ├── Header.jsx      # Navegación y logo
│   ├── Hero.jsx        # Sección principal
│   ├── Services.jsx    # Servicios ofrecidos
│   ├── Portfolio.jsx   # Galería de trabajos
│   ├── About.jsx       # Sobre el profesional
│   ├── Process.jsx     # Proceso de trabajo
│   ├── Coverage.jsx    # Zona de cobertura
│   ├── Contact.jsx     # Contacto y formulario
│   └── Footer.jsx      # Pie de página
├── config/
│   └── siteConfig.js   # Configuración centralizada (EDITAR AQUÍ)
├── App.jsx             # Componente principal
├── main.jsx            # Punto de entrada
└── index.css           # Estilos globales
```

## ⚙️ Configuración

La configuración ya está aplicada con los datos de Daniel Mercado TEC. Puedes ajustar lo siguiente en `src/config/siteConfig.js`:

### Datos del Negocio (ya configurados)
```javascript
businessName: "Daniel Mercado TEC",
serviceArea: "San Miguel de Tucumán, Tafí Viejo y alrededores",
```

### Contacto (ya configurado)
```javascript
contact: {
  phone: "",                 // Opcional - Formato internacional: +XX XXXXXXXX
  whatsapp: "543813017342",  // Ya configurado (Argentina)
  email: "",                 // Opcional
}
```

### Redes Sociales (parcialmente configurado)
```javascript
social: {
  instagram: "https://instagram.com/danielmercado", // Verificar usuario exacto
  facebook: "",      // Agregar si existe
  linkedin: "",      // Agregar si existe
  twitter: "",       // Agregar si existe
}
```

### Servicios, Portfolio, etc.
Edita los arrays en `siteConfig.js` para personalizar servicios, proceso de trabajo, etc.

## 📸 Capturas de Pantalla

*Agregar capturas de pantalla aquí después de la implementación.*

- [ ] Vista Desktop - Hero
- [ ] Vista Desktop - Servicios
- [ ] Vista Mobile - Menú
- [ ] Vista Mobile - Contacto

## 🚀 Despliegue

### Opción 1: Vercel (Recomendado)
1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com) e inicia sesión
3. Importa tu repositorio
4. Vercel detectará automáticamente Vite y configurará el build
5. Deploy automático

**Comando de build:** `npm run build`  
**Directorio de salida:** `dist`

### Opción 2: GitHub Pages
1. Instala gh-pages: `npm install --save-dev gh-pages`
2. Agrega en `package.json`:
```json
"homepage": "https://tuusuario.github.io/nombre-repo",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Actualiza `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/nombre-repo/'
})
```
4. Ejecuta: `npm run deploy`

**Limitaciones GitHub Pages:**
- No soporta redirecciones del lado del servidor
- Necesita configuración de `base` en Vite
- Algunas funcionalidades avanzadas pueden requerir configuración adicional

## ⚠️ Notas Importantes

- **WhatsApp:** Solo funciona si configuras `whatsapp` con número en formato internacional sin `+` ni espacios
- **Formulario:** Sin backend configurado, el formulario muestra un mensaje informativo. Necesita conectar con Formspree, Netlify Forms, EmailJS u otro servicio
- **Portfolio:** Las imágenes son placeholders. Reemplázalas con fotos reales en `src/assets/portfolio/`
- **Datos sensibles:** Nunca agregues credenciales o información privada al repositorio
- **Sin testimonios:** La sección de testimonios fue omitida intencionalmente ya que no se proporcionaron reseñas reales

## 🧪 Pruebas

Actualmente no hay tests configurados. Para verificar el funcionamiento:

1. Ejecuta `npm run dev` y prueba en navegador
2. Verifica navegación móvil
3. Prueba enlaces de WhatsApp
4. Verifica validación del formulario
5. Prueba responsive en diferentes tamaños

## 📝 Licencia

Este proyecto es creado con fines de portfolio.

## 🤝 Soporte

Para dudas sobre configuración o personalización, revisa los comentarios en `src/config/siteConfig.js`.
