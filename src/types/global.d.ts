declare global {
  interface IntlMessages {
    Navigation: {
      home: string;
      aboutUs: string;
      contact: string;
      ministries: string;
      events: string;
      nations: string;
      programs: string;
      studyPrograms: string;
      coursePrograms: string;
      associates: string;
      degree: string;
      postgraduate: string;
      diploma: string;
      privacy: string;
      terms: string;
    };
    Banner: {
      titlePrefix: string;
      titleHighlight: string;
      subtitle: string;
      description: string;
      cta: string;
    };
    AboutUs: {
      title: string;
      description: string;
      historyTitle: string;
      historyText: string;
      missionTitle: string;
      missionText: string;
      visionTitle: string;
      visionText: string;
      values: Record<
        'love' | 'community' | 'globalMission' | 'teaching',
        { title: string; description: string }
      >;
    };
    Staff: {
      title: string;
      description: string;
      empty: string;
      cta: { title: string; description: string; button: string };
      members: Record<
        '1' | '2' | '3' | '4',
        { position: string; description: string }
      >;
    };
    Ministries: {
      title: string;
      description: string;
      cta: { title: string; description: string; button: string };
      items: Record<
        | 'youth'
        | 'worship'
        | 'women'
        | 'bibleSchool'
        | 'missions'
        | 'family',
        { title: string; description: string }
      >;
    };
    Nations: {
      title: string;
      description: string;
      notFoundTitle: string;
      notFoundDescription: string;
    };
    Programs: {
      title: string;
      description: string;
      postgrados: {
        title: string;
        subtitle: string;
        masters: { title: string; description: string };
        doctorates: { title: string; description: string };
      };
      studyPrograms: { title: string; subtitle: string };
      coursePrograms: {
        title: string;
        subtitle: string;
        comingSoon: { title: string; description: string };
      };
      diploma: { title: string; subtitle: string };
      associates: {
        title: string;
        subtitle: string;
        programTitle: string;
        durationLabel: string;
        duration: string;
        creditsTotalLabel: string;
        creditsTotal: string;
        creditsLabel: string;
        objectivesTitle: string;
        objectives: string;
        requirementsTitle: string;
        requirements: string;
        curriculumTitle: string;
        curriculumDescription: string;
        pendingConfirmation: string;
        creditsPending: string;
        continuationTitle: string;
        continuationDescription: string;
        continuationLink: string;
        ctaTitle: string;
        ctaDescription: string;
        ctaButton: string;
        years: Record<'year1' | 'year2' | 'year3', { title: string; focus: string }>;
      };
      degree: {
        title: string;
        subtitle: string;
        programTitle: string;
        durationLabel: string;
        duration: string;
        creditsTotalLabel: string;
        creditsTotal: string;
        creditsLabel: string;
        objectivesTitle: string;
        objectives: string;
        requirementsTitle: string;
        requirements: string;
        continuationTitle: string;
        continuationDescription: string;
        continuationLink: string;
        curriculumTitle: string;
        curriculumDescription: string;
        pendingConfirmation: string;
        creditsPending: string;
        ctaTitle: string;
        ctaDescription: string;
        ctaButton: string;
        years: Record<'year4', { title: string; focus: string }>;
      };
      tags: Record<
        | 'studyPrograms'
        | 'firstYear'
        | 'secondYear'
        | 'thirdYear'
        | 'fourthYear'
        | 'coursePrograms'
        | 'diplomas'
        | 'expressCourses'
        | 'misc',
        string
      >;
      items: Record<
        | 'bachelorYear1'
        | 'bachelorYear2'
        | 'bachelorYear3'
        | 'bachelorYear4'
        | 'diploma'
        | 'expressCourse'
        | 'miscLeadership'
        | 'miscBusinessAdmin'
        | 'miscAdminAssistant'
        | 'miscTrainerOfTrainers'
        | 'miscHumanTalent',
        { title: string; description: string }
      >;
    };
    Testimonials: {
      title: string;
      description: string;
      items: Record<'1' | '2' | '3' | '4', { role: string; content: string }>;
    };
    Contact: {
      title: string;
      description: string;
      info: {
        title: string;
        description: string;
        addressLabel: string;
        hoursLabel: string;
        hoursSunday: string;
        hoursWednesday: string;
      };
      form: {
        title: string;
        subtitle: string;
        nameLabel: string;
        namePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        messageLabel: string;
        messagePlaceholder: string;
        submit: string;
        submitting: string;
        additionalInfoTitle: string;
        emailPrefix: string;
        phonePrefix: string;
        toastSuccessTitle: string;
        toastSuccessMessage: string;
        toastErrorTitle: string;
        toastErrorGeneric: string;
        errors: {
          nameMin: string;
          emailInvalid: string;
          messageMin: string;
        };
      };
    };
    Footer: {
      description: string;
      quickLinksTitle: string;
      contactTitle: string;
      rights: string;
    };
    Common: {
      readMore: string;
      readLess: string;
      learnMore: string;
      getInTouch: string;
    };
    NotFound: {
      title: string;
      backHome: string;
    };
    PrivacyPolicy: {
      title: string;
      subtitle: string;
      lastUpdated: string;
      intro: { heading: string; text: string };
      dataCollected: { heading: string; items: string[] };
      purpose: { heading: string; items: string[] };
      legalBasis: { heading: string; items: string[] };
      sharing: { heading: string; intro: string; items: string[] };
      cookies: { heading: string; text: string };
      rights: {
        heading: string;
        intro: string;
        items: string[];
        contactText: string;
      };
      retention: { heading: string; text: string };
      contact: {
        heading: string;
        emailLabel: string;
        phoneLabel: string;
        addressLabel: string;
      };
      security: { heading: string; text: string };
      changes: { heading: string; text: string };
    };
    TermsOfService: {
      title: string;
      subtitle: string;
      lastUpdated: string;
      siteUse: { heading: string; text1: string; text2: string };
      contentOwnership: { heading: string; text: string };
      properUse: { heading: string; text: string };
      externalLinks: { heading: string; text: string };
      contact: {
        heading: string;
        intro: string;
        emailLabel: string;
        phoneLabel: string;
        addressLabel: string;
      };
      changes: { heading: string; text: string };
    };
    SEO: {
      title: string;
      description: string;
      keywords: string;
      home: { title: string; description: string };
      aboutUs: { title: string; description: string };
      contact: { title: string; description: string };
      ministries: { title: string; description: string };
      postgrados: { title: string; description: string };
      programasDeCurso: { title: string; description: string };
      programasDeEstudio: { title: string; description: string };
      programs: { title: string; description: string };
      diploma: { title: string; description: string };
      associates: { title: string; description: string };
      degree: { title: string; description: string };
      privacy: { title: string; description: string };
      terms: { title: string; description: string };
    };
  }
}

export {};
