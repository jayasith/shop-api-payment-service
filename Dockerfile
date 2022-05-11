FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV PORT 5007

EXPOSE $PORT

CMD ["npm", "start",]