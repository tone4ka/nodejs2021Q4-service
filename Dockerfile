FROM node:16.12-alpine

WORKDIR /usr/app

COPY package*.json .

RUN npm install --no-optional --only=production && npm cache clean --force

COPY . .

EXPOSE $PORT

CMD ["npm","run", "dev"]

