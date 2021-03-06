FROM node:10-alpine

ENV NODE_ENV=development

WORKDIR /app

COPY ./package* ./

RUN npm install && \
    npm cache clean --force

COPY . .

EXPOSE 3000

CMD npm run dev