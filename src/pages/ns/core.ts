import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ request, redirect }) => {
  switch (request.headers.get('Accept')) {
    case 'application/ld+json':
      return redirect('/ns/core.jsonld', 303);

    case 'text/turtle':
    default:
      return redirect('/ns/core.ttl', 303);
  }
};
