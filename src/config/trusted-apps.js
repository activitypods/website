import mastopod from '~/assets/images/mastopod.png';
import welcomeToMyPlace from '~/assets/images/welcometomyplace.png';
import mutualAid from '~/assets/images/mutual-aid.png';
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
      'http://virtual-assembly.org/ontologies/pair-mp#Request',
      'http://virtual-assembly.org/ontologies/pair-mp#Offer',
    ],
    'apods:locales': 'en',
    'apods:logo': mutualAid,
    'apods:sourceCode': 'https://github.com/assemblee-virtuelle/mutual-aid.app',
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
