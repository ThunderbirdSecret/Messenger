FROM node:16.13.2

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run 

EXPOSE 3000

CMD node server.js
