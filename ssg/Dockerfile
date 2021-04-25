FROM node:alpine

RUN mkdir -p /opt/site && chown node:node /opt/site

WORKDIR /opt/ssg
COPY package*.json ./
RUN npm ci

COPY ./ ./

EXPOSE 9000
CMD ["npm", "start"]
