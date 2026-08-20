import { DegreeYear } from '@/types';

export const degreeCurriculum: DegreeYear[] = [
  {
    key: 'year4',
    courses: [
      {
        code: 'TEO417',
        credits: 5,
        name: {
          es: 'Teología 9: Soteriología',
          en: 'Theology 9: Soteriology',
        },
        description: {
          es: 'La salvación por gracia mediante la fe en Cristo.',
          en: 'Salvation by grace through faith in Christ.',
        },
      },
      {
        code: 'TEO418',
        credits: 4,
        name: {
          es: 'Teología 10: Escatología',
          en: 'Theology 10: Eschatology',
        },
        description: {
          es: 'Los tiempos finales: esperanza, juicio y eternidad.',
          en: 'The end times: hope, judgment, and eternity.',
        },
      },
      {
        code: 'ETC419',
        credits: 4,
        name: { es: 'Ética Cristiana', en: 'Christian Ethics' },
        description: {
          es: 'Principios morales para un ministerio íntegro en un mundo cambiante.',
          en: 'Moral principles for an ethical ministry in a changing world.',
        },
      },
      {
        code: 'ECL420',
        credits: 5,
        name: {
          es: 'Eclesiología (Administrador)',
          en: 'Ecclesiology (Administrator Track)',
        },
        description: {
          es: 'La iglesia: naturaleza, gobierno y administración eficaz.',
          en: "The church: its nature, governance, and effective administration.",
        },
      },
      {
        code: 'MPS421',
        credits: 5,
        name: {
          es: 'Ministerio Pastoral (Pastor)',
          en: 'Pastoral Ministry (Pastor Track)',
        },
        description: {
          es: 'El cuidado de la grey: liderazgo espiritual y emocional.',
          en: 'Shepherding the flock: spiritual and emotional leadership.',
        },
      },
      {
        code: 'PDA422',
        credits: 5,
        name: {
          es: 'Pedagogía (Maestro)',
          en: 'Pedagogy (Teacher Track)',
        },
        description: {
          es: 'Enseñar con excelencia: didáctica cristiana para todas las edades.',
          en: 'Teaching with excellence: Christian pedagogy for every age.',
        },
      },
      {
        code: 'TCP423',
        credits: 4,
        name: {
          es: 'Técnicas de Consejería (Consejero)',
          en: 'Counseling Techniques (Counselor Track)',
        },
        description: {
          es: 'Acompañar, restaurar y sanar desde la Palabra.',
          en: 'Accompanying, restoring, and healing through the Word.',
        },
      },
      {
        code: 'MSN424',
        credits: 4,
        name: {
          es: 'Misionología (Misionero)',
          en: 'Missiology (Missionary Track)',
        },
        description: {
          es: 'Llevar el evangelio hasta lo último de la tierra.',
          en: 'Carrying the gospel to the ends of the earth.',
        },
      },
    ],
  },
];
