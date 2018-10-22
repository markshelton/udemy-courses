FROM node:alpine

WORKDIR /usr/app

COPY package.json .
RUN npm install

COPY src src

EXPOSE 8080
CMD ["npm", "start"]