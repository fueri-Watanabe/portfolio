FROM node:21.1.0

WORKDIR /app/

COPY ./package.json ./
RUN npm install