export default [
  'https://www.w3.org/ns/activitystreams',
  import.meta.env.DEV
    ? 'http://localhost:4321/.well-known/context.json'
    : import.meta.env.SITE + '/.well-known/context.json',
];
