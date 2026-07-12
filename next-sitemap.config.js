const routes = [
  '/',
  '/sobre-nosotros',
  '/contacto',
  '/ministerios',
  '/naciones',
  '/postgrados',
  '/programas-de-curso',
  '/programas-de-estudio',
  '/politica-de-privacidad',
  '/terminos-de-servicio',
];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://eituebenezer.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  // Las páginas viven bajo src/app/[locale]/..., un segmento dinámico que el
  // escaneo de carpetas de next-sitemap ignora. Se listan las rutas a mano
  // para ambos idiomas.
  additionalPaths: async (config) => {
    const entries = [];

    for (const route of routes) {
      const enPath = route === '/' ? '/en' : `/en${route}`;
      entries.push(await config.transform(config, route));
      entries.push(await config.transform(config, enPath));
    }

    return entries;
  },
};
