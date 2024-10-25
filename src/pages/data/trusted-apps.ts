import jsonld from 'jsonld';
import eleventyFetch from '@11ty/eleventy-fetch';
import { ldpContainer } from '../../utils/ldp';
import localContext from '../../config/localContext';

import type { APIRoute } from 'astro';
import type { Resource } from '../../utils/ldp';

export const prerender = false;

const trustedAppsUris = [
  'https://welcometomyplace.org/api/app',
  'https://mutual-aid.app/api/app',
  'https://mastopod.com/api/app',
  'https://bienvenuechezmoi.org/api/app',
  'https://lentraide.app/api/app'
];

export const GET: APIRoute = async ({ request }) => {
  const trustedAppsData = [] as Resource[];

  for (const appUri of trustedAppsUris) {
    try {
      // Keep response in cache for 3 hours
      const json = await eleventyFetch(appUri, {
        duration: '3h',
        type: 'json',
        fetchOptions: {
          headers: { Accept: 'application/ld+json' }
        }
      });
      const compactJson = await jsonld.compact(json, localContext);
      delete compactJson['@context'];
      trustedAppsData.push(compactJson);
    } catch (e) {
      // Ignore non-available applications
    }
  }

  return new Response(JSON.stringify(ldpContainer(request.url, trustedAppsData)), {
    status: 200,
    headers: {
      'Content-Type': 'application/ld+json',
      'Access-Control-Allow-Origin': '*'
    }
  });
};

export const HEAD: APIRoute = async () => {
  return new Response(undefined, {
    status: 200,
    headers: {
      'Content-Type': 'application/ld+json',
      'Access-Control-Allow-Origin': '*'
    }
  });
};
