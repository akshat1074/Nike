FROM node:16-alpine

WORKDIR /app

COPY . . 

RUN npm install

RUN npm run dev

EXPOSE 3000

CMD ["App.js"]