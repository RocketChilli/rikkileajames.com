FROM node:alpine

WORKDIR /opt/ssg
COPY package*.json ./
RUN npm ci

COPY ./ ./

EXPOSE 9000
CMD ["npm", "start"]
