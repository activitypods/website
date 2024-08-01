import type { APIRoute } from "astro";

export const prerender = false

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      "@context": {
        "apods": "http://activitypods.org/ns/core#",
        "notify": "http://www.w3.org/ns/solid/notifications#",
        "interop": "http://www.w3.org/ns/solid/interop#",
        "oidc": "http://www.w3.org/ns/solid/oidc#",
        "sec": "https://w3id.org/security#",
        "acl": "http://www.w3.org/ns/auth/acl#",
        "vcard": "http://www.w3.org/2006/vcard/ns#",
        "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
        "ldp": "http://www.w3.org/ns/ldp#",
        "semapps": "http://semapps.org/ns/core#",
        "dc": "http://purl.org/dc/terms/",
        "foaf": "http://xmlns.com/foaf/0.1/",
        "schema": "http://schema.org/",
        "skos": "http://www.w3.org/2004/02/skos/core#",
        "xsd": "http://www.w3.org/2001/XMLSchema#",
        "apods:hasFormat": {
          "@type": "@id"
        },
        "apods:hasStatus": {
          "@type": "@id"
        },
        "apods:contacts": {
          "@type": "@id"
        },
        "apods:contactRequests": {
          "@type": "@id"
        },
        "apods:ignoredContacts": {
          "@type": "@id"
        },
        "apods:rejectedContacts": {
          "@type": "@id"
        },
        "apods:announces": {
          "@type": "@id"
        },
        "apods:announcers": {
          "@type": "@id"
        },
        "apods:attendees": {
          "@type": "@id"
        },
        "apods:preferredForTypes": {
          "@type": "@id"
        },
        "apods:application": {
          "@type": "@id"
        },
        "apods:hasSpecialRights": {
          "@type": "@id"
        },
        "apods:acceptedAccessNeeds": {
          "@type": "@id"
        },
        "apods:acceptedSpecialRights": {
          "@type": "@id"
        },
        "apods:registeredClass": {
          "@type": "@id"
        },
        "apods:registeredContainer": {
          "@type": "@id"
        },
        "apods:hasClassDescription": {
          "@type": "@id"
        },
        "apods:preferredForClass": {
          "@type": "@id"
        },
        "apods:describedClass": {
          "@type": "@id"
        },
        "apods:describedBy": {
          "@type": "@id"
        },
        "apods:labelPredicate": {
          "@type": "@id"
        },
        "interop:accessNecessity": {
          "@type": "@id"
        },
        "interop:accessMode": {
          "@type": "@id"
        },
        "interop:accessScenario": {
          "@type": "@id"
        },
        "interop:applicationAuthor": {
          "@type": "@id"
        },
        "interop:authenticatedAs": {
          "@type": "@id"
        },
        "interop:dataOwner": {
          "@type": "@id"
        },
        "interop:grantedBy": {
          "@type": "@id"
        },
        "interop:grantee": {
          "@type": "@id"
        },
        "interop:hasAccessGrant": {
          "@type": "@id"
        },
        "interop:hasAccessNeed": {
          "@type": "@id"
        },
        "interop:hasAccessNeedGroup": {
          "@type": "@id"
        },
        "interop:hasAccessDescriptionSet": {
          "@type": "@id"
        },
        "interop:hasDataGrant": {
          "@type": "@id"
        },
        "interop:satisfiesAccessNeed": {
          "@type": "@id"
        },
        "interop:scopeOfGrant": {
          "@type": "@id"
        },
        "interop:registeredAgent": {
          "@type": "@id"
        },
        "interop:registeredBy": {
          "@type": "@id"
        },
        "interop:updatedAt": {
          "@type": "@id"
        },
        "oidc:client_uri": {
          "@type": "@id"
        },
        "oidc:logo_uri": {
          "@type": "@id"
        },
        "oidc:policy_uri": {
          "@type": "@id"
        },
        "oidc:tos_uri": {
          "@type": "@id"
        },
        "oidc:redirect_uris": {
          "@type": "@id"
        },
        "publicKey": {
          "@id": "sec:publicKey",
          "@type": "@id"
        },
        "dc:created": {
          "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "dc:modified": {
          "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
        },
        "dc:creator": {
          "@type": "@id"
        },
        "dc:source": {
          "@type": "@id"
        },
      }
    }), 
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
