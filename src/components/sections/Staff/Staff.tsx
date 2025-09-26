import Cta from '../../Cta';
import StaffCardList from './StaffCardList';

export default function Staff() {
  return (
    <section className="bg-white py-28 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">
            Nuestro Equipo
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
            Conoce a los líderes que Dios ha puesto al frente de nuestra
            Universidad para guiar y servir a nuestra comunidad con amor y
            sabiduría.
          </p>
        </div>

        <StaffCardList />
      </div>
      {/* Call to Action */}
      <Cta
        imgUrl="/images/banner/contact-us.webp"
        buttonHref="/contacto"
        buttonText="Contáctanos"
        title="¿Te gustaría unirte a nuestro equipo?"
        description={`Si sientes el llamado de Dios para servir en el ministerio, nos encantaría conocer tu testimonio y cómo podemos trabajar juntos para la gloria de Dios.`}
      />
    </section>
  );
}
