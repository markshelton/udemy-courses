###############################################################################
# Step 1 : Builder image

FROM node:10-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install && \ 
    npm run build

###############################################################################
# Step 2 : Run image

FROM node:10-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY ./package* ./

RUN npm install && \
    npm cache clean --force

COPY --from=builder /app/build ./build

EXPOSE 3000

CMD npm run start