import { DegreeYear } from '@/types';

export const degreeCurriculum: DegreeYear[] = [
  {
    key: 'year1',
    confirmed: false,
    courses: [],
  },
  {
    key: 'year2',
    confirmed: true,
    courses: [
      {
        code: 'BIB207',
        credits: 3,
        name: {
          es: 'Hechos, Epístolas y Cartas Generales',
          en: 'Acts, Epistles, and General Letters',
        },
      },
      {
        code: 'BIB208',
        credits: 3,
        name: { es: 'Apocalipsis', en: 'Revelation' },
      },
      {
        code: 'TIP203',
        credits: 3,
        name: { es: 'Tipología', en: 'Typology' },
      },
      {
        code: 'HDI204',
        credits: 3,
        name: {
          es: 'Historia de la Iglesia Cristiana',
          en: 'History of the Christian Church',
        },
      },
      {
        code: 'RYS205',
        credits: 3,
        name: { es: 'Religiones y Sectas', en: 'Religions and Sects' },
      },
      {
        code: 'APG206',
        credits: 3,
        name: { es: 'Apologética', en: 'Apologetics' },
      },
      {
        code: 'HER207',
        credits: 3,
        name: { es: 'Hermenéutica', en: 'Hermeneutics' },
      },
      {
        code: 'HOM208',
        credits: 3,
        name: { es: 'Homilética', en: 'Homiletics' },
      },
    ],
  },
  {
    key: 'year3',
    confirmed: true,
    courses: [
      {
        code: 'TEO309',
        credits: 4,
        name: {
          es: 'Teología 1: Introducción a la Teología Propia',
          en: 'Theology 1: Introduction to Theology Proper',
        },
      },
      {
        code: 'TEO310',
        credits: 5,
        name: { es: 'Teología 2: Bibliología', en: 'Theology 2: Bibliology' },
      },
      {
        code: 'TEO311',
        credits: 5,
        name: {
          es: 'Teología 3: Trinitarismo',
          en: 'Theology 3: Trinitarianism',
        },
      },
      {
        code: 'TEO312',
        credits: 4,
        name: { es: 'Teología 4: Cristología', en: 'Theology 4: Christology' },
      },
      {
        code: 'TEO313',
        credits: 4,
        name: {
          es: 'Teología 5: Neumatología',
          en: 'Theology 5: Pneumatology',
        },
      },
      {
        code: 'TEO314',
        credits: 4,
        name: { es: 'Teología 6: Angelología', en: 'Theology 6: Angelology' },
      },
      {
        code: 'TEO315',
        credits: 5,
        name: {
          es: 'Teología 7: Antropología',
          en: 'Theology 7: Anthropology',
        },
      },
      {
        code: 'TEO316',
        credits: 5,
        name: {
          es: 'Teología 8: Hamartiología',
          en: 'Theology 8: Hamartiology',
        },
      },
    ],
  },
  {
    key: 'year4',
    confirmed: true,
    courses: [
      {
        code: 'TEO417',
        credits: 5,
        name: {
          es: 'Teología 9: Soteriología',
          en: 'Theology 9: Soteriology',
        },
      },
      {
        code: 'TEO418',
        credits: 4,
        name: {
          es: 'Teología 10: Escatología',
          en: 'Theology 10: Eschatology',
        },
      },
      {
        code: 'ETC419',
        credits: 4,
        name: { es: 'Ética Cristiana', en: 'Christian Ethics' },
      },
      {
        code: 'ECL420',
        credits: 5,
        name: {
          es: 'Eclesiología (Administrador)',
          en: 'Ecclesiology (Administrator Track)',
        },
      },
      {
        code: 'MPS421',
        credits: 5,
        name: {
          es: 'Ministerio Pastoral (Pastor)',
          en: 'Pastoral Ministry (Pastor Track)',
        },
      },
      {
        code: 'PDA422',
        credits: 5,
        name: {
          es: 'Pedagogía (Maestro)',
          en: 'Pedagogy (Teacher Track)',
        },
      },
      {
        code: 'TCP423',
        credits: 4,
        name: {
          es: 'Técnicas de Consejería (Consejero)',
          en: 'Counseling Techniques (Counselor Track)',
        },
      },
      {
        code: 'MSN424',
        credits: 4,
        name: {
          es: 'Misionología (Misionero)',
          en: 'Missiology (Missionary Track)',
        },
      },
    ],
  },
];
