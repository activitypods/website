import path from 'path';
import { readFileSync } from 'fs';
import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const currentPath = import.meta.url.replace('file:', '');
  let filePath: string;
  let contentType: string;

  switch (request.headers.get('Accept')) {
    case 'application/ld+json':
      filePath = '../../../ontology/ontology.jsonld';
      contentType = 'application/ld+json';
      break;

    case 'text/turtle':
    default:
      filePath = '../../../ontology/ontology.ttl';
      contentType = 'text/turtle';
      break;
  }

  const buffer = readFileSync(path.join(currentPath, filePath));
  return new Response(buffer, {
    headers: new Headers({ 'Content-Type': contentType })
  });
};
