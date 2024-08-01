import jsonld from 'jsonld';
import { ldpContainer } from "../../utils/ldp";
import localContext from "../../config/localContext";

import type { APIRoute } from "astro";
import type { Resource } from "../../utils/ldp";

export const prerender = false

const trustedAppsUris = [
  'https://dev.welcometomyplace.org/api/app'
];

export const GET: APIRoute = async ({ request }) => {
  let trustedAppsData = [] as Resource[];

  for (const appUri of trustedAppsUris) {
    const response = await fetch(appUri, { headers: { 'Accept': 'application/ld+json' }} );
    if (response.ok ) {
      const json = await response.json();
      let compactJson = await jsonld.compact(json, localContext);
      delete compactJson['@context'];
      trustedAppsData.push(compactJson);
    }
  }

  return new Response(
    JSON.stringify(ldpContainer(request.url, trustedAppsData)), 
    {
      status: 200,
      headers: {
        "Content-Type": "application/ld+json",
        "Access-Control-Allow-Origin": "*"
      }
    }
  );
};

export const HEAD: APIRoute = async () => {
  return new Response(undefined,
    {
      status: 200,
      headers: {
        "Content-Type": "application/ld+json",
        "Access-Control-Allow-Origin": "*"
      }
    }
  );
};