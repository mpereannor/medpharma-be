FROM node:20.9.0-alpine3.18

WORKDIR /medpharma/be

COPY package.json .
RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]
