import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
            Política de Privacidad
          </h1>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Organización Cristiana Evangélica Pentecostal Ebenezer
          </p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
            Última actualización: 3 de septiembre de 2025
          </p>
        </header>

        <div className="mx-auto max-w-3xl space-y-10">
          <section aria-labelledby="intro">
            <h2 id="intro" className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              1. Introducción
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
              En la Organización Cristiana Evangélica Pentecostal Ebenezer (en adelante, “Ebenezer”), valoramos y respetamos la privacidad de nuestros visitantes, miembros, colaboradores y usuarios de nuestro sitio web. Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos y protegemos sus datos personales. Al utilizar nuestro sitio web o compartir sus datos con nosotros, usted acepta los términos de esta política.
            </p>
          </section>

          <section aria-labelledby="datos">
            <h2 id="datos" className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              2. Datos que recopilamos
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Dirección postal (si aplica)</li>
              <li>Información de contacto para actividades, eventos o donaciones</li>
              <li>Mensajes enviados a través de formularios de contacto</li>
              <li>Datos técnicos como dirección IP, tipo de navegador y estadísticas de uso del sitio (cookies)</li>
            </ul>
          </section>

          <section aria-labelledby="finalidad">
            <h2 id="finalidad" className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              3. Finalidad del tratamiento de los datos
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
              <li>Gestionar la comunicación con nuestros miembros y visitantes</li>
              <li>Enviar boletines informativos, devocionales y anuncios de eventos</li>
              <li>Administrar registros de actividades, reuniones, cultos y servicios</li>
              <li>Gestionar donaciones y emitir comprobantes cuando corresponda</li>
              <li>Responder a solicitudes o preguntas realizadas por los usuarios</li>
              <li>Mejorar la experiencia de navegación en nuestro sitio web</li>
            </ul>
          </section>

          <section aria-labelledby="base-legal">
            <h2 id="base-legal" className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              4. Base legal para el tratamiento de datos
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
              <li>Consentimiento expreso del titular</li>
              <li>Cumplimiento de obligaciones legales o fiscales</li>
              <li>Interés legítimo de Ebenezer con fines pastorales, administrativos o de comunicación</li>
            </ul>
          </section>

          <section aria-labelledby="comparticion">
            <h2 id="comparticion" className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              5. Compartición de datos
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
              Ebenezer no vende, alquila ni comparte los datos personales con terceros, salvo en los siguientes casos:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
              <li>Cuando sea requerido por ley o por una autoridad competente</li>
              <li>
                Con proveedores de servicios tecnológicos que nos ayudan a operar el sitio web (por ejemplo, alojamiento o envío de
                correos electrónicos), siempre bajo acuerdos de confidencialidad
              </li>
              <li>Con su consentimiento explícito</li>
            </ul>
          </section>

          <section aria-labelledby="cookies">
            <h2 id="cookies" className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              6. Cookies y tecnologías similares
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
              Nuestro sitio web puede utilizar cookies para mejorar la navegación y obtener estadísticas anónimas de uso. Usted puede configurar su navegador para bloquear o eliminar las cookies en cualquier momento.
            </p>
          </section>

          <section aria-labelledby="derechos">
            <h2 id="derechos" className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              7. Derechos del usuario
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
              Usted tiene derecho a:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
              <li>Acceder a sus datos personales</li>
              <li>Rectificar datos inexactos o incompletos</li>
              <li>Solicitar la eliminación de sus datos cuando ya no sean necesarios</li>
              <li>Oponerse al tratamiento o solicitar su limitación</li>
              <li>Retirar su consentimiento en cualquier momento</li>
            </ul>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
              Para ejercer estos derechos, puede comunicarse con nosotros a través del correo electrónico
              {' '}<a className="text-blue-600 dark:text-blue-400 underline" href="mailto:hola@ebenezer.org">hola@ebenezer.org</a>.
            </p>
          </section>

          <section aria-labelledby="conservacion">
            <h2 id="conservacion" className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              8. Conservación de los datos
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
              Conservaremos sus datos personales únicamente durante el tiempo necesario para cumplir con los fines descritos y con las obligaciones legales aplicables.
            </p>
          </section>

          <section aria-labelledby="seguridad">
            <h2 id="seguridad" className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              9. Seguridad de los datos
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
              Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra pérdida, mal uso, acceso no autorizado, divulgación o destrucción.
            </p>
          </section>

          <section aria-labelledby="cambios">
            <h2 id="cambios" className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              10. Cambios en esta política
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
              Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Los cambios serán publicados en esta misma página con su fecha de actualización.
            </p>
          </section>

          <section aria-labelledby="contacto">
            <h2 id="contacto" className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              11. Contacto
            </h2>
            <div className="mt-3 space-y-1 text-gray-700 dark:text-gray-300">
              <p>📧 Email: <a className="text-blue-600 dark:text-blue-400 underline" href="mailto:hola@ebenezer.org">hola@ebenezer.org</a></p>
              <p>📞 Teléfono: <a className="text-blue-600 dark:text-blue-400 underline" href="tel:+19292588162">+1 (929) 258-8162</a></p>
              <p>📍 Dirección: Ciudad, Estado, País</p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
