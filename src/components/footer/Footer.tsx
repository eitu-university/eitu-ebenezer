import Link from 'next/link';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { RiWhatsappLine } from 'react-icons/ri';
import Logo from '../Logo';
import { quickLinks, socialMedia } from '@/data/footer';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative">
      {/* SvgWave colocado sobre el footer */}
      <SvgWave />
      <footer className="relative bg-gray-900">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Logo y descripción */}
            <div className="md:col-span-2">
              <div className="mb-4 flex items-center space-x-2">
                <Logo />
                <span className="text-xl font-bold text-gray-300">
                  EITU Ebenezer
                </span>
              </div>
              <p className="mb-6 leading-relaxed text-gray-300">
                Somos una universidad teológica cristiana comprometida con la
                formación de líderes con propósito. Nuestra misión es educarte
                con excelencia y servirte con vocación.
              </p>
              <div className="flex space-x-4">
                {socialMedia.map((item, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-gray-800 transition-colors duration-200 hover:bg-blue-600"
                    aria-label={item.ariaLabel}
                  >
                    <item.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Enlaces rápidos */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-300">
                Enlaces Rápidos
              </h3>
              <ul className="space-y-2">
                {quickLinks.length > 0
                  ? quickLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="navLink text-gray-300 transition-colors duration-200 hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))
                  : null}
              </ul>
            </div>

            {/* Información de contacto */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-300">
                Contacto
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <FiMapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <p className="text-sm text-gray-300">
                    123 Calle Principal
                    <br />
                    Ciudad, Estado 12345
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <RiWhatsappLine className="h-5 w-5 flex-shrink-0 text-blue-400" />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/19292588162?text=Hola%20EITUEbenezer,%20quiero%20más%20información."
                    className="text-sm text-gray-300"
                  >
                    +1 (929) 258 8162
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMail className="h-5 w-5 flex-shrink-0 text-blue-400" />
                  <a
                    href="mailto:hola@ebenezer.org"
                    className="text-sm text-gray-300"
                  >
                    hola@ebenezer.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Línea divisoria */}
          <div className="mt-8 border-t border-gray-800 pt-8">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <p className="text-sm text-gray-400">
                © {currentYear} Ebenezer. Todos los derechos reservados.
              </p>
              <div className="mt-4 flex space-x-6 md:mt-0">
                <Link
                  target="_self"
                  href="/politica-de-privacidad"
                  className="navLink text-sm text-gray-400 transition-colors  duration-200 hover:text-white"
                >
                  Política de Privacidad
                </Link>
                <Link
                  target="_self"
                  href="/terminos-de-servicio"
                  className="navLink text-sm text-gray-400 transition-colors  duration-200 hover:text-white"
                >
                  Términos de Servicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const SvgWave2 = () => (
  <div className="absolute left-0 right-0 top-0 z-0 -translate-y-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="mb-[-2px] h-auto w-full"
      preserveAspectRatio="none"
    >
      <path
        fill="currentColor"
        className="text-gray-900"
        fillOpacity="1"
        d="M0,192L80,213.3C160,235,320,277,480,298.7C640,320,800,320,960,298.7C1120,277,1280,235,1360,213.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  </div>
);

const SvgWave = () => (
  <div className="absolute left-0 right-0 top-0 z-0 -translate-y-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="mb-[-2px] h-auto w-full"
      preserveAspectRatio="none"
    >
      <path
        fill="currentColor"
        className="text-gray-900"
        fillOpacity="1"
        d="M0,160L80,181.3C160,203,320,245,480,256C640,267,800,245,960,250.7C1120,256,1280,288,1360,304L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  </div>
);
