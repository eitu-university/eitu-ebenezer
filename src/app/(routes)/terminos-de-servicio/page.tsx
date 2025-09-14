import React from 'react';
import { RiWhatsappLine, RiMailLine } from 'react-icons/ri';
import { SlLocationPin } from "react-icons/sl";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">
            Términos de Servicio
          </h1>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Organización Cristiana Evangélica Pentecostal Ebenezer
          </p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
            Última actualización: 3 de septiembre de 2025
          </p>
        </header>

        <div className="mx-auto max-w-3xl space-y-10">
          <section aria-labelledby="uso-sitio">
            <h2
              id="uso-sitio"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              1. Uso del sitio web
            </h2>
            <div className="mt-3 space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                El sitio web de la Organización Cristiana Evangélica Pentecostal
                Ebenezer tiene como propósito compartir información sobre
                nuestras actividades, enseñanzas cristianas, y contenidos
                espirituales.
              </p>
              <p>
                El uso de este sitio implica la aceptación de estos Términos de
                Servicio.
              </p>
            </div>
          </section>

          <section aria-labelledby="propiedad">
            <h2
              id="propiedad"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              2. Propiedad del contenido
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
              Todo el contenido publicado (textos, imágenes, videos, audios,
              documentos) pertenece a Ebenezer, salvo que se indique lo
              contrario. Queda prohibida su reproducción o distribución sin
              autorización previa, especialmente para fines comerciales.
            </p>
          </section>

          <section aria-labelledby="uso-adecuado">
            <h2
              id="uso-adecuado"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              3. Uso adecuado
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
              Se espera que el uso de este sitio sea respetuoso y conforme a
              principios cristianos. No se permite el uso del contenido para
              burlas, difamación o cualquier fin contrario a la fe y valores que
              promovemos.
            </p>
          </section>

          <section aria-labelledby="enlaces">
            <h2
              id="enlaces"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              4. Enlaces externos
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
              Este sitio puede incluir enlaces a páginas externas. No nos
              hacemos responsables del contenido de sitios de terceros.
            </p>
          </section>          

          <section aria-labelledby="contacto">
            <h2
              id="contacto"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              5. Contacto
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
              Para cualquier consulta relacionada con el uso del sitio, puede
              contactarnos en:
            </p>
            <div className="mt-3 space-y-4 text-gray-700 dark:text-gray-300">
              <p className="flex gap-4 items-center">
                <RiMailLine size={20}/> Email:
                <a
                  className="text-blue-600 underline dark:text-blue-400"
                  href="mailto:hola@ebenezer.org"
                >
                  hola@ebenezer.org
                </a>
              </p>
              <p className="flex gap-4 items-center">
                <RiWhatsappLine size={20}/> Teléfono:
                <a
                  className="text-blue-600 underline dark:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/19292588162?text=Hola%20EITUEbenezer,%20quiero%20más%20información."
                >
                  +1 (929) 258-8162
                </a>
              </p>
              <p className="flex gap-4 items-center"><SlLocationPin size={20}/> Dirección: Ciudad, Estado, País</p>
            </div>
          </section>

          <section aria-labelledby="cambios">
            <h2
              id="cambios"
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
            >
              6. Cambios en los términos
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
              Podemos modificar estos Términos en cualquier momento. Las
              modificaciones se publicarán en esta misma página con su fecha de
              actualización.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
