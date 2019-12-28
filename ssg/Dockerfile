FROM node:alpine

WORKDIR /opt/ssg
COPY package*.json ./
RUN npm install

COPY ./ ./
