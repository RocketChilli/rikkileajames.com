FROM node:alpine

WORKDIR /opt/ssg
COPY package*.json ./
RUN npm install

COPY ./ ./

EXPOSE 9000
CMD ["node", "hooks.js"]
