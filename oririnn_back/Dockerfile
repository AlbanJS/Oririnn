# syntax=docker/dockerfile:1

FROM node:lts

WORKDIR /app
COPY package.json ./

RUN npm install

CMD node app.js