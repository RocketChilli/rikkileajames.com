FROM httpd:alpine

RUN apk add --update nodejs nodejs-npm

RUN echo 'IncludeOptional conf/conf.d/*.conf' >> /usr/local/apache2/conf/httpd.conf
COPY ./config/httpd.conf /usr/local/apache2/conf/conf.d/custom.conf

WORKDIR /opt/web
COPY package*.json ./
RUN npm install

COPY ./ ./
RUN npm run generate
