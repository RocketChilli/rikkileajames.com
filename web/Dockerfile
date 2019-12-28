FROM node:alpine

WORKDIR /opt/web
COPY package*.json ./
RUN npm install

COPY ./ ./
