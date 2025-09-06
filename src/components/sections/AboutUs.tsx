import { FiHeart, FiUsers, FiGlobe, FiBookOpen } from 'react-icons/fi';

export default function AboutUs() {
  const values = [
    {
      icon: FiHeart,
      title: 'Amor de Cristo',
      description: 'Compartimos el amor incondicional de Jesucristo con todos.'
    },
    {
      icon: FiUsers,
      title: 'Comunidad',
      description: 'Construimos una comunidad unida en fe y propósito.'
    },
    {
      icon: FiGlobe,
      title: 'Misión Global',
      description: 'Llevamos el evangelio a todas las naciones del mundo.'
    },
    {
      icon: FiBookOpen,
      title: 'Enseñanza Bíblica',
      description: 'Fundamos nuestras vidas en la verdad de la Palabra de Dios.'
    }
  ];

  return (
    <section id="about" className="py-28 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Acerca de Nosotros
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Ebenezer es una organización cristiana evangélica pentecostal internacional 
            dedicada a compartir el amor de Cristo y transformar vidas a través del 
            poder del Espíritu Santo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Nuestra Historia
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Fundada en el año 1995, Ebenezer nació de la visión de crear una 
              comunidad cristiana que refleje el amor y la gracia de Dios. 
              Nuestro nombre &quot;Ebenezer&quot; significa &quot;Hasta aquí nos ayudó Jehová&quot;, 
              recordándonos constantemente la fidelidad de Dios en nuestro caminar.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              A lo largo de más de 25 años, hemos sido testigos de cómo Dios 
              transforma vidas, sana corazones y restaura familias. Nuestro 
              compromiso es continuar siendo un faro de esperanza en un mundo 
              que necesita desesperadamente el amor de Cristo.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Hoy, con presencia en múltiples países, seguimos fieles a nuestra 
              misión de predicar el evangelio, hacer discípulos y glorificar a 
              Dios en todo lo que hacemos.
            </p>
          </div>
          <div className="relative">
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Nuestra Misión</h4>
              <p className="text-blue-100 leading-relaxed">
              &quot;Id por todo el mundo y predicad el evangelio a toda criatura&quot;
                (Marcos 16:15). Llevamos esta gran comisión con pasión y 
                dedicación, impactando vidas para la gloria de Dios.
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
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