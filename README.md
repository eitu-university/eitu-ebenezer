# EituEbenezer - Universidad Cristiana Evangélica Pentecostal

Sitio web oficial de la Universidad cristiana evangélica pentecostal internacional EituEbenezer.

## 🚀 Tecnologías Utilizadas

- **Next.js 15.4.4** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **SCSS** - Preprocesador de CSS
- **React Icons** - Iconografía
- **Clsx** - Utilidad para clases condicionales
- **Zod** - Validación de esquemas
- **Sonner** - Notificaciones toast
- **Resend** - Servicio de email
- **React Hook Form** - Manejo de formularios
- **@hookform/resolvers** - Resolvers para React Hook Form
- **Prettier Plugin Tailwind CSS** - Ordenamiento de clases

## 📁 Estructura del Proyecto

```
src/
├── app/                 # App Router de Next.js
├── components/          # Componentes reutilizables
│   ├── banner/         # Componente del banner principal
│   ├── header/         # Componente del header
│   ├── footer/         # Componente del footer
│   ├── sections/       # Secciones de la página
│   └── seo/           # Componentes de SEO
├── data/              # Datos estáticos
├── hooks/             # Hooks personalizados
├── lib/               # Utilidades y configuraciones
├── types/             # Tipos de TypeScript
└── zod/               # Esquemas de validación
```

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd eituebenezer
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📝 Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Ejecuta la aplicación en modo producción
- `npm run lint` - Ejecuta el linter
- `npm run postbuild` - Genera el sitemap después del build

## 🎨 Características

- **Diseño Responsivo** - Mobile-first design
- **SEO Optimizado** - Meta tags, sitemap, y estructura semántica
- **Accesibilidad** - Cumple con estándares WCAG
- **Performance** - Optimizado para velocidad
- **Formularios Validados** - Con Zod y React Hook Form
- **Notificaciones** - Sistema de toast con Sonner
- **Navegación Suave** - Scroll suave entre secciones

## 📧 Configuración de Email

Para configurar el envío de emails con Resend:

1. Crea una cuenta en [Resend](https://resend.com)
2. Obtén tu API key
3. Configura las variables de entorno:

```env
RESEND_API_KEY=tu_api_key_aqui
```

## 🌐 Despliegue

El proyecto está optimizado para desplegarse en Vercel, pero también funciona en otras plataformas.

### Variables de Entorno Requeridas

```env
SITE_URL=https://tu-dominio.com
RESEND_API_KEY=tu_api_key_de_resend
```

## 📄 Licencia

Este proyecto es propiedad de la Universidad Internacional EituEbenezer.

## 🤝 Contribución

Para contribuir al proyecto, por favor contacta con el equipo de desarrollo.

---

**EituEbenezer** - "Hasta aquí nos ayudó Jehová"
