'use client'
import { FiUsers, FiMusic, FiHeart, FiBookOpen, FiGlobe, FiHome } from 'react-icons/fi';

export default function Ministries() {
  const ministries = [
    {
      icon: FiUsers,
      title: 'Ministerio de Jóvenes',
      description: 'Guiando a la próxima generación en su caminar con Cristo a través de actividades dinámicas y relevantes.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FiMusic,
      title: 'Ministerio de Alabanza',
      description: 'Adorando a Dios con excelencia a través de la música y las artes creativas.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: FiHeart,
      title: 'Ministerio de Mujeres',
      description: 'Empoderando y equipando a las mujeres para vivir su propósito en Cristo.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: FiBookOpen,
      title: 'Escuela Bíblica',
      description: 'Formando discípulos a través del estudio profundo de la Palabra de Dios.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FiGlobe,
      title: 'Misiones',
      description: 'Llevando el evangelio a las naciones y sirviendo a comunidades necesitadas.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FiHome,
      title: 'Ministerio Familiar',
      description: 'Fortaleciendo familias y construyendo hogares centrados en Cristo.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-28 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Nuestros Ministerios
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Cada ministerio está diseñado para servir a diferentes aspectos de la vida 
            cristiana y alcanzar a personas en todas las etapas de su fe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className={`h-32 bg-gradient-to-r ${ministry.color} flex items-center justify-center`}>
                <ministry.icon className="w-12 h-12 text-white" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {ministry.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {ministry.description}
                </p>
                
                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-200">
                  Saber más →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              ¿Te gustaría servir en algún ministerio?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Dios ha dado dones únicos a cada uno de nosotros. Descubre cómo puedes 
              usar tus talentos para glorificar a Dios y bendecir a otros.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Únete a un Ministerio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 