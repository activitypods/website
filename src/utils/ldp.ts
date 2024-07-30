import localContext from "../config/localContext";

export const ldpContainer = (url : string, resources : object[], slug? : string) => ({
  '@context': localContext,
  id: url,
  type: ['ldp:Container', 'ldp:BasicContainer'],
  'ldp:contains': resources.map((resource) => ({
      id: slug ? url + '/' + resource[slug] : undefined,
      ...resource,
  })),
});

export const ldpResource = (url: string, resource : object) => ({
  "@context": localContext,
  id: url,
  ...resource
});
