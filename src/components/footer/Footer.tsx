import Link from 'next/link';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiYoutube,
} from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                <span className="text-lg font-bold text-white">E</span>
              </div>
              <span className="text-xl font-bold">Ebenezer</span>
            </div>
            <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
              Somos una organización cristiana evangélica pentecostal
              internacional dedicada a compartir el amor de Cristo y transformar
              vidas a través del poder del Espíritu Santo.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 transition-colors duration-200 hover:bg-blue-600 dark:bg-gray-800"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 transition-colors duration-200 hover:bg-blue-600 dark:bg-gray-800"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 transition-colors duration-200 hover:bg-blue-600 dark:bg-gray-800"
                aria-label="YouTube"
              >
                <FiYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="navLink text-gray-600 transition-colors duration-200 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="navLink text-gray-600 transition-colors duration-200 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Acerca de Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="navLink text-gray-600 transition-colors duration-200 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="navLink text-gray-600 transition-colors duration-200 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Ministerios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="navLink text-gray-600 transition-colors duration-200 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  Eventos
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FiMapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  123 Calle Principal
                  <br />
                  Ciudad, Estado 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="h-5 w-5 flex-shrink-0 text-blue-400" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/19292588162?text=Hola,%20Ebenecer"
                  className="text-sm text-gray-600 dark:text-gray-300"
                >
                  +1 (929) 258 8162
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="h-5 w-5 flex-shrink-0 text-blue-400" />
                <a
                  href="mailto:hola@ebenezer.org"
                  className="text-sm text-gray-600 dark:text-gray-300"
                >
                  hola@ebenezer.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} Ebenezer. Todos los derechos reservados.
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <Link
                target="_self"
                href="/politica-de-privacidad"
                className="navLink text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
              >
                Política de Privacidad
              </Link>
              <a
                target="_self"
                href="/terminos-de-servicio"
                className="navLink text-sm text-gray-500 transition-colors duration-200 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
              >
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
