FROM node:lts-alpine

EXPOSE $PORT

WORKDIR /usr/app

COPY package*.json .

RUN npm i

COPY . .

CMD ["npm","run", "dev"]

