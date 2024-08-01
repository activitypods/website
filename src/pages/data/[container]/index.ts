import type { APIRoute } from "astro";
import { containers } from "../../../config/containers";
import { ldpContainer } from "../../../utils/ldp";

export const prerender = false

export const GET: APIRoute = async ({ request, params }) => {
  return new Response(
    JSON.stringify(ldpContainer(request.url, containers[params.container])), 
    {
      status: 200,
      headers: {
        "Content-Type": "application/ld+json",
        "Access-Control-Allow-Origin": "*"
      }
    }
  );
}

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
