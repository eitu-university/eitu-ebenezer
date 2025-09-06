# Configuración de Internacionalización (i18n)

Este proyecto está configurado para soportar múltiples idiomas usando `next-intl`. Actualmente soporta **Español** y **Inglés**.

## Estructura de Archivos

```
src/
├── app/
│   ├── [locale]/           # Páginas con soporte de idiomas
│   │   ├── layout.tsx      # Layout específico para locales
│   │   ├── page.tsx        # Página principal
│   │   ├── sobre-nosotros/
│   │   ├── contacto/
│   │   └── ...
│   ├── layout.tsx          # Layout raíz (redirige a /es)
│   └── page.tsx            # Página raíz (redirige a /es)
├── messages/               # Archivos de traducción
│   ├── es.json            # Traducciones en español
│   └── en.json            # Traducciones en inglés
└── components/
    └── LocaleSwitcher.tsx # Componente para cambiar idioma
```

## URLs

- **Español (por defecto)**: `/es` o `/`
- **Inglés**: `/en`

## Cómo Usar las Traducciones

### En Componentes del Cliente

```tsx
'use client';
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations();
  
  return (
    <div>
      <h1>{t('Banner.title')}</h1>
      <p>{t('Banner.description')}</p>
    </div>
  );
}
```

### En Componentes del Servidor

```tsx
import { getTranslations } from 'next-intl/server';

export default async function MyServerComponent() {
  const t = await getTranslations();
  
  return (
    <div>
      <h1>{t('Banner.title')}</h1>
      <p>{t('Banner.description')}</p>
    </div>
  );
}
```

## Agregar Nuevas Traducciones

1. **Agregar la clave en ambos archivos de mensajes**:

```json
// src/messages/es.json
{
  "NuevaSeccion": {
    "titulo": "Mi Título en Español",
    "descripcion": "Mi descripción en español"
  }
}

// src/messages/en.json
{
  "NuevaSeccion": {
    "titulo": "My Title in English",
    "descripcion": "My description in English"
  }
}
```

2. **Usar en el componente**:

```tsx
const t = useTranslations();
return <h1>{t('NuevaSeccion.titulo')}</h1>;
```

## Cambiar Idioma

El componente `LocaleSwitcher` está incluido en el header y permite cambiar entre idiomas. Se mantiene la ruta actual al cambiar idioma.

## Agregar un Nuevo Idioma

1. **Actualizar la configuración**:

```typescript
// i18n.ts
export const locales = ['es', 'en', 'fr'] as const; // Agregar 'fr'

// middleware.ts
export default createMiddleware({
  locales: ['es', 'en', 'fr'], // Agregar 'fr'
  defaultLocale: 'es'
});
```

2. **Crear archivo de mensajes**:

```json
// src/messages/fr.json
{
  "Navigation": {
    "home": "Accueil",
    "about": "À propos",
    "contact": "Contact"
  }
  // ... resto de traducciones
}
```

3. **Actualizar el LocaleSwitcher**:

```tsx
// src/components/LocaleSwitcher.tsx
{locales.map((loc) => (
  <option key={loc} value={loc}>
    {loc === 'es' ? 'Español' : loc === 'en' ? 'English' : 'Français'}
  </option>
))}
```

## Estructura de Traducciones

Las traducciones están organizadas por secciones:

- `Navigation`: Enlaces de navegación
- `Banner`: Contenido del banner principal
- `AboutUs`: Sección "Acerca de Nosotros"
- `Staff`: Sección del equipo
- `Ministries`: Sección de ministerios
- `Testimonials`: Sección de testimonios
- `Contact`: Sección de contacto y formulario
- `Footer`: Contenido del footer
- `Common`: Textos comunes reutilizables
- `SEO`: Metadatos para SEO

## Notas Importantes

- El español (`es`) es el idioma por defecto
- Las URLs sin prefijo de idioma redirigen automáticamente a `/es`
- Los metadatos SEO se generan dinámicamente según el idioma
- El middleware maneja automáticamente la detección de idioma
- Todas las páginas deben estar dentro de `src/app/[locale]/`

## Comandos Útiles

```bash
# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Verificar tipos TypeScript
npx tsc --noEmit
```