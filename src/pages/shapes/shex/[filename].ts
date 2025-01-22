import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const turtleData = await fs.readFile(
    path.resolve(
      import.meta.dirname,
      import.meta.env.DEV
        ? `../../../../public/shapes/shex/${params.filename}.shex`
        : `../../../../client/shapes/shex/${params.filename}.shex`
    ),
    {
      encoding: 'utf-8'
    }
  );

  return new Response(turtleData, {
    headers: new Headers({
      'Content-Type': 'text/shex; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    })
  });
};
