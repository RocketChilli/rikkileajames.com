FROM nginx:alpine

RUN apk add --update nodejs nodejs-npm

COPY ./config/nginx.conf /etc/nginx/conf.d/custom.conf

WORKDIR /opt/web
COPY package*.json ./
RUN npm install

COPY ./ ./
