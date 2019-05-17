FROM node:8.9-alpine

WORKDIR /linkme-ui
COPY . /linkme-ui

RUN yarn build

EXPOSE 3000