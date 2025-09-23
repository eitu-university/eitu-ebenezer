import { FiMapPin, FiMail, FiClock } from 'react-icons/fi';
import ContactForm from './ContactForm';
import { RiWhatsappLine } from 'react-icons/ri';
import { contactInfo } from '@/data';
import DynamicMap from '@/components/DynamicMap';



export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-28 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">
            Contáctanos
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
            Estamos aquí para servirte. No dudes en contactarnos para cualquier
            pregunta o para saber más sobre nuestra Universidad.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
                Información de Contacto
              </h3>
              <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-300 text-justify">
                Nuestras puertas están abiertas para ti. Ven y únete a nuestra
                familia espiritual donde encontrarás amor, aceptación y
                propósito.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <FiMapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                    Dirección
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {contactInfo.address.street}
                    <br />
                    {contactInfo.address.city}
                    <br />
                    {contactInfo.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <FiClock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                    Horarios de Servicio
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Domingos:</strong> 9:00 AM - 12:00 PM
                    <br />
                    <strong>Miércoles:</strong> 7:00 PM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Mapa o imagen */}
            <DynamicMap />
          </div>

          {/* Formulario de contacto */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
