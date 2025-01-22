import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const filePath = import.meta
    .resolve(
      import.meta.env.DEV
        ? `../../../../public/shapes/shex/${params.filename}.shex`
        : `../../../../client/shapes/shex/${params.filename}.shex`
    )
    ?.replace('file://', '');

  const turtleData = await fs.readFile(filePath, {
    encoding: 'utf-8'
  });

  return new Response(turtleData, {
    headers: new Headers({
      'Content-Type': 'text/shex; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    })
  });
};
