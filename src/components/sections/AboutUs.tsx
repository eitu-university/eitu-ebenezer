import { values } from '@/data/about-us';

export default function AboutUs() {
  return (
    <section id="about" className="bg-gray-50 py-28 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">
            Acerca de Nosotros
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl">
            Ebenezer es una organización cristiana evangélica pentecostal
            internacional dedicada a compartir el amor de Cristo y transformar
            vidas a través del poder del Espíritu Santo.
          </p>
        </div>

        <div className="mb-16 grid items-center gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
              Nuestra Historia
            </h3>
            <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
              Lo que antes se conocia como Maranatha Bible Seminary, Inc.
              fundado en el 1973 hoy dia se ha convertido en Ebenezer
              Theological College and University, Inc. Este fue establecido en
              el año 2015, como el organo oficial del Departamento de Educacion
              Cristiana del Concilio Pentecostal Ebenezer, Inc. para llevar la
              Educacion Teologica a un nivel mas alto de excelencia academica.
            </p>
            {/* <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
              A lo largo de más de 25 años, hemos sido testigos de cómo Dios
              transforma vidas, sana corazones y restaura familias. Nuestro
              compromiso es continuar siendo un faro de esperanza en un mundo
              que necesita desesperadamente el amor de Cristo.
            </p>
            <p className="leading-relaxed text-gray-600 dark:text-gray-300">
              Hoy, con presencia en múltiples países, seguimos fieles a nuestra
              misión de predicar el evangelio, hacer discípulos y glorificar a
              Dios en todo lo que hacemos.
            </p> */}
          </div>
          <div className="relative">
            <div className="rounded-2xl bg-blue-600 p-8 text-white ">
              <h4 className="mb-4 text-xl font-bold">
                Nuestra Misión
              </h4>
              <p className="leading-relaxed text-blue-100">
                Nuestra misión es entrenar a los hombres y mujeres que persiguen
                una vida de servicio al Señor a través de las normas bíblicas de
                la fe cristiana. Esto se logrará proporcionándoles a nuestros
                estudiantes educación cristiana teológica superior,
                multidimensional y pluralista.
              </p>
              <h4 className="mb-4 mt-6 text-xl font-bold">
                Nuestra Visión
              </h4>
              <p className="leading-relaxed text-blue-100">
                Esforzarnos por ser una institución modelo que contribuirá al
                mejoramiento de nuestra sociedad, entrenando a líderes
                cristianos especializados y espirituales que llevarán nuestra
                misión promoviendo los valores morales basados en los
                fundamentos bíblicos de la fe cristiana.
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <value.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
                {value.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
