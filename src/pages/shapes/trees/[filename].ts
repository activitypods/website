import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import ttl2jsonld from '@frogcat/ttl2jsonld';
import jsonld from 'jsonld';
import localContext from '../../../config/localContext';

export const prerender = false;

export const GET: APIRoute = async ({ request, params }) => {
  const filePath = import.meta
    .resolve(
      import.meta.env.DEV
        ? `../../../../public/shapes/trees/${params.filename}.ttl`
        : `../../../../client/shapes/trees/${params.filename}.ttl`
    )
    ?.replace('file://', '');

  const turtleData = await fs.readFile(filePath, {
    encoding: 'utf-8'
  });

  switch (request.headers.get('Accept')) {
    case 'application/ld+json': {
      const jsonldData = ttl2jsonld.parse(turtleData);

      const compactedData = await jsonld.compact(jsonldData, localContext);

      return new Response(JSON.stringify(compactedData), {
        headers: new Headers({
          'Content-Type': 'application/ld+json',
          'Access-Control-Allow-Origin': '*'
        })
      });
    }

    case 'text/turtle':
    default: {
      return new Response(turtleData, {
        headers: new Headers({
          'Content-Type': 'text/turtle; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        })
      });
    }
  }
};
