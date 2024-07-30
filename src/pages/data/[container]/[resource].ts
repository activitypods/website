import type { APIRoute } from "astro";
import { containers, containersSlugs } from "../../../config/constainers";
import { ldpResource } from "../../../utils/ldp";

export const prerender = false;

export const GET: APIRoute = async ({ request, params }) => {
  return new Response(
    JSON.stringify(ldpResource(request.url, containers[params.container].find(r => r[containersSlugs[params.container]] === params.resource))), 
    {
      status: 200,
      headers: {
        "Content-Type": "application/ld+json"
      }
    }
  );
}
