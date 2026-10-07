import mastopod from '~/assets/images/mastopod.png';
import welcomeToMyPlace from '~/assets/images/welcometomyplace.png';
import mutualAid from '~/assets/images/mutual-aid.png';
import bienvenueChezMoi from '~/assets/images/bienvenuechezmoi.png';
import lentraide from '~/assets/images/lentraide.png';
import porteJunes from '~/assets/images/portejunes.png';
import laCarteDesSavoirs from '~/assets/images/la-carte-des-savoirs.svg';
import yourApp from '~/assets/images/your-application.png';

export default [
  {
    '@type': 'apods:TrustedApps',
    'apods:name': 'Mastopod',
    'apods:description': 'A Mastodon-compatible app that saves all data in your Pod.',
    'apods:domainName': 'mastopod.com',
    'apods:handledTypes': 'https://www.w3.org/ns/activitystreams#Note',
    'apods:locales': 'en',
    'apods:logo': mastopod,
    'apods:sourceCode': 'https://github.com/assemblee-virtuelle/mastopod',
  },
  {
    '@type': 'apods:TrustedApps',
    'apods:name': 'Welcome to my place',
    'apods:description':
      'Private meetings at home that promote a living together based on welcome, trust and mutual aid.',
    'apods:domainName': 'welcometomyplace.org',
    'apods:handledTypes': 'https://www.w3.org/ns/activitystreams#Event',
    'apods:locales': 'en',
    'apods:logo': welcomeToMyPlace,
    'apods:sourceCode': 'https://github.com/assemblee-virtuelle/welcometomyplace',
  },
  {
    '@type': 'apods:TrustedApps',
    'apods:name': 'Mutual Aid',
    'apods:description': 'Classified ads oriented around mutual aid and shareable within a trusted network.',
    'apods:domainName': 'mutual-aid.app',
    'apods:handledTypes': [
      'https://mutual-aid.app/ns/core#Request',
      'https://mutual-aid.app/ns/core#Offer',
      'https://mutual-aid.app/ns/core#Announcement',
    ],
    'apods:locales': 'en',
    'apods:logo': mutualAid,
    'apods:sourceCode': 'https://github.com/activitypods/mutual-aid.app',
  },
  {
    '@type': 'apods:TrustedApps',
    'apods:name': 'Bienvenue chez moi',
    'apods:description':
      'The French version of Welcome to my place: private meetings at home based on welcome, trust and mutual aid.',
    'apods:domainName': 'bienvenuechezmoi.org',
    'apods:handledTypes': 'https://www.w3.org/ns/activitystreams#Event',
    'apods:locales': 'fr',
    'apods:logo': bienvenueChezMoi,
    'apods:sourceCode': 'https://github.com/reconnexion/welcometomyplace',
  },
  {
    '@type': 'apods:TrustedApps',
    'apods:name': "L'Entraide",
    'apods:description': 'The French version of Mutual Aid: classified ads shared within a trusted network.',
    'apods:domainName': 'lentraide.app',
    'apods:handledTypes': [
      'https://mutual-aid.app/ns/core#Request',
      'https://mutual-aid.app/ns/core#Offer',
      'https://mutual-aid.app/ns/core#Announcement',
    ],
    'apods:locales': 'fr',
    'apods:logo': lentraide,
    'apods:sourceCode': 'https://github.com/activitypods/mutual-aid.app',
  },
  {
    '@type': 'apods:TrustedApps',
    'apods:name': 'PorteJunes',
    'apods:description': 'Send and receive Ğ1 (a libre currency) with your contacts, from a wallet attached to your Pod.',
    'apods:domainName': 'portejunes.com',
    'apods:locales': 'fr',
    'apods:logo': porteJunes,
    'apods:sourceCode': 'https://github.com/reconnexion/portejunes',
  },
  {
    '@type': 'apods:TrustedApps',
    'apods:name': 'La Carte des Savoirs',
    'apods:description': 'Share your knowledge and skills with your network, and find who can help you nearby.',
    'apods:domainName': 'la-carte-des-savoirs.com',
    'apods:handledTypes': 'http://virtual-assembly.org/ontologies/pair#ExperienceAssociation',
    'apods:locales': 'fr',
    'apods:logo': laCarteDesSavoirs,
    'apods:sourceCode': 'https://github.com/reconnexion/la-carte-des-savoirs',
  },
  // {
  //   '@type': 'apods:TrustedApps',
  //   'apods:name': 'Your application ?',
  //   'apods:description': 'Creating social apps is easy with the ActivitPods framework. Give it a try !',
  //   'apods:domainName': 'docs.activitypods.org',
  //   'apods:handledTypes': [
  //     'http://virtual-assembly.org/ontologies/pair-mp#Request',
  //     'http://virtual-assembly.org/ontologies/pair-mp#Offer',
  //   ],
  //   'apods:locales': 'en',
  //   'apods:logo': yourApp,
  //   'apods:sourceCode': 'https://github.com/assemblee-virtuelle/activitypods',
  // },
];
