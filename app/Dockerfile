FROM node:13.12.0-alpine

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci

EXPOSE 3000

CMD ["npm", "start"]