import { staffMembers } from '@/data/staff';
import Image from 'next/image';
import { FiMail, FiLinkedin } from 'react-icons/fi';
import Cta from '../Cta';

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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {staffMembers.map((member) => (
            <div
              key={member.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800"
            >
              <div className="relative overflow-hidden">
                <div className="flex h-64 w-full items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600">
                  {/* <span className="text-white text-6xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span> */}
                  <div className="relative h-64 w-64">
                    <Image
                      src="/images/avatar.webp"
                      alt={member.name}
                      fill={true}
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
                  {member.name}
                </h3>
                <p className="mb-3 font-semibold text-blue-600 dark:text-blue-400">
                  {member.position}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {member.description}
                </p>

                <div className="flex space-x-3">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors duration-200 hover:bg-blue-100 hover:text-blue-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-blue-900 dark:hover:text-blue-400">
                    <FiMail size={16} />
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors duration-200 hover:bg-blue-100 hover:text-blue-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-blue-900 dark:hover:text-blue-400">
                    <FiLinkedin size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="mt-16 text-center">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
            <h3 className="mb-4 text-2xl font-bold">
              ¿Te gustaría unirte a nuestro equipo?
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-blue-100">
              Si sientes el llamado de Dios para servir en el ministerio, nos
              encantaría conocer tu testimonio y cómo podemos trabajar juntos
              para la gloria de Dios.
            </p>
            <Link
              href={'/contacto'}
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-colors duration-200 hover:bg-gray-100"
            >
              Contáctanos
            </Link>
          </div>
        </div> */}
      </div>
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

// const CTA = () => (
//   <div className="mt-16 text-center">
//     <div style={{ position: 'relative', width: '100%', height: '50vh' }}>
//       <Image
//         src="/images/banner/pexels-daliladalprat-5689440 (1) (1).webp"
//         alt={''}
//         fill={true}
//         className="h-52 w-80 object-cover shadow-lg"
//       />
//       {/* Contenido centrado sobre la imagen */}
//       <div
//         id="content"
//         className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 px-4 text-center text-white"
//       >
//         <div className="rounded-xl bg-black/20 p-4 backdrop-blur-sm md:px-28">
//           <h3 className="mb-4 text-4xl font-bold text-gray-100 md:text-5xl">
//             ¿Te gustaría unirte a nuestro equipo?
//           </h3>
//           <p className="mx-auto mb-6 max-w-2xl">
//             Si sientes el llamado de Dios para servir en el ministerio, nos
//             encantaría conocer tu testimonio y cómo podemos trabajar juntos para
//             la gloria de Dios.
//           </p>
//           <Link
//             href={'/contacto'}
//             className="btn btn-1 hover-filled-slide-right"
//           >
//             <span>Contáctanos</span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
// );
