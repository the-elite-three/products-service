FROM node:10.13-alpine
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install
RUN npm install -g knex
RUN knex migrate:latest
RUN knex seed:run 
EXPOSE 3001

CMD npm start
