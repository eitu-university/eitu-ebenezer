import { SvgWave } from '@/components/banner/SvgWave';
import styles from './Postgrados.module.scss';

const Postgrados = () => {
  return (
    <div className="relative">
      <section className={`${styles.banner}`}>
        {/* CONTENIDO */}
        <div className="relative z-10 mx-auto flex justify-center px-4">
          <div className={`${styles.containerAnimate}`}>
            <h1 className="mb-6 flex flex-col justify-center text-5xl font-bold leading-tight text-white md:text-7xl">
              Postgrados
            </h1>

            <p className="text-small mb-8 leading-relaxed text-gray-200 md:text-xl">
              Equipando a los líderes de hoy para la misión de mañana.
            </p>
          </div>
        </div>
        <SvgWave />
      </section>
    </div>
  );
};

export default Postgrados;
