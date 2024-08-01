import localContext from "../config/localContext";

export type Resource = {
  slug: string;
  [key: string]: any;
};

export const getContainerFromUri = str => str.match(new RegExp(`(.*)/.*`))[1];

export const ldpContainer = (url : string, resources : Resource[]) => ({
  '@context': localContext,
  id: url,
  type: ['ldp:Container', 'ldp:BasicContainer'],
  'ldp:contains': resources.map((resource) => ({
      id: resource.slug ? `${url}/${resource.slug}` : undefined,
      ...resource,
      slug: undefined,
  })),
});

export const ldpResource = (url: string, resources : Resource[]) => {
  const containerUrl = getContainerFromUri(url);
  const resource = resources.find(r => url === `${containerUrl}/${r.slug}`) as Resource;
  return ({
    "@context": localContext,
    id: `${containerUrl}/${resource.slug}`,
    ...resource,
    slug: undefined,
  })
};
