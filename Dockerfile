FROM node:18-alpine

WORKDIR /website

RUN apk add --update --no-cache git bash yarn libtool automake autoconf nasm gcc make g++ zlib-dev

# Install packages first so that Docker doesn't run `yarn install` if the packages haven't changed
COPY package.json yarn.lock .npmrc /website/
RUN yarn install --frozen-lockfile && yarn cache clean

COPY . /website/
RUN yarn build

ENV HOST=0.0.0.0
ENV PORT=4321

EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
