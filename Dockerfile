FROM node:lts-alpine

WORKDIR /usr/app

COPY package*.json .

RUN npm install --no-optional --only=production

COPY . .

EXPOSE $PORT

CMD ["npm","run", "dev"]

