import { SvgWave } from '@/components/banner/SvgWave';
import styles from './ProgramasDeCurso.module.scss';

const ProgramasDeCurso = () => {
  return (
    <div className="relative">
      <section id="home" className={`${styles.banner}`}>
        {/* CONTENIDO */}
        <div className="container relative z-10 mx-auto flex justify-center px-4">
          <div className={styles.containerAnimate}>
            <h1 className="mb-6 flex flex-col items-center justify-center text-5xl font-bold leading-tight text-white md:text-7xl">
              Programas de Curso
            </h1>

            <p className="text-small mb-8 leading-relaxed text-gray-200 md:text-xl">
              Más que conocimiento, una vida dedicada al servicio.
            </p>
          </div>
        </div>
        <SvgWave />
      </section>
    </div>
  );
};

export default ProgramasDeCurso;
