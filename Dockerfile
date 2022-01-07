FROM lts-alpine

EXPOSE 4000

WORKDIR /usr/app/src

COPY package*.json .

RUN npm i

COPY . .

CMD ["npm","run", "dev"]

