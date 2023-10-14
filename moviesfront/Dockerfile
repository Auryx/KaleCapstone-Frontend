FROM --platform=linux/amd64 node:20-slim

ENV NODE_ENV development

WORKDIR /moviesfront

COPY ./package.json /moviesfront
RUN npm install

COPY . .

CMD npm start